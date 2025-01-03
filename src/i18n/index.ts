import { createI18n } from 'vue-i18n';

import enEN from './en_EN.json';
import frFR from './fr_FR.json';
import itIT from './it_IT.json';
import languageService from '../services/languageService';

export default createI18n({
  locale: languageService.getAppLocale(),
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages: {
    en: enEN,
    fr: frFR,
    it: itIT,
  },
  silentFallbackWarn: true,
  globalInjection: true,
  warnHtmlInMessage: 'off',
});
