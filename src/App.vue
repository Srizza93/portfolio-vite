<template>
  <div class="app-sub">
    <navigation-bar v-if="!isWelcomePage" />
    <router-view class="router-view" v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <template v-if="!isWelcomePage">
      <img
        class="act-lang flag"
        :src="selectedLanguage?.img"
        alt="flag"
        @click="openLanguageModal"
      />
      <div class="langs" v-bind:class="{ 'langs-open': isLanguageModalOpen }">
        <img
          v-for="lang in languages"
          class="langs_flag flag"
          :key="'lang-' + lang.name"
          :src="lang.img"
          alt="flag"
          @click="selectLanguage(lang.name)"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import NavigationBar from './components/NavigationBar.vue';

import { selectLanguage, initLanguage } from './services/languageService';
import { useLanguageStore } from './store/language';
import { languages, selectedLanguage } from './composables/languageComposable';
import { usePortfolioRouter } from './composables/routerComposable';

const languageStore = useLanguageStore();
const { openLanguageModal } = languageStore;
const { isLanguageModalOpen } = storeToRefs(languageStore);
const { isWelcomePage } = usePortfolioRouter();

onMounted(() => initLanguage());
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.app-sub {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.helloworld {
  background-color: red;
}

.router-view {
  width: 100%;
  max-width: 750px;
  padding: 100px 60px;
}

.act-lang {
  position: fixed;
  bottom: 0;
  right: 0;
}

.act-lang:hover {
  opacity: 0.7;
}

.langs {
  position: fixed;
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: calc(50% - 150px);
  width: 300px;
  height: 130px;
  padding: 30px;
  border-radius: 15px;
  background-color: #3498db;
  z-index: 99999;
}

.langs-open {
  display: flex;
}

.flag {
  width: 50px;
  height: auto;
  cursor: pointer;
}

.langs_flag {
  margin: 0 10px;
  transition-duration: 1s;
}

.langs_flag:hover {
  margin-bottom: 15px;
}

@media screen and (max-width: 500px) {
  .router-view {
    padding: 100px 10px;
  }
}

body {
  margin: 0;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003;
}
</style>
