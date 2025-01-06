import { getCookie, setCookie, LANGUAGE_COOKIE } from '../helpers/cookieHelper';
import i18n from '../i18n';
import { useLanguageStore } from '../store/language';
import AppLocaleService from './appLocaleService';
import { getFilePath } from './fileService';
import { PossibleLanguage } from '../types/language';

export const possibleLanguages: PossibleLanguage[] = ['en', 'fr', 'it'];

export function initLanguage() {
  const language = getCookie(LANGUAGE_COOKIE) as PossibleLanguage;

  if (!language) {
    const appLocale = getLanguageId(AppLocaleService.getAppLocale());
    setCookie(LANGUAGE_COOKIE, appLocale);
    return appLocale;
  } else {
    i18n.global.locale = language;
    useLanguageStore().setSelectedLanguage(language);
  }
}

export function selectLanguage(language: PossibleLanguage) {
  i18n.global.locale = language;
  setCookie(LANGUAGE_COOKIE, language);
  useLanguageStore().setSelectedLanguage(language);
  useLanguageStore().closeLanguageModal();
}

export function getLanguageId(local: string) {
  return local.split('-')[0];
}

export function getLanguageFlag(language: string): string {
  return getFilePath(getLanguageId(language) + '-flag.png');
}
