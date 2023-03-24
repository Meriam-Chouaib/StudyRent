import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryConfig } from '../../baseQueryConfig ';
import { IUser } from './user.types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryConfig,
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
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
