import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../user/user.types';

export interface userState {
  user: IUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
const initialState: userState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
// createSlice is used for managing local client-side state.

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
  },
});

// Action creators are generated for each case reducer function
export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
