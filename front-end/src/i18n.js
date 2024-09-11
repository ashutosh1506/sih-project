// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//wordfile
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

//
//i18n
//  .use(initReactI18next)
//  .init({
//    resources: {
//      en: { translation: enTranslations },
//      hi: { translation: hiTranslations },
//    },
//    lng: 'en', // default language
//    fallbackLng: 'en',
//    interpolation: {
//      escapeValue: false,
//    },
//  });

export default i18n;
