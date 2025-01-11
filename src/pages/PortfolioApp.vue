<template>
  <navigation-bar v-if="!isWelcomePage" />
  <div class="portfolio-layout">
    <router-view></router-view>
  </div>
  <options-modal
    v-if="!isWelcomePage"
    :selected-language="selectedLanguage"
    :options="languages"
    :is-modal-open="isLanguageModalOpen"
    @select-option="(language: string) => selectLanguage(language as PossibleLanguage)"
    @open-modal="openLanguageModal"
    @close-modal="closeLanguageModal"
  />
  <toaster v-if="toasterMessage" />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import NavigationBar from '@/components/NavigationBar.vue';
import OptionsModal from '@/components/OptionsModal.vue';
import Toaster from '@/components/Toaster.vue';

import { languages, selectedLanguage } from '@/composables/languageComposable';
import { usePortfolioRouter } from '@/composables/routerComposable';

import { selectLanguage } from '@/services/languageService';

import { useLanguageStore } from '@/store/language';
import { useToasterStore } from '@/store/toaster';

import { PossibleLanguage } from '@/types/language';

const languageStore = useLanguageStore();
const toasterStore = useToasterStore();

const { openLanguageModal, closeLanguageModal } = languageStore;
const { isLanguageModalOpen } = storeToRefs(languageStore);
const { toasterMessage } = storeToRefs(toasterStore);
const { isWelcomePage } = usePortfolioRouter();
</script>

<style lang="scss" scoped>
.portfolio-layout {
  width: 100%;
  padding: 60px;
}

@media screen and (max-width: 600px) {
  .portfolio-layout {
    padding: 60px 15px;
  }
}
</style>
