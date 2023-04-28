import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../auth/auth.api';
import { IUser, userState } from '../user/user.types';
import { keccak256 } from 'js-sha3';
import { persistData } from '../../../utils/localstorage/localStorage.utils';
import { clearLocalStorage } from '../../../utils/localstorage/clearLoalStorage';

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
    logout: () => {
      clearLocalStorage();
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.error = null;
    },

    clearToken: (state) => {
      state.token = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { data } = response;

        state.user = data.user;
        state.isLoggedIn = true;
        state.token = data.token;
        persistData('user', data.user);
        persistData('token', data.token);
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { data } = response;

        state.user = data.user;
        state.isLoggedIn = true;
        state.token = data.token;
        persistData('user', data.user);
        persistData('token', data.token);
      })
      .addMatcher(authApi.endpoints.logout.matchPending, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.token = '';
        clearLocalStorage();
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.token = '';
        clearLocalStorage();
      });
  },
});

// Action creators are generated for each case reducer function
export default userSlice.reducer;

export const { logout } = userSlice.actions;
