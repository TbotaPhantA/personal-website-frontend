import { BookReview } from '@/shared/types/bookReview';
import { useRouter } from 'next/router';
import booksListStyles from '@/styles/components/BookList/BookList.module.scss';

interface BooksListProps {
  bookReviews: BookReview[],
}

export default function BooksList({ bookReviews }: BooksListProps) {
  const { locale } = useRouter();

  return (
    <div>
      {bookReviews.map((review, index) => {
        const translatedReview = review.article.translations.find(t => t.languageId === locale)
        const title = translatedReview?.title ?? review.article.originalTitle;
        const content = translatedReview?.content ?? review.article.originalContent;

        return (
          <div key={review.id} className={booksListStyles.BooksListItem} data-aos={index % 2 ? 'fade-right' : 'fade-left'}>
            <div className={booksListStyles.BooksListItemTitle}>{title}</div>
            <div className={booksListStyles.BooksListItemContent}>{content}</div>
          </div>
        )
      })}
    </div>
  )
}
