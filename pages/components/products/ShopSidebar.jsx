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
  const [brands, setBrands] = useState([]);
  useEffect(()=>{
    fetch('./brand.json').then(response=>response.json()).then(data=>setBrands(data)).catch(error=>console.log(error, 'while getting all the brands'));
  },[])
  return (    
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a href="#" className="sidebar-filter-clear">
            Clean All
          </a>
        </div>
        <Categories categories={categories} setFilters={setFilters} filters={filters} />
        <ProductSize sizes={sizes} setFilters={setFilters} filters={filters} />
        <ProductColor colors={colors} setFilters={setFilters} filters={filters} />
        <ProductBrand brands={brands} />
        <ProductPriceSlider />
      </div>
  );
};

export default ShopSidebar;
