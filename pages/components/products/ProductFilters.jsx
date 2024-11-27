import React from "react";
import Select from 'react-select';
const options = [
  { value: 'all', label: 'All' },
  { value: 'best-seller', label: 'Best Seller' },
  { value: 'newest', label: 'Newest' },
  { value: 'sale', label: 'Sale' },
  { value: 'limited', label: 'Limited' },
  { value: 'lth', label: 'Price Low to High' },
  { value: 'htl', label: 'Price High to Low' }
]
const customStyles = {
  control: (base) => ({
    ...base,
    width: '150px',
    fontSize: '1.3rem',
    borderColor: '#ebebeb',
    borderWidth: 1,
    fontFamily:"'Poppins', sans-serif",
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
const ProductFilters = ({setLayout, layout, productVisibleCount, totalProducts}) => {
  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          Showing <span>{productVisibleCount} of {totalProducts}</span> Products
        </div>
      </div>

      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <div className="select-custom">
            <select name="sortby" id="sortby" className="form-control">
              {/* <option value="popularity" selected="selected">Most Popular</option> */}
              <option value="popularity">All</option>
              <option value="popularity">Best Seller</option>
              <option value="rating">Newest</option>
              <option value="date">Sale</option>
              <option value="date">Limited</option>
              <option value="date">Price Low to High</option>
              <option value="date">Price High to Low</option>
            </select>
            <Select options={options}
             placeholder="Select"
              styles={customStyles}
             />
          </div>
        </div>
        <div className="toolbox-layout d-none d-md-block">
          <a onClick={()=>setLayout('one')} className={`btn-layout ${layout === 'one' ? 'active': ''}`}>
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="10" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="10" height="4" />
            </svg>
          </a>

          <a onClick={()=>setLayout('three')} className={`btn-layout ${layout === 'three' ? 'active': ''}`}>
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
