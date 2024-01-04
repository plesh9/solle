import { EnumLanguages } from '@/app/i18n';

export interface ILanguageSelectorItem {
  text: string;
  value: EnumLanguages;
}

export interface ILanguageSelectorOption {
  label: string;
  items: ILanguageSelectorItem[];
}
