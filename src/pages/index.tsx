import About from '@/anchors/about';
import Home from '@/anchors/home';
import mainStyles from '@/styles/Main.module.scss';
import { Books } from '@/anchors/books';
import { BookReview } from '@/shared/types/bookReview';
import { GetStaticPropsResult } from 'next';
import { Contact } from '@/anchors/contact';
import { getAllBookReviews } from '@/api/apiCalls/bookReview/getAllBookReviews';
import { is200thResponse } from '@/shared/utils/responses/is200thResponse';

interface MainProps {
  bookReviews: BookReview[];
}

export default function Main({ bookReviews }: MainProps) {
  return (
    <div className={mainStyles.MainPage}>
      <Home id="home" />
      <About id="about" />
      <Books id="books" bookReviews={bookReviews} />
      <Contact />
    </div>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<MainProps>> {
  const response = await getAllBookReviews();

  if (is200thResponse(response)) {
    return { props: response.data, revalidate: 30 }
  }

  throw new Error('Error: Unhandled response')
}
