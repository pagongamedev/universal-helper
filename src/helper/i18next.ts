import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

export type TypeI18NDomain = { name: string; locate: any };

export const MiddlewareInit = async (
  { debug = true, fallbackLng = 'en' },
  i18nList: TypeI18NDomain[]
) => {
  const resources: any = {};
  for (const i in i18nList) {
    if (i18nList[i].name !== '') {
      for (const key in i18nList[i].locate) {
        // eslint-disable-next-line
        if (!resources.hasOwnProperty(key)) {
          resources[key] = {};
        }
        resources[key] = {
          ...resources[key],
          [i18nList[i].name]: i18nList[i].locate[key],
        };
      }
    }
  }

  i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    //   .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: debug,
      fallbackLng: fallbackLng,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      resources: resources,
    });

  return i18n;
};

export const MappingObject = (input: any, tranFunc: any): string => {
  if (!input) {
    return '';
  }
  if (typeof input === 'string' || input instanceof String) {
    return tranFunc(input) || '';
  }

  if (typeof input === 'object' || input instanceof Object) {
    if ('key' in input) {
      return tranFunc(input.key, 'option' in input ? input.option : undefined);
    }
  }

  console.log('cant mapping type of ', typeof input);
  return '';
};
