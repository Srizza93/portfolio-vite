<template>
  <ul class="stack">
    <li class="tech" v-for="tech in stack" :key="tech.name">
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
import { ref, type Ref } from 'vue';

import { getFilePath } from '@/services/fileService';

type Tech = {
  name: string;
  logo: string;
  link: string;
};

const stack: Ref<Tech[]> = ref([
  {
    name: 'Java',
    logo: 'java.png',
    link: 'https://www.java.com',
  },
  {
    name: 'SpringBoot',
    logo: 'spring-boot.png',
    link: 'https://spring.io/',
  },
  {
    name: 'Vue.js',
    logo: 'vuejs.png',
    link: 'https://vuejs.org/',
  },
  {
    name: 'TypeScript',
    logo: 'typescript.png',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Javascript',
    logo: 'js.png',
    link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
  },
  {
    name: 'Apache Kafka',
    logo: 'apache-kafka.png',
    link: 'https://kafka.apache.org/',
  },
  {
    name: 'HTML',
    logo: 'html.png',
    link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
  },
  {
    name: 'CSS',
    logo: 'css.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=en',
  },
  {
    name: 'Vuex',
    logo: 'vuejs.png',
    link: 'https://vuex.vuejs.org/',
  },
  {
    name: 'Vue test utils',
    logo: 'vuejs.png',
    link: 'https://v1.test-utils.vuejs.org/',
  },
  {
    name: 'Vue router',
    logo: 'vuejs.png',
    link: 'https://router.vuejs.org/',
  },
  {
    name: 'I18n',
    logo: 'i18n.png',
    link: 'https://www.i18next.com/',
  },
  {
    name: 'Webpack',
    logo: 'webpack.png',
    link: 'https://webpack.js.org/',
  },
  {
    name: 'Vite',
    logo: 'vite.png',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Jest',
    logo: 'jest.png',
    link: 'https://jestjs.io/',
  },
  {
    name: 'Git',
    logo: 'git.png',
    link: 'https://git-scm.com/',
  },
  {
    name: 'Github',
    logo: 'github.png',
    link: 'https://github.com/',
  },
]);
</script>

<style lang="scss" scoped>
.stack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin: 0;
  padding: 0;
}

.tech {
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
}

.tech-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 170px;
  height: 40px;
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
    margin-right: 30px;
  }

  &__text {
    white-space: nowrap;
  }
}

@keyframes text-grow {
  0% {
    color: #003;
  }
  100% {
    font-size: 18px;
    color: #0474b3;
  }
}

@keyframes icon-grow {
  0% {
    width: 40px;
    height: 40px;
    margin-left: 0;
  }
  100% {
    width: 60px;
    height: 60px;
    margin-left: -10px;
  }
}
</style>
