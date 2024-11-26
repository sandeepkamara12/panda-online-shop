import Image from "next/image";
import React from "react";
import ProductImage from "./ProductImage";
import ProductCategory from "./ProductCategory";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";
import ProductThumbnails from "./ProductThumbnails";
import ProductWishlist from "./ProductWishlist";
import ProductReview from "./ProductReview";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/productSlice";

const Product = ({product, layout}) => {
  const count = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  return (
    <>
    <div className={`product product-list ${layout === 'two' ? 'col-6' : layout === 'three' ? 'col-4' : ''}`} key={product?.id}>
      <div className={`row ${layout === 'two' || layout === 'three' ? 'flex-column align-items-center text-center' : ''}`}>
      <div className={`${layout === 'two' || layout === 'three' ? 'col-12' : 'col-6 col-lg-3'}`}>
        <ProductImage image={product?.image} badge={product?.badge} />
        </div>
        <div className={`${layout === 'two' || layout === 'three' ? 'col-12 order-lg-last' : 'col-6 col-lg-3 order-lg-last'}`}>
          <div className={`product-list-action ${layout === 'two' || layout === 'three' ? 'pt-1' : ''}`}>
            <div className={`product-price ${layout === 'two' || layout === 'three' ? 'justify-content-center' : ''}`}>${product?.price}</div>
            {/* <p>Count: {count}</p> */}
            <div className={`ratings-container ${layout==='two' || layout === 'three' ? 'justify-content-center' : ''}`}>
              <ProductReview reviewCount={product?.review_count} rating={product?.rating} />
            </div>
            {/* <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button> */}
            <div className="product-action">
              <a
                href="popup/quickView.html"
                className="btn-product btn-quickview"
                title="Quick view"
              >
                <span>quick view</span>
              </a>
              <a href="#" className="btn-product btn-compare" title="Compare">
                <span>compare</span>
              </a>
            </div>

            <a href="#" className={`btn-product btn-cart ${product?.badge === 'out-stoke' ? 'disabled' : ''}`}><span>add to cart</span></a>
          </div>
        </div>

        <div className={`${layout === 'two' || layout === 'three' ? 'col-12' : 'col-lg-6'}`}>
          <div className="product-body product-action-inner">
            <ProductWishlist />
            <ProductCategory category={product?.category} />
            <ProductTitle title={product?.name} />
            <div className={`product-content ${layout === 'two' || layout === 'three' ? 'd-none' : ''}`}>
              <ProductDescription description={product?.description} />
            </div>
            <div className={`product-nav product-nav-thumbs ${layout === 'two' || layout === 'three' ? 'd-none mt-2 justify-content-center' : ''}`}>
              <ProductThumbnails thumbnails={product?.thumbnails} />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="products mb-3">
      <div className="row justify-content-center">
          <div className="col-6">
              <div className="product product-7 text-center">
                  <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                          <Image src="/product-4.jpg" alt="Product image" className="product-image" width="100" height="100" />
                      </a>

                      <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                      </div>

                      <div className="product-action">
                          <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                      </div>
                  </figure>

                  <div className="product-body">
                      <div className="product-cat">
                          <a href="#">Women</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">Brown paperbag waist pencil skirt</a></h3>
                      <div className="product-price">
                          $60.00
                      </div>
                      <div className="ratings-container">
                          <div className="ratings">
                              <div className="ratings-val" style={{width: "20%"}}></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                      </div>

                      <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                              <Image src="/product-4-thumb.jpg" alt="product desc" width="100" height="100" />
                          </a>
                          <a href="#">
                              <Image src="/product-4-2-thumb.jpg" alt="product desc" width="100" height="100" />
                          </a>
                          <a href="#">
                              <Image src="/product-4-3-thumb.jpg" alt="product desc" width="100" height="100" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
  </div> */}

    </>
  );
};

export default Product;
