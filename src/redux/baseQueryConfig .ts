import { setTokenToHeaders } from './../utils/setTokenToHeaders';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from '../config/config';
export const authorizeWithToken = fetchBaseQuery({
  baseUrl: `${BASE_URL}/auth`,
  prepareHeaders: (headers: Headers) => {
    console.log('headers from base query config', headers);

    return setTokenToHeaders(headers);
  },
});
