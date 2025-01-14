<template>
  <nav class="navigation-bar">
    <img
      @keydown.enter="navigateToPage(WELCOME_PATH)"
      @click="navigateToPage(WELCOME_PATH)"
      class="navigation-bar__logo"
      alt="logo"
      src="@/assets/s-icon.png"
      tabindex="0"
    />
    <navigation-options
      :pages="pages"
      @option-clicked="navigateToPage($event.path)"
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

import { RouteOption } from '@/types/route';

const router = useRouter();

const isHamburgerMenuOpen = ref(false);

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
.navigation-bar {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 30px 5px 30px;
  background-color: #0474b3;

  &__logo {
    width: 100%;
    max-width: 60px;
    height: auto;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
