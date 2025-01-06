import i18n from '@/i18n';

export function getTranslationFromPageName(pageName: string): string {
  const translation = `navigation.${pageName.toLowerCase()}`;
  return i18n.global.t(translation);
}
