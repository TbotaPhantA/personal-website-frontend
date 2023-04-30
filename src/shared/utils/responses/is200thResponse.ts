import { Responses } from '@/shared/types/responses/responses';
import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';

export const is200thResponse = <R extends ResponseWrapper<HttpStatusCode.Ok, any>>(response: Responses<R>): response is R => {
  return response.status === HttpStatusCode.Ok;
}
