import signInStyles from '@/styles/pages/SignIn.module.scss';
import { useState, FormEvent, ChangeEvent } from 'react';

export interface FormValues {
  username: string;
  password: string;
}

export default function SignIn() {
  const [formValues, setFormValues] = useState<FormValues>({
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
    // const signInResponse = await signIn(formValues);
    // Save the result using effector
  }

  return (
    <form className={signInStyles.SignInPage} onSubmit={handleSubmit}>
      <h1 className={signInStyles.SignInPageTitle}>SIgn In</h1>
      <label className={signInStyles.SignInLoginLabel}>
        Username:
        <input
          type="text"
          name="username"
          className={signInStyles.SignInUsernameInput}
          value={formValues.username}
          onChange={handleInputChange}
        />
      </label>
      <label className={signInStyles.SignInPasswordLabel}>
        Password:
        <input
          type="password"
          name="password"
          className={signInStyles.SignInPasswordInput}
          value={formValues.password}
          onChange={handleInputChange}
        />
      </label>
      {errors.map(e => (<p key={e}>{e}</p>))}
      <button type="submit" className={signInStyles.SignInButton}>Sign In</button>
    </form>
  )
}
