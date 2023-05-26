import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATHS } from '../../../config/paths';
import { decodAddPost, decodeEditPost, decodePost, decodePosts } from './decoder';
import {
  Post,
  PostLocalizationResponse,
  PostResponse,
  PostResponseData,
  PostsLocalizations,
  SinglePostEditResponse,
  SinglePostResponseData,
  SinglePostlocalization,
} from './post.types';
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

  tagTypes: ['Post', 'favoritePosts'],
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
      transformResponse: (result: PostResponseData): PostsLocalizations => {
        return decodePosts(result);
      },
    }),

    // ________________________________get min and max price and surface______________________

    getMaximalPostPrice: builder.query({
      query: () => `${PATHS.POSTS}/${PATHS.FILTER.MAXPRICE}`,
    }),
    getMinimalPostPrice: builder.query({
      query: () => `${PATHS.POSTS}/${PATHS.FILTER.MINPRICE}`,
    }),
    getMaximalPostSurface: builder.query({
      query: () => `${PATHS.POSTS}/${PATHS.FILTER.MAXSURFACE}`,
    }),
    getMinimalPostSurface: builder.query({
      query: () => `${PATHS.POSTS}/${PATHS.FILTER.MINSURFACE}`,
    }),

    // ____________________ get posts by owner_______________________
    getPostsByOwner: builder.query({
      query(params) {
        return {
          url: `${PATHS.POSTS}/${PATHS.DASHBOARD.POST.POSTS_BY_OWNER}?page=${params.page}&rowsPerPage=${params.rowsPerPage}&idOwner=${params.idUser}`,
        };
      },
      transformResponse: (result: PostResponseData): PostsLocalizations => {
        return decodePosts(result);
      },
      providesTags: ['Post'],
    }),
    getPost: builder.query({
      query(id) {
        return {
          url: `${PATHS.POSTS}/${id}`,
        };
      },
      transformResponse: (result: SinglePostEditResponse): SinglePostlocalization => {
        return decodePost(result);
      },
    }),
    addPost: builder.mutation<PostResponse, FormData>({
      query: (PostRequest) => ({
        url: PATHS.DASHBOARD.POST.ADD,
        method: 'POST',
        body: PostRequest,
      }),
      invalidatesTags: ['Post'],

      transformResponse: (response: PostResponse) => decodAddPost(response),
      //  providesTags: (result, error, variables) => ['Post'], // Specify the tag(s) to provide
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `${PATHS.POSTS}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
    editPost: builder.mutation<PostResponse, { id: number; post: FormData }>({
      query: ({ id, post }) => ({
        url: `${PATHS.DASHBOARD.POST.LIST}/${id}`,
        method: 'PATCH',
        body: post,
      }),
      invalidatesTags: ['Post'],
      transformResponse: (response: SinglePostEditResponse) => decodeEditPost(response),
    }),
    deleteFiles: builder.mutation<void, number>({
      query: (idPost: number) => ({
        url: `${PATHS.DASHBOARD.POST.LIST}/${PATHS.DASHBOARD.POST.FILES}/${idPost}`,
        method: 'DELETE',
      }),
    }),
    getFavoriteList: builder.query<
      PostsLocalizations,
      { page: number; rowsPerPage: number; id: number }
    >({
      query: ({ page, rowsPerPage, id }) => {
        return `${PATHS.DASHBOARD.POST.FAVORIS}${id}/?page=${page}&rowsPerPage=${rowsPerPage}`;
      },
      transformResponse: (result: PostResponseData): PostsLocalizations => {
        return decodePosts(result);
      },
      providesTags: ['favoritePosts'],
    }),
    addPostToFavoriteList: builder.mutation<PostResponse, { userId: number; postId: number }>({
      query: ({ userId, postId }) => ({
        url: `${PATHS.DASHBOARD.POST.FAVORIS}${userId}/${postId}`,
        method: 'POST',
      }),
      invalidatesTags: ['favoritePosts'],
      transformResponse: (response: PostResponse) => decodAddPost(response),
    }),
    deletePostFromFavorite: builder.mutation<void, { userId: number; postId: number }>({
      query: ({ userId, postId }) => ({
        url: `${PATHS.DASHBOARD.POST.FAVORIS}${userId}/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['favoritePosts'],
    }),
  }),
});
export const {
  useGetPostsQuery,
  useGetMaximalPostPriceQuery,
  useGetMaximalPostSurfaceQuery,
  useGetMinimalPostPriceQuery,
  useGetMinimalPostSurfaceQuery,
  useAddPostMutation,
  useGetPostsByOwnerQuery,
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostQuery,
  useDeleteFilesMutation,
  useGetFavoriteListQuery,
  useAddPostToFavoriteListMutation,
  useDeletePostFromFavoriteMutation,
} = postApi;
