import { IResponse } from '@/shared/types/responses/IResponse';
import { HttpStatusCode } from 'axios';
import { INVALID_DTO } from '@/shared/errorMessages';
import { ValidationError } from 'class-validator';

export type InvalidDtoResponse = IResponse<HttpStatusCode.UnprocessableEntity, {
  statusCode: HttpStatusCode.UnprocessableEntity,
  message: INVALID_DTO,
  data: { errors: ValidationError[] }
}>
