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
.pages {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 0;
  margin: 0;
  list-style: none;

  &__page {
    position: relative;
    padding: 5px 10px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:after {
      display: block;
      left: 0;
      bottom: 0;
      position: absolute;
      border-bottom: 3px solid white;
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
  border: 1px solid white;
  border-radius: 0 0 0 15px;
  background-color: white;
  transition-duration: 1s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 9999;
  list-style: none;

  &__option {
    padding: 20px 40px;
    color: #0f52ba;
    font-weight: bold;
    cursor: pointer;

    &:last-child {
      border-radius: 0 0 0 15px;
    }

    &:hover {
      background-color: #0f52ba;
      color: white;
    }
  }
}
</style>
