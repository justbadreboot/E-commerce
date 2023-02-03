import { configureStore } from '@reduxjs/toolkit';
import { listCartItemsReducer } from './cart/cartReducers';
import { serverApi } from './serverApi';

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath] : serverApi.reducer,
    cartItemsList: listCartItemsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
});