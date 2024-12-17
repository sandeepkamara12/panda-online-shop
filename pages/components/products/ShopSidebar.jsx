import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductBrand from "./ProductBrand";
import ProductPriceSlider from "./ProductPriceSlider";
import { useSelector } from "react-redux";

const ShopSidebar = ({ setFilters, filters, setClearFilter, clearFilter }) => {
  const clearAllFilter = () => {
    if (
      filters?.category?.length > 0 ||
      filters?.size?.length > 0 ||
      filters?.color?.length > 0 ||
      filters?.brand?.length > 0 ||
      filters?.price?.min > 0 ||
      filters?.price?.max < 5000 ||
      filters?.sort !== ""
    ) {
      setFilters({
        category: [],
        size: [],
        color: [],
        brand: [],
        price: { min: 0, max: 5000 },
        sort: "",
      });
      setClearFilter(false);
    }
  };
  // const [isSticky, setIsSticky] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const sizes = useSelector((state) => state.sizes.sizes);
  const colors = useSelector((state) => state.colors.colors);
  const brands = useSelector((state) => state.brands.brands);

  return (
    <aside className={`col-xl-3 order-xl-first sidebar-wrapper`}>
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a
            onClick={clearAllFilter}
            className={`sidebar-filter-clear ${!clearFilter ? "disabled" : ""}`}
          >
            <i className="icon icon-refresh mr-1"></i>
            Clear All
          </a>
        </div>
        <Categories
          categories={categories}
          setFilters={setFilters}
          filters={filters}
        />
        <ProductSize sizes={sizes} setFilters={setFilters} filters={filters} />
        <ProductColor
          colors={colors}
          setFilters={setFilters}
          filters={filters}
        />
        <ProductBrand
          brands={brands}
          setFilters={setFilters}
          filters={filters}
        />
        <ProductPriceSlider setFilters={setFilters} filters={filters} />
      </div>
    </aside>
  );
};

export default ShopSidebar;
