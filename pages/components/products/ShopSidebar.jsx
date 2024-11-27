import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductBrand from "./ProductBrand";
import ProductPriceSlider from "./ProductPriceSlider";

const ShopSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(()=>{
    fetch('./category.json').then(response=>response.json()).then(data=>setCategories(data)).catch(error=>console.log(error, 'while getting all the categories'));
    fetch('./sizes.json').then(response=>response.json()).then(data=>setSizes(data)).catch(error=>console.log(error, 'while getting all the sizes'));
    fetch('./brand.json').then(response=>response.json()).then(data=>setBrands(data)).catch(error=>console.log(error, 'while getting all the brands'));
    fetch('./colors.json').then(response=>response.json()).then(data=>setColors(data)).catch(error=>console.log(error, 'while getting all the colors'));
  },[])
  return (    
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a href="#" className="sidebar-filter-clear">
            Clean All
          </a>
        </div>
        <Categories categories={categories} />
        <ProductSize sizes={sizes} />
        <ProductColor colors={colors} />
        <ProductBrand brands={brands} />
        <ProductPriceSlider />
      </div>
  );
};

export default ShopSidebar;
