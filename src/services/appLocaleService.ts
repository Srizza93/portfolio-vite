interface ImportMetaEnv {
  PROD: boolean;
}

declare global {
  interface ImportMeta {
    env: ImportMetaEnv;
  }

  interface Window {
    Cypress?: any;
    test?: any;
  }
}

const fallbackLocale = 'en-EN';

export default class AppLocaleService {
  static getAppLocale() {
    if (window.Cypress as Window) {
      return window.navigator?.language || fallbackLocale;
    }
    if ((window as Window).test || !import.meta.env.PROD) {
      return fallbackLocale;
    }
    return (
      document.querySelector('html')!.getAttribute('lang') || fallbackLocale
    );
  }
}
