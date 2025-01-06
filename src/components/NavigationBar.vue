<template>
  <div class="navigation">
    <router-link :to="WELCOME_PATH">
      <img class="navigation__logo" alt="logo" src="@/assets/s-icon.png" />
    </router-link>
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
    <hamburger :links="pages" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef } from 'vue';

import Hamburger from '@/components/Hamburger.vue';

import { WELCOME_PATH } from '@/constants/pageEndpoints';
import { routeOptions } from '@/router/routeOptions';
import { WELCOME_PAGE_NAME } from '@/constants/pageNames';

import { getTranslationFromPageName } from '@/services/translationService';
import { RouteOption } from '@/types/route';

const pages: ComputedRef<RouteOption[]> = computed(() =>
  routeOptions.filter((page) => page.name !== WELCOME_PAGE_NAME)
);
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
