import { getCookie, setCookie, LANGUAGE_COOKIE } from '@/helpers/cookieHelper';
import i18n from '@/i18n';
import { useLanguageStore } from '@/store/language';
import AppLocaleService from '@/services/appLocaleService';
import { getFilePath } from '@/services/fileService';
import { PossibleLanguage } from '@/types/language';

export function initLanguage() {
  const languageFromCookie = getCookie(LANGUAGE_COOKIE) as PossibleLanguage;

  if (!languageFromCookie) {
    const appLocale = getLanguageId(AppLocaleService.getAppLocale());

    if (!i18n.global.availableLocales.includes(appLocale as PossibleLanguage)) {
      const fallbackLocale = i18n.global.fallbackLocale as PossibleLanguage;
      setCookie(LANGUAGE_COOKIE, fallbackLocale);
      useLanguageStore().setSelectedLanguage(fallbackLocale);
      return fallbackLocale;
    }

    setCookie(LANGUAGE_COOKIE, appLocale);
    useLanguageStore().setSelectedLanguage(appLocale as PossibleLanguage);

    return appLocale;
  } else {
    i18n.global.locale = languageFromCookie;
    useLanguageStore().setSelectedLanguage(languageFromCookie);
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
