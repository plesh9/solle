import { EnumLanguages } from '@/app/i18n';

const LANG = 'lang';

export const i18Storage = {
  getLanguage: (): EnumLanguages | null => {
    return localStorage.getItem(LANG) as EnumLanguages;
  },

  setLanguage: (language: EnumLanguages) => {
    localStorage.setItem(LANG, language);
  },
};

export const i18Document = {
  getLanguage: (): EnumLanguages | null => {
    return document.documentElement.getAttribute(LANG) as EnumLanguages;
  },

  setLanguage: (language: EnumLanguages) => {
    document.documentElement.setAttribute(LANG, language);
  },
};
