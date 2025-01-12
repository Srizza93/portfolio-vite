import { defineStore } from 'pinia';

type State = {
  isLanguageModalOpen: boolean;
};

export const useLanguageModalStore = defineStore('languageModal', {
  state: (): State => ({
    isLanguageModalOpen: false,
  }),
  actions: {
    openLanguageModal() {
      this.isLanguageModalOpen = true;
    },
    closeLanguageModal() {
      this.isLanguageModalOpen = false;
    },
  },
});
