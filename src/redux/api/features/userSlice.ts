import { setToken } from './../../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../auth/auth.api';
import { IUser, userState } from '../user/user.types';

const initialState: userState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: localStorage.getItem('token') || '',
};
// createSlice is used for managing local client-side state.

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        const data = action.payload;
        const { token, user } = data;
        state.user = user;
        state.isLoggedIn = true;
        state.token = token;
        setToken(token);
      })
      .addMatcher(authApi.endpoints.logout.matchPending, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.token = '';
        localStorage.removeItem('token');
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.token = '';
        localStorage.removeItem('token');
      });
  },
});

// Action creators are generated for each case reducer function
export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
