import { baseQueryConfig } from './../../baseQueryConfig ';
import { createApi } from '@reduxjs/toolkit/query/react';
import { Post, params, Result } from './post.types';
import { PATHS } from '../../../config/paths';
import { Filter } from '../../../features/home/posts/Posts.types';
import { decodPosts } from './decoder';
export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: baseQueryConfig,
  tagTypes: ['Post'],
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
  }),
});
export const { useGetPostsQuery } = postApi;
