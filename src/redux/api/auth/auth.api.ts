import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { IUser } from '../user/user.types';
import { ILoginRequest, LoginResponse } from './auth.api.types';

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
// authApi contains all the endpoints we want to use in the authentication
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  // the mutation using for update,add and delete
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, ILoginRequest>({
      // query : defines the request object that will be sent to the backend server when the endpoint is called
      query: (body) => ({
        url: PATHS.AUTH.SINGNIN,
        method: 'POST',
        body,
      }),
    }),
  }),
});
// This hook returns an object with properties such as isLoading, isError, data, and error
export const { useLoginMutation } = authApi;
export default authApi;
