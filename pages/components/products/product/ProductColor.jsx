import React from "react";

const ProductColor = ({ productColors, layout }) => {
  return (
    <div
      className={`filter-colors mb-1 ${
        layout === "three" ? "" : "align-items-start"
      }`}
    >
      {productColors &&
        productColors.length > 0 &&
        productColors?.map((color) => {
          return color ? (
            <a
              className="mb-0"
              style={{ background: `#${color}` }}
              key={color}
            ></a>
          ) : (
            ""
          );
        })}
    </div>
  );
};

export default ProductColor;
