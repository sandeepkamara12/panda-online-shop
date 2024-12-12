import React from "react";

const ProductBrand = ({ brands, setFilters, filters }) => {
  const handleCheckboxChange = (productBrand) => {
    setFilters((prev) => {
      let isAlreadySelected = prev.brand.includes(productBrand)
      return {
        ...prev,
        brand: isAlreadySelected
          ? prev.brand.filter((br) => br !== productBrand) 
          : [...prev.brand, productBrand]
      };
    });
  };
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-4"
          role="button"
          aria-expanded="true"
          aria-controls="widget-4"
        >
          Brand
        </a>
      </h3>

      <div className="collapse show" id="widget-4">
        <div className="widget-body">
          <div className="filter-items">
          {brands &&
              brands?.length > 0 &&
              brands?.map((brand) => (
                <div className="filter-item" key={brand?.id}>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`brand_${brand?.id}`}
                      name={'brand'}
                      onChange={() => handleCheckboxChange(brand?.id)}
                      checked={filters?.brand?.includes(brand?.id)} 
                    />
                    <label className="custom-control-label" htmlFor={`brand_${brand?.id}`}>
                      {brand?.name.toUpperCase()}
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

export default ProductBrand;
