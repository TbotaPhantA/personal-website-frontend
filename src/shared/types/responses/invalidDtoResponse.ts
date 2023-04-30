import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { INVALID_DTO } from '@/shared/errorMessages';
import { ValidationError } from 'class-validator';

export type InvalidDtoResponse = ResponseWrapper<HttpStatusCode.UnprocessableEntity, {
  statusCode: HttpStatusCode.UnprocessableEntity,
  message: INVALID_DTO,
  data: { errors: ValidationError[] }
}>
