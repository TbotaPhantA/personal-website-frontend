import { Responses } from '@/shared/types/responses/responses';
import { IResponse } from '@/shared/types/responses/IResponse';
import { HttpStatusCode } from 'axios';

export const is200thResponse = <R extends IResponse<HttpStatusCode.Ok, any>>(response: Responses<R>): response is R => {
  return response.status === HttpStatusCode.Ok;
}
