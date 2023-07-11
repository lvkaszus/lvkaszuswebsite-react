/*

    lvkaszusWebsite-React --- version: 4.2
    
                  i18n.jsx
                 
                i18n Settings

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en.json';
import translationPL from '../locales/pl.json';

const detectBrowserLanguage = () => {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang !== 'pl-PL' && userLang !== 'pl' && userLang !== 'en-US' && userLang !== 'en-GB' && userLang !== 'en') {
    return 'en';
  }

  return userLang;
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      pl: {
        translation: translationPL,
      },
    },
    lng: detectBrowserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;