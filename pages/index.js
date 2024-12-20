import Head from "next/head";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Breadcrumbs from "./components/common/Breadcrumbs";
import ShopSidebar from "./components/products/ShopSidebar";
import ProductFilters from "./components/products/ProductFilters";
import Product from "./components/products/product/Product";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "@/store/productSlice";
import NoContent from "./components/common/NoContent";
import ScrollToTop from "./components/common/ScrollToTop";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import Modal from "./components/common/Modal";
import { ToastContainer, toast } from "react-toastify";


export default function Home() {
  const products = useSelector((state) => state.products.filteredProducts);
  const cartProducts = useSelector((state) => state.cart.carts?.cart);
  const dispatch = useDispatch();

  let totalProducts = products?.length;
  const [layout, setLayout] = useState("three");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    brand: [],
    price: { min: 0, max: 5000 },
    sort: "",
  });
  const [isItemAddedToCart, setIsItemAddedToCart] = useState({
    isAdded: false,
    content: null,
  });
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            const newCount = Math.min(visibleCount + 6, totalProducts);
            setVisibleCount(newCount);
            setIsLoading(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [totalProducts, visibleCount, isLoading]);

  useEffect(() => {
    if (
      filters?.category?.length === 0 &&
      filters?.size?.length === 0 &&
      filters?.brand?.length === 0 &&
      filters?.color?.length === 0 &&
      filters?.sort === "" &&
      filters?.price?.min == 0 &&
      filters?.price?.max == 5000
    ) {
      setVisibleCount(6);
      setClearFilter(false);
    } else {
      setClearFilter(true);
    }
    dispatch(
      filter({
        category: filters?.category,
        size: filters?.size,
        color: filters?.color,
        brand: filters?.brand,
        price: filters?.price,
        sort: filters?.sort,
      })
    );
  }, [
    filters?.category,
    filters?.size,
    filters?.color,
    filters?.brand,
    filters?.price,
    filters?.sort,
    dispatch,
  ]);

  useEffect(() => {
    if (visibleCount > totalProducts) {
      setVisibleCount(totalProducts);
    }
  }, [products, totalProducts, visibleCount]);

  const closeModalFn = () => {
    document.body.classList.remove('modal-open');
    document.body.classList.remove('adjust-padding');
    setOpenModal(false);
  };

  const openModalFn = () => {
    document.body.classList.add('modal-open');
    document.body.classList.add('adjust-padding');
    setOpenModal(true);
  };

  useEffect(() => {
    if (isItemAddedToCart?.content) {
      let userCartData = isItemAddedToCart?.content;
      let updatedQuantity =
        cartProducts?.length > 0 &&
        cartProducts?.filter(
          (item) =>
            item?.productId == userCartData?.products?.id ? item?.quantity :''
        );
      if(updatedQuantity!==null) {
        if(updatedQuantity[0]?.quantity < 10) {
          toast.success(
            <span>
            <strong>{userCartData?.products?.name}</strong>
            <strong className="toast-quantity">Quantity: {updatedQuantity[0]?.quantity}</strong> has been added to the cart!
          </span>,
            {
              position: "top-right",
              autoClose: 1000,
              className: "toast-content",
            }
          );
        }
        else {
          toast.error(
            <span>
            <strong>{userCartData?.products?.name}</strong>
            You cannot add more than <strong className="d-inline-block">{updatedQuantity[0]?.quantity}</strong> items to the cart!
          </span>,
            {
              position: "top-right",
              autoClose: 1000,
              className: "toast-content",
            }
          );
        }
      }
    }
    setIsItemAddedToCart(false);
  }, [isItemAddedToCart]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
       
        <Header openModalFn={openModalFn} />

        <main className="main">
          <Breadcrumbs />
          <ToastContainer />
          <div className="page-content">
            <div className="container">
              <div className="row">
                <div className="col-xl-9">
                  <ProductFilters
                    setLayout={setLayout}
                    layout={layout}
                    productVisibleCount={visibleCount}
                    totalProducts={totalProducts}
                    setFilters={setFilters}
                    filters={filters}
                    setClearFilter={setClearFilter}
                    clearFilter={clearFilter}
                  />
                  <div
                    className={`products py-4 layout-${layout} ${
                      layout === "three"
                        ? !totalProducts
                          ? "mx-0 row"
                          : "row"
                        : ""
                    }`}
                  >
                    {products?.length > 0 ? (
                      products
                        ?.slice(0, visibleCount)
                        .map((product, index) => (
                          <Product
                            product={product}
                            key={index}
                            layout={layout}
                            setIsItemAddedToCart={setIsItemAddedToCart}
                          />
                        ))
                    ) : (
                      <NoContent />
                    )}
                  </div>

                  {visibleCount < products.length && (
                    <i
                      ref={loaderRef}
                      className="icon-spinner d-block text-center text-lg rotate-icon"
                    ></i>
                  )}
                  {/* <Pagination start={startIndex} end={endIndex} totalProducts={totalProducts} pageSize={pageSize} /> */}
                </div>
                <ShopSidebar
                  clearFilter={clearFilter}
                  setClearFilter={setClearFilter}
                  setFilters={setFilters}
                  filters={filters}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <ScrollToTop />

      <div className="mobile-menu-overlay"></div>

      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search in..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search"></i>
            </button>
          </form>

          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="category.html">Shop</a>
              </li>
              <li>
                <a href="" className="sf-with-ul">
                  About
                </a>
              </li>
              <li>
                <a href="" className="sf-with-ul">
                  Contact
                </a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="about.html">About</a>

                    <ul>
                      <li>
                        <a href="about.html">About 01</a>
                      </li>
                      <li>
                        <a href="about-2.html">About 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <Modal openModal={openModal} closeModalFn={closeModalFn}>
        <div className="form-box">
          <div className="form-tab">
            <ul className="nav nav-pills nav-fill" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="signin-tab"
                  data-toggle="tab"
                  href="#signin"
                  role="tab"
                  aria-controls="signin"
                  aria-selected="true"
                >
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="register-tab"
                  data-toggle="tab"
                  href="#register"
                  role="tab"
                  aria-controls="register"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
            </ul>
            <div className="tab-content" id="tab-content-5">
              <div
                className="tab-pane fade show active"
                id="signin"
                role="tabpanel"
                aria-labelledby="signin-tab"
              >
                <Login closeModalFn={closeModalFn} />
              </div>
              <div
                className="tab-pane fade"
                id="register"
                role="tabpanel"
                aria-labelledby="register-tab"
              >
                <Register />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Script src="./scripts/jquery.min.js"></Script>
      <Script src="./scripts/bootstrap.bundle.min.js"></Script>
      <Script src="./scripts/jquery.hoverIntent.min.js"></Script>
      <Script src="./scripts/jquery.waypoints.min.js"></Script>
      <Script src="./scripts/superfish.min.js"></Script>
      <Script src="./scripts/owl.carousel.min.js"></Script>
      {/* <Script src="./scripts/wNumb.js"></Script> */}
      <Script src="./scripts/bootstrap-input-spinner.js"></Script>
      <Script src="./scripts/jquery.magnific-popup.min.js"></Script>
      {/* <Script src="./scripts/nouislider.min.js"></Script> */}
      <Script src="./scripts/main.js"></Script>
    </>
  );
}
