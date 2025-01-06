import { createI18n } from 'vue-i18n';

import enEN from '@/i18n/en_EN.json';
import frFR from '@/i18n/fr_FR.json';
import itIT from '@/i18n/it_IT.json';
import AppLocaleService from '@/services/appLocaleService';

export default createI18n({
  locale: AppLocaleService.getAppLocale(),
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
