<template>
  <div class="resume" v-if="cvsData">
    <h3 class="resume__title">{{ $t('resume.header') }}</h3>
    <div class="cvs" v-if="cvsMap.length">
      <a
        v-for="cv in cvsMap"
        :key="cv.name"
        :href="getFilePath(cv.link)"
        :download="cv.name"
        class="cv"
      >
        <img
          class="cv__flag"
          :src="getFilePath(cv.image)"
          :alt="getAltFromCv(cv.name)"
        />
        <p class="cv__download" aria-hidden="true">
          {{ $t('resume.download') }}
        </p>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, type Ref } from 'vue';

import i18n from '@/i18n';
import { getFilePath } from '@/services/fileService';
import { getCvsData } from '@/api/cvs';
import { Cv } from '@/types/cvs';
import { useToasterStore } from '@/store/toaster';
import { getAltFromCv, sortCvs } from '@/services/cvsService';

const toasterStore = useToasterStore();
const cvsData: Ref<Cv[] | null> = ref(null);

const cvsMap = computed(() => sortCvs(cvsData?.value));

function getData(): Promise<void> {
  return getCvsData()
    .then((response: Cv[]) => {
      cvsData.value = response;
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

.resume {
  display: flex;
  flex-direction: column;

  &__title {
    margin: 0 0 global.$spacing--large 0;
  }
}

.cvs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cv {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  padding: global.$spacing--xsmall;
  margin: global.$spacing--medium 0 0 0;
  color: global.$primary--color;
  text-decoration: none;
  border-radius: global.$border-radius--round;

  &:first-child {
    margin-top: 0;
  }

  &:hover .cv__download,
  &:focus .cv__download {
    opacity: 1;
  }

  &__flag {
    width: 100%;
    height: 100%;
    border-radius: global.$border-radius--round;
    box-shadow: global.$shadow--large;
    color: global.$secondary--color;
  }

  &__download {
    position: absolute;
    top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    background-color: global.$hover-element--color;
    opacity: 0;
    margin: 0;
    border-radius: global.$border-radius--round;
    transition-duration: 0.4s;
  }
}

@media screen and (max-width: 550px) {
  .cv {
    &__download {
      opacity: 1;
    }
  }
}
</style>
