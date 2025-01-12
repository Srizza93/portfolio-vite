import { computed, ComputedRef } from 'vue';
import i18n from '@/i18n';
import { getLanguageFlag, getLanguageId } from '@/services/languageService';
import { Language } from '@/types/language';

export const availableLanguages: ComputedRef<Language[]> = computed(() =>
  i18n.global.availableLocales.map(
    (lang: string): Language => ({
      name: lang,
      img: getLanguageFlag(lang),
      selected: getLanguageId(i18n.global.locale) === lang,
    })
  )
);
