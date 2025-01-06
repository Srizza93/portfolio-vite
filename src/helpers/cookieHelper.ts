import Cookies from 'js-cookie';

const expiresInDays = 2;

export const LANGUAGE_COOKIE = 'language';

export function setCookie(key: string, value: string) {
  Cookies.set(key, value, { expires: expiresInDays });
}

export function getCookie(key: string): string | undefined {
  return Cookies.get(key);
}
