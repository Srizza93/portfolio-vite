<template>
  <div class="portfolio">
    <div class="portfolio-subcontainer">
      <projects v-if="projectsData" :projects="projectsData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue';

import { getPortfolioData } from '@/api/portfolio';
import { useToasterStore } from '@/store/toaster';
import i18n from '@/i18n';

import Projects from '@/components/Projects.vue';
import { Project } from '@/types/project';

const toasterStore = useToasterStore();

const projectsData: Ref<Project[] | null> = ref(null);

function getData(): Promise<void> {
  return getPortfolioData()
    .then((response: Project[]) => {
      projectsData.value = response;
    })
    .catch(() => {
      toasterStore.setMessage(i18n.global.t('global.error'));
    });
}

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
}

.portfolio-subcontainer {
  display: flex;
  flex-direction: column;
  border-left: 3px solid global.$detail--color;
}
</style>
