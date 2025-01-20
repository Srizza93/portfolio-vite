<template>
  <navigation-bar v-if="!isWelcomePage" />
  <div class="portfolio-layout">
    <router-view></router-view>
  </div>
  <toaster v-if="toasterMessage" />
  <scroll-to-top />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import NavigationBar from '@/components/NavigationBar.vue';
import Toaster from '@/components/Toaster.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';

import { usePortfolioRouter } from '@/composables/routerComposable';

import { useToasterStore } from '@/store/toaster';

const toasterStore = useToasterStore();

const { toasterMessage } = storeToRefs(toasterStore);
const { isWelcomePage } = usePortfolioRouter();
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.portfolio-layout {
  width: 100%;
  padding: global.$spacing-vertical-horizontal--xlarge;
}

@media screen and (max-width: 600px) {
  .portfolio-layout {
    padding: global.$spacing-vertical-horizontal--large;
  }
}
</style>
