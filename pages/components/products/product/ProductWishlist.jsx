import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemToWishlists,
  removeItemToWishlists,
} from "@/store/wishlistSlice";
import { useSelector } from "react-redux";

const ProductWishlist = ({ productId }) => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  let dispatch = useDispatch();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let userData = localStorage.getItem("data");
      if(userData) {
        setUserId(JSON.parse(userData).userId)
      }
    }
  }, []);
  
  const isProductInWishlist = 
    wishlist.some(
      (item) => item.productId == productId && item.userId === userId
    );

  const addItemToWishlist = (e, productId) => {
    if (!userId) return;
    console.log(e.target.checked, "target");
    e.target.checked
      ? dispatch(addItemToWishlists({ productId: productId, userId: userId }))
      : dispatch(removeItemToWishlists({ productId: productId, userId: userId }));
  };
  return (
    <div className="product-action-vertical">
      <label
        className="btn-product-icon btn-wishlist btn-expandable"
        htmlFor={`add-to-wishlist_${productId}`}
      >
        <span>Add to wishlist</span>
        <input
          type="checkbox"
          name="add-to-wishlist"
          id={`add-to-wishlist_${productId}`}
          checked={isProductInWishlist}
          onChange={(e) => addItemToWishlist(e, productId)}
        />
      </label>
      {/* <a href="#" className="btn-product-icon btn-quickview btn-expandable"><span>Quick view</span></a>
      <a href="#" className="btn-product-icon btn-compare btn-expandable"><span>Compare</span></a> */}
    </div>
  );
};

export default ProductWishlist;
