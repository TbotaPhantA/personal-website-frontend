import { BookReview } from '@/shared/types/bookReview';
import { useRouter } from 'next/router';

interface BooksListProps {
  bookReviews: BookReview[],
}

export default function BooksList({ bookReviews }: BooksListProps) {
  const { locale } = useRouter();

  return (
    <div>
      {bookReviews.map(review => {
        const translatedReview = review.article.translations.find(t => t.languageId === locale)
        const title = translatedReview?.title ?? review.article.originalTitle;
        const content = translatedReview?.content ?? review.article.originalContent;

        return (
          <div key={review.id}>
            <div>{title}</div>
            <div>{content}</div>
          </div>
        )
      })}
    </div>
  )
}
