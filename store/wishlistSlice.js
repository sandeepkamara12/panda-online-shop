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
      return {
        ...state,
        wishlist:{
          ...state.wishlist,
          wishlist:[...state.wishlist.wishlist, action?.payload]
        }
      }
    },
    removeItemToWishlists: (state, action) => {
      return {
        ...state,
        wishlist:{
          ...state.wishlist,
          wishlist: state.wishlist.wishlist.filter(item=>item.productId != action.payload.productId)
        }
      }
    }
  },
});

export const { addItemToWishlists, removeItemToWishlists } = wishlistSlice.actions;

export default wishlistSlice.reducer;