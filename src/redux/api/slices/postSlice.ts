import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post, PostState } from '../post/post.types';
import { postApi } from '../post/post.api';
const initialState: PostState = {
  post: null,
  isLoading: false,
  error: null,
};
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload;
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
      })
      .addMatcher(postApi.endpoints.editPost.matchPending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(postApi.endpoints.editPost.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});
export default postSlice.reducer;
