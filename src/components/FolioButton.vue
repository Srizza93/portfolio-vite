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
@use '@/assets/global';

@keyframes blink-dark {
  0% {
    outline: none;
  }
  50% {
    outline: 3px solid global.$secondary--color;
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
    outline: 3px solid global.$primary--color;
  }
  100% {
    outline-offset: 5px;
    outline: transparent;
  }
}
</style>

<style lang="scss" scoped>
@use '@/assets/global';

.folio-button {
  width: 100%;
  max-width: 250px;
  padding: global.$spacing-vertical-horizontal--medium;
  border-radius: global.$border-radius--small;
  border: none;
  color: global.$primary--color;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;
}

.folio-dark {
  background-color: global.$secondary-dark--color;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px global.$primary--color,
      0 0 0 4px global.$secondary-dark--color;
  }
}

.folio-dark:hover {
  animation: blink-dark 1s linear infinite;
}

.folio-light {
  background-color: global.$secondary--color;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px global.$primary--color,
      0 0 0 4px global.$secondary-dark--color;
  }
}

.folio-light:hover {
  animation: blink-dark 1s linear infinite;
}

.folio-x-light {
  background-color: global.$primary--color;
  color: global.$secondary-dark--color;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px global.$secondary-dark--color,
      0 0 0 4px global.$primary--color;
  }
}

.folio-x-light:hover {
  animation: blink-light 1s linear infinite;
}
</style>
