import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { WELCOME_PAGE_NAME } from '@/constants/pageNames';

export function usePortfolioRouter() {
  const route = useRoute();

  const isWelcomePage = computed(
    () => route && route.name === WELCOME_PAGE_NAME
  );

  return {
    isWelcomePage,
  };
}
