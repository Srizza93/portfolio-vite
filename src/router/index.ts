import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from 'vue-router';
import { routeOptions } from '@/router/routeOptions';
import { Component } from 'vue';
import i18n from '@/i18n';

function loadComponent(component?: Component | null, view?: string) {
  if (!!component) {
    return component;
  }
  return () => import(`../pages/${view}.vue`);
}

const routes = routeOptions.map((route) => ({
  ...route,
  component: loadComponent(route.component, route.name),
  children: route.children
    ? (route.children.map((child) => ({
        ...child,
        component: loadComponent(null, child.name),
      })) as RouteRecordRaw[])
    : [],
}));

const router = createRouter({
  history: createWebHistory('/portfolio-vite/'),
  routes,
  scrollBehavior(_to, _from) {
    return { top: 0, behavior: 'smooth' };
  },
});

router.beforeEach((to, _from, next) => {
  const title = to.meta?.documentTitle;
  document.title = title
    ? i18n.global.t('navigation.' + title.toString().toLowerCase())
    : i18n.global.t('global.app-name--label');
  next();
});

export default router;
