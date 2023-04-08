import { baseQueryConfig } from './../../baseQueryConfig ';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Post, params, Result, IPostRequest, PostResponse } from './post.types';
import { PATHS } from '../../../config/paths';
import { Filter } from '../../../features/home/posts/Posts.types';
import { decodAddPost, decodPosts } from './decoder';
export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: baseQueryConfig,
  tagTypes: ['POSTS'],
  endpoints: (builder) => ({
    getPosts: builder.query<
      Post[],
      { page: number; rowsPerPage: number; filter: Filter | undefined }
    >({
      query(params) {
        return {
          // url: `${PATHS.POSTS}`,
          url: `${PATHS.POSTS}?page=${params.page}&rowsPerPage=${params.rowsPerPage}`,
        };
      },
      transformResponse: (result: Result) => {
        console.log(result);
        return decodPosts(result);
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
  }),
});
export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postApi;
