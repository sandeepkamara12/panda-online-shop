import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductBrand from "./ProductBrand";
import ProductPriceSlider from "./ProductPriceSlider";
import { useSelector } from "react-redux";

const ShopSidebar = ({setFilters, filters}) => {
  const [isSticky, setIsSticky] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const sizes = useSelector((state) => state.sizes.sizes);
  const colors = useSelector((state) => state.colors.colors);
  const brands = useSelector((state) => state.brands.brands);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (    
    <aside
    className={`col-xl-3 order-xl-first sidebar-wrapper ${
      isSticky ? "fixed" : ""
    }`}
  >
      <div className="sidebar sidebar-shop">
       
        <Categories categories={categories} setFilters={setFilters} filters={filters} />
        <ProductSize sizes={sizes} setFilters={setFilters} filters={filters} />
        <ProductColor colors={colors} setFilters={setFilters} filters={filters} />
        <ProductBrand brands={brands} setFilters={setFilters} filters={filters} />
        <ProductPriceSlider setFilters={setFilters} filters={filters} />
      </div>
      </aside>
  );
};

export default ShopSidebar;
