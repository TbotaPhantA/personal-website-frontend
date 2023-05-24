import signInStyles from '@/styles/pages/SignIn.module.scss';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { extractErrorMessages } from '@/shared/utils/extractErrorMessages';
import { signIn, SignInResponse200 } from '@/api/apiCalls/user/signIn';
import { isInvalidDtoResponse } from '@/shared/utils/responses/isInvalidDtoResponse';
import { is401thResponse } from '@/shared/utils/responses/is401thResponse';
import { updateUser } from '@/stores/authStore/events/updateUser';
import { is200thResponse } from '@/shared/utils/responses/is200thResponse';
import jwt_decode from 'jwt-decode';
import { JwtToken } from '@/shared/utils/jwtToken';
import { User } from '@/shared/types/user';

export class SignInFormValues {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 100)
  password: string;
}

export default function SignIn() {
  const router = useRouter();
  const t = chooseTranslation(router.locale);
  const [formValues, setFormValues] = useState<SignInFormValues>({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState<string[]>([]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    // TODO: create translatable client validation

    const signInResponse = await signIn(formValues, router.locale);

    if (isInvalidDtoResponse(signInResponse)) {
      setErrors(extractErrorMessages(signInResponse.data.data.errors))
      return;
    }

    if (is401thResponse(signInResponse)) {
      setErrors([signInResponse.data.message])
      return;
    }

    if (is200thResponse<SignInResponse200>(signInResponse)) {
      const { accessToken } = signInResponse.data
      localStorage.setItem('accessToken', accessToken);
      const decoded = jwt_decode<JwtToken<User>>(accessToken);
      const user = decoded.payload;
      updateUser(user);
    }


    // TODO: Save the result using effector
    // TODO: redirect
  }

  return (
    <form className={signInStyles.SignInPage} onSubmit={handleSubmit}>
      <h1 className={signInStyles.SignInPageTitle}>{t.pages.signIn.title}</h1>
      <label className={signInStyles.SignInLoginLabel}>
        {t.pages.signIn.usernameLabel}
        <input
          type="text"
          name="username"
          className={signInStyles.SignInUsernameInput}
          value={formValues.username}
          onChange={handleInputChange}
        />
      </label>
      <label className={signInStyles.SignInPasswordLabel}>
        {t.pages.signIn.passwordLabel}
        <input
          type="password"
          name="password"
          className={signInStyles.SignInPasswordInput}
          value={formValues.password}
          onChange={handleInputChange}
        />
      </label>
      {errors.length > 0 ? (
        <div className={signInStyles.SignInErrorMessagesWrapper}>
          {errors.map(e => (<div key={e}>{`- ${e}`}</div>))}
        </div>
      ) : (<></>)}
      <button type="submit" className={signInStyles.SignInButton}>{t.pages.signIn.button}</button>
    </form>
  )
}
