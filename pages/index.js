import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PageHeader from "./components/common/PageHeader";
import Breadcrumbs from "./components/common/Breadcrumbs";
import ShopSidebar from "./components/products/ShopSidebar";
import ProductFilters from "./components/products/ProductFilters";
import Product from "./components/products/product/Product";
import Pagination from "./components/products/product/Pagination";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "@/store/productSlice";
import NoContent from "./components/common/NoContent";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const products = useSelector((state) => state.products.filteredProducts);
  const dispatch = useDispatch();

  let totalProducts = products?.length;
  const [layout, setLayout] = useState("three");
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const [filters, setFilters] = useState({category:[], size:[], color:'', brand:'', price:{min:0, max:100}, sort:''});
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            const newCount = Math.min(visibleCount + 3, totalProducts); 
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
  if (filters?.category?.length === 0 && filters?.size?.length === 0 && filters?.brand === '' && filters?.color === '' && filters?.sort === '' && (filters?.price?.min == 0 && filters?.price?.max == 100)) {
    setVisibleCount(1);
    console.log('in');
    setClearFilter(false);
  }
  else {
    console.log('out');
    setClearFilter(true);
  }
  dispatch(filter({category:filters?.category, size:filters?.size, color:filters?.color, brand:filters?.brand, price:filters?.price, sort:filters?.sort}));
}, [filters?.category, filters?.size, filters?.color, filters?.brand, filters?.price, filters?.sort, dispatch]);

useEffect(() => {
  if (visibleCount > totalProducts) {
    setVisibleCount(totalProducts);
  }
}, [products, totalProducts, visibleCount]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <Header />

        <main className="main">
          <PageHeader title="List" subtitle="Shop" />
          <Breadcrumbs />
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
                  />
                  <div
                    className={`products mb-3 layout-${layout} ${
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
                <aside className="col-xl-3 order-xl-first">
                  <ShopSidebar setClearFilter={setClearFilter} clearFilter={clearFilter} setFilters={setFilters} filters={filters} />
                </aside>
              </div>
            </div>
          </div>
        </main>
      </div>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>

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
                    <a href="contact.html">Contact</a>

                    <ul>
                      <li>
                        <a href="contact.html">Contact 01</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
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
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="elements-list.html">Elements</a>
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
      {/* <div
        className="modal fade"
        id="signin-modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close"></i>
                </span>
              </button>

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
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="singin-email">
                            Username or email address *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email"
                            name="singin-email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="singin-password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password"
                            name="singin-password"
                            required
                          />
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember"
                            >
                              Remember Me
                            </label>
                          </div>

                          <a href="#" className="forgot-link">
                            Forgot Your Password?
                          </a>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google"></i>
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="register"
                      role="tabpanel"
                      aria-labelledby="register-tab"
                    >
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="register-email">
                            Your email address *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="register-email"
                            name="register-email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="register-password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="register-password"
                            name="register-password"
                            required
                          />
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="register-policy"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="register-policy"
                            >
                              I agree to the <a href="#">privacy policy</a> *
                            </label>
                          </div>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google"></i>
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
