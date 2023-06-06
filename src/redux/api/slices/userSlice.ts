/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authApi } from '../auth/auth.api';
import { IUser, userState } from '../user/user.types';
import { keccak256 } from 'js-sha3';
import {
  getPersistData,
  persistData,
  updatePersistedData,
} from '../../../utils/localstorage/localStorage.utils';
import { clearLocalStorage } from '../../../utils/localstorage/clearLoalStorage';
import { userApi } from '../user/user.api';

const initialState: userState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: localStorage.getItem('token') || '',
};

export const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ____________________________________________________ Login user _____________________________________________________
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    // ____________________________________________________ Logout user _____________________________________________________

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
      // ____________________________________________________ Login user _____________________________________________________

      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { data } = response;

        state.user = data.user;
        state.isLoggedIn = true;
        state.token = data.token;
        persistData('user', data.user);
        persistData('token', data.token);
      })
      // ____________________________________________________ register user _____________________________________________________

      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
        const response = action.payload;
        const { data } = response;
        const user = getPersistData('user', true);
        if (user && user.role === 'ADMIN') console.log('do nothin');
        else {
          state.user = data.user;
          state.isLoggedIn = true;
          state.token = data.token;
          persistData('user', data.user);
          persistData('token', data.token);
        }
      })
      // ____________________________________________________ Logout user _____________________________________________________

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
      })
      // ____________________________________________________ Update user _____________________________________________________

      .addMatcher(userApi.endpoints.updateUser.matchFulfilled, (state, action) => {
        const response = action.payload;
        if (response) {
          const user = getPersistData('user', true);
          if (response.id === user.id) {
            updatePersistedData('user', response);
          }
          state.user = getPersistData('user', true);
        }

        state.isLoading = false;
      })
      .addMatcher(userApi.endpoints.updateUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(userApi.endpoints.updateUser.matchRejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;
