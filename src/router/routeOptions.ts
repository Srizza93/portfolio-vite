import {
  WELCOME_PAGE_NAME,
  HOME_PAGE_NAME,
  PORTFOLIO_PAGE_NAME,
  STACK_PAGE_NAME,
  CONTACTS_PAGE_NAME,
  RESUME_PAGE_NAME,
} from '@/constants/pageNames';
import {
  PORTFOLIO_APP_PATH,
  WELCOME_PATH,
  HOME_PATH,
  PORTFOLIO_PATH,
  STACK_PATH,
  CONTACTS_PATH,
  RESUME_PATH,
} from '@/constants/pageEndpoints';

import PortfolioApp from '@/pages/PortfolioApp.vue';

export const routeOptions = [
  {
    path: PORTFOLIO_APP_PATH,
    component: PortfolioApp,
    alias: [PORTFOLIO_APP_PATH, '/'],
    children: [
      {
        path: '',
        name: 'portfolio-default',
        redirect: { name: WELCOME_PAGE_NAME },
        meta: { documentTitle: WELCOME_PAGE_NAME },
      },
      {
        name: WELCOME_PAGE_NAME,
        path: WELCOME_PATH,
        meta: { documentTitle: WELCOME_PAGE_NAME },
      },
      {
        name: HOME_PAGE_NAME,
        path: HOME_PATH,
        meta: { documentTitle: HOME_PAGE_NAME },
      },
      {
        name: PORTFOLIO_PAGE_NAME,
        path: PORTFOLIO_PATH,
        meta: { documentTitle: PORTFOLIO_PAGE_NAME },
      },
      {
        name: STACK_PAGE_NAME,
        path: STACK_PATH,
        meta: { documentTitle: STACK_PAGE_NAME },
      },
      {
        name: CONTACTS_PAGE_NAME,
        path: CONTACTS_PATH,
        meta: { documentTitle: CONTACTS_PAGE_NAME },
      },
      {
        name: RESUME_PAGE_NAME,
        path: RESUME_PATH,
        meta: { documentTitle: RESUME_PAGE_NAME },
      },
    ],
  },
  {
    name: WELCOME_PAGE_NAME,
    path: '/:pathMatch(.*)*',
    meta: { documentTitle: WELCOME_PAGE_NAME },
  },
];
