import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import { serverApi } from './serverApi';

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath] : serverApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
});