import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { Responses } from '@/shared/types/responses/responses';
import { Response401 } from '@/shared/types/responses/response401';

export const is401thResponse = <R extends ResponseWrapper<HttpStatusCode.Ok, any>>(response: Responses<R>): response is Response401 => {
  return response.status === HttpStatusCode.Unauthorized;
}
