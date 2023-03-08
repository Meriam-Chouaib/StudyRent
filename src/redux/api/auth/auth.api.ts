import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth.types';

const apiUrl = 'http://localhost:8000/api/auth';

const getToken = () => {
  const token = 'YOUR_AUTH_TOKEN';
  return token ? `Bearer ${token}` : '';
};

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  prepareHeaders: (headers) => {
    headers.set('Authorization', getToken());
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: PATHS.AUTH.SINGNIN,
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: PATHS.AUTH.SIGNUP,
        method: 'POST',
        body,
      }),
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
export default authApi;