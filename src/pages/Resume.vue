<template>
  <div class="resume">
    <span class="header">{{ $t('resume.header') }}</span>
    <div class="cvs">
      <a
        v-for="cv in cvs"
        :key="cv.name"
        :href="getFilePath(cv.filePath)"
        :download="cv.name"
        class="cv"
      >
        <img class="cv__flag" :src="getFilePath(cv.img)" :alt="cv.alt" />
        <div class="cv__download">
          <span>{{ $t('resume.download') }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

import { getFilePath } from '../services/fileService';

type Cv = {
  name: string;
  alt: string;
  img: string;
  filePath: string;
};

const cvs: Ref<Cv[]> = ref([
  {
    name: 'cv-fr',
    alt: 'french-flag',
    img: 'fr-flag.jpg',
    filePath: 'cv-fr.pdf',
  },
  {
    name: 'cv-eng',
    alt: 'uk-flag',
    img: 'uk-flag.jpg',
    filePath: 'cv-eng.pdf',
  },
  {
    name: 'cv-ita',
    alt: 'ita-flag',
    img: 'ita-flag.jpg',
    filePath: 'cv-ita.pdf',
  },
]);
</script>

<style lang="scss" scoped>
.resume {
  display: flex;
  flex-direction: column;
}

.header {
  margin-bottom: 50px;
  font-size: 21px;
  font-weight: bold;
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
    border-radius: 15px;
    transition-duration: 1s;
  }
}

@media screen and (max-width: 380px) {
  .header {
    font-size: 35px;
  }
  .cv__flag {
    width: 150px;
    height: 95px;
  }
}
</style>
