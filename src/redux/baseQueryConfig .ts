import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getToken } from '../utils/generate.token';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const baseQueryConfig = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers: Headers) => {
    const token = getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
