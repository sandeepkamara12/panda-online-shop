import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import sizeReducer from './sizeSlice';
import colorReducer from './colorSlice';
import brandReducer from './brandSlice';
import wishlistReducer from './wishlistSlice';
import cartReducer from './cartSlice';
export const store = configureStore({
    reducer:{ 
        products: productReducer,
        categories: categoryReducer,
        sizes: sizeReducer,
        colors: colorReducer,
        brands: brandReducer, 
        wishlist: wishlistReducer, 
        cart:cartReducer
    },
})