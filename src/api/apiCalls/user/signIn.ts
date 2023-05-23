import { Responses } from '@/shared/types/responses/responses';
import { ResponseWrapper } from '@/shared/types/responses/ResponseWrapper';
import { AxiosHeaders, HttpStatusCode } from 'axios';
import { SignInFormValues } from '@/pages/signin';
import api from '@/api';
import { uri } from '@/api/uri';

type SignInResponse200 = ResponseWrapper<HttpStatusCode.Ok, {
  accessToken: string;
}>

export async function signIn(data: SignInFormValues, locale: string | undefined): Promise<Responses<SignInResponse200>> {
  return api.post(`${uri.user}/login`, data, {
    headers: (locale ? { 'Accept-Language': locale } as typeof AxiosHeaders : {}) ,
  }).catch(e => e.response);
}
