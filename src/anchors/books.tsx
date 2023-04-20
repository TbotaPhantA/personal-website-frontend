import booksStyles from '../styles/anchors/Books.module.scss';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';
import BooksList from '@/components/BooksList/BooksList';
import { BookReview } from '@/shared/types/bookReview';

interface BooksProps {
  id: string;
  bookReviews: BookReview[];
}

export function Books({ id, bookReviews }: BooksProps) {
  const { locale } = useRouter();
  const t = chooseTranslation(locale);

  return (
    <div id={id} className={booksStyles.BooksAnchor} data-aos="zoom-in">
      <div className={booksStyles.BooksAnchorTitle}>{t.pages.main.books.title}</div>
      <BooksList bookReviews={bookReviews} />
    </div>
  )
}
