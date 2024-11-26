import React from "react";

const ProductSize = ({ sizes }) => {
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-2"
          role="button"
          aria-expanded="true"
          aria-controls="widget-2"
        >
          Size
        </a>
      </h3>

      <div className="collapse show" id="widget-2">
        <div className="widget-body">
          <div className="filter-items">
            {sizes &&
              sizes?.length > 0 &&
              sizes?.map((size) => (
                <div className="filter-item" key={size?.name}>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={size?.name}
                    />
                    <label className="custom-control-label" htmlFor={size?.name}>
                      {size?.name}
                    </label>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSize;
