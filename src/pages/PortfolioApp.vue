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
    @select-option="selectLanguage"
    @open-modal="openLanguageModal"
    @close-modal="closeLanguageModal"
  />
  <toaster v-if="toasterMessage" />
  <scroll-to-top />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import NavigationBar from '@/components/NavigationBar.vue';
import OptionsModal from '@/components/OptionsModal.vue';
import Toaster from '@/components/Toaster.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';

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
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.portfolio-layout {
  width: 100%;
  padding: global.$spacing-vertical-horizontal--xlarge;
}

@media screen and (max-width: 600px) {
  .portfolio-layout {
    padding: global.$spacing-vertical-horizontal--large;
  }
}
</style>
