import { createSlice } from '@reduxjs/toolkit';
import sizes from '../public/sizes.json'
const sizeSlice = createSlice({
  name: 'sizes',
  initialState: {
    value: 0,
    sizes:sizes
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
});

export const { increment } = sizeSlice.actions;

export default sizeSlice.reducer;