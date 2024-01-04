import { useI18n } from 'vue3-i18n';

export const useMyI18n = (defaultMessage?: string) => {
  const { t, ...rest } = useI18n();

  const translateFn = (message: string) =>
    t(`${defaultMessage ? `${defaultMessage}.` : ''}${message}`);

  return {
    t: translateFn,
    ...rest,
  };
};
