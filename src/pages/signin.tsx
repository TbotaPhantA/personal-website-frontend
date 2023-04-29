import signInStyles from '@/styles/pages/SignIn.module.scss';
import { useState } from 'react';

export default function SignIn() {
  const [error, setError] = useState<string>('');

  return (
    <form className={signInStyles.SignInPage}>
      <h1 className={signInStyles.SignInPageTitle}>SIgn In</h1>
      <label className={signInStyles.SignInLoginLabel}>
        Login:
        <input type="text" className={signInStyles.SignInLoginInput}/>
      </label>
      <label className={signInStyles.SignInPasswordLabel}>
        Password:
        <input type="password" className={signInStyles.SignInPasswordInput}/>
      </label>
      {error && <p>{error}</p>}
      <button type="submit" className={signInStyles.SignInButton}>Sign In</button>
    </form>
  )
}
