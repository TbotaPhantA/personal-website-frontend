import { Response500 } from '@/shared/types/responses/response500';
import { IResponse } from '@/shared/types/responses/IResponse';
import { HttpStatusCode } from 'axios';

export type Responses<Response200 extends IResponse<HttpStatusCode.Ok, any>> = Response200 | Response500
