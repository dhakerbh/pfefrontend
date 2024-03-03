const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');

i18n.use(initReactI18next).init({
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
  lng: 'en', // Default language
  fallbackLng: 'en',
  debug: false, // Set to true for debugging
});

export default i18n;