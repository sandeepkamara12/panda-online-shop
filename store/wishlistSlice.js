import { createSlice } from '@reduxjs/toolkit';
import wishlist from '../public/wishlist.json'
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    value: 0,
    wishlist:wishlist
  },
  reducers: {
    addItemToWishlists: (state, action) => {
      console.log(action.payload, 'wishlist dear');
      return {
        ...state,
        wishlist:[...state.wishlist, action?.payload]
      }
    },
    removeItemToWishlists: (state, action) => {
      console.log(action.payload, 'wishlist dear');
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.productId != action.payload.productId || item.userId != action.payload.userId
        ),
      }
    }
  },
});

export const { addItemToWishlists, removeItemToWishlists } = wishlistSlice.actions;

export default wishlistSlice.reducer;