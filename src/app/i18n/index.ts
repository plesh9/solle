import { createI18n } from 'vue3-i18n';
import { getCurrentLocale } from './utils';
import en from './messages/en.json';
import es from './messages/es.json';

export enum EnumLanguages {
  en = 'en',
  es = 'es',
}

export const defaultLocale: EnumLanguages = EnumLanguages.en;
export const languages = {
  en,
  es,
};

const messages = Object.assign(languages);

export const i18n = createI18n({
  locale: getCurrentLocale(),
  messages,
});
