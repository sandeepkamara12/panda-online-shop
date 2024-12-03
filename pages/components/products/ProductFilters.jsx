import React from "react";
import Select, { components } from "react-select";
const options = [
  { value: "", label: "All" },
  { value: "best-seller", label: "Best Seller" },
  { value: "new-arrival", label: "Newest" },
  { value: "sale", label: "Sale" },
  { value: "limited", label: "Limited" },
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
    width: "200px",
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
}) => {
  const selectSortToFilterProducts = (option) => {
    setFilters(prev=>{
      return {
        ...prev,
        sort:option?.value
      }
    });
  };
  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          Showing{" "}
          <span>
            {productVisibleCount} of {totalProducts}
          </span>{" "}
          Products
        </div>
      </div>

      <div className="toolbox-right">
        <a className={`btn-layout ${layout === "one" ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 348 348"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M286.646 189.628C291.173 193.575 291.644 200.445 287.697 204.972L213.879 289.647C210.899 293.064 206.111 294.275 201.866 292.683C197.62 291.092 194.807 287.034 194.807 282.5V79.5C194.807 73.494 199.676 68.625 205.682 68.625C211.688 68.625 216.557 73.494 216.557 79.5V253.476L271.303 190.68C275.249 186.153 282.119 185.682 286.646 189.628Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.3552 172.371C64.8283 168.424 64.3585 161.555 68.3054 157.029L142.123 72.3541C145.103 68.9363 149.89 67.726 154.137 69.3169C158.382 70.9079 161.195 74.9663 161.195 79.5004V282.5C161.195 288.506 156.326 293.375 150.32 293.375C144.314 293.375 139.445 288.506 139.445 282.5V108.524L84.6991 171.321C80.7522 175.848 73.8836 176.318 69.3552 172.371Z"
            />
          </svg>
        </a>
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <div className="select-custom">
            <Select
              options={options}
              placeholder="Select"
              onChange={selectSortToFilterProducts}
              styles={customStyles}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              instanceId="shop-sorting-filter"
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
            className={`btn-layout ${layout === "three" ? "active" : ""}`}
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
    </div>
  );
};

export default ProductFilters;
