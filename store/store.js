import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import sizeReducer from './sizeSlice';
import colorReducer from './colorSlice';
export const store = configureStore({
    reducer:{ 
        products: productReducer,
        categories: categoryReducer,
        sizes: sizeReducer,
        colors: colorReducer,
    },
})