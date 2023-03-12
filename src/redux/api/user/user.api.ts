import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from '../features/userSlice';
import { IUser } from './user.types';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, null>({
      query() {
        // return an object representing the request to be made to the server.
        return {
          url: 'user',
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { user: IUser } }) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
