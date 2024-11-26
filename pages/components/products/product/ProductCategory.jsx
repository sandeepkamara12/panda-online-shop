import React from "react";

const ProductCategory = ({category}) => {
  return (
    <div className="product-cat text-capitalize">
      <a href="#">{category}</a>
    </div>
  );
};

export default ProductCategory;
