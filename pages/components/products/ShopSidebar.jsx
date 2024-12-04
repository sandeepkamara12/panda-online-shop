import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductBrand from "./ProductBrand";
import ProductPriceSlider from "./ProductPriceSlider";
import { useSelector } from "react-redux";

const ShopSidebar = ({clearFilter, setClearFilter, setFilters, filters}) => {
  const categories = useSelector((state) => state.categories.categories);
  const sizes = useSelector((state) => state.sizes.sizes);
  const colors = useSelector((state) => state.colors.colors);
  const brands = useSelector((state) => state.brands.brands);
  const clearAllFilter = () => {
    if(filters?.category?.length >0 || filters?.size?.length >0 || filters?.color?.length >0 || filters?.brand?.length >0 || filters?.price?.min >0 || filters?.price?.max < 100 || filters?.sort !== "") {
      setFilters({category:[], size:[], color:[], brand:[], price:{min:0, max:100}, sort:''})
      setClearFilter(false);
    }
  }
  return (    
      <div className="sidebar sidebar-shop">
      <div className="">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a onClick={clearAllFilter} className={`sidebar-filter-clear ${!clearFilter ? 'disabled' : ''}`}>
            <i className="icon icon-refresh mr-1"></i>
            Clear All
          </a>
        </div>
        <Categories categories={categories} setFilters={setFilters} filters={filters} />
        <ProductSize sizes={sizes} setFilters={setFilters} filters={filters} />
        <ProductColor colors={colors} setFilters={setFilters} filters={filters} />
        <ProductBrand brands={brands} setFilters={setFilters} filters={filters} />
        <ProductPriceSlider setFilters={setFilters} filters={filters} />
      </div>
      </div>
  );
};

export default ShopSidebar;
