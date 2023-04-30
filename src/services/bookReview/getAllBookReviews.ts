import api from '@/api';
import { uri } from '@/api/uri';
import { BookReview } from '@/shared/types/bookReview';
import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { Responses } from '@/shared/types/responses/responses';

type GetAllBookReviewsResponse = ResponseWrapper<HttpStatusCode.Ok, {
  bookReviews: BookReview[];
}>

export async function getAllBookReviews(): Promise<Responses<GetAllBookReviewsResponse>> {
  return api.get(`${uri.bookReview}/all`);
}
