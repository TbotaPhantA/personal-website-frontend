import { HttpStatusCode } from 'axios';
import { IResponse } from '@/shared/types/responses/IResponse';
import { INTERNAL_SERVER_ERROR } from '@/shared/errorMessages';

export type Response500 = IResponse<HttpStatusCode.InternalServerError, {
  statusCode: HttpStatusCode.InternalServerError,
  message: INTERNAL_SERVER_ERROR,
}>
