import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authorizeWithToken } from '../../baseQueryConfig ';
import { IUser, ResponseUsers } from './user.types';
import { PATHS } from '../../../config/paths';
import { decodEditUser, decodGetUsers, decodUserById, decodePosts } from '../post/decoder';
import { DataUser, UserByIdResponse, UserResponse, UsersResponse } from '../auth/auth.api.types';
import { BASE_URL } from '../../../config/config';
import { setTokenToHeaders } from '../../../utils/setTokenToHeaders';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
    prepareHeaders(headers) {
      setTokenToHeaders(headers);
    },
  }),
  tagTypes: ['USERS'],

  // ______________________________________________________________ *** Get user ***___________________________________________________________

  endpoints: (builder) => ({
    // ______________________________________________________________ *** Get all users ***___________________________________________________________

    getUsers: builder.query({
      query(params) {
        console.log(params);
        let url = `${PATHS.USERS}?page=${params.page}&rowsPerPage=${params.rowsPerPage}&role=${params.role}`;

        if (params.search) {
          url = `${PATHS.POSTS}?page=${Number(params.page)}&rowsPerPage=${
            params.rowsPerPage
          }&search=${params.search}`;
          console.log(params);
        }

        return {
          url,
        };
      },
      transformResponse: (result: ResponseUsers): ResponseUsers => {
        return decodGetUsers(result);
      },
      providesTags: ['USERS'],
    }),

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

    // ______________________________________________________________ *** Edit user ***___________________________________________________________

    updateUser: builder.mutation<UserResponse, { id: number; user: IUser }>({
      query: ({ id, user }) => ({
        url: `${PATHS.DASHBOARD.USERS}/${id}`,
        method: 'PATCH',
        body: user,
      }),
      transformResponse: (response: UserResponse) => decodEditUser(response),
      invalidatesTags: ['USERS'],
    }),

    // ______________________________________________________________ *** Get user by id***___________________________________________________________

    getUserById: builder.query<DataUser, { id: number }>({
      query: ({ id }) => ({
        url: `${PATHS.DASHBOARD.USERS}/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: DataUser) => decodUserById(response),
    }),

    // ______________________________________________________________ *** Delete user ***___________________________________________________________

    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `${PATHS.USERS}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['USERS'],
    }),
  }),
});
export const {
  useUpdateUserMutation,
  useGetMeQuery,
  useGetUserByIdQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
} = userApi;
