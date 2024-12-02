import { createSlice } from '@reduxjs/toolkit';
import categories from '../public/category.json'
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    value: 0,
    categories:categories
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
});

export const { increment } = categorySlice.actions;

export default categorySlice.reducer;