import { HttpStatusCode } from 'axios';
import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { INTERNAL_SERVER_ERROR } from '@/shared/errorMessages';

export type Response500 = ResponseWrapper<HttpStatusCode.InternalServerError, {
  statusCode: HttpStatusCode.InternalServerError,
  message: typeof INTERNAL_SERVER_ERROR,
}>
