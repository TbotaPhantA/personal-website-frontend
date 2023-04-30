import { Responses } from '@/shared/types/responses/responses';
import { IResponse } from '@/shared/types/responses/IResponse';
import { HttpStatusCode } from 'axios';
import { SignInFormValues } from '@/pages/signin';
import api from '@/api';
import { uri } from '@/api/uri';

type SignInResponse200 = IResponse<HttpStatusCode.Ok, {
  accessToken: string;
}>

export async function signIn(data: SignInFormValues): Promise<Responses<SignInResponse200>> {
  return api.post(`${uri.user}/login`, data);
}
