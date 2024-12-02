import React from "react";

const ProductReview = ({reviewCount, rating}) => {
  return (
    <>
      <div className="ratings">
        <div className="ratings-val" style={{ width: rating * 20 + '%' }}></div>
      </div>
      <span className="ratings-text">( {reviewCount} Reviews )</span>
    </>
  );
};

export default ProductReview;
