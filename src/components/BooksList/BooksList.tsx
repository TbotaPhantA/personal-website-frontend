import { BookReview } from '@/shared/types/bookReview';

interface BooksListProps {
  bookReviews: BookReview[],
}

export default function BooksList({ bookReviews }: BooksListProps) {
  return (
    <div>
      {bookReviews.map(review => (
        <div key={review.id}>
          <div>{review.article.originalTitle}</div>
          <div>{review.article.originalContent}</div>
        </div>
      ))}
    </div>
  )
}
