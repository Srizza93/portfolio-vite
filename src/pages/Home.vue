<template>
  <div class="home">
    <div class="home__content">
      <div class="home__description">
        <span class="home__description-first-line">{{
          $t('home.greatings')
        }}</span>
        <span class="home__description-name">Simone Rizza</span>
        <span>{{ $t('home.position') }}</span>
        <p class="home__description-parag">
          {{ $t('home.pitch') }}
        </p>
      </div>
      <img
        class="home__content-image"
        alt="A pencil illustration"
        src="@/assets/pencil.jpg"
      />
    </div>
    <folio-button @folio-button-click="accessPortfolio">
      {{ $t('home.button') }}
    </folio-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

import FolioButton from '@/components/FolioButton.vue';

import { PORTFOLIO_PATH } from '@/constants/pageEndpoints';

const router = useRouter();

function accessPortfolio() {
  router.push(PORTFOLIO_PATH);
}
</script>

<style lang="scss" scoped>
@use '@/assets/global';

.home {
  display: flex;
  flex-direction: column;
  text-align: left;

  &__content {
    display: flex;
    flex-direction: row;
  }

  &__content-image {
    max-width: 315px;
    border-radius: global.$border-radius--round;
    object-fit: cover;
    margin-bottom: 50px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    padding-right: global.$spacing--large;
    color: global.$secondary-dark--color;
    width: 70%;
    margin-bottom: global.$spacing--large;
    line-height: global.$line-height--small;

    &-first-line {
      margin-bottom: global.$spacing--medium;
    }

    &-name {
      font-size: global.$font-size--xlarge;
      font-weight: bold;
    }

    &-parag {
      color: global.$standard-text--color;
      white-space: pre-wrap;
    }
  }
}

@media screen and (max-width: 800px) {
  .home {
    align-items: center;

    &__content {
      flex-direction: column;
      align-items: center;
    }

    &__description {
      width: 100%;
      padding-right: 0;
    }
  }
}
</style>
