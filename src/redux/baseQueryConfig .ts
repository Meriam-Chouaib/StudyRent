import { RootState } from './store';
import {} from './api/features/userSlice';

import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const baseQueryConfig = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).userState.token || localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});
