import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import categorySlice from './categorySlice';
import landingSlice from './landingSlice';
import productSlice from './productSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    landing: landingSlice,
    products: productSlice,
    categories: categorySlice
  },
});
