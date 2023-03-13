import { getToken } from './api/auth/auth.api';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from './store';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const baseQueryConfig = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).authApi.queries.getToken;

    if (token) {
      headers.set('authorization', `Bearer ${API_TOKEN}`);
    }
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});
