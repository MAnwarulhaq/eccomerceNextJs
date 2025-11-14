import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../store/slice/Cartslice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
