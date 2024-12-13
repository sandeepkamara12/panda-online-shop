import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Breadcrumbs from "./components/common/Breadcrumbs";
import Product from "./components/products/product/Product";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [userId, setUserId] = useState(null);

  useEffect(()=>{
    if(typeof window !== undefined) {
      const userData = localStorage.getItem('data');
      setUserId(JSON.parse(userData).userId);
    }
  },[])

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
          <Breadcrumbs />

          <div className="page-content">
            <div className="container">
              <table className="table table-wishlist table-mobile">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <a href="#">
                            <Image
                              src="/product-8-thumb.jpg"
                              alt="Product image"
                              width="60"
                              height="60"
                            />
                          </a>
                        </figure>

                        <h3 className="product-title">
                          <a href="#">Beige knitted elastic runner shoes</a>
                        </h3>
                      </div>
                    </td>
                    <td className="price-col">$84.00</td>
                    <td className="stock-col">
                      <span className="in-stock">In stock</span>
                    </td>
                 
                    <td className="remove-col">
                      <button className="btn-remove">
                        <i className="icon-close"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="wishlist-share">
                <div className="social-icons social-icons-sm mb-2">
                  <label className="social-label">Share on:</label>
                  <a
                    href="#"
                    className="social-icon"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Youtube"
                    target="_blank"
                  >
                    <i className="icon-youtube"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <Script src="./scripts/jquery.min.js"></Script>
      <Script src="./scripts/bootstrap.bundle.min.js"></Script>
      <Script src="./scripts/jquery.hoverIntent.min.js"></Script>
      <Script src="./scripts/jquery.waypoints.min.js"></Script>
      <Script src="./scripts/superfish.min.js"></Script>
      <Script src="./scripts/owl.carousel.min.js"></Script>
      <Script src="./scripts/wNumb.js"></Script>
      <Script src="./scripts/bootstrap-input-spinner.js"></Script>
      <Script src="./scripts/jquery.magnific-popup.min.js"></Script>
      <Script src="./scripts/nouislider.min.js"></Script>
      <Script src="./scripts/main.js"></Script>
    </>
  );
}
