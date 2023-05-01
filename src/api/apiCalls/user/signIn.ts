import { Responses } from '@/shared/types/responses/responses';
import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { HttpStatusCode } from 'axios';
import { SignInFormValues } from '@/pages/signin';
import api from '@/api';
import { uri } from '@/api/uri';

type SignInResponse200 = ResponseWrapper<HttpStatusCode.Ok, {
  accessToken: string;
}>

export async function signIn(data: SignInFormValues): Promise<Responses<SignInResponse200>> {
  return api.post(`${uri.user}/login`, data).catch(e => e.response);
}
