import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
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
    },
  }),

  tagTypes: ['POSTS'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query(params) {
        let url = `${PATHS.POSTS}?page=${params.page}&rowsPerPage=${params.rowsPerPage}`;
        if (params.filter !== '')
          url = `${PATHS.POSTS}?page=${params.paginator.page}&rowsPerPage=${params.paginator.rowsPerPage}&filter=${params.filter}`;
        return {
          url,
        };
      },
      transformResponse: (result: PostResponseData): Post[] => {
        return decodePosts(result);
      },
    }),
    getPostsByOwner: builder.query({
      query(params) {
        return {
          url: `${PATHS.POSTS}/${PATHS.DASHBOARD.POST.POSTS_BY_OWNER}?page=${params.page}&rowsPerPage=${params.rowsPerPage}&idOwner=${params.idUser}`,
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
    deleteFiles: builder.mutation<void, number>({
      query: (idPost: number) => ({
        url: `${PATHS.DASHBOARD.POST.LIST}/${PATHS.DASHBOARD.POST.FILES}/${idPost}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostsByOwnerQuery,
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostQuery,
  useDeleteFilesMutation,
} = postApi;
