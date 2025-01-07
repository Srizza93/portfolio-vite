import {
  WELCOME_PAGE_NAME,
  HOME_PAGE_NAME,
  PORTFOLIO_PAGE_NAME,
  STACK_PAGE_NAME,
  CONTACTS_PAGE_NAME,
  RESUME_PAGE_NAME,
} from '@/constants/pageNames';
import {
  WELCOME_PATH,
  HOME_PATH,
  PORTFOLIO_PATH,
  STACK_PATH,
  CONTACTS_PATH,
  RESUME_PATH,
} from '@/constants/pageEndpoints';

export const routeOptions = [
  {
    name: WELCOME_PAGE_NAME,
    path: WELCOME_PATH,
  },
  {
    name: HOME_PAGE_NAME,
    path: HOME_PATH,
  },
  {
    name: PORTFOLIO_PAGE_NAME,
    path: PORTFOLIO_PATH,
  },
  {
    name: STACK_PAGE_NAME,
    path: STACK_PATH,
  },
  {
    name: CONTACTS_PAGE_NAME,
    path: CONTACTS_PATH,
  },
  {
    name: RESUME_PAGE_NAME,
    path: RESUME_PATH,
  },
];
