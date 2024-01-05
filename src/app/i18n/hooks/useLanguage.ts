import { i18Document, i18Storage } from '@/shared/lib';
import { useI18n } from 'vue3-i18n';
import { EnumLanguages } from '..';

export const useLanguage = () => {
  const { setLocale } = useI18n();

  const setLanguage = (language: EnumLanguages) => {
    setLocale(language);
    i18Storage.setLanguage(language);
    i18Document.setLanguage(language);
  };

  return {
    setLanguage,
  };
};
