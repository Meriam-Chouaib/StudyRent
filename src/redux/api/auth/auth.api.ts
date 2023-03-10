import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { IUser } from '../types/IUser';
import { ILoginRequest, LoginResponse, IRegisterRequest, RegisterResponse } from './auth.api.types';

export interface userState {
  user: IUser | null;
}

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
    login: builder.mutation<LoginResponse, ILoginRequest>({
      query: (body) => ({
        url: PATHS.AUTH.SINGNIN,
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<RegisterResponse, IRegisterRequest>({
      query(LoginRequest) {
        console.log(LoginRequest);
        return {
          url: PATHS.AUTH.SINGNIN,
          method: 'POST',
          body: LoginRequest,
          credentials: 'include',
        };
      },
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
export default authApi;
