import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemToWishlists,
  removeItemToWishlists,
} from "@/store/wishlistSlice";
import { useSelector } from "react-redux";

const ProductWishlist = ({ productId }) => {
  const wishlist = useSelector((state) => state.wishlist.wishlist.wishlist);
  let dispatch = useDispatch();

  const [userId, setUserId] = useState(null);
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);

  const checkWishlistProduct = useCallback(() => {
    const isProductInWishlists = wishlist.some(
      (item) => item.productId === productId
    );
    setIsProductInWishlist(isProductInWishlists);
  }, [wishlist, productId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("data");
      if (userData) {
        setUserId(JSON.parse(userData).userId);
        checkWishlistProduct();
      }
    }
  }, [checkWishlistProduct]);
  
  useEffect(() => {
    if (!userId) return;
    checkWishlistProduct();
  }, [wishlist, userId, checkWishlistProduct]);
  
  const addItemToWishlist = (e, productId) => {
    if (!userId) return;
    e.target.checked
      ? dispatch(addItemToWishlists({ productId }))
      : dispatch(removeItemToWishlists({ productId }));
  };
  
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     let userData = localStorage.getItem("data");
  //     if (userData) {
  //       setUserId(JSON.parse(userData).userId);
  //       checkWishlistProduct();
  //     }
  //   }
  // }, [checkWishlistProduct]);

  // useEffect(()=>{
  //   if(!userId) return;
  //   checkWishlistProduct();
  // },[wishlist, checkWishlistProduct])

  // const checkWishlistProduct = () => {
  //   const isProductInWishlists = wishlist.some(
  //     (item) => item.productId == productId
  //   );
  //   setIsProductInWishlist(isProductInWishlists);
  // }
  
  // const addItemToWishlist = (e, productId) => {
  //   if (!userId) return;
  //   e.target.checked
  //     ? dispatch(addItemToWishlists({ productId: productId}))
  //     : dispatch(
  //         removeItemToWishlists({ productId: productId})
  //       );
  // };
  return (
    <label
    className="btn-product-icon"
    title="Add to wishlist"
    htmlFor={`add-to-wishlist_${productId}`}
    >
        {/* // <div className="product-action-vertical"> */}
        <span>Add to wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isProductInWishlist?'#cc9966':'none'}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width="18"
          height="18"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <input
          type="checkbox"
          name="add-to-wishlist"
          id={`add-to-wishlist_${productId}`}
          checked={isProductInWishlist}
          onChange={(e) => addItemToWishlist(e, productId)}
        />
      {/* <a href="#" className="btn-product-icon btn-quickview btn-expandable"><span>Quick view</span></a>
      <a href="#" className="btn-product-icon btn-compare btn-expandable"><span>Compare</span></a> */}
    {/* // </div> */}
      </label>
  );
};

export default ProductWishlist;
