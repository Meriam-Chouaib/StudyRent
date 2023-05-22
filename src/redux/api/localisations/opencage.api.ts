import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setTokenToHeaders } from '../../../utils/setTokenToHeaders';
import { BASE_URL } from '../../../config/config';

const API_KEY = '797cce99946243e887bf61f0b59f26cc';

const opencageApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
    prepareHeaders(headers) {
      setTokenToHeaders(headers);
    },
  }),
  tagTypes: ['LOCALIZATIONS'],

  endpoints: (builder) => ({
    geocode: builder.query({
      query: (address) => `geocode/v1/json?q=${encodeURIComponent(address)}&key=${API_KEY}`,
    }),
  }),
});

export const { useGeocodeQuery } = opencageApi;
export default opencageApi;
