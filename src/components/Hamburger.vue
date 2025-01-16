<template>
  <div class="hamburger-component">
    <div
      class="hamburger"
      v-bind:class="{ 'hamburger--open': isMenuOpen }"
      tabindex="0"
      :aria-label="hamburgerAriaLabel"
      @keydown.enter="toggleMenu"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition>
      <navigation-options
        v-if="isMenuOpen"
        :pages="hamburgerOptions"
        is-hamburger-menu
        @option-clicked="selectOption($event)"
      />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import NavigationOptions from '@/components/NavigationOptions.vue';

import { RouteOption } from '@/types/route';
import i18n from '@/i18n';

const props = defineProps<{
  isMenuOpen: boolean;
  hamburgerOptions: RouteOption[];
}>();

const emit = defineEmits<{
  'toggle-menu': [boolean];
  'option-clicked': [RouteOption];
}>();

function toggleMenu() {
  emit('toggle-menu', !props.isMenuOpen);
}

function selectOption(option: RouteOption) {
  toggleMenu();
  emit('option-clicked', option);
}

const hamburgerAriaLabel = computed(() =>
  props.isMenuOpen
    ? i18n.global.t('navigation.hamburger-close--label')
    : i18n.global.t('navigation.hamburger-open--label')
);
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.hamburger-component {
  display: none;
  margin: 0 0 0 auto;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: global.$icon-size--medium;
  height: global.$icon-size--medium;
  cursor: pointer;

  &:hover {
    opacity: global.$opacity--light;
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
    border-radius: global.$border-radius--medium;
    margin-bottom: global.$spacing--xsmall;
    background-color: global.$primary--color;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
}

@media screen and (max-width: 750px) {
  .hamburger-component {
    display: flex;
  }
}

.v-enter-active,
.v-leave-active {
  right: 0;
}

.v-enter-from,
.v-leave-to {
  right: -150px;
}
</style>
