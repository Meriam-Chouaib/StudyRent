import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getToken } from '../utils/generate.token';
import { BASE_URL } from '../config/config';
export const authorizeWithToken = fetchBaseQuery({
  baseUrl: `${BASE_URL}/auth`,
  // authorizeWithToken

  prepareHeaders: (headers: Headers) => {
    const token = getToken();
    console.log('888888888888', token);

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
export const baseQueryConfig = fetchBaseQuery({
  baseUrl: `${BASE_URL}`,
});
