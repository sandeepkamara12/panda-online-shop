import { createSlice } from "@reduxjs/toolkit";
import carts from "../public/cart.json";
import { v4 as uuidv4 } from 'uuid';

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: carts,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { products } = action.payload;
      if (state.carts.cart?.length > 0) {
        let isProductAlreadyExist = state.carts.cart.find(
          (cartItem) => cartItem?.productId == products.id
        );

        if (
          isProductAlreadyExist !== null &&
          isProductAlreadyExist !== undefined
        ) {
          isProductAlreadyExist.quantity += 1;
          let productPrice = isProductAlreadyExist.salePrice
            ? isProductAlreadyExist.salePrice
            : isProductAlreadyExist.price;
          isProductAlreadyExist.totalPrice =
            isProductAlreadyExist.quantity * productPrice;
          state.carts.cartSummary.subtotal += productPrice;
        } else {
          let price = products?.salePrice
            ? products?.salePrice
            : products?.price;
          const updatedProduct = {
            ...products,
            id:uuidv4().replace(/\D/g, '').slice(0, 2),
            productId: products?.id,
            quantity: 1,
            totalPrice: price * 1,
          };
          state.carts.cart.push(updatedProduct);
          state.carts.cartSummary.totalItems += 1;
          state.carts.cartSummary.subtotal += price;
        }
      } else {
        state.carts.push({ userId, cart: [products], cartSummary: {} });
      }
    },
    removeItemFromCart: (state, action) => {
        let {cartId} = action.payload;
        const updatedCart = state.carts.cart.filter(item => item?.id !== cartId);
        const totalItems = updatedCart.length;
        const subtotal = updatedCart.reduce((sum, item) => sum + item.totalPrice, 0);
        const shipping = state.carts.cartSummary.shipping; // Assuming shipping stays constant
        const tax = subtotal * 0.1; // Example: 10% tax
        const grandTotal = subtotal + shipping + tax;
        return {
            ...state,
            carts: {
                ...state.carts,
                cart: updatedCart,
                cartSummary: {
                    totalItems,
                    subtotal,
                    shipping,
                    tax,
                    grandTotal
                }
            }
        };

    },
  },
});
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
