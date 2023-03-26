import { createApi } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { baseQueryConfig } from '../../baseQueryConfig ';
import { ILoginRequest, IRegisterRequest, LoginResponse, RegisterResponse } from './auth.api.types';
import { decodeLoginResponse, decodeRegisterResponse } from './decoders';

// authApi contains all the endpoints we want to use in the authentication
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryConfig,
  tagTypes: ['AUTH'],
  // the mutation using for update,add and delete
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, ILoginRequest>({
      // query : defines the request object that will be sent to the backend server when the endpoint is called
      query: (LoginRequest) => ({
        url: PATHS.AUTH.SINGNIN,
        method: 'POST',
        body: LoginRequest,
      }),
      transformResponse: (response: LoginResponse) => decodeLoginResponse(response),
    }),
    register: builder.mutation<RegisterResponse, IRegisterRequest>({
      query: (RegisterRequest) => ({
        url: PATHS.AUTH.SIGNUP,
        method: 'POST',
        body: RegisterRequest,
      }),
      invalidatesTags: ['AUTH'],
      transformResponse: (response: RegisterResponse) => decodeRegisterResponse(response),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: PATHS.AUTH.LOGOUT,
        method: 'POST',
      }),
    }),
  }),
});
// This hook returns an object with properties such as isLoading, isError, data, and error
export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
export default authApi;
