type TODO_ANY = any;

const fallbackLocale = 'en-EN';

export default class AppLocaleService {
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
}
