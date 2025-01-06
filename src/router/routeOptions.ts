import {
  WELCOME_PAGE_NAME,
  HOME_PAGE_NAME,
  PORTFOLIO_PAGE_NAME,
  TECHS_PAGE_NAME,
  CONTACTS_PAGE_NAME,
  RESUME_PAGE_NAME,
} from '@/constants/pageNames';
import {
  WELCOME_PATH,
  HOME_PATH,
  PORTFOLIO_PATH,
  TECHS_PATH,
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
    name: TECHS_PAGE_NAME,
    path: TECHS_PATH,
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
