import { createWebHistory, createRouter } from "vue-router";

const routeOptions = [
  {
    path: "/",
    name: "Welcome",
  },
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/portfolio",
    name: "Portfolio",
  },
  {
    path: "/techs",
    name: "Techs",
  },
  {
    path: "/contacts",
    name: "Contacts",
  },
  {
    path: "/resume",
    name: "Resume",
  },
];

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../pages/${route.name}.vue`),
  };
});

const router = createRouter({
  history: createWebHistory("/portfolio-vite/"),
  base: "/portfolio-vite/",
  routes,
});

export default router;
