<template>
  <div class="menu">
    <div
      class="hamburger"
      v-bind:class="{ 'hamburger--open': isMenuOpen }"
      tabindex="0"
      @keydown.enter="toggleMenu"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition>
      <div v-if="isMenuOpen" class="links">
        <router-link
          class="links__link"
          v-for="link in links"
          :key="link.name + '-humburger'"
          :to="link.path"
          @click="toggleMenu"
          >{{ getTranslationFromPageName(link.name) }}</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { RouteOption } from '@/types/route';

import { getTranslationFromPageName } from '@/services/translationService';

const props = defineProps<{
  isMenuOpen: boolean;
  links: RouteOption[];
}>();

const emit = defineEmits<{
  'toggle-menu': [boolean];
}>();

function toggleMenu() {
  emit('toggle-menu', !props.isMenuOpen);
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
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &--open {
    span:first-child {
      transform: rotate(45deg) translate(5px, -1px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:last-child {
      transform-origin: 0% 100%;
      transform: rotate(-45deg) translate(0, 6px);
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
  top: 53px;
  right: -19px;
  border: 1px solid white;
  border-radius: 0 0 0 15px;
  background-color: white;
  transition-duration: 1s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 9999;

  &__link {
    padding: 20px 40px;
    color: #0f52ba;
    text-decoration: none;
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

@media screen and (max-width: 750px) {
  .menu {
    display: flex;
  }
}

.v-enter-active,
.v-leave-active {
  right: -19px;
}

.v-enter-from,
.v-leave-to {
  right: -250px;
}
</style>
