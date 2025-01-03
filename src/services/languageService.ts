type TODO_ANY = any;

const fallbackLocale = 'en-EN';

export default class LanguageService {
  static getAppLocale() {
    if ((window as TODO_ANY).Cypress) {
      return window.navigator?.language || fallbackLocale;
    }
    if ((window as TODO_ANY).test || !import.meta.env.PROD) {
      return fallbackLocale;
    }
    return (
      document.querySelector('html')!.getAttribute('lang') || fallbackLocale
    );
  }

  static getAppLanguage() {
    return this.getAppLocale().split('-')[0];
  }

  static getCountryCodeFromLocal(local: string) {
    return local.split('-')[1];
  }
}
