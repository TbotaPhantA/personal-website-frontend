import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { Responses } from '@/shared/types/responses/responses';
import { InvalidDtoResponse } from '@/shared/types/responses/invalidDtoResponse';
import { INVALID_DTO } from '@/shared/errorMessages';

export function isInvalidDtoResponse<R extends ResponseWrapper<HttpStatusCode.Ok, any>>(response: Responses<R>): response is InvalidDtoResponse {
  return response.data.message === INVALID_DTO;
}
