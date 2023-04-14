import React from 'react';
import { useRouter } from 'next/router';
import languageSelect from '../../styles/components/LanguageSelect/LanguageSelect.module.scss';

export function LanguageSelect() {
  const router = useRouter();
  const locales = router.locales;

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale });
  }

  return (
    <select
      onChange={changeLanguage}
      className={languageSelect.LanguageSelect}
    >
      {locales?.map(
        loc => (<option key={loc}>{loc}</option>)
      )}
    </select>
  )
}
