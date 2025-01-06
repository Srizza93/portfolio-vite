import { defineStore } from 'pinia';
import { PossibleLanguage } from '../types/language';

type State = {
  selectedLanguage: PossibleLanguage;
  isLanguageModalOpen: boolean;
};

export const useLanguageStore = defineStore('language', {
  state: (): State => ({
    selectedLanguage: 'en',
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
