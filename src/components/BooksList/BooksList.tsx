import { useState } from 'react';
import { BookReview } from '@/shared/types/bookReview';
import { useRouter } from 'next/router';
import booksListStyles from '@/styles/components/BookList/BookList.module.scss';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface BooksListProps {
  bookReviews: BookReview[],
}

const modalWindowStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '37vw',
    height: '90vh',
    borderRadius: '60px',
    borderWidth: '0',
    color: 'white',
    backgroundColor: 'rgba(50, 20, 80, 0.98)',
    fontSize: '26px',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
};

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
        style={modalWindowStyles}
        preventScroll={true}
      >
        <div className={booksListStyles.BookReviewModalCrossWrapper}>
          <div className={booksListStyles.BookReviewModalCross} onClick={() => closeModal()}>
            <FontAwesomeIcon icon={faTimes} size="3x" />
          </div>
        </div>
        <div className={booksListStyles.BookReviewModalWrapper}>
          <div className={booksListStyles.BookReviewModalTitle}>{getReviewTitle()}</div>
          <div>{getReviewContent()}</div>
        </div>
      </Modal>
    </div>
  )
}
