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
      const {category, size, color, brand} = action.payload;
      console.log(brand, 'brands');
        state.filteredProducts = state.products.filter((product) => {
          
          const matchesCategory =
            category.length > 0
            ? category.some((id) => product.category.includes(id))
            : true;

            const matchesSize =
            size.length > 0
              ? size.some((sz) => product.size.includes(sz))
              : true;

            const matchesColor =
            color !==''
              ? product.color.includes(color)
              : true;
            const matchesBrand = brand != ""
                ? product?.brand == brand.replace("brand_", "")
                : true;

              return matchesCategory && matchesSize && matchesColor && matchesBrand;
        });
    }
  },
});

export const { filter } = productSlice.actions;

export default productSlice.reducer;
