import { getToken } from './generate.token';
import { getPersistData } from './localstorage/localStorage.utils';

export const setTokenToHeaders = (headers: Headers) => {
  const token = getToken();

  if (token) {
    const decoded = getPersistData('token', false);
    headers.set('Authorization', `Bearer ${decoded}`);
  }

  return headers;
};
