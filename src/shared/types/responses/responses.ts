import { Response500 } from '@/shared/types/responses/response500';
import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { InvalidDtoResponse } from '@/shared/types/responses/invalidDtoResponse';

export type Responses<Response200 extends ResponseWrapper<HttpStatusCode.Ok, any>> = Response200 | InvalidDtoResponse | Response500
