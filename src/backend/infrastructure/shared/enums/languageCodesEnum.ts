export const LanguageCodesEnum = {
  en: 'en',
  ru: 'ru',
} as const;
export type LanguageCodesEnum = keyof typeof LanguageCodesEnum;
