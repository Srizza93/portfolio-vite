<template>
  <div class="portfolio">
    <div class="portfolio-subcontainer">
      <projects :projects="projects" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

import Projects from '@/components/Projects.vue';
import { Project } from '@/types/project';

const projects: Ref<Project[]> = ref([
  {
    name: 'Checkout Tunnel',
    date: ['1', '2024'],
    image: 'leroy-merlin.png',
    description: 'checkout-store',
    stack: [
      'Java 17',
      'SpringBoot',
      'Project Reactor',
      'HTML',
      'CSS',
      'Vue',
      'Vuex',
      'Pinia',
      'Typescript',
      'Vue router',
      'Vite',
      'Vitest',
      'Vue test utils',
      'JUnit',
      'Figma',
      'Jira',
      'Github, Github Actions',
      'Méthodologie Agile Scrum',
    ],
    toggle: false,
  },
  {
    name: 'Stocky',
    date: ['9', '2023'],
    image: 'symbol-it.png',
    description: 'stocky',
    stack: [
      'Java 17',
      'SpringBoot',
      'HTML',
      'CSS',
      'Vue',
      'Typescript',
      'Vue router',
      'Vite',
      'Vitest',
      'Vue test utils',
      'Figma',
      'Jira',
      'JUnit',
      'Fly.io',
      'CockroachDB',
      'PostgresSQL',
      'Github, Github Actions',
      'Méthodologie Agile Scrum',
    ],
    toggle: false,
  },
  {
    name: 'Scpt 360',
    date: ['1', '2023'],
    image: 'leroy-merlin.png',
    description: 'scpt-360',
    stack: [
      'HTML',
      'CSS',
      'Vue',
      'Typescript',
      'Vue router',
      'Vite',
      'Vitest',
      'Vue test utils',
      'Figma',
      'Jira',
      'Github, Github Actions',
      'Méthodologie Agile Scrum',
    ],
    toggle: false,
  },
  {
    name: 'Symbol-IT',
    date: ['9', '2022'],
    image: 'symbol-it.png',
    description: 'symbol-it',
    stack: [
      'HTML',
      'CSS',
      'Vue',
      'Strapi',
      'Vuex',
      'Vue Router',
      'Github',
      'Docker',
      'NuxtJS',
    ],
    toggle: false,
  },
  {
    name: 'Todo App',
    date: ['10', '2022'],
    image: 'todo.png',
    link: 'https://srizza93.github.io/todo-app/',
    description: 'tododescr',
    github: 'https://github.com/Srizza93/todo-app',
    stack: ['HTML', 'CSS', 'SASS', 'JS', 'Vue', 'Nuxt', 'Jest'],
    toggle: false,
  },
  {
    name: 'Weather App',
    date: ['10', '2022'],
    image: 'weather.png',
    link: 'https://srizza93.github.io/weather-app/#/',
    description: 'weatherdescr',
    github: 'https://github.com/Srizza93/weather-app',
    stack: ['HTML', 'CSS', 'SASS', 'JS', 'Vue', 'Vue-router', 'Vite'],
    toggle: false,
  },
  {
    name: 'New Portfolio',
    date: ['6', '2022'],
    image: 'portfolio2.png',
    link: 'https://srizza93.github.io/portfolio-vite/',
    description: 'portfolio2Descr',
    github: 'https://github.com/Srizza93/portfolio-vite',
    stack: ['HTML', 'CSS', 'JS', 'Vue', 'Vue-router', 'Vite', 'i18n'],
    toggle: false,
  },
  {
    name: 'E-commerce 2',
    date: ['4', '2022'],
    image: 'e-commerce-2.png',
    link: 'https://srizza93.github.io/sales/',
    description: 'ecommerce2Descr',
    github: 'https://github.com/Srizza93/sales',
    functionalities: [
      'Products filtering and sort system',
      'Product details page',
      'Cart access and functionality',
      'Purchase process',
      'Personal info validation',
      'Credit card validation',
      'Loading page',
      'Purchase confirmation',
    ],
    stack: ['HTML', 'CSS', 'JS', 'Vue', 'Vuex', 'Vue-router', 'Webpack'],
    toggle: false,
  },
  {
    name: 'Advent Challenges',
    date: ['1', '2022'],
    image: 'advent.png',
    link: 'https://srizza93.github.io/advent-challenges/',
    description: 'adventDescr',
    github: 'https://github.com/Srizza93/advent-challenges',
    stack: ['HTML', 'CSS', 'JS', 'Vue', 'Vue-router'],
    toggle: false,
  },
  {
    name: 'Social Network',
    date: ['10', '2021'],
    image: 'social.png',
    link: 'https://srizza93.github.io/social/',
    description: 'socialDescr',
    github: 'https://github.com/Srizza93/social',
    functionalities: [
      'API data rendering',
      'Navigation bar filtering',
      'Profile page access',
      'Notification system',
      'Posts and comments publication',
      'Chat system',
      'Chat storing',
    ],
    stack: [
      'Webpack',
      'HTML',
      'CSS',
      'JS',
      'Vue',
      'Vuex',
      'Vue Test Utils',
      'Jest',
    ],
    toggle: false,
  },
  {
    name: 'Portfolio',
    date: ['10', '2021'],
    image: 'portfolio.png',
    link: 'https://srizza93.github.io/portfolio/',
    description: 'portfolioDescr',
    github: 'https://github.com/Srizza93/portfolio',
    stack: ['Webpack', 'HTML', 'CSS', 'JS', 'Vue'],
    toggle: false,
  },
  {
    name: 'Movie Streaming',
    date: ['8', '2021'],
    image: 'streaming.png',
    link: 'https://srizza93.github.io/streaming/',
    description: 'moviesDescr',
    github: 'https://github.com/Srizza93/streaming',
    functionalities: [
      'API data rendering',
      'Search bar filtering',
      'Notification system',
      'Sign up page',
      'Trailer watching',
      'Movie details access',
      'Movie player access',
    ],
    stack: [
      'Webpack',
      'HTML',
      'CSS',
      'JS',
      'Vue',
      'Vuex',
      'Vue Test Utils',
      'Jest',
    ],
    toggle: false,
  },
  {
    name: 'E-commerce',
    date: ['6', '2021'],
    image: 'e-commerce.png',
    link: 'https://srizza93.github.io/e-commerce/',
    description: 'ecommerceDescr',
    github: 'https://github.com/Srizza93/e-commerce',
    functionalities: [
      'Navigation bar filtering',
      'Gallery playing',
      'Cart access and functionality',
      'Products filtering and sort system',
      'Product details page',
      'Purchase process',
      'Personal info validation',
      'Credit card validation',
      'Loading page',
      'Purchase confirmation',
    ],
    stack: [
      'Webpack',
      'HTML',
      'CSS',
      'JS',
      'Vue',
      'Vuex',
      'Vue Test Utils',
      'Jest',
    ],
    toggle: false,
  },
  {
    name: 'HTML Email layout',
    date: ['6', '2021'],
    image: 'email-layout.png',
    link: 'https://srizza93.github.io/cv-email-html/',
    description: 'htmlLayoutDescr',
    github: 'https://github.com/Srizza93/cv-email-html',
    stack: ['HTML'],
    toggle: false,
  },
  {
    name: 'Tooltip plugin',
    date: ['5', '2021'],
    image: 'tooltip.png',
    link: 'https://srizza93.github.io/tooltip/',
    description: 'tooltipDescr',
    github: 'https://github.com/Srizza93/tooltip',
    functionalities: [
      'Custom content re-usability',
      'Unlimited size',
      'Respect viewport boundaries',
      'Activation on dynamically loaded content',
      'Possible to select the inner text',
      'Centering',
    ],
    stack: ['HTML', 'CSS', 'JS'],
    toggle: false,
  },
  {
    name: 'Square task',
    date: ['1', '2021'],
    image: 'square-task.png',
    link: 'https://srizza93.github.io/square_task/',
    description: 'squareDescr',
    github: 'https://github.com/Srizza93/square_task',
    functionalities: [
      'Square catching mouse',
      'Square increase its size when it comes closer',
      'Square respects window edges',
      'Speed increase on mouse in the outer square',
      'Speed decrease on mouse out the outer square',
    ],
    stack: ['HTML', 'CSS', 'JS'],
    toggle: false,
  },
]);
</script>

<style lang="scss" scoped>
@use '@/assets/global.scss' as *;

.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
}

.portfolio-subcontainer {
  display: flex;
  flex-direction: column;
  border-left: 3px solid $detail--color;

  &--dot {
    width: 100%;
    height: 5px;
    border-left: 4px solid $detail--color;
    background-color: $detail--color;
    margin: 0px 10px 10px auto;
  }
}
</style>
