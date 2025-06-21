import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { INVARIANT_ERROR } from '@/shared/errorMessages';

interface InvariantErrorMessages {
  path: string;
  messages: string[];
}

export type InvariantErrorResponse = ResponseWrapper<HttpStatusCode.UnprocessableEntity, {
  statusCode: HttpStatusCode.BadRequest,
  message: typeof INVARIANT_ERROR,
  data: InvariantErrorMessages[],
}>
