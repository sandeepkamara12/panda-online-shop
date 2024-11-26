import React from "react";

const ProductPriceSlider = () => {
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
              <span id="filter-price-range"></span>
            </div>

            <div id="price-slider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceSlider;
