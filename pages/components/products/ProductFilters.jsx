import React from "react";
import Select, { components } from "react-select";
const options = [
  { value: "", label: "All" },
  { value: "best-seller", label: "Best Seller" },
  { value: "new-arrival", label: "Newest" },
  { value: "sale", label: "Sale" },
  { value: "lth", label: "Price Low to High" },
  { value: "htl", label: "Price High to Low" },
];
const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i
        className="icon-angle-down"
        style={{ color: "#333333", fontSize: "12px" }}
      />
    </components.DropdownIndicator>
  );
};
const customStyles = {
  control: (base) => ({
    ...base,
    width: "160px",
    fontSize: "1.3rem",
    borderColor: "#ebebeb",
    borderWidth: 1,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
  }),
  menu: (base) => ({
    ...base,
    zIndex: 2,
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 2,
  }),
};
const ProductFilters = ({
  setLayout,
  layout,
  productVisibleCount,
  totalProducts,
  filters,
  setFilters,
  setClearFilter,
}) => {
 
  const selectSortToFilterProducts = (option) => {
    setFilters((prev) => {
      return {
        ...prev,
        sort: option?.value,
      };
    });
  };
  const currentSortOption = options.find((opt) => opt.value === filters?.sort) || options[0];
  return (
    <div className="toolbox-wrap">
      {/* <div className="container"> */}
        <div className="toolbox">
          {/* <div className="col-9">
            <div className="row"> */}
              <div className="toolbox-left">
                <div className="toolbox-info">
                  Showing{" "}
                  <span>
                    {productVisibleCount} of {totalProducts}
                  </span>{" "}
                  Products
                </div>
              </div>
              {/* <div className="toolbox-right col-9"> */}
              <div className="toolbox-right">
                <div className="toolbox-sort">
                  <label>Sort by:</label>
                  <div className="select-custom">
                    <Select
                      options={options}
                      placeholder="Select"
                      value={currentSortOption}
                      onChange={selectSortToFilterProducts}
                      styles={customStyles}
                      components={{
                        DropdownIndicator: CustomDropdownIndicator,
                      }}
                      instanceId="sortby"
                    />
                  </div>
                </div>
                <div className="toolbox-layout d-none d-md-block">
                  <a
                    onClick={() => setLayout("one")}
                    className={`btn-layout ${layout === "one" ? "active" : ""}`}
                  >
                    <svg width="16" height="10">
                      <rect x="0" y="0" width="4" height="4" />
                      <rect x="6" y="0" width="10" height="4" />
                      <rect x="0" y="6" width="4" height="4" />
                      <rect x="6" y="6" width="10" height="4" />
                    </svg>
                  </a>

                  <a
                    onClick={() => setLayout("three")}
                    className={`btn-layout ${
                      layout === "three" ? "active" : ""
                    }`}
                  >
                    <svg width="16" height="10">
                      <rect x="0" y="0" width="4" height="4" />
                      <rect x="6" y="0" width="4" height="4" />
                      <rect x="12" y="0" width="4" height="4" />
                      <rect x="0" y="6" width="4" height="4" />
                      <rect x="6" y="6" width="4" height="4" />
                      <rect x="12" y="6" width="4" height="4" />
                    </svg>
                  </a>
                </div>
              </div>
            {/* </div> */}
          {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductFilters;
