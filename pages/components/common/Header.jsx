import Image from "next/image";
import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { removeItemFromCart } from "@/store/cartSlice";

const Header = ({ openModalFn }) => {
  const wishlistProducts = useSelector((state) => state.wishlist.wishlist.wishlist);
  const cartProductsInfo = useSelector((state) => state.cart.carts);
  
  const dispatch = useDispatch();

  const [userCartProducts, setUserCartProducts] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [userId, setUserId] = useState(null);

  const updateUserAndWishlistAndCart = useCallback(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("data");
      if (userData) {
        /* Get User Information */
        const parsedData = JSON.parse(userData);
        setUserId(parsedData.userId);
  
        /* Get Wishlist Information */
        setWishlistCount(wishlistProducts?.length);
  
        /* Get Cart Information */
        setUserCartProducts(cartProductsInfo?.cart);
        setCartCount(cartProductsInfo?.cartSummary?.totalItems);
      } else {
        setUserId(null);
        setWishlistCount(0);
        setCartCount(0);
      }
    }
  }, [wishlistProducts, cartProductsInfo]);
  
  useEffect(() => {
    updateUserAndWishlistAndCart();
  }, [updateUserAndWishlistAndCart]);

  useEffect(() => {
    updateUserAndWishlistAndCart();
  }, [wishlistProducts, userId, cartProductsInfo?.cart]);


  const logout = () => {
    updateUserAndWishlistAndCart();
    localStorage.removeItem("data");
  };

const removeItemFromCarts = (cartId) => {
  dispatch(removeItemFromCart({cartId:cartId}));
}

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li>
                    <a href="tel:#">
                      <i className="icon-phone"></i>+917986 680 517
                    </a>
                  </li>
                  <li>
                    <Link href="/wishlist" className="custom-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#333333"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        fill="none"
                        width="20"
                        height="20"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      <span className="wishlist-count text-white">
                        {wishlistCount}
                      </span>
                    </Link>
                  </li>
                  <li>
                    {userId == null ? (
                      <a href="#" onClick={openModalFn}>
                        <i className="icon-user"></i>Login
                      </a>
                    ) : (
                      <a href="#" onClick={logout}>
                        <i className="icon-user"></i>Logout
                      </a>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-middle sticky-header">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>

            <a href="index.html" className="logo">
              <Image src="/logo.png" alt="Panda Logo" width="105" height="25" />
            </a>

            <nav className="main-nav">
              <ul className="menu">
                <li>
                  <Link href="/">Shop</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <div className="header-search">
              <a
                href="#"
                className="search-toggle"
                role="button"
                title="Search"
              >
                <i className="icon-search"></i>
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search in..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="dropdown compare-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
                title="Compare Products"
                aria-label="Compare Products"
              >
                <i className="icon-random"></i>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <ul className="compare-products">
                  <li className="compare-product">
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                    <h4 className="compare-product-title">
                      <a href="product.html">Blue Night Dress</a>
                    </h4>
                  </li>
                  <li className="compare-product">
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                    <h4 className="compare-product-title">
                      <a href="product.html">White Long Skirt</a>
                    </h4>
                  </li>
                </ul>

                <div className="compare-actions">
                  <a href="#" className="action-link">
                    Clear All
                  </a>
                  <a href="#" className="btn btn-outline-primary-2">
                    <span>Compare</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown cart-dropdown custom-icon">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#333333"
                  strokeWidth={2}
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                {/* <i className="icon-shopping-cart"></i> */}
                <span className="cart-count">{cartCount ? cartCount : 0}</span>
              </a>
            {
            userCartProducts?.length > 0 &&
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  {userCartProducts?.length > 0 &&
                    userCartProducts.map((cart) => {
                      return (
                        <div className="product" data-id={cart?.id} key={`cart_${cart?.id}`}>
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">{cart?.name}</a>
                            </h4>

                            <span className="cart-product-info">
                              <span className="cart-product-qty">
                                {cart?.quantity}
                              </span>
                              x $
                              {cart?.salePrice ? cart?.salePrice : cart?.price}
                            </span>
                          </div>

                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <Image
                                src={`/${cart?.image}`}
                                width="100"
                                height="100"
                                alt="product"
                              />
                            </a>
                          </figure>
                          <a
                            onClick={()=>removeItemFromCarts(cart?.id)}
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <i className="icon-close"></i>
                          </a>
                        </div>
                      );
                    })}
                </div>

                <div className="dropdown-cart-total">
                  <span>Total</span>

                  <span className="cart-total-price">$160.00</span>
                </div>

                <div className="dropdown-cart-action">
                  <Link href="/cart" className="btn btn-primary">
                    View Cart
                  </Link>
                  <a href="checkout.html" className="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
