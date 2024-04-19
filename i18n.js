import LanguageDetector from 'i18next-browser-languagedetector';

const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  detection: DETECTION_OPTIONS,
  resources: {
    en: {
      translation: require('./locales/en.json'),
    },
    fr: {
      translation: require('./locales/fr.json'),
    },
    ar:{
        translation: require('./locales/ar.json'),
    }
    // Add more languages and translations as needed
  },
  //lng: 'en', // Default language
  fallbackLng: 'en',
  debug: true, // Set to true for debugging
});

export default i18n;