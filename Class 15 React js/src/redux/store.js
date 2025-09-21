import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import addToCartReducer from "./addToCart"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        addToCart: addToCartReducer
    },
});
