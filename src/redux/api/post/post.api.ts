import { baseQueryConfig } from './../../baseQueryConfig ';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Post, params, Result, IPostRequest } from './post.types';
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
    addPost: builder.mutation<Post, IPostRequest>({
      query: (PostRequest) => ({
        url: PATHS.DASHBOARD.POST.ADD,
        method: 'POST',
        body: PostRequest,
      }),
      invalidatesTags: ['POSTS'],
      transformResponse: (response: Post) => decodAddPost(response),
    }),
  }),
});
export const { useGetPostsQuery } = postApi;
