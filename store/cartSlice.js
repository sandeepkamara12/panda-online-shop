import { createSlice } from "@reduxjs/toolkit";
import carts from '../public/cart.json';
const cartSlice = createSlice({
    name:'carts',
    initialState:{
        carts:carts
    },
    reducers:{
        addItemToCart: (state, action) => {
            const { userId, products } = action.payload;
            console.log(products, 'hi')
            if(state.carts.hasOwnProperty('userId')) {
                if(state.carts.userId === userId) {
                    /* If items are in the cart  */
                    if(state.carts.cart?.length>0) {
                        let isProductAlreadyExist = state.carts.cart.find(cartItem=>cartItem?.productId == products?.id)
                        console.log(JSON.stringify(isProductAlreadyExist), 'isProductAlreadyExist');
                        /* If a perticular item is already in the cart */
                        if(isProductAlreadyExist !== null && isProductAlreadyExist !== undefined) {
                            isProductAlreadyExist.quantity += 1;
                            let productPrice = isProductAlreadyExist.salePrice ? isProductAlreadyExist.salePrice : isProductAlreadyExist.price;
                            isProductAlreadyExist.totalPrice = isProductAlreadyExist.quantity * productPrice;
                            state.carts.cartSummary.subtotal += productPrice;
                        }
                        else {
                            let price = products?.salePrice ? products?.salePrice : products?.price;
                            const updatedProduct = { ...products, productId: products?.id, quantity: 1 , totalPrice:price * 1};
                            state.carts.cart.push(updatedProduct);
                            state.carts.cartSummary.totalItems += 1;
                            state.carts.cartSummary.subtotal += price;
                        }
                    }
                    else {
                        state.carts.push({ userId, cart: [products], cartSummary: {} });
                    }
                }
            }
        },
        removeItemToCart: (state, action) => {

        },
    }
})
export const {addItemToCart, removeItemToCart} = cartSlice.actions;
export default cartSlice.reducer;