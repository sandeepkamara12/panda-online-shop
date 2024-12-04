import React from "react";
import sizeChart from '../../../../public/sizes.json';
const ProductSize = ({ layout, productSize }) => {
  return (
    <div
      className={`product-size ${
        layout === "three" ? "justify-content-center" : ""
      }`}
    >
      {sizeChart &&
        sizeChart?.map((size) => {
          return (
            <a
              title=""
              className={`text-uppercase ${
                productSize?.includes(size) ? "active" : "disabled"
              }`}
              key={size}
            >
              {size}
            </a>
          );
        })}
    </div>
  );
};

export default ProductSize;
