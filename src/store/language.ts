import { defineStore } from 'pinia';
import { PossibleLanguage } from '@/types/language';
import AppLocaleService from '@/services/appLocaleService';

type State = {
  selectedLanguage: PossibleLanguage;
  isLanguageModalOpen: boolean;
};

export const useLanguageStore = defineStore('language', {
  state: (): State => ({
    selectedLanguage: AppLocaleService.getAppLocale() as PossibleLanguage,
    isLanguageModalOpen: false,
  }),
  actions: {
    setSelectedLanguage(language: PossibleLanguage) {
      this.selectedLanguage = language;
    },
    openLanguageModal() {
      this.isLanguageModalOpen = true;
    },
    closeLanguageModal() {
      this.isLanguageModalOpen = false;
    },
  },
});
