<template>
  <img
    class="scroller"
    :class="{ 'scroller--visible': showScroller }"
    :src="getFilePath('arrow-up.png')"
    alt="scroll up"
    tabindex="0"
    @keydown.enter="scrollToTop"
    @click="scrollToTop"
  />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import { getFilePath } from '@/services/fileService';

const PAGE_TOP_OFFSET = 100;
const showScroller = ref(false);

function handleScrollBehavior() {
  if (window.scrollY > PAGE_TOP_OFFSET) {
    showScroller.value = true;
  } else {
    showScroller.value = false;
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

onMounted(() => {
  window.addEventListener('scroll', () => handleScrollBehavior());
});

onUnmounted(() => {
  window.removeEventListener('scroll', () => handleScrollBehavior());
});
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.scroller {
  position: fixed;
  bottom: 5px;
  right: 5px;
  width: global.$icon-size--medium;
  height: global.$icon-size--medium;
  background-color: global.$secondary--color;
  border-radius: global.$border-radius--round;
  opacity: 0;
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: global.$opacity--light;
  }

  &--visible {
    opacity: 1;
  }
}
</style>
