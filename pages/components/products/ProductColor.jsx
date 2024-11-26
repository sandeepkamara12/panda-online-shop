import React from "react";

const ProductColor = ({ colors }) => {
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-3"
          role="button"
          aria-expanded="true"
          aria-controls="widget-3"
        >
          Colour
        </a>
      </h3>

      <div className="collapse show" id="widget-3">
        <div className="widget-body">
          <div className="filter-colors">
            {colors &&
              colors?.length > 0 &&
              colors?.map((color) => (
                <a href="#" style={{ background: color?.hex }} key={color?.name}>
                  <span className="sr-only">{color?.name}</span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductColor;
