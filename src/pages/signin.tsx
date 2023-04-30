import signInStyles from '@/styles/pages/SignIn.module.scss';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { chooseTranslation } from '@/shared/utils/chooseTranslation';
import { IsNotEmpty, IsString, Length, validateSync } from 'class-validator';
import { extractErrorMessages } from '@/shared/utils/extractErrorMessages';
import { plainToClass } from 'class-transformer';

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
  const { locale } = useRouter();
  const t = chooseTranslation(locale);
  const [formValues, setFormValues] = useState<SignInFormValues>({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState<string[]>([]);
  // const auth = useStore(authStore);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const errorMessages = extractErrorMessages(validateSync(plainToClass(SignInFormValues, formValues)));

    setErrors(errorMessages);
    console.log(errors)
    if (errorMessages.length > 0) return;

    // const signInResponse = await signIn(formValues);

    // if (is422Response(signInResponse)) {
    //   setErrors(...)
    //   return;
    // }

    // if (is400Response(signInResponse)) {
    //   setErrors(...)
    //   return;
    // }

    // Save the result using effector
    // redirect
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
