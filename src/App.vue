<template>
  <div class="app-sub">
    <navigation-bar v-if="isNotWelcomePage" />
    <router-view class="router-view" v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <img
      class="act-lang flag"
      :src="getImageUrl(actLang.img)"
      alt="flag"
      @click="toggleLangs"
    />
    <div
      v-if="isNotWelcomePage"
      class="langs"
      v-bind:class="{ 'langs-open': langsOpen }"
    >
      <img
        class="langs_flag flag"
        v-for="lang in langs"
        :key="'lang-' + lang.key"
        :src="getImageUrl(lang.img)"
        alt="flag"
        @click="selectLang($event, lang.name)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import i18n from './i18n';
import { useRoute } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';
import { computed } from 'vue';

const route = useRoute();
const langsOpen = ref(false);
const actLang = ref({
  id: 1,
  name: 'en-EN',
  img: 'uk-flag.png',
});
const langs = ref([
  {
    id: 1,
    name: 'en-EN',
    img: 'uk-flag.png',
  },
  {
    id: 2,
    name: 'fr-FR',
    img: 'fr-flag.png',
  },
  {
    id: 3,
    name: 'it-IT',
    img: 'ita-flag.png',
  },
]);

const getImageUrl = (pic: string) => {
  return new URL(`./assets/${pic}`, import.meta.url).href;
};

const toggleLangs = () => {
  langsOpen.value = !langsOpen.value;
};

const selectLang = (event: Event, lang: string) => {
  i18n.global.locale = lang;
  actLang.value = langs.value.find((option) => option.name === lang);
  toggleLangs();
};

const isNotWelcomePage = computed(() => route.name !== 'Welcome');
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
