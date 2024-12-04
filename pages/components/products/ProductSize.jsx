import React from "react";

const ProductSize = ({ sizes, setFilters, filters }) => {
  const handleCheckboxChange = (productSize) => {
    setFilters((prev) => {
      const isAlreadySelected = prev.size.includes(productSize.toLowerCase());

      return {
        ...prev,
        size: isAlreadySelected
          ? prev.size.filter((size) => size !== productSize) // Remove if already selected
          : [...prev.size, productSize], // Add if not selected
      };
    });
  };
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
          <div className="filter-items d-flex flex-row">
            {sizes &&
              sizes?.length > 0 &&
              sizes?.map((size) => (
                <div className="filter-item mb-0 mr-4" key={size?.name}>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={size?.name}
                      name={'size'}
                      onChange={() => handleCheckboxChange(size?.name)}
                      checked={filters?.size?.includes(size?.name)} 
                    />
                    <label className="custom-control-label" htmlFor={size?.name}>
                      {size?.name.toUpperCase()}
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
