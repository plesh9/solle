export enum EnumLanguage {
  en = 'en',
  es = 'es',
}

export interface ILanguageSelectorItem {
  text: string;
  value: EnumLanguage;
}

export interface ILanguageSelectorOption {
  label: string;
  items: ILanguageSelectorItem[];
}
