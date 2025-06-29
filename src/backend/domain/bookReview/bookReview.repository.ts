import { BookReview } from '@/backend/domain/bookReview/bookReview';
import { Kysely } from 'kysely';
import { Database } from '@/backend/infrastructure/db/schema';
import assert from 'node:assert';

export class BookReviewRepository {
  constructor(private readonly db: Kysely<Database>) {}

  async insert(bookReview: BookReview): Promise<BookReview> {
    const exported = bookReview.export();

    const { book_review_id } = await this.db.insertInto('book_reviews')
      .values({
        language_code: exported.language,
        book_title: exported.title,
        review_body: exported.content,
        image_href: exported.imageHref,
      })
      .returning(['book_review_id'])
      .executeTakeFirstOrThrow()

    assert.ok(book_review_id != undefined, "book_review_id was not returned from the DB");

    return new BookReview({
      ...exported,
      bookReviewId: book_review_id,
    });
  }

  async update(bookReview: BookReview): Promise<BookReview> {
    const exported = bookReview.export();

    await this.db.updateTable('book_reviews')
      .set({
        language_code: exported.language,
        book_title: exported.title,
        review_body: exported.content,
        image_href: exported.imageHref,
      })
      .where('book_review_id', '=', exported.bookReviewId)
      .execute()

    return bookReview;
  }
}
