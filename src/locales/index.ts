import i18n, { ResourceLanguage } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, Translation } from 'react-i18next';
import { English } from './fr';
import { Frensh } from './en';

type Resources = {
  en: ResourceLanguage;
  fr: ResourceLanguage;
};

const resources: Resources = {
  en: {
    translation: English,
  },
  fr: {
    translation: Frensh,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
