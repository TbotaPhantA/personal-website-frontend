import booksStyles from '../styles/anchors/Books.module.scss';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';

interface HomeProps {
  id: string;
}

export function Books({ id }: HomeProps) {
  const { locale } = useRouter();
  const t = chooseTranslation(locale);

  return (
    <div id={id} className={booksStyles.BooksAnchor} data-aos="zoom-in">
      <div className={booksStyles.BooksAnchorTitle}>{t.pages.main.books.title}</div>
    </div>
  )
}
