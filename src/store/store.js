import { configureStore } from '@reduxjs/toolkit';
import { serverApi } from './serverApi';
import { userSlice } from './userSlice';

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath] : serverApi.reducer,
    users: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
});