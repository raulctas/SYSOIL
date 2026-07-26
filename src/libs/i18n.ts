import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from 'src/constants/languages';

/**
 * Inicializa i18next. Los textos se cargan en runtime desde
 * `/locales/{{lng}}/translation.json` (http-backend). Por ahora solo existe `es`,
 * pero añadir un idioma es tan simple como crear su fichero de traducción y
 * registrarlo en `SUPPORTED_LANGUAGES`.
 */
export const i18nextInit = () =>
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: import.meta.env.DEV,
      fallbackLng: DEFAULT_LANGUAGE,
      supportedLngs: SUPPORTED_LANGUAGES.map((language) => language.code),
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false,
      },
    });
