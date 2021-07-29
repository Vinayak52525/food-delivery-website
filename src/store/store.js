import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./items-slice";
import dishReducer from "./dish-slice";
import cartReducer from "./cart-slice";
import mobileNavReducer from "./mobileNav-slice";
import searchReducer from "./search-slice";

export const store = configureStore({
  reducer: {
    category: itemReducer,
    dish: dishReducer,
    cart: cartReducer,
    mobileNav: mobileNavReducer,
    search: searchReducer,
  },
});
