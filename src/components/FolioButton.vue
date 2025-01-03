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
    default:
      return 'folio-light';
  }
});
</script>

<style lang="scss" scoped>
.folio-button {
  width: 100%;
  max-width: 250px;
  padding: 15px 30px;
  border-radius: 15px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  cursor: pointer;
}

.folio-button:hover {
  animation: blink 1s linear infinite;
}

.folio-dark {
  background-color: #0f52ba;
}

.folio-light {
  background-color: #3498db;
}

@keyframes blink {
  0% {
    outline: none;
  }
  50% {
    outline: 3px solid #3498db;
  }
  100% {
    outline-offset: 5px;
    outline: transparent;
  }
}
</style>
