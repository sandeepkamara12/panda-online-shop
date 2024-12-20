import React, { useEffect, useRef } from "react";
import noUiSlider from "nouislider";
import wNumb from "wnumb";
const ProductPriceSlider = ({setFilters, filters}) => {
  const priceSliderRef = useRef(null); 
  useEffect(() => {
    const priceSliderLoader = priceSliderRef.current;
    if (priceSliderLoader) {
      // Initialize noUiSlider only if the ref is available
      noUiSlider.create(priceSliderLoader, {
        start: [filters?.price?.min, filters?.price?.max],
        connect: true,
        step: 1,
        margin: 100,
        range: {
          min: 0,
          max: 5000,
        },
        tooltips: true,
        format: wNumb({
          decimals: 0,
          prefix: "$",
        }),
      });

      const slider = priceSliderLoader.noUiSlider;

      slider.on("update", function (values) {
        document.getElementById("filter-price-range").textContent = values.join(" - ");
        setFilters((prev) => {
          return {
          ...prev,
          price: {  min: parseInt(
            values.length > 0 && typeof values[0] === 'string' ? values[0].replace("$", "") : 0
          ),
          max: parseInt(
            values.length > 1 && typeof values[1] === 'string' ? values[1].replace("$", "") : 0
          )},
        }});
      });
    }

    return () => {
      if (priceSliderLoader) {
        priceSliderLoader.noUiSlider.destroy();
      }
    };
  }, [filters?.price?.min, filters?.price?.max]);

  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-5"
          role="button"
          aria-expanded="true"
          aria-controls="widget-5"
        >
          Price
        </a>
      </h3>

      <div className="collapse show" id="widget-5">
        <div className="widget-body">
          <div className="filter-price">
            <div className="filter-price-text">
              Price Range:
              <span id="filter-price-range" className="ml-1"></span>
            </div>
           
            <div id="price-slider" ref={priceSliderRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPriceSlider;
