<template>
  <router-view> </router-view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import { initLanguage } from '@/services/languageService';

onMounted(() => initLanguage());
</script>

<style lang="scss">
@use '@/assets/global';

body {
  background-color: global.$primary--color;
  margin: 0;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
