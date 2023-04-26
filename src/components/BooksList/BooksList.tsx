import { useState } from 'react';
import { BookReview } from '@/shared/types/bookReview';
import { useRouter } from 'next/router';
import booksListStyles from '@/styles/components/BookList/BookList.module.scss';
import Modal from 'react-modal';

interface BooksListProps {
  bookReviews: BookReview[],
}

export default function BooksList({ bookReviews }: BooksListProps) {
  const { locale } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBookReview, setSelectedBookReview] = useState<BookReview | undefined>(undefined)

  function openModal(bookReview: BookReview) {
    setSelectedBookReview(bookReview);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function getReviewTitle() {
    if (selectedBookReview) {
      const translation = selectedBookReview.article.translations.find(t => t.languageId === locale);
      return translation?.title ?? selectedBookReview.article.originalTitle;
    }
  }

  function getReviewContent() {
    if (selectedBookReview) {
      const translation = selectedBookReview.article.translations.find(t => t.languageId === locale);
      return translation?.content ?? selectedBookReview.article.originalContent;
    }
  }

  return (
    <div>
      {bookReviews.map((review, index) => {
        const translatedReview = review.article.translations.find(t => t.languageId === locale)
        const title = translatedReview?.title ?? review.article.originalTitle;
        const content = translatedReview?.content ?? review.article.originalContent;

        return (
          <div
            key={review.id}
            className={booksListStyles.BooksListItem}
            data-aos={index % 2 ? 'fade-right' : 'fade-left'}
            onClick={() => openModal(review)}
          >
            <div className={booksListStyles.BooksListItemTitle}>{title}</div>
            <div className={booksListStyles.BooksListItemContent}>{content}</div>
          </div>
        )
      })}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal()}
      >
        <div>{getReviewTitle()}</div>
        <div>{getReviewContent()}</div>
      </Modal>
    </div>
  )
}
