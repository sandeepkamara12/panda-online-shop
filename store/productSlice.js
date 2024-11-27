import { createSlice } from '@reduxjs/toolkit';
import products from '../public/products.json'
const productSlice = createSlice({
  name: 'products',
  initialState: {
    value: 0,
    products:products
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;