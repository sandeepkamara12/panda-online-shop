import React from "react";
// import sizeChart from '../../../../public/sizes.json';
import { useSelector } from "react-redux";

const ProductSize = ({ layout, productSize }) => {
  const sizeChart = useSelector((state) => state.sizes.sizes);
  return (
    <div
      className={`product-size ${
        layout === "three" ? "" : ""
      }`}
    >
      {sizeChart.length>0 &&
        sizeChart?.map((size) => {
          return (
            <a
              title=""
              className={`text-uppercase ${
                productSize?.includes(size?.name) ? "active" : "disabled"
              }`}
              key={size?.name}
            >
              {size?.name}
            </a>
          );
        })}
    </div>
  );
};

export default ProductSize;
