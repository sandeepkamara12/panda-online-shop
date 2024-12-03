import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductBrand from "./ProductBrand";
import ProductPriceSlider from "./ProductPriceSlider";
import { useSelector } from "react-redux";

const ShopSidebar = ({setFilters, filters}) => {
  const categories = useSelector((state) => state.categories.categories);
  const sizes = useSelector((state) => state.sizes.sizes);
  const colors = useSelector((state) => state.colors.colors);
  const brands = useSelector((state) => state.brands.brands);
const clearAllFilter = () => {
  setFilters({category:[], size:[], color:'', brand:'', price:'', sort:''})
}
  return (    
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a onClick={clearAllFilter} className="sidebar-filter-clear">
            Clean All
          </a>
        </div>
        <Categories categories={categories} setFilters={setFilters} filters={filters} />
        <ProductSize sizes={sizes} setFilters={setFilters} filters={filters} />
        <ProductColor colors={colors} setFilters={setFilters} filters={filters} />
        <ProductBrand brands={brands} setFilters={setFilters} filters={filters} />
        <ProductPriceSlider />
      </div>
  );
};

export default ShopSidebar;
