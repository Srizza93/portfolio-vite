import { createWebHashHistory, createRouter } from 'vue-router';
import { routeOptions } from './routeOptions';
import { WELCOME_PAGE_NAME } from '../constants/pageNames';

routeOptions.push({
  path: '/:pathMatch(.*)*',
  name: WELCOME_PAGE_NAME,
});

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../pages/${route.name}.vue`),
  };
});

const router = createRouter({
  history: createWebHashHistory('/portfolio-vite/'),
  base: '/portfolio-vite/',
  routes,
});

export default router;
