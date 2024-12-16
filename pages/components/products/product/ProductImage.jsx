import Image from "next/image";
import React from "react";
import ProductBadage from "./ProductBadage";
import ProductWishlist from "./ProductWishlist";
// import ProductWishlist from '@/components/ProductWishlist';
import Countdown from "../../common/Countdown";
import ProductColor from "./ProductColor";


const ProductImage = ({
  layout,
  image,
  badge,
  createdAt,
  quantity,
  productId,
  productColors
}) => {
  return (
    <figure className="product-media">
      <ProductBadage badge={badge} quantity={quantity} />
      {/* <Countdown /> */}
      {/* <div>{new Date(createdAt).toDateString()}</div> */}
      <a href="product.html">
        <Image
          src={`/${image}`}
          width="277"
          height="288"
          alt="Product image"
          className="product-image"
        />
      </a>
      <ProductColor productColors={productColors} layout={layout} />
      <div className="product-action-vertical">
        <ProductWishlist productId={productId} />
        {layout === "three" ? (
          <>
            <a
              href="popup/quickView.html"
              className="btn-product-icon btn-quickview"
              title="Quick view"
            >
              <span>Quick view</span>
            </a>
            <a
              href="#"
              className="btn-product-icon btn-compare"
              title="Compare"
            >
              <span>Compare</span>
            </a>
          </>
        ) : (
          ""
        )}
      </div>
      {/* <div class="product-action">
        <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
    </div> */}
    </figure>
  );
};

export default ProductImage;
