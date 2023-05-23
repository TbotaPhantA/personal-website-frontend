import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { Responses } from '@/shared/types/responses/responses';
import { INVARIANT_ERROR } from '@/shared/errorMessages';
import { InvariantErrorResponse } from '@/shared/types/responses/invariantErrorResponse';

export const isInvariantErrorResponse = <R extends ResponseWrapper<HttpStatusCode.Ok, any>>(response: Responses<R>): response is InvariantErrorResponse => {
  return response.data.message === INVARIANT_ERROR;
}
