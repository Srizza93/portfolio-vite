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

<style lang="scss" scoped>
.folio-button {
  width: 100%;
  max-width: 250px;
  padding: 8px 30px;
  border-radius: 5px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;
}

.folio-dark {
  background-color: #0f52ba;
}

.folio-dark:hover {
  animation: blink-dark 1s linear infinite;
}

.folio-light {
  background-color: #0474b3;
}

.folio-light:hover {
  animation: blink-dark 1s linear infinite;
}

.folio-x-light {
  background-color: white;
  color: #0a6b9d;
}

.folio-x-light:hover {
  animation: blink-light 1s linear infinite;
}

@keyframes blink-dark {
  0% {
    outline: none;
  }
  50% {
    outline: 3px solid #0474b3;
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
    outline: 3px solid white;
  }
  100% {
    outline-offset: 5px;
    outline: transparent;
  }
}
</style>
