<template>
  <div class="resume">
    <h3 class="resume__title">{{ $t('resume.header') }}</h3>
    <div class="cvs">
      <a
        v-for="cv in orderedCvs"
        :key="cv.name"
        :href="getFilePath(cv.filePath)"
        :download="cv.name"
        class="cv"
      >
        <img class="cv__flag" :src="getFilePath(cv.img)" :alt="cv.alt" />
        <p class="cv__download">
          {{ $t('resume.download') }}
        </p>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue';

import i18n from '@/i18n';
import { getFilePath } from '@/services/fileService';

type Cv = {
  id: string;
  name: string;
  alt: string;
  img: string;
  filePath: string;
};

const cvs: Ref<Cv[]> = ref([
  {
    id: 'fr',
    name: 'cv-fr',
    alt: 'french-flag',
    img: 'fr-flag.svg',
    filePath: 'cv-fr.pdf',
  },
  {
    id: 'en',
    name: 'cv-eng',
    alt: 'uk-flag',
    img: 'uk-flag.svg',
    filePath: 'cv-eng.pdf',
  },
  {
    id: 'it',
    name: 'cv-ita',
    alt: 'ita-flag',
    img: 'it-flag.svg',
    filePath: 'cv-ita.pdf',
  },
]);

const orderedCvs = computed(() =>
  cvs.value.sort((a, b) => {
    const actLang = i18n.global.locale.split('-')[0];
    if (a.id === actLang) return -1;
    if (b.id === actLang) return 1;
    return a.id.localeCompare(b.id);
  })
);
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.resume {
  display: flex;
  flex-direction: column;

  &__title {
    margin: 0 0 50px 0;
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
  margin: 30px 0;
  color: global.$primary--color;
  text-decoration: none;
  border-radius: 50%;
  overflow: hidden;

  &:hover .cv__download,
  &:focus .cv__download {
    opacity: 1;
  }

  &__flag {
    width: 100%;
    height: 100%;
    max-width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &__download {
    position: absolute;
    top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    background-color: global.$hover-element--color;
    opacity: 0;
    margin: 0;
    border-radius: 50%;
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
