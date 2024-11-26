import Image from "next/image";
import React from "react";
import ProductBadage from "./ProductBadage";

const ProductImage = ({image, badge}) => {
  return (
   
      <figure className="product-media">
        <ProductBadage badge={badge}/>
        <a href="product.html">
          <Image
            src={`/${image}`}
            width="100"
            height="100"
            alt="Product image"
            className="product-image"
          />
        </a>
      </figure>
  );
};

export default ProductImage;
