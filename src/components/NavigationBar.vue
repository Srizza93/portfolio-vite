<template>
  <nav class="navigation-bar">
    <img
      @keydown.enter="navigateToPage(WELCOME_PATH)"
      @click="navigateToPage(WELCOME_PATH)"
      class="navigation-bar__logo"
      :alt="$t('navigation.logo--alt')"
      src="@/assets/s-icon.png"
      tabindex="0"
    />
    <navigation-options
      :pages="pages"
      @option-clicked="navigateToPage($event.path)"
    />
    <options-modal
      v-if="!isWelcomePage && availableLanguages"
      :selected-language="selectedLanguage"
      :options="availableLanguages"
      :is-modal-open="isLanguageModalOpen"
      @select-option="selectLanguage"
      @open-modal="openLanguageModal"
      @close-modal="closeLanguageModal"
    />
    <hamburger
      :is-menu-open="isHamburgerMenuOpen"
      :hamburger-options="pages"
      @toggle-menu="toggleHamburgerMenu"
      @option-clicked="navigateToPage($event.path)"
    />
  </nav>
</template>

<script lang="ts" setup>
import { computed, ComputedRef, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useLanguageModalStore } from '@/store/languageModal';
import { availableLanguages } from '@/composables/languageComposable';
import { usePortfolioRouter } from '@/composables/routerComposable';

import OptionsModal from '@/components/OptionsModal.vue';
import NavigationOptions from '@/components/NavigationOptions.vue';
import Hamburger from '@/components/Hamburger.vue';

import { WELCOME_PATH } from '@/constants/pageEndpoints';
import { routeOptions } from '@/router/routeOptions';
import {
  HOME_PAGE_NAME,
  PORTFOLIO_PAGE_NAME,
  STACK_PAGE_NAME,
  CONTACTS_PAGE_NAME,
  RESUME_PAGE_NAME,
} from '@/constants/pageNames';
import { selectLanguage } from '@/services/languageService';

import { RouteOption } from '@/types/route';

const router = useRouter();

const languageModalStore = useLanguageModalStore();
const { openLanguageModal, closeLanguageModal } = languageModalStore;
const { isLanguageModalOpen } = storeToRefs(languageModalStore);
const { isWelcomePage } = usePortfolioRouter();
const isHamburgerMenuOpen = ref(false);

const selectedLanguage = computed(() =>
  availableLanguages.value.find((language) => language.selected)
);

function toggleHamburgerMenu(isOpen: boolean) {
  isHamburgerMenuOpen.value = isOpen;
}

const pages: ComputedRef<RouteOption[]> = computed(
  () =>
    routeOptions[0].children?.filter((page: RouteOption) =>
      [
        HOME_PAGE_NAME,
        PORTFOLIO_PAGE_NAME,
        STACK_PAGE_NAME,
        CONTACTS_PAGE_NAME,
        RESUME_PAGE_NAME,
      ].includes(page.name)
    ) || []
);

function navigateToPage(page: string) {
  router.push(page);
}
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.navigation-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: global.$spacing-vertical-horizontal--medium;
  background-color: global.$secondary--color;

  &__logo {
    width: global.$icon-size--medium;
    height: global.$icon-size--medium;
    padding: global.$spacing--xsmall;
    height: auto;
    cursor: pointer;

    &:hover {
      opacity: global.$opacity--light;
    }
  }
}
</style>
