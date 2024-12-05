import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductBrand from "./ProductBrand";
import ProductPriceSlider from "./ProductPriceSlider";
import { useSelector } from "react-redux";

const ShopSidebar = ({setFilters, filters}) => {
  // const [isSticky, setIsSticky] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const sizes = useSelector((state) => state.sizes.sizes);
  const colors = useSelector((state) => state.colors.colors);
  const brands = useSelector((state) => state.brands.brands);

  useEffect(() => {
    const sidebar = document.querySelector('.sidebar-wrapper');
    const container = document.querySelector('.container');
    let toolboxWrap = document.querySelector(".toolbox-wrap");      
    let toolboxWrapTop = toolboxWrap.offsetTop;
    const footer = document.querySelector('footer'); 
    let footerTop = footer.offsetTop;

    const handleScroll = () => {
      const sidebarRect = sidebar.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();  
      // const footerRect = footer.getBoundingClientRect();        
      if (window.scrollY > toolboxWrapTop && window.scrollY <= footerTop) {
        sidebar.previousElementSibling.classList.add('offset-3')
        sidebar.classList.add('fixed');
        sidebar.classList.remove('fixed-bottom');
        sidebar.style.left = `${containerRect.left}px`; // Keep the same left offset as the container
        sidebar.style.width = `${sidebarRect.width}px`; // Keep the same width
      } 
      else if (window.scrollY > toolboxWrapTop && window.scrollY > footerTop) {
        console.log('hola dear')
        sidebar.previousElementSibling.classList.add('offset-3')
        sidebar.classList.add('fixed-bottom');
        sidebar.style.left = `${containerRect.left}px`; // Keep the same left offset as the container
        sidebar.style.width = `${sidebarRect.width}px`;
      }
      else if (window.scrollY < toolboxWrapTop) {
        sidebar.previousElementSibling.classList.remove('offset-3')
        sidebar.classList.remove('fixed');
        sidebar.style.left = "";
        sidebar.style.width = "";
      }
      // if (footerRect.top <= window.innerHeight) {
      //   sidebar.classList.add('fixed-bottom');
      //   sidebar.style.left = '';
      //   sidebar.style.width = '';
      // }
    };



    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (    
    <aside
    className={`col-xl-3 order-xl-first sidebar-wrapper`}
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
