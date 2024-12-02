import { createSlice } from '@reduxjs/toolkit';
import brands from '../public/brand.json'
const brandSlice = createSlice({
  name: 'brands',
  initialState: {
    value: 0,
    brands:brands
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
});

export const { increment } = brandSlice.actions;

export default brandSlice.reducer;