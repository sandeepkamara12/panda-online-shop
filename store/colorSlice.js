import { createSlice } from '@reduxjs/toolkit';
import colors from '../public/colors.json'
const colorSlice = createSlice({
  name: 'colors',
  initialState: {
    value: 0,
    colors:colors
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
});

export const { increment } = colorSlice.actions;

export default colorSlice.reducer;