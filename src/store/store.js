import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import categorySlice from './categorySlice';
import landingSlice from './landingSlice';
import productSlice from './productSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    landing: landingSlice.reducer,
    products: productSlice.reducer,
    categories: categorySlice.reducer
  },
});
