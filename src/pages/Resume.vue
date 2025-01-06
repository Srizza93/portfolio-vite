<template>
  <div class="resume">
    <h2 class="resume__title">{{ $t('resume.header') }}</h2>
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

import i18n from '../i18n';
import { getFilePath } from '../services/fileService';

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
    img: 'fr-flag.jpg',
    filePath: 'cv-fr.pdf',
  },
  {
    id: 'en',
    name: 'cv-eng',
    alt: 'uk-flag',
    img: 'uk-flag.jpg',
    filePath: 'cv-eng.pdf',
  },
  {
    id: 'it',
    name: 'cv-ita',
    alt: 'ita-flag',
    img: 'ita-flag.jpg',
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
.resume {
  display: flex;
  flex-direction: column;

  &__title {
    margin: 0 0 50px 0;
    font-size: 21px;
    font-weight: bold;
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
  margin: 30px 0;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  border-radius: 15px;

  &:hover .cv__download {
    opacity: 1;
  }

  &__flag {
    width: 250px;
    height: 160px;
    border-radius: 15px;
  }

  &__download {
    position: absolute;
    top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    margin: 0;
    border-radius: 15px;
    transition-duration: 1s;
  }
}

@media screen and (max-width: 380px) {
  .cv__flag {
    width: 150px;
    height: 95px;
  }
}
</style>
