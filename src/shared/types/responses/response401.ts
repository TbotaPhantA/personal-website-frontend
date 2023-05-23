import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';

export type Response401 = ResponseWrapper<HttpStatusCode.Unauthorized, {
  statusCode: HttpStatusCode.Unauthorized,
  message: string,
}>
