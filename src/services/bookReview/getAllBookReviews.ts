import api from '@/api';
import { uri } from '@/api/uri';
import { BookReview } from '@/shared/types/bookReview';
import { IResponse } from '@/shared/types/responses/IResponse';
import { HttpStatusCode } from 'axios';
import { Responses } from '@/shared/types/responses/responses';

type GetAllBookReviewsResponse = IResponse<HttpStatusCode.Ok, {
  bookReviews: BookReview[];
}>

export async function getAllBookReviews(): Promise<Responses<GetAllBookReviewsResponse>> {
  return api.get(`${uri.bookReview}/all`);
}
