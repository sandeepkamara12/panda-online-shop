import Image from 'next/image'
import React from 'react'

const QuickView = () => {
  return (
    <div className="container quickView-container">
        <div className="quickView-content">
            <div className="row">
                <div className="col-lg-7 col-md-6">
                    <div className="row">
                        <div className="product-left">
                            <a href="#one" className="carousel-dot active">
                                <Image alt="hi" src="/1.jpg" width="100" height="300" />
                            </a>
                            <a href="#two" className="carousel-dot">
                                <Image alt="hi" src="/2.jpg" width="100" height="300" />
                            </a>
                            <a href="#three" className="carousel-dot">
                                <Image alt="hi" src="/3.jpg" width="100" height="300" />
                            </a>
                            <a href="#four" className="carousel-dot">
                                <Image alt="hi" src="/4.jpg" width="100" height="300" />
                            </a>
                        </div>
                        <div className="product-right">
                            <div className="owl-carousel owl-theme owl-nav-inside owl-light mb-0 owl-loaded owl-drag" data-toggle="owl" data-owl-options="{
                                'dots': false,
                                'nav': false, 
                                'URLhashListener': true,
                                'responsive': {
                                    '900': {
                                        'nav': true,
                                        'dots': true
                                    }
                                }
                            }">
                            <div className="owl-stage-outer"><div className="owl-stage">
                                <div className="owl-item cloned" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="three">
                                    <Image src="/3.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div><div className="owl-item cloned" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="four">
                                    <Image src="/4.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div><div className="owl-item active" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="one">
                                    <Image src="/1.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div><div className="owl-item" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="two">
                                    <Image src="/2.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div><div className="owl-item" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="three">
                                    <Image src="/3.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div><div className="owl-item" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="four">
                                    <Image src="/4.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div><div className="owl-item cloned" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="one">
                                    <Image src="/1.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div><div className="owl-item cloned" style={{"width": "489.344px"}}><div className="intro-slide" data-hash="two">
                                    <Image src="/2.jpg" alt="Image Desc" width="100" height="300" />
                                    <a href="popup/fullscreen.html" className="btn-fullscreen">
                                        <i className="icon-arrows"></i>
                                    </a>
                                </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><i className="icon-angle-left"></i></button><button type="button" role="presentation" className="owl-next"><i className="icon-angle-right"></i></button></div><div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <h2 className="product-title">Linen-blend dress</h2>
                    <h3 className="product-price">$60.00</h3>

                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={{"width": "20%"}}></div>
                        </div>
                        <span className="ratings-text">( 2 Reviews )</span>
                    </div>

                    <p className="product-txt">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>


                    <div className="details-filter-row product-nav product-nav-thumbs">
                        <label htmlFor="size">color:</label>
                        <a href="#" className="active">
                            <Image width="100" height="300" src="/product-1-thumb.jpg" alt="product desc" />
                        </a>
                        <a href="#">
                            <Image width="100" height="300" src="/product-1-2-thumb.jpg" alt="product desc" />
                        </a>
                    </div>

                    <div className="details-filter-row details-row-size">
                        <label htmlFor="size">Size:</label>
                        <div className="select-custom">
                            <select name="size" id="size" className="form-control">
                                {/* <option value="#" selected="selected">Select a size</option> */}
                                <option value="s">Small</option>
                                <option value="m">Medium</option>
                                <option value="l">Large</option>
                                <option value="xl">Extra Large</option>
                            </select>
                        </div>
                    </div>

                    
                    <div className="details-filter-row details-row-size">
                        <label htmlFor="qty">Qty:</label>
                        <div className="product-details-quantity">
                            {/* <input type="number" id="qty" className="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required="" style={{"display": "none"}} /> */}
                            <div className="input-group  input-spinner">
                                <div className="input-group-prepend">
                                    <button style={{"minWidth": "26px"}} className="btn btn-decrement btn-spinner" type="button">
                                        <i className="icon-minus"></i>
                                    </button>
                                </div>
                                {/* <input type="text" style={{"textAlign": "center"}} className="form-control " required="" placeholder="" /> */}
                                <div className="input-group-append">
                                    <button style={{"minWidth": "26px"}} className="btn btn-increment btn-spinner" type="button">
                                        <i className="icon-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-details-action">
                        <div className="details-action-wrapper">
                            <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                            <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                        </div>
                        <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>

                    <div className="product-details-footer">
                        <div className="product-cat">
                            <span>Category:</span>
                            <a href="#">Women</a>,
                            <a href="#">Dresses</a>,
                            <a href="#">Yellow</a>
                        </div>

                        <div className="social-icons social-icons-sm">
                            <span className="social-label">Share:</span>
                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                            <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button title="Close (Esc)" type="button" className="mfp-close"><span>×</span></button>
    </div>
  )
}

export default QuickView
