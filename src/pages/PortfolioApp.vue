<template>
  <navigation-bar v-if="!isWelcomePage" />
  <div class="portfolio-layout">
    <router-view></router-view>
    <options-modal
      v-if="!isWelcomePage"
      :selected-language="selectedLanguage"
      :options="languages"
      :is-modal-open="isLanguageModalOpen"
      @select-option="(language: string) => selectLanguage(language as PossibleLanguage)"
      @open-modal="openLanguageModal"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import NavigationBar from '@/components/NavigationBar.vue';
import OptionsModal from '@/components/OptionsModal.vue';

import { languages, selectedLanguage } from '@/composables/languageComposable';
import { usePortfolioRouter } from '@/composables/routerComposable';

import { selectLanguage } from '@/services/languageService';
import { useLanguageStore } from '@/store/language';
import { PossibleLanguage } from '@/types/language';

const languageStore = useLanguageStore();

const { openLanguageModal } = languageStore;
const { isLanguageModalOpen } = storeToRefs(languageStore);
const { isWelcomePage } = usePortfolioRouter();
</script>

<style lang="scss" scoped>
.portfolio-layout {
  width: 100%;
  padding: 100px 60px;
}

@media screen and (max-width: 500px) {
  .portfolio-layout {
    padding: 100px 30px;
  }
}
</style>
