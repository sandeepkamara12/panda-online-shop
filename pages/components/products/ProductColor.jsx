import React from "react";

const ProductColor = ({ colors, setFilters, filters }) => {
  const handleCheckboxChange = (productColor) => {
    setFilters((prev) => {
      const isAlreadySelected = prev.color.includes(productColor);
      return {
        ...prev,
        color: isAlreadySelected
          ? prev.color.filter((cl) => cl !== productColor) // Remove if already selected
          : [...prev.color, productColor],
      };
    });
  };
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
                <div className="filter-item" key={color?.hex}>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={color?.hex}
                      name={'color'}
                      onChange={() => handleCheckboxChange(color?.hex)}
                      checked={filters?.color?.includes(color?.hex)} 
                    />
                    <label className="custom-control-label pl-0"  htmlFor={color?.hex}>
                      <a className={`${filters?.color?.includes(color?.hex)?'selected':''}`} style={{ background: `#${color?.hex}` }}></a>
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

export default ProductColor;
