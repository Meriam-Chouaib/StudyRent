import { createApi } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { authorizeWithToken, baseQueryConfig } from './../../baseQueryConfig ';
import { decodAddPost, decodePosts } from './decoder';
import { Post, PostResponse, PostResponseData } from './post.types';
export const postApi = createApi({
  reducerPath: 'posts',
  // baseQuery: authorizeWithToken,
  baseQuery: baseQueryConfig,
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
    editPost: builder.mutation<PostResponse, { id: string; post: Post }>({
      query: ({ id, post }) => ({
        url: `${PATHS.DASHBOARD.POST.EDIT}/${id}`,
        method: 'PATCH',
        body: post,
      }),
      invalidatesTags: ['POSTS'],
      transformResponse: (response: PostResponse) => decodAddPost(response),
    }),
  }),
});
export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation, useEditPostMutation } =
  postApi;
