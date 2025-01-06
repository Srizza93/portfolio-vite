<template>
  <div class="menu">
    <div
      class="hamburger"
      v-bind:class="{ 'hamburger--open': isOpen }"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="links" v-bind:class="{ 'links--open': isOpen }">
      <router-link
        class="links__link"
        v-for="link in links"
        :key="link.name + '-humburger'"
        :to="link.path"
        @click="toggleMenu"
        >{{ getTranslationFromPageName(link.name) }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { RouteOption } from '@/types/route';

import { getTranslationFromPageName } from '@/services/translationService';

defineProps<{
  links: RouteOption[];
}>();

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
.menu {
  display: none;
  position: relative;
  margin-right: 15px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &--open {
    span:first-child {
      transform: rotate(45deg) translate(-2px, -1px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:last-child {
      transform-origin: 0% 100%;
      transform: rotate(-45deg) translate(0, -1px);
    }
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    border-radius: 15px;
    margin-bottom: 5px;
    background-color: white;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
}

.links {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35px;
  right: -250px;
  border: 1px solid white;
  border-radius: 15px;
  background-color: white;
  transition-duration: 2s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 9999;

  &--open {
    right: 0;
  }

  &__link {
    padding: 20px 40px;
    color: #0f52ba;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

    &:first-child {
      border-radius: 15px 15px 0 0;
    }

    &:last-child {
      border-radius: 0 0 15px 15px;
    }

    &:hover {
      background-color: #0f52ba;
      color: white;
    }
  }
}

@media screen and (max-width: 750px) {
  .menu {
    display: flex;
  }
}
</style>
