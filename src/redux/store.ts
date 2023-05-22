import { userSlice } from './api/slices/userSlice';
import { userApi } from './api/user/user.api';
import { postApi } from './api/post/post.api';
import authApi from './api/auth/auth.api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import opencageApi from './api/localisations/opencage.api';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [opencageApi.reducerPath]: opencageApi.reducer,

  userState: userSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      postApi.middleware,
      opencageApi.middleware,
    ]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
