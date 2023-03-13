import { createApi } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { baseQueryConfig } from '../../baseQueryConfig ';
import { ILoginRequest, IRegisterRequest, LoginResponse, RegisterResponse } from './auth.api.types';
import { decodeLoginResponse, decodeRegisterResponse } from './decoders';

export const getToken = () => {
  const token = 'YOUR_AUTH_TOKEN';
  return token ? `Bearer ${token}` : '';
};

// authApi contains all the endpoints we want to use in the authentication
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryConfig,
  // the mutation using for update,add and delete
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, ILoginRequest>({
      // query : defines the request object that will be sent to the backend server when the endpoint is called
      query: (body) => ({
        url: PATHS.AUTH.SINGNIN,
        method: 'POST',
        body,
      }),
      transformResponse: (response: LoginResponse) => decodeLoginResponse(response),
    }),
    register: builder.mutation<RegisterResponse, IRegisterRequest>({
      query: (body) => ({
        url: PATHS.AUTH.SIGNUP,
        method: 'POST',
        body,
        credentials: 'include',
      }),
      transformResponse: (response: RegisterResponse) => decodeRegisterResponse(response),
    }),
  }),
});
// This hook returns an object with properties such as isLoading, isError, data, and error
export const { useLoginMutation, useRegisterMutation } = authApi;
export default authApi;
