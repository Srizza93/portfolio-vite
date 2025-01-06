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
        src="../assets/pencil.jpg"
      />
    </div>
    <router-link to="/portfolio">
      <folio-button>
        {{ $t('home.button') }}
      </folio-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import FolioButton from '../components/FolioButton.vue';
</script>

<style lang="scss" scoped>
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
    border-radius: 50%;
    object-fit: cover;
    width: 50%;
    margin-bottom: 50px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    padding-right: 50px;
    color: #0f52ba;
    width: 50%;
    margin-bottom: 50px;

    &-first-line {
      margin-bottom: 30px;
    }

    &-name {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.5;
    }

    &-parag {
      color: #000033;
      font-size: 18px;
      white-space: pre-wrap;
      line-height: 1.6;
    }
  }
}

@media screen and (max-width: 400px) {
  .description {
    &__name {
      font-size: 35px;
    }
  }
}
</style>
