import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          {/* <div className="header-left">
            <div className="header-dropdown">
              <a href="#">Usd</a>
              <div className="header-menu">
                <ul>
                  <li>
                    <a href="#">Eur</a>
                  </li>
                  <li>
                    <a href="#">Usd</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header-dropdown">
              <a href="#">Eng</a>
              <div className="header-menu">
                <ul>
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li>
                    <a href="tel:#">
                      <i className="icon-phone"></i>Call: +917986 680 517
                    </a>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="icon-heart-o"></i>Wishlist <span>(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#signin-modal" data-toggle="modal">
                      <i className="icon-user"></i>Login
                    </a>
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
              <Image src="/logo.png" alt="Molla Logo" width="105" height="25" />
            </a>

            <nav className="main-nav">
              <ul className="menu">
                <li>
                  <a href="category.html">Shop</a>
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

            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="icon-shopping-cart"></i>
                <span className="cart-count">2</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>

                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $84.00
                      </span>
                    </div>

                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <Image
                          src="/product-1.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                  </div>

                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h4>

                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $76.00
                      </span>
                    </div>

                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <Image
                          src="/product-2.jpg"
                          width="100"
                          height="100"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                  </div>
                </div>

                <div className="dropdown-cart-total">
                  <span>Total</span>

                  <span className="cart-total-price">$160.00</span>
                </div>

                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-primary">
                    View Cart
                  </a>
                  <a href="checkout.html" className="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
