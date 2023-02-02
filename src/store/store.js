import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import { serverApi } from './serverApi';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [serverApi.reducerPath] : serverApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
});