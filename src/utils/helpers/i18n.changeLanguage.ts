import i18n from 'i18next';

export function switchLanguage(lang: string) {
  i18n.changeLanguage(lang);
}
