import { setToken } from '../../../utils/generate.token';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../auth/auth.api';
import { IUser, userState } from '../user/user.types';
import { keccak256 } from 'js-sha3';

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
        const response = action.payload;
        const { data, message, status } = response;

        state.user = data.user;
        state.isLoggedIn = true;
        const hashedToken = keccak256(data.token);
        state.token = hashedToken;
        setToken(hashedToken);
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { data, message, status } = response;

        console.log('user from data: ', data.user, 'token from data:', data.token);
        state.user = data.user;
        state.isLoggedIn = true;
        const hashedToken = keccak256(data.token);
        state.token = hashedToken;
        setToken(hashedToken);
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
