<template>
  <div class="navigation">
    <img
      class="navigation__logo"
      alt="logo"
      src="@/assets/s-icon.png"
      tabindex="0"
      @keydown.enter="navigateToPage(WELCOME_PATH)"
      @click="navigateToPage(WELCOME_PATH)"
    />
    <div class="navigation__links">
      <div class="navigation__link" v-for="page in pages" :key="page.name">
        <span
          class="navigation__link-border navigation__link-border--left"
        ></span>
        <div class="navigation__sides-container">
          <span
            class="navigation__link-border navigation__link-border--top"
          ></span>
          <router-link class="navigation__link-text" :to="page.path">{{
            getTranslationFromPageName(page.name)
          }}</router-link>
          <span
            class="navigation__link-border navigation__link-border--bottom"
          ></span>
        </div>
        <span
          class="navigation__link-border navigation__link-border--right"
        ></span>
      </div>
    </div>
    <hamburger
      :is-menu-open="isHamburgerMenuOpen"
      :hamburger-options="pages"
      @toggle-menu="toggleHamburgerMenu"
      @option-clicked="navigateToPage($event.path)"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef, ref } from 'vue';
import { useRouter } from 'vue-router';

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

import { getTranslationFromPageName } from '@/services/translationService';
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
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  background-color: #0474b3;

  &__logo {
    width: 100%;
    max-width: 60px;
    height: auto;
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &__links {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-right: 60px;
  }

  &__link {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__sides-container {
    display: flex;
    flex-direction: column;
  }

  &__link-border {
    background-color: white;

    &--top,
    &--bottom {
      transition-duration: 250ms;
      width: 0%;
      height: 3px;
    }

    &--left,
    &--right {
      width: 3px;
      height: 0%;
    }

    &--top {
      .navigation__link:hover & {
        width: 100%;
      }
    }

    &--right {
      .navigation__link:hover & {
        transition-delay: 250ms;
        transition-duration: 250ms;
        margin-bottom: auto;
        height: 100%;
      }
    }

    &--bottom {
      .navigation__link:hover & {
        transition-delay: 500ms;
        transition-duration: 250ms;
        margin-left: auto;
        width: 100%;
      }
    }

    &--left {
      .navigation__link:hover & {
        transition-delay: 750ms;
        transition-duration: 250ms;
        margin-top: auto;
        height: 100%;
      }
    }
  }

  &__link-text {
    padding: 5px 10px;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
}

@media screen and (max-width: 750px) {
  .navigation__links {
    display: none;
  }
}
</style>
