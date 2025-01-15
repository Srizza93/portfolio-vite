<template>
  <ul
    :class="{ 'hamburger-options': isHamburgerMenu, pages: !isHamburgerMenu }"
  >
    <li
      v-for="page in pages"
      :key="page.name"
      tabindex="0"
      @click="$emit('option-clicked', page)"
      @keydown.enter="$emit('option-clicked', page)"
      :class="{
        'hamburger-options__option': isHamburgerMenu,
        pages__page: !isHamburgerMenu,
      }"
    >
      {{ getTranslationFromPageName(page.name) }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { RouteOption } from '@/types/route';

import { getTranslationFromPageName } from '@/services/translationService';

defineProps<{
  pages: RouteOption[];
  isHamburgerMenu?: boolean;
}>();

defineEmits<{
  'option-clicked': [RouteOption];
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.pages {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 0;
  margin: 0;
  list-style: none;

  &__page {
    position: relative;
    padding: global.$spacing-vertical-horizontal--xsmall;
    color: global.$primary--color;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:after {
      display: block;
      left: 0;
      bottom: 0;
      position: absolute;
      border-bottom: 3px solid global.$primary--color;
      content: '';
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: -webkit-transform 0.25s ease-in-out;
      transition: -webkit-transform 0.25s ease-in-out;
      transition: transform 0.25s ease-in-out;
      transition: transform 0.25s ease-in-out,
        -webkit-transform 0.25s ease-in-out;
      width: 100%;
    }

    &:hover:after {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}

@media screen and (max-width: 750px) {
  .pages {
    display: none;
  }
}

.hamburger-options {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 0;
  padding: 0;
  margin: 0;
  border: 1px solid global.$primary--color;
  border-radius: 0 0 0 global.$border-radius--medium;
  background-color: global.$primary--color;
  transition-duration: 1s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 9999;
  list-style: none;

  &__option {
    padding: global.$spacing-vertical-horizontal--medium;
    color: global.$secondary-dark--color;
    font-weight: bold;
    cursor: pointer;

    &:last-child {
      border-radius: 0 0 0 global.$border-radius--medium;
    }

    &:hover {
      background-color: global.$secondary-dark--color;
      color: global.$primary--color;
    }
  }
}
</style>
