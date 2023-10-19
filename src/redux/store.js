import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/carSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});