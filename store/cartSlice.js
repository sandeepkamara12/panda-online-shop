import { createSlice } from "@reduxjs/toolkit";
import carts from "../public/cart.json";
import { v4 as uuidv4 } from "uuid";

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

        if (isProductAlreadyExist) {
          let productPrice = isProductAlreadyExist.salePrice
            ? isProductAlreadyExist.salePrice
            : isProductAlreadyExist.price;

          // Quantity increase by 1 if it is < 10 else it will be 10
          if (isProductAlreadyExist.quantity < 10) {
            isProductAlreadyExist.quantity += 1;
          } else {
            isProductAlreadyExist.quantity = 10;
          }
          // Update the totalPrice of each product by quantity * salePrice || Price
          isProductAlreadyExist.totalPrice =
            isProductAlreadyExist?.quantity * productPrice;

          // Subtotal of all the cart items by quantity * SalePrice || Price
          state.carts.cartSummary.subtotal = state.carts.cart.reduce(
            (sum, item) => sum + item.totalPrice,
            0
          );

          const subtotal = state.carts.cartSummary.subtotal || 0;
          const shipping = state.carts.cartSummary.shipping || 0;
          const tax = state.carts.cartSummary.tax || 0;

          //Update the grandTotal with Shipping and Tax
          state.carts.cartSummary.grandTotal = subtotal + shipping + tax;
          
        } else {
          let price = products?.salePrice
            ? products?.salePrice
            : products?.price;
          const updatedProduct = {
            ...products,
            id: uuidv4().replace(/\D/g, "").slice(0, 2),
            productId: products?.id,
            quantity: 1,
            totalPrice: price,
          };
          state.carts.cart.push(updatedProduct);
          state.carts.cartSummary.totalItems += 1;
          state.carts.cartSummary.subtotal = state.carts.cart.reduce(
            (sum, item) => sum + item.totalPrice,
            0
          );
          state.carts.cartSummary.grandTotal =
            state.carts.cartSummary.subtotal +
            state.carts.cartSummary.shipping +
            state.carts.cartSummary.tax;
        }
      } else {
        if (!state.carts.cart) {
          state.carts.cart = [];
        }
        state.carts.cart.push({
          ...products,
          id: uuidv4().replace(/\D/g, '').slice(0, 2),
          productId: products?.id,
          quantity: 1,
          totalPrice: products?.salePrice ? products.salePrice * 1 : products.price * 1,
        });

        // Update cartSummary
        state.carts.cartSummary.totalItems += 1;
        
        let productPrice = products?.salePrice || products?.price;
        state.carts.cartSummary.subtotal += productPrice;

        // Recalculate grandTotal
        state.carts.cartSummary.grandTotal =
        state.carts.cartSummary.subtotal +
        state.carts.cartSummary.shipping +
        state.carts.cartSummary.tax;
      }
    },
    removeItemFromCart: (state, action) => {
      let { cartId } = action.payload;
      const updatedCart = state.carts.cart.filter(
        (item) => item?.id !== cartId
      );
      const totalItems = updatedCart.length;
      const subtotal = updatedCart.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
      const shipping = state.carts.cartSummary.shipping; // Assuming shipping stays constant
      // const tax = subtotal * 0.1;
      const tax = 10;
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
            grandTotal,
          },
        },
      };
    },
    updateItemInCart:(state, action) => {
      const { productId, quantity } = action.payload;
      const productIndex = state.carts.cart.findIndex(
        (cartItem) => cartItem?.productId === productId
      );
      console.log(productId, quantity, productIndex, 'hola');
      
      if (productIndex !== -1) {
        const updatedProduct = { ...state.carts.cart[productIndex] };
        updatedProduct.quantity = Math.min(quantity, 10);
        const productPrice = updatedProduct.salePrice ? updatedProduct.salePrice : updatedProduct.price;
        updatedProduct.totalPrice = parseFloat((updatedProduct.quantity * productPrice).toFixed(2));
        
        // Update the cart with the modified product
        state.carts.cart[productIndex] = updatedProduct;
    
        // Recalculate cartSummary
        state.carts.cartSummary.subtotal = state.carts.cart.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );
        const subtotal = state.carts.cartSummary.subtotal;
        const shipping = state.carts.cartSummary.shipping || 0;
        const tax = state.carts.cartSummary.tax || 0;
    
        state.carts.cartSummary.grandTotal = subtotal + shipping + tax;
      }
    else {
      console.error(`Product with ID ${productId} not found in cart.`);
    }
    }
  },
});
export const { addItemToCart, removeItemFromCart, updateItemInCart } = cartSlice.actions;
export default cartSlice.reducer;
