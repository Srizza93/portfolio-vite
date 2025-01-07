import { createWebHashHistory, createRouter } from 'vue-router';
import { routeOptions } from '@/router/routeOptions';
import { Component } from 'vue';

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
    ? route.children.map((child) => ({
        ...child,
        component: loadComponent(null, child.name),
      }))
    : [],
}));

const router = createRouter({
  history: createWebHashHistory('/portfolio-vite/'),
  routes,
});

export default router;
