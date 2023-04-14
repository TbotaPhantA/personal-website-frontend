import enTranslations from '@/lang/en-translations.json';
import ruTranslations from '@/lang/ru-translations.json';

export function chooseTranslation(locale: string | undefined): typeof enTranslations {
  if (locale === 'en') {
    return enTranslations;
  }

  if (locale === 'ru') {
    return ruTranslations;
  }

  return enTranslations;
}
