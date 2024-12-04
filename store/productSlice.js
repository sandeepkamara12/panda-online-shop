import { createSlice } from '@reduxjs/toolkit';
import products from '../public/products.json'
const productSlice = createSlice({
  name: 'products',
  initialState: {
    value: 0,
    products:products,
    filteredProducts:products,
  },
  reducers: {
    filter: (state, action) => {
      const {category, size, color, brand, price, sort} = action.payload;
        let filtered = state.products.filter((product) => {
          
          /* Update the products by changing the product category */
          const matchesCategory =
            category?.length > 0
            ? category?.some((id) => product.category.includes(id))
            : true;

            /* Update the products by changing the product price */
            const matchesSize =
            size?.length > 0
              ? size.some((sz) => product.size.includes(sz))
              : true;

            /* Update the products by changing the product color */
            const matchesColor =
            color !==''
              ? product.color.includes(color)
              : true;
            
            /* Update the products by changing the product brand */

            const matchesBrand =
            brand?.length > 0
              ? brand.some((br) => product.brand == br)
              : true;

            /* Update the products by changing the price value */
            const matchesPrice =
              (product?.price >= price?.min && product?.price <= price?.max) ||
              (product?.salePrice && product?.salePrice >= price?.min && product?.salePrice <= price?.max);

            /* Update the products by changing the sort value */          
            const matchesSort = sort !== "" && sort !== "lth" && sort !== "htl" && sort !== "sale" ? product?.badge == sort : true;
            return matchesCategory && matchesSize && matchesColor && matchesBrand && matchesPrice && matchesSort;
        });
        if (sort === "lth") {
          filtered = filtered.sort((a, b) => a.price - b.price); // Low to High
        }
        else if (sort === "htl") {
          filtered = filtered.sort((a, b) => b.price - a.price); // High to Low
        }
        else if (sort === "sale") {
          /* Sort Sales Products */
          filtered = filtered.filter(product => product?.salePrice); 
        }
    
        // Update the state with filtered and sorted products
        state.filteredProducts = filtered;
    }
  },
});

export const { filter } = productSlice.actions;

export default productSlice.reducer;
