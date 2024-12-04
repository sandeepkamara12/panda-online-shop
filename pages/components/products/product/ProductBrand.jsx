import React from "react";
import brands from '../../../../public/brand.json'
const ProductBrand = ({brand, layout}) => {
  const matchingBrand = brands.find((b) => b.id === brand);
  return (      
    <div
    className={`product-cat text-capitalize mb-1 ${
      layout === "three" ? "" : ""
    }`}
  >
   {matchingBrand ? (
        <span className="mb-0">{matchingBrand.name}</span>
      ) : (
        <span className="mb-0">Brand not found</span>
      )}
    </div>
  );
};

export default ProductBrand;
