import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post, PostState } from '../post/post.types';
import { postApi } from '../post/post.api';
import { getPersistData } from '../../../utils';
import { getToken } from '../../../utils/generate.token';
const initialState: PostState = {
  post: null,
  isLoading: false,
  error: null,
  isSuccess: false,
};
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload;

      state.post.posterId = getPersistData('user', true).id;
      state.isLoading = false;
      state.error = null;
    },
    deletePost: (state) => {
      state.isLoading = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // -------------- Add post ---------------------

      .addMatcher(postApi.endpoints.addPost.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { post, message, status } = response;
        state.isSuccess = true;

        state.post = post;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.addPost.matchPending, (state) => {
        state.post = null;
        state.isLoading = true;

        state.error = null;
      })
      .addMatcher(postApi.endpoints.addPost.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
        state.isSuccess = false;
      })

      // -------------- Delete post ---------------------

      .addMatcher(postApi.endpoints.deletePost.matchFulfilled, (state) => {
        state.post = null;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.deletePost.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.deletePost.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })

      // -------------- Edit post ---------------------

      .addMatcher(postApi.endpoints.editPost.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { post, message, status } = response;
        state.post = post;
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
      })
      .addMatcher(postApi.endpoints.editPost.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.editPost.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addMatcher(postApi.endpoints.addPostToFavoriteList.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.addPostToFavoriteList.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { post, message, status } = response;
        state.post = post;
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
      })
      .addMatcher(postApi.endpoints.addPostToFavoriteList.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
      .addMatcher(postApi.endpoints.deletePostFromFavorite.matchFulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.deletePostFromFavorite.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.deletePostFromFavorite.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});
export default postSlice.reducer;
