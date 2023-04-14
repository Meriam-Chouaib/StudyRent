import { getToken } from './generate.token';

export const setTokenToHeaders = (headers: Headers) => {
  const token = getToken();
  console.log('888888888888', token);

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  console.log('headers after setting oken ', headers);

  return headers;
};
