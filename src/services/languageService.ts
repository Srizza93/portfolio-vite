import { getCookie, setCookie, LANGUAGE_COOKIE } from '@/helpers/cookieHelper';
import i18n from '@/i18n';
import AppLocaleService from '@/services/appLocaleService';
import { getFilePath } from '@/services/fileService';

type AvailableLocales = (typeof i18n.global.availableLocales)[number];

export function initLanguage() {
  const languageFromCookie = getCookie(LANGUAGE_COOKIE);

  if (!languageFromCookie) {
    const appLocale = getLanguageId(AppLocaleService.getAppLocale());

    if (!i18n.global.availableLocales.includes(appLocale as AvailableLocales)) {
      const fallbackLocale = i18n.global.fallbackLocale;
      i18n.global.locale = fallbackLocale as AvailableLocales;
      setCookie(LANGUAGE_COOKIE, fallbackLocale as string);

      return fallbackLocale;
    }

    setCookie(LANGUAGE_COOKIE, appLocale);

    return appLocale;
  } else {
    i18n.global.locale = languageFromCookie as AvailableLocales;
  }
}

export function selectLanguage(language: string) {
  i18n.global.locale = language as AvailableLocales;
  setCookie(LANGUAGE_COOKIE, language);
}

export function getLanguageId(local: string) {
  return local.split('-')[0];
}

export function getLanguageFlag(language: string): string {
  return getFilePath(getLanguageId(language) + '-flag.png');
}
