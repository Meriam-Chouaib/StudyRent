import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { authorizeWithToken, baseQueryConfig } from './../../baseQueryConfig ';

import { decodAddPost, decodeEditPost, decodePost, decodePosts } from './decoder';
import { Post, PostResponse, PostResponseData, SinglePostResponseData } from './post.types';
import { BASE_URL } from '../../../config/config';
import { setTokenToHeaders } from '../../../utils/setTokenToHeaders';

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
    prepareHeaders(headers) {
      setTokenToHeaders(headers);
      console.log('heaaaaaderrsss', headers.get('Authorization'));
    },
  }),

  tagTypes: ['POSTS'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query(params) {
        return {
          url: `${PATHS.POSTS}?page=${params.page}&rowsPerPage=${params.rowsPerPage}`,
        };
      },
      transformResponse: (result: PostResponseData): Post[] => {
        return decodePosts(result);
      },
    }),
    getPost: builder.query({
      query(id) {
        return {
          url: `${PATHS.POSTS}/${id}`,
        };
      },
      transformResponse: (result: SinglePostResponseData): Post => {
        return decodePost(result);
      },
    }),
    addPost: builder.mutation<PostResponse, FormData>({
      query: (PostRequest) => ({
        url: PATHS.DASHBOARD.POST.ADD,
        method: 'POST',
        body: PostRequest,
      }),
      invalidatesTags: ['POSTS'],
      transformResponse: (response: PostResponse) => decodAddPost(response),
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `${PATHS.POSTS}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['POSTS'],
    }),
    editPost: builder.mutation<PostResponse, { id: number; post: FormData }>({
      query: ({ id, post }) => ({
        url: `${PATHS.DASHBOARD.POST.LIST}/${id}`,
        method: 'PATCH',
        body: post,
      }),
      invalidatesTags: ['POSTS'],
      transformResponse: (response: SinglePostResponseData) => decodeEditPost(response),
    }),
  }),
});
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostQuery,
} = postApi;
