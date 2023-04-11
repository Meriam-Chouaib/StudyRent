import { createApi } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { baseQueryConfig } from './../../baseQueryConfig ';
import { decodAddPost, decodePosts } from './decoder';
import { Post, PostResponse, PostResponseData } from './post.types';
export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: baseQueryConfig,
  tagTypes: ['POSTS'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query(params) {
        return {
          // url: `${PATHS.POSTS}`,
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
  }),
});
export const { useGetPostsQuery, useAddPostMutation } = postApi;
