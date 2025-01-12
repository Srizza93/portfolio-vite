<template>
  <navigation-bar v-if="!isWelcomePage" />
  <div class="portfolio-layout">
    <router-view></router-view>
  </div>
  <options-modal
    v-if="!isWelcomePage && availableLanguages"
    :selected-language="selectedLanguage"
    :options="availableLanguages"
    :is-modal-open="isLanguageModalOpen"
    @select-option="selectLanguageFromModal"
    @open-modal="openLanguageModal"
    @close-modal="closeLanguageModal"
  />
  <toaster v-if="toasterMessage" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import NavigationBar from '@/components/NavigationBar.vue';
import OptionsModal from '@/components/OptionsModal.vue';
import Toaster from '@/components/Toaster.vue';

import { availableLanguages } from '@/composables/languageComposable';
import { usePortfolioRouter } from '@/composables/routerComposable';

import { selectLanguage } from '@/services/languageService';

import { useLanguageModalStore } from '@/store/languageModal';
import { useToasterStore } from '@/store/toaster';

const languageModalStore = useLanguageModalStore();
const toasterStore = useToasterStore();

const { openLanguageModal, closeLanguageModal } = languageModalStore;
const { isLanguageModalOpen } = storeToRefs(languageModalStore);
const { toasterMessage } = storeToRefs(toasterStore);
const { isWelcomePage } = usePortfolioRouter();

const selectedLanguage = computed(() =>
  availableLanguages.value.find((language) => language.selected)
);

function selectLanguageFromModal(selectedLanguage: string) {
  selectLanguage(selectedLanguage);
  closeLanguageModal();
}
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
