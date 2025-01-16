<template>
  <ul v-if="stackData" class="stack">
    <li class="tech" v-for="tech in stackData" :key="tech.name">
      <a class="tech-container" :href="tech.link">
        <img
          class="tech-container__logo"
          :src="getFilePath(tech.logo)"
          :alt="tech.name + '-logo'"
        />
        <span class="tech-container__text">{{ tech.name }}</span>
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue';

import { Stack } from '@/types/stack';
import { getFilePath } from '@/services/fileService';
import { getStackData } from '@/api/stack';
import { useToasterStore } from '@/store/toaster';
import i18n from '@/i18n';

const toasterStore = useToasterStore();

const stackData: Ref<Stack[] | null> = ref(null);

function getData(): Promise<void> {
  return getStackData()
    .then((response: Stack[]) => {
      stackData.value = response;
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

.stack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: global.$spacing--small;
  margin: 0;
  padding: 0;
}

.tech {
  display: flex;
  justify-content: center;
}

.tech-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  height: global.$icon-size--medium;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover .tech-container__text {
    animation: text-grow 0.5s forwards;
  }

  &:hover .tech-container__logo {
    animation: icon-grow 0.5s forwards;
  }

  &__logo {
    width: 40px;
    height: 40px;
    margin-right: global.$spacing--medium;
    object-fit: contain;
    overflow: visible;
    font-size: global.$font-size--small;
  }

  &__text {
    white-space: nowrap;
  }
}

@keyframes text-grow {
  0% {
    color: global.$standard-text--color;
  }
  100% {
    font-size: global.$font-size--large;
    color: global.$secondary--color;
  }
}

@keyframes icon-grow {
  0% {
    width: 40px;
    height: 40px;
    margin-left: 0;
  }
  100% {
    width: global.$icon-size--medium;
    height: global.$icon-size--medium;
    margin-left: -8px;
  }
}
</style>
