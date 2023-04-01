import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getToken } from '../utils/generate.token';

export const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const baseQueryConfigAuth = fetchBaseQuery({
  baseUrl: `${BASE_URL}/auth`,

  prepareHeaders: (headers: Headers) => {
    const token = getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
export const baseQueryConfig = fetchBaseQuery({
  baseUrl: `${BASE_URL}`,
});
