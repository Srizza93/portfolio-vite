<template>
  <button
    class="folio-button"
    :class="themeClass"
    @click="$emit('folio-button-click')"
  >
    <slot>Open</slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  theme?: string;
}>();

const themeClass = computed(() => {
  switch (props.theme) {
    case 'dark':
      return 'folio-dark';
    case 'light':
      return 'folio-light';
    case 'x-light':
      return 'folio-x-light';
    default:
      return 'folio-light';
  }
});
</script>

<style lang="scss">
@use '@/assets/global.scss' as *;

@keyframes blink-dark {
  0% {
    outline: none;
  }
  50% {
    outline: 3px solid $secondary--color;
  }
  100% {
    outline-offset: 5px;
    outline: transparent;
  }
}

@keyframes blink-light {
  0% {
    outline: none;
  }
  50% {
    outline: 3px solid $primary--color;
  }
  100% {
    outline-offset: 5px;
    outline: transparent;
  }
}
</style>

<style lang="scss" scoped>
@use '@/assets/global.scss' as *;

.folio-button {
  width: 100%;
  max-width: 250px;
  padding: 8px 30px;
  border-radius: 5px;
  border: none;
  color: $primary--color;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px $primary--color, 0 0 0 4px $secondary-dark--color;
  }
}

.folio-dark {
  background-color: $secondary-dark--color;
}

.folio-dark:hover {
  animation: blink-dark 1s linear infinite;
}

.folio-light {
  background-color: $secondary--color;
}

.folio-light:hover {
  animation: blink-dark 1s linear infinite;
}

.folio-x-light {
  background-color: $primary--color;
  color: $secondary-dark--color;
}

.folio-x-light:hover {
  animation: blink-light 1s linear infinite;
}
</style>
