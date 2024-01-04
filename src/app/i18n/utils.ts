import { EnumLanguages } from '@/app/i18n';
import { i18Storage } from '@/shared/lib';
import { defaultLocale } from '.';

const checkSystemLang = (lang: string): EnumLanguages | false => {
  const enumValues = Object.values(EnumLanguages);

  if (enumValues.includes(lang as EnumLanguages)) {
    return lang as EnumLanguages;
  } else {
    return false;
  }
};

export const getCurrentLocale = () => {
  const storageLocale = i18Storage.getLanguage();
  const systemLanguage = navigator.language.split('-')[0];
  const currentLocale =
    storageLocale || checkSystemLang(systemLanguage) || defaultLocale;

  return currentLocale;
};
