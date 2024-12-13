import Image from "next/image";
import React from "react";
import ProductBadage from "./ProductBadage";
import ProductWishlist from "./ProductWishlist";
// import ProductWishlist from '@/components/ProductWishlist';
import Countdown from "../../common/Countdown";

const ProductImage = ({ image, badge, createdAt, quantity, productId }) => {
  return (
    <figure className="product-media">
      <ProductBadage badge={badge} quantity={quantity} />
      <Countdown />
      <div>{new Date(createdAt).toDateString()}</div>
      <a href="product.html">
        <Image
          src={`/${image}`}
          width="277"
          height="288"
          alt="Product image"
          className="product-image"
        />
      </a>

      <ProductWishlist productId={productId} />
      {/* <div className="product-action-vertical">
            <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
            <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
            <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
        </div> */}
    </figure>
  );
};

export default ProductImage;
