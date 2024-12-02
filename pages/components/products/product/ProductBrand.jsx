import React from "react";
import brands from '../../../../public/brand.json'
const ProductBrand = ({brand}) => {
  const matchingBrand = brands.find((b) => b.id === brand);
  return (      
    <>
   {matchingBrand ? (
        <span className="mb-0">{matchingBrand.name}</span>
      ) : (
        <span className="mb-0">Brand not found</span>
      )}
    </>
  );
};

export default ProductBrand;
