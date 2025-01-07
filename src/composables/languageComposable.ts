import { computed, ComputedRef } from 'vue';
import { getLanguageFlag, possibleLanguages } from '@/services/languageService';
import { useLanguageStore } from '@/store/language';
import type { Language, PossibleLanguage } from '@/types/language';

export const languages: ComputedRef<Language[]> = computed(() =>
  possibleLanguages.map((lang: PossibleLanguage): Language => {
    return {
      name: lang,
      img: getLanguageFlag(lang),
    };
  })
);
export const selectedLanguage = computed(() =>
  languages.value.find(
    (lang: Language): boolean =>
      lang.name === useLanguageStore().selectedLanguage
  )
) as ComputedRef<Language>;
