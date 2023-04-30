import { HttpStatusCode } from 'axios';
import { IResponse } from '@/shared/types/responses/IResponse';

interface Response500Body {
  statusCode: HttpStatusCode.InternalServerError,
  message: 'INTERNAL_SERVER_ERROR',
}

export type Response500 = IResponse<HttpStatusCode.InternalServerError, Response500Body>
