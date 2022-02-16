import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <>
        <main>
          {/* Header */}
          <header
            id="js-header"
            className="u-header u-header--static u-shadow-v19"
          >
            {/* Top Bar */}
            <div className="u-header__section g-brd-bottom g-brd-gray-light-v4 g-bg-black g-transition-0_3">
              <div className="container">
                <div className="row justify-content-between align-items-center g-mx-0--lg">
                  <div className="col-sm-auto g-hidden-sm-down">
                    {/* Social Icons */}
                    <ul className="list-inline g-py-14 mb-0">
                      <li className="list-inline-item">
                        <a
                          className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                          href="#"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                          href="#"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                          href="#"
                        >
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                          href="#"
                        >
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="g-color-white-opacity-0_8 g-color-primary--hover g-pa-3"
                          href="#"
                        >
                          <i className="fa fa-google" />
                        </a>
                      </li>
                    </ul>
                    {/* End Social Icons */}
                  </div>
                  <div className="col-sm-auto g-hidden-sm-down g-color-white-opacity-0_6 g-font-weight-400 g-pl-15 g-pl-0--sm g-py-14">
                    <i className="icon-communication-163 u-line-icon-pro g-font-size-18 g-valign-middle g-color-white-opacity-0_8 g-mr-10 g-mt-minus-2" />
                    8 800 1234 4321
                  </div>
                  <div className="col-sm-auto g-pos-rel g-py-14">
                    {/* List */}
                    <ul className="list-inline g-pt-1 mb-0">
                      {/* Currency */}
                      <li className="list-inline-item g-pos-rel">
                        <a
                          id="currency-dropdown-invoker-2"
                          className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                          href="#"
                          aria-controls="currency-dropdown-2"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-dropdown-event="hover"
                          data-dropdown-target="#currency-dropdown-2"
                          data-dropdown-type="css-animation"
                          data-dropdown-duration={300}
                          data-dropdown-hide-on-scroll="false"
                          data-dropdown-animation-in="fadeIn"
                          data-dropdown-animation-out="fadeOut"
                        >
                          <i className="g-ml-20--md mr-2 fa fa-euro" />
                          Euro
                        </a>
                        <ul
                          id="currency-dropdown-2"
                          className="list-unstyled u-shadow-v29 g-pos-abs g-left-0 g-bg-white g-width-160 g-pb-5 g-mt-19 g-z-index-4"
                          aria-labelledby="currency-dropdown-invoker-2"
                        >
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <i className="mr-2 fa fa-euro" />
                              Euro
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <i className="mr-2 fa fa-dollar" />
                              US Dollars
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <i className="mr-2 fa fa-gbp" />
                              GBP
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <i className="mr-2 fa fa-yen" />
                              Yen
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* End Currency */}
                      <li className="list-inline-item g-color-white-opacity-0_3 g-mx-4">
                        |
                      </li>
                      {/* Language */}
                      <li className="list-inline-item g-pos-rel">
                        <a
                          id="languages-dropdown-invoker-2"
                          className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                          href="#"
                          aria-controls="languages-dropdown-2"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-dropdown-event="hover"
                          data-dropdown-target="#languages-dropdown-2"
                          data-dropdown-type="css-animation"
                          data-dropdown-duration={300}
                          data-dropdown-hide-on-scroll="false"
                          data-dropdown-animation-in="fadeIn"
                          data-dropdown-animation-out="fadeOut"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={11}
                            width={27}
                            viewBox="0 0 640 480"
                          >
                            <defs>
                              <clipPath id="a">
                                <path
                                  fillOpacity=".67"
                                  d="M-85.333 0h682.67v512h-682.67z"
                                />
                              </clipPath>
                            </defs>
                            <g
                              clipPath="url(#a)"
                              transform="translate(80) scale(.94)"
                            >
                              <g strokeWidth="1pt">
                                <path
                                  fill="#006"
                                  d="M-256 0H768.02v512.01H-256z"
                                />
                                <path
                                  d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z"
                                  fill="#fff"
                                />
                                <path
                                  d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z"
                                  fill="#fff"
                                />
                                <path
                                  d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z"
                                  fill="#c00"
                                />
                              </g>
                            </g>
                          </svg>
                          English
                        </a>
                        <ul
                          id="languages-dropdown-2"
                          className="list-unstyled u-shadow-v29 g-pos-abs g-left-0 g-bg-white g-width-160 g-pb-5 g-mt-19 g-z-index-2"
                          aria-labelledby="languages-dropdown-invoker-2"
                        >
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <svg
                                className="mr-1 g-ml-minus-10"
                                xmlns="http://www.w3.org/2000/svg"
                                height={11}
                                width={27}
                                viewBox="0 0 640 480"
                              >
                                <defs>
                                  <clipPath id="a">
                                    <path
                                      fillOpacity=".67"
                                      d="M-85.333 0h682.67v512h-682.67z"
                                    />
                                  </clipPath>
                                </defs>
                                <g
                                  clipPath="url(#a)"
                                  transform="translate(80) scale(.94)"
                                >
                                  <g strokeWidth="1pt">
                                    <path
                                      fill="#006"
                                      d="M-256 0H768.02v512.01H-256z"
                                    />
                                    <path
                                      d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z"
                                      fill="#fff"
                                    />
                                    <path
                                      d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z"
                                      fill="#fff"
                                    />
                                    <path
                                      d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z"
                                      fill="#c00"
                                    />
                                  </g>
                                </g>
                              </svg>
                              English
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <svg
                                className="mr-1 g-ml-minus-10"
                                xmlns="http://www.w3.org/2000/svg"
                                height={11}
                                width={27}
                                viewBox="0 0 640 480"
                              >
                                <g strokeWidth="1pt" fillRule="evenodd">
                                  <path fill="#fff" d="M0 0h640v480H0z" />
                                  <path fill="#00267f" d="M0 0h213.33v480H0z" />
                                  <path
                                    fill="#f31830"
                                    d="M426.67 0H640v480H426.67z"
                                  />
                                </g>
                              </svg>
                              Spanish
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <svg
                                className="mr-1 g-ml-minus-10"
                                xmlns="http://www.w3.org/2000/svg"
                                height={11}
                                width={27}
                                viewBox="0 0 640 480"
                              >
                                <g fillRule="evenodd" strokeWidth="1pt">
                                  <path fill="#fff" d="M0 0h640v480H0z" />
                                  <path
                                    fill="#0039a6"
                                    d="M0 160.003h640V480H0z"
                                  />
                                  <path
                                    fill="#d52b1e"
                                    d="M0 319.997h640V480H0z"
                                  />
                                </g>
                              </svg>
                              Russian
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="#"
                            >
                              <svg
                                className="mr-1 g-ml-minus-10"
                                xmlns="http://www.w3.org/2000/svg"
                                height={11}
                                width={27}
                                viewBox="0 0 640 480"
                              >
                                <path
                                  fill="#ffce00"
                                  d="M0 320h640v160.002H0z"
                                />
                                <path d="M0 0h640v160H0z" />
                                <path fill="#d00" d="M0 160h640v160H0z" />
                              </svg>
                              German
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* End Language */}
                    </ul>
                    {/* End List */}
                  </div>
                  <div className="col-sm-auto g-pos-rel g-py-14">
                    {/* List */}
                    <ul className="list-inline g-overflow-hidden g-pt-1 g-mx-minus-4 mb-0">
                      <li className="list-inline-item g-mx-4">
                        <a
                          className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                          href="page-our-stores-1.html"
                        >
                          Our Stores
                        </a>
                      </li>
                      <li className="list-inline-item g-color-white-opacity-0_3 g-mx-4">
                        |
                      </li>
                      <li className="list-inline-item g-mx-4">
                        <a
                          className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                          href="page-help-1.html"
                        >
                          Help
                        </a>
                      </li>
                      <li className="list-inline-item g-color-white-opacity-0_3 g-mx-4">
                        |
                      </li>
                      {/* Account */}
                      <li className="list-inline-item">
                        <a
                          id="account-dropdown-invoker-2"
                          className="g-color-white-opacity-0_6 g-color-primary--hover g-font-weight-400 g-text-underline--none--hover"
                          href="#"
                          aria-controls="account-dropdown-2"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-dropdown-event="hover"
                          data-dropdown-target="#account-dropdown-2"
                          data-dropdown-type="css-animation"
                          data-dropdown-duration={300}
                          data-dropdown-hide-on-scroll="false"
                          data-dropdown-animation-in="fadeIn"
                          data-dropdown-animation-out="fadeOut"
                        >
                          Account
                        </a>
                        <ul
                          id="account-dropdown-2"
                          className="list-unstyled u-shadow-v29 g-pos-abs g-bg-white g-width-160 g-pb-5 g-mt-19 g-z-index-2"
                          aria-labelledby="account-dropdown-invoker-2"
                        >
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="page-login-1.html"
                            >
                              Login
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="page-signup-1.html"
                            >
                              Signup
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="page-wishlist-1.html"
                            >
                              Wishlist
                            </a>
                          </li>
                          <li>
                            <a
                              className="d-block g-color-black g-color-primary--hover g-text-underline--none--hover g-font-weight-400 g-py-5 g-px-20"
                              href="page-orders-1.html"
                            >
                              Your Orders
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* End Account */}
                    </ul>
                    {/* End List */}
                  </div>
                  <div className="col-sm-auto g-pr-15 g-pr-0--sm">
                    {/* Basket */}
                    <div className="u-basket d-inline-block g-z-index-3">
                      <div className="g-py-10 g-px-6">
                        <a
                          href="#"
                          id="basket-bar-invoker"
                          className="u-icon-v1 g-color-white-opacity-0_8 g-color-primary--hover g-font-size-17 g-text-underline--none--hover"
                          aria-controls="basket-bar"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-dropdown-event="hover"
                          data-dropdown-target="#basket-bar"
                          data-dropdown-type="css-animation"
                          data-dropdown-duration={300}
                          data-dropdown-hide-on-scroll="false"
                          data-dropdown-animation-in="fadeIn"
                          data-dropdown-animation-out="fadeOut"
                        >
                          <span
                            className="u-badge-v1--sm g-color-white g-bg-primary g-font-size-11 g-line-height-1_4 g-rounded-50x g-pa-4"
                            style={{
                              top: "7px !important",
                              right: "3px !important",
                            }}
                          >
                            4
                          </span>
                          <i className="icon-hotel-restaurant-105 u-line-icon-pro" />
                        </a>
                      </div>
                      <div
                        id="basket-bar"
                        className="u-basket__bar u-dropdown--css-animation u-dropdown--hidden g-text-transform-none g-bg-white g-brd-around g-brd-gray-light-v4"
                        aria-labelledby="basket-bar-invoker"
                      >
                        <div className="g-brd-bottom g-brd-gray-light-v4 g-pa-15 g-mb-10">
                          <span className="d-block h6 text-center text-uppercase mb-0">
                            Shopping Cart
                          </span>
                        </div>
                        <div className="js-scrollbar g-height-200">
                          {/* Product */}
                          <div className="u-basket__product g-brd-none g-px-20">
                            <div className="row no-gutters g-pb-5">
                              <div className="col-4 pr-3">
                                <a className="u-basket__product-img" href="#">
                                  <img
                                    className="img-fluid"
                                    src="../assets/img-temp/150x150/img1.jpg"
                                    alt="Image Description"
                                  />
                                </a>
                              </div>
                              <div className="col-8">
                                <h6 className="g-font-weight-400 g-font-size-default">
                                  <a
                                    className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                    href="#"
                                  >
                                    Black Glasses
                                  </a>
                                </h6>
                                <small className="g-color-primary g-font-size-12">
                                  1 x $22.00
                                </small>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="u-basket__product-remove"
                            >
                              ×
                            </button>
                          </div>
                          {/* End Product */}
                          {/* Product */}
                          <div className="u-basket__product g-brd-none g-px-20">
                            <div className="row no-gutters g-pb-5">
                              <div className="col-4 pr-3">
                                <a className="u-basket__product-img" href="#">
                                  <img
                                    className="img-fluid"
                                    src="../assets/img-temp/150x150/img2.jpg"
                                    alt="Image Description"
                                  />
                                </a>
                              </div>
                              <div className="col-8">
                                <h6 className="g-font-weight-400 g-font-size-default">
                                  <a
                                    className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                    href="#"
                                  >
                                    Gloves
                                  </a>
                                </h6>
                                <small className="g-color-primary g-font-size-12">
                                  2 x $55.00
                                </small>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="u-basket__product-remove"
                            >
                              ×
                            </button>
                          </div>
                          {/* End Product */}
                          {/* Product */}
                          <div className="u-basket__product g-brd-none g-px-20">
                            <div className="row no-gutters g-pb-5">
                              <div className="col-4 pr-3">
                                <a className="u-basket__product-img" href="#">
                                  <img
                                    className="img-fluid"
                                    src="../assets/img-temp/150x150/img3.jpg"
                                    alt="Image Description"
                                  />
                                </a>
                              </div>
                              <div className="col-8">
                                <h6 className="g-font-weight-400 g-font-size-default">
                                  <a
                                    className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                    href="#"
                                  >
                                    Chukka Shoes
                                  </a>
                                </h6>
                                <small className="g-color-primary g-font-size-12">
                                  1 x $199.00
                                </small>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="u-basket__product-remove"
                            >
                              ×
                            </button>
                          </div>
                          {/* End Product */}
                          {/* Product */}
                          <div className="u-basket__product g-brd-none g-px-20">
                            <div className="row no-gutters g-pb-5">
                              <div className="col-4 pr-3">
                                <a className="u-basket__product-img" href="#">
                                  <img
                                    className="img-fluid"
                                    src="../assets/img-temp/150x150/img4.jpg"
                                    alt="Image Description"
                                  />
                                </a>
                              </div>
                              <div className="col-8">
                                <h6 className="g-font-weight-400 g-font-size-default">
                                  <a
                                    className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                    href="#"
                                  >
                                    Desk Clock
                                  </a>
                                </h6>
                                <small className="g-color-primary g-font-size-12">
                                  1 x $12.00
                                </small>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="u-basket__product-remove"
                            >
                              ×
                            </button>
                          </div>
                          {/* End Product */}
                        </div>
                        <div className="clearfix g-px-15">
                          <div className="row align-items-center text-center g-brd-y g-brd-gray-light-v4 g-font-size-default">
                            <div className="col g-brd-right g-brd-gray-light-v4">
                              <strong className="d-block g-py-10 text-uppercase g-color-main g-font-weight-500 g-py-10">
                                Total
                              </strong>
                            </div>
                            <div className="col">
                              <strong className="d-block g-py-10 g-color-main g-font-weight-500 g-py-10">
                                $433.00
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="g-pa-20">
                          <div className="text-center g-mb-15">
                            <a
                              className="text-uppercase g-color-primary g-color-main--hover g-font-weight-400 g-font-size-13 g-text-underline--none--hover"
                              href="page-checkout-1.html"
                            >
                              View Cart
                              <i className="ml-2 icon-finance-100 u-line-icon-pro" />
                            </a>
                          </div>
                          <a
                            className="btn btn-block u-btn-black g-brd-primary--hover g-bg-primary--hover g-font-size-12 text-uppercase rounded g-py-10"
                            href="page-checkout-1.html"
                          >
                            Proceed to Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Basket */}
                    {/* Search */}
                    <div className="d-inline-block g-valign-middle">
                      <div className="g-py-10 g-pl-15">
                        <a
                          href="#"
                          className="g-color-white-opacity-0_8 g-color-primary--hover g-font-size-17 g-text-underline--none--hover"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-dropdown-event="click"
                          aria-controls="searchform-1"
                          data-dropdown-target="#searchform-1"
                          data-dropdown-type="css-animation"
                          data-dropdown-duration={300}
                          data-dropdown-animation-in="fadeInUp"
                          data-dropdown-animation-out="fadeOutDown"
                        >
                          <i className="g-pos-rel g-top-3 icon-education-045 u-line-icon-pro" />
                        </a>
                      </div>
                      {/* Search Form */}
                      <form
                        id="searchform-1"
                        className="u-searchform-v1 u-dropdown--css-animation u-dropdown--hidden u-shadow-v20 g-brd-around g-brd-gray-light-v4 g-bg-white g-right-0 rounded g-pa-10 1g-mt-8"
                      >
                        <div className="input-group">
                          <input
                            className="form-control g-font-size-13"
                            type="search"
                            placeholder="Search Here..."
                          />
                          <div className="input-group-append p-0">
                            <button
                              className="btn u-btn-primary g-font-size-12 text-uppercase g-py-13 g-px-15"
                              type="submit"
                            >
                              Go
                            </button>
                          </div>
                        </div>
                      </form>
                      {/* End Search Form */}
                    </div>
                    {/* End Search */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Top Bar */}
            <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10">
              <nav className="js-mega-menu navbar navbar-expand-lg">
                <div className="container">
                  {/* Responsive Toggle Button */}
                  <button
                    className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-3 g-right-0"
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                    aria-controls="navBar"
                    data-toggle="collapse"
                    data-target="#navBar"
                  >
                    <span className="hamburger hamburger--slider g-pr-0">
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </span>
                  </button>
                  {/* End Responsive Toggle Button */}
                  {/* Logo */}
                  <a className="navbar-brand" href="home-page-1.html">
                    <img
                      src="assets/img/logo/logo-1.png"
                      alt="Image Description"
                    />
                  </a>
                  {/* End Logo */}
                  {/* Navigation */}
                  <div
                    id="navBar"
                    className="collapse navbar-collapse align-items-center flex-sm-row g-pt-15 g-pt-0--lg"
                  >
                    <ul className="navbar-nav ml-auto">
                      {/* Home - Submenu */}
                      <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
                        <a
                          id="nav-link--home"
                          className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                          href="#"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-controls="nav-submenu--home"
                        >
                          Home
                        </a>
                        {/* Submenu */}
                        <ul
                          id="nav-submenu--home"
                          className="hs-sub-menu list-unstyled u-shadow-v11 g-min-width-220 g-brd-top g-brd-primary g-brd-top-2 g-mt-17"
                          aria-labelledby="nav-link--home"
                        >
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="home-page-1.html"
                            >
                              Home Default
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="home-page-2.html"
                            >
                              Home 2
                              <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                New
                              </span>
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="home-page-3.html"
                            >
                              Home 3
                              <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                New
                              </span>
                            </a>
                          </li>
                        </ul>
                        {/* End Submenu */}
                      </li>
                      {/* End Home - Submenu */}
                      {/* Pages - Submenu */}
                      <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
                        <a
                          id="nav-link--pages"
                          className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                          href="#"
                          aria-haspopup="true"
                          aria-expanded="false"
                          aria-controls="nav-submenu--pages"
                        >
                          Pages
                        </a>
                        {/* Submenu */}
                        <ul
                          className="hs-sub-menu list-unstyled u-shadow-v11 g-min-width-220 g-brd-top g-brd-primary g-brd-top-2 g-mt-17"
                          id="nav-submenu--pages"
                          aria-labelledby="nav-link--pages"
                        >
                          {/* Grid Filter */}
                          <li className="dropdown-item hs-has-sub-menu">
                            <a
                              id="nav-link--pages--grid-filter"
                              className="nav-link g-color-gray-dark-v4"
                              href="#"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-controls="nav-submenu--pages--grid-filter"
                            >
                              Grid Filter
                            </a>
                            {/* Submenu (level 2) */}
                            <ul
                              id="nav-submenu--pages--grid-filter"
                              className="hs-sub-menu list-unstyled u-shadow-v11 g-min-width-220 g-brd-top g-brd-primary g-brd-top-2 g-mt-minus-2"
                              aria-labelledby="nav-link--pages--grid-filter"
                            >
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-grid-filter-left-sidebar-1.html"
                                >
                                  Left Sidebar
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-grid-filter-right-sidebar-1.html"
                                >
                                  Right Sidebar
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-grid-filter-no-sidebar-1.html"
                                >
                                  No Sidebar 1
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-grid-filter-no-sidebar-2.html"
                                >
                                  No Sidebar 2
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-grid-filter-no-sidebar-3.html"
                                >
                                  No Sidebar 3
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-grid-filter-no-sidebar-4.html"
                                >
                                  No Sidebar 4
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                            {/* End Submenu (level 2) */}
                          </li>
                          {/* Grid Filter */}
                          {/* List Filter */}
                          <li className="dropdown-item hs-has-sub-menu">
                            <a
                              id="nav-link--pages--list-filter"
                              className="nav-link g-color-gray-dark-v4"
                              href="#"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-controls="nav-submenu--pages--list-filter"
                            >
                              List Filter
                            </a>
                            {/* Submenu (level 2) */}
                            <ul
                              id="nav-submenu--pages--list-filter"
                              className="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                              aria-labelledby="nav-link--pages--list-filter"
                            >
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-list-filter-left-sidebar-1.html"
                                >
                                  Left Sidebar
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-list-filter-right-sidebar-1.html"
                                >
                                  Right Sidebar
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-list-filter-no-sidebar-1.html"
                                >
                                  No Sidebar 1
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-list-filter-no-sidebar-2.html"
                                >
                                  No Sidebar 2
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-list-filter-no-sidebar-3.html"
                                >
                                  No Sidebar 3
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-list-filter-no-sidebar-4.html"
                                >
                                  No Sidebar 4
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                            {/* End Submenu (level 2) */}
                          </li>
                          {/* List Filter */}
                          {/* Left/Right Category */}
                          <li className="dropdown-item hs-has-sub-menu">
                            <a
                              id="nav-link--pages--left-right-category"
                              className="nav-link g-color-gray-dark-v4"
                              href="#"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-controls="nav-submenu--pages--left-right-category"
                            >
                              Left/Right Category
                            </a>
                            {/* Submenu (level 2) */}
                            <ul
                              id="nav-submenu--pages--left-right-category"
                              className="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                              aria-labelledby="nav-link--pages--left-right-category"
                            >
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-category-left-sidebar-1.html"
                                >
                                  Left Sidebar
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-category-right-sidebar-1.html"
                                >
                                  Right Sidebar
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-category-no-sidebar-1.html"
                                >
                                  No Sidebar 1
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-category-no-sidebar-2.html"
                                >
                                  No Sidebar 2
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-category-no-sidebar-3.html"
                                >
                                  No Sidebar 3
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-category-no-sidebar-4.html"
                                >
                                  No Sidebar 4
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                            {/* End Submenu (level 2) */}
                          </li>
                          {/* Left/Right Category */}
                          {/* Single Product */}
                          <li className="dropdown-item hs-has-sub-menu">
                            <a
                              id="nav-link--pages--single-product"
                              className="nav-link g-color-gray-dark-v4"
                              href="#"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-controls="nav-submenu--pages--single-product"
                            >
                              Single Product
                            </a>
                            {/* Submenu (level 2) */}
                            <ul
                              id="nav-submenu--pages--single-product"
                              className="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                              aria-labelledby="nav-link--pages--single-product"
                            >
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-single-product-1.html"
                                >
                                  Single Product
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-single-product-2.html"
                                >
                                  Single Product 2
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-single-product-3.html"
                                >
                                  Single Product 3
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                            {/* End Submenu (level 2) */}
                          </li>
                          {/* Single Product */}
                          {/* Checkout */}
                          <li className="dropdown-item hs-has-sub-menu">
                            <a
                              id="nav-link--pages--checkout"
                              className="nav-link g-color-gray-dark-v4"
                              href="#"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-controls="nav-submenu--pages--checkout"
                            >
                              Checkout
                            </a>
                            {/* Submenu (level 2) */}
                            <ul
                              id="nav-submenu--pages--checkout"
                              className="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                              aria-labelledby="nav-link--pages--checkout"
                            >
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-checkout-1.html"
                                >
                                  Checkout
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-order-completed-1.html"
                                >
                                  Order Completed
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-empty-cart-1.html"
                                >
                                  Empty Cart
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-gift-card-1.html"
                                >
                                  Gift Card
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                            {/* End Submenu (level 2) */}
                          </li>
                          {/* Checkout */}
                          {/* Account */}
                          <li className="dropdown-item hs-has-sub-menu">
                            <a
                              id="nav-link--pages--account"
                              className="nav-link g-color-gray-dark-v4"
                              href="#"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-controls="nav-submenu--pages--account"
                            >
                              Account
                            </a>
                            {/* Submenu (level 2) */}
                            <ul
                              id="nav-submenu--pages--account"
                              className="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2"
                              aria-labelledby="nav-link--pages--account"
                            >
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-wallet-1.html"
                                >
                                  Your Wallet
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-orders-1.html"
                                >
                                  Your Orders
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-open-orders-1.html"
                                >
                                  Open Orders
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-cancelled-orders-1.html"
                                >
                                  Cancelled Orders
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-wishlist-1.html"
                                >
                                  Wishlist
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-addresses-1.html"
                                >
                                  Addresses
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-payment-options-1.html"
                                >
                                  Payment Options
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-login-security-1.html"
                                >
                                  Login &amp; Security
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li className="dropdown-item">
                                <a
                                  className="nav-link g-color-gray-dark-v4"
                                  href="page-notifications-1.html"
                                >
                                  Notifications
                                  <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                            {/* End Submenu (level 2) */}
                          </li>
                          {/* Account */}
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="page-login-1.html"
                            >
                              Login
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="page-signup-1.html"
                            >
                              Signup
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="page-password-recovery-1.html"
                            >
                              Password Recovery
                              <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                New
                              </span>
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="page-help-1.html"
                            >
                              Help
                              <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                New
                              </span>
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="page-coming-soon-1.html"
                            >
                              Coming Soon
                              <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                New
                              </span>
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="page-contact-1.html"
                            >
                              Contact Us
                              <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                New
                              </span>
                            </a>
                          </li>
                          <li className="dropdown-item">
                            <a
                              className="nav-link g-color-gray-dark-v4"
                              href="page-our-stores-1.html"
                            >
                              Our Stores
                              <span className="u-label g-rounded-3 g-font-size-10 g-bg-lightred g-py-3 g-pos-rel g-top-minus-1 g-ml-5">
                                New
                              </span>
                            </a>
                          </li>
                        </ul>
                        {/* End Submenu */}
                      </li>
                      {/* End Pages - Submenu */}
                      {/* Categories - Mega Menu */}
                      <li
                        className="hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl"
                        data-animation-in="fadeIn"
                        data-animation-out="fadeOut"
                        data-position="right"
                      >
                        <a
                          id="mega-menu-label-3"
                          className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                          href="#"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Categories
                          <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                        </a>
                        {/* Mega Menu */}
                        <div
                          className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-pa-30 g-mt-17"
                          aria-labelledby="mega-menu-label-3"
                        >
                          <div className="row">
                            <div className="col-sm-6 col-lg-2 g-mb-30 g-mb-0--md">
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Home Decor
                                </span>
                                <ul className="list-unstyled">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Wall Decor
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Pillows &amp; Throws
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Window Treatments
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Mirrors
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              {/* Links */}
                              <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                Industrial Decor
                              </span>
                              <ul className="list-unstyled">
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Letter Block
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Glass Sconce
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Risa Storage Jar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Model Plane
                                  </a>
                                </li>
                              </ul>
                              {/* End Links */}
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30 g-mb-0--md">
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Kitchen &amp; Tabletop
                                </span>
                                <ul className="list-unstyled">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Coffee &amp; Tea
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Cooking &amp; Baking
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Cutlery &amp; Cutting
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Serving
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Food Storage
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              <div className="mb-5 g-mb-0--lg">
                                {/* Links */}
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Office
                                </span>
                                <ul className="list-unstyled">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Writing Instruments
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Bookcases
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Filing Cabinets
                                    </a>
                                  </li>
                                </ul>
                                {/* End Links */}
                              </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 g-mb-30 g-mb-0--md">
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Modern Lighting
                                </span>
                                <ul className="list-unstyled">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Bridgers 59" Floor Lamp
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Miltiades 27" Table Lamp
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              {/* Links */}
                              <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                Coastal Living Room Furniture
                              </span>
                              <ul className="list-unstyled">
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Washington Console Table
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Anfield Coffee Table
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Banbury 2 Drawer End Table
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Landsdowne 53" Tv Stand
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Sevan Swivel Barrel Chair
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Enfield Credenza
                                  </a>
                                </li>
                              </ul>
                              {/* End Links */}
                            </div>
                            <div className="col-md-6 col-lg-4 g-mb-30 g-mb-0--md">
                              <article className="g-pos-rel">
                                <img
                                  className="img-fluid"
                                  src="assets/img-temp/700x700/img1.jpg"
                                  alt="Image Description"
                                />
                                <div className="g-pos-abs g-bottom-30 g-left-30">
                                  <span className="d-block g-color-gray-dark-v4 mb-2">
                                    Modern Lighting
                                  </span>
                                  <span className="d-block h4">
                                    Desk Clock 65" Table Lamp
                                  </span>
                                  <span className="d-block g-color-gray-dark-v3 g-font-size-16 mb-4">
                                    $156.00
                                  </span>
                                  <a
                                    className="btn u-btn-primary u-shadow-v29 g-font-size-12 text-uppercase g-py-10 g-px-20"
                                    href="#"
                                  >
                                    Add to Cart
                                  </a>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu */}
                      </li>
                      {/* End Categories - Mega Menu */}
                      {/* Watch - Mega Menu */}
                      <li
                        className="hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl"
                        data-animation-in="fadeIn"
                        data-animation-out="fadeOut"
                        data-position="right"
                      >
                        <a
                          id="mega-menu-label-2"
                          className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                          href="#"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Watch
                          <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                        </a>
                        {/* Mega Menu */}
                        <div
                          className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-mt-17"
                          aria-labelledby="mega-menu-label-2"
                        >
                          <div className="row no-gutters">
                            <div className="col-md-4 g-mb-30 g-mb-0--md">
                              <div className="g-pa-30">
                                {/* Links */}
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Watches
                                </span>
                                <ul className="list-unstyled">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Ladies' Parker Chronograph
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Emporio Armani
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Fossil Men's Grant Chronograph
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Olivia Burton
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Ladies' Big White Dial
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Men's Grant Automatic
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Ladies' The Roxy
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Sport Watch
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Burberry Ladies' The City
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Tissot
                                    </a>
                                  </li>
                                </ul>
                                {/* End Links */}
                              </div>
                            </div>
                            <div
                              className="col-md-8 g-min-height-400 g-bg-size-cover g-bg-pos-center"
                              data-bg-img-src="assets/img-temp/700x467/img1.jpg"
                            >
                              <article className="g-pa-30">
                                <span className="d-block g-color-white-opacity-0_8 text-uppercase mb-2">
                                  Bestseller
                                </span>
                                <span className="d-block h1 g-color-white">
                                  MVMTH Swiss Watch
                                </span>
                                <span className="d-block g-color-primary g-font-weight-700 g-font-size-25">
                                  $273.00
                                </span>
                                <a className="u-link-v2" href="#" />
                              </article>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu */}
                      </li>
                      {/* End Watch - Mega Menu */}
                      {/* Mega Menu Item */}
                      <li
                        className="hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl"
                        data-animation-in="fadeIn"
                        data-animation-out="fadeOut"
                        data-position="right"
                      >
                        <a
                          id="mega-menu-label-4"
                          className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                          href="#"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Catalogue
                          <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                        </a>
                        {/* Mega Menu */}
                        <div
                          className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-pa-30 g-mt-17"
                          aria-labelledby="mega-menu-label-4"
                        >
                          <div className="row">
                            <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Clothes
                                </span>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      New in
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Coats &amp; Jackets
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Jeans
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Dresses
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Shorts
                                      <span className="u-label g-bg-primary rounded g-ml-10">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Skirts
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      T-Shirts
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              {/* Links */}
                              <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                Shoes
                              </span>
                              <ul className="list-unstyled">
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Boots
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    FLats
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Heels
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Sandals
                                  </a>
                                </li>
                              </ul>
                              {/* End Links */}
                            </div>
                            <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Accessories
                                </span>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      All accessories
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Bags &amp; Purses
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Scarvs &amp; Hats
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Jewellery
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Fragrance &amp; Beauty
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Lingerie
                                </span>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Linger
                                      <span className="u-label g-bg-primary rounded g-ml-10">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Slippers
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              {/* Links */}
                              <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                Nightwear
                              </span>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Nightwear
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Socks
                                  </a>
                                </li>
                              </ul>
                              {/* End Links */}
                            </div>
                            <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                              {/* Links */}
                              <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                Mixed
                              </span>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    New in
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Coats &amp; Jackets
                                    <span className="u-label g-bg-primary rounded g-ml-10">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Jeans
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Dresses
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Shorts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Skirts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    T-shirts
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Boots
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Flats
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Heels
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Sandals
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Sports
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Socks
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Tights
                                  </a>
                                </li>
                              </ul>
                              {/* End Links */}
                            </div>
                            <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Accessories
                                </span>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      All accessories
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Bags &amp; Purses
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Scarvs &amp; Hats
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Jewellery
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Fragrance &amp; Beauty
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              {/* Links */}
                              <div className="mb-5">
                                <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                  Lingerie
                                </span>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Linger
                                      <span className="u-label g-bg-primary rounded g-ml-10">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                      href="#"
                                    >
                                      Slippers
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* End Links */}
                              {/* Links */}
                              <span className="d-block g-font-weight-500 text-uppercase mb-2">
                                Nightwear
                              </span>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Nightwear
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                    href="#"
                                  >
                                    Socks
                                  </a>
                                </li>
                              </ul>
                              {/* End Links */}
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu */}
                      </li>
                      {/* End Mega Menu Item */}
                      {/* New Arrivals - Mega Menu */}
                      <li
                        className="hs-has-mega-menu nav-item g-ml-10--lg g-ml-15--xl"
                        data-animation-in="fadeIn"
                        data-animation-out="fadeOut"
                        data-position="right"
                      >
                        <a
                          id="mega-menu-label-5"
                          className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                          href="#"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          New Arrivals
                          <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                        </a>
                        {/* Mega Menu */}
                        <div
                          className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-pa-30 g-mt-17"
                          aria-labelledby="mega-menu-label-5"
                        >
                          <div className="row">
                            <div className="col-md-4 g-mb-30 g-mb-0--md">
                              {/* Article */}
                              <article
                                className="g-bg-size-cover g-bg-pos-center g-bg-cover g-bg-bluegray-opacity-0_3--after text-center g-px-40 g-py-80"
                                data-bg-img-src="assets/img-temp/600x400/img1.jpg"
                              >
                                <div className="g-pos-rel g-z-index-1">
                                  <span className="d-block g-color-white g-font-weight-400 text-uppercase mb-3">
                                    Blouse
                                  </span>
                                  <span className="d-block h2 g-color-white mb-4">
                                    Lafayette
                                  </span>
                                  <a
                                    className="btn u-btn-white g-brd-primary--hover g-color-white--hover g-bg-primary--hover g-font-size-11 text-uppercase g-py-10 g-px-20"
                                    href="#"
                                  >
                                    Shop Now
                                  </a>
                                </div>
                              </article>
                              {/* End Article */}
                            </div>
                            <div className="col-md-4 g-mb-30 g-mb-0--md">
                              {/* Article */}
                              <article
                                className="g-bg-size-cover g-bg-pos-center g-bg-cover g-bg-bluegray-opacity-0_3--after text-center g-px-40 g-py-80"
                                data-bg-img-src="assets/img-temp/600x400/img2.jpg"
                              >
                                <div className="g-pos-rel g-z-index-1">
                                  <span className="d-block g-color-white g-font-weight-400 text-uppercase mb-3">
                                    Hamburg Hats
                                  </span>
                                  <span className="d-block h2 g-color-white mb-4">
                                    Beaver
                                  </span>
                                  <a
                                    className="btn u-btn-white g-brd-primary--hover g-color-white--hover g-bg-primary--hover g-font-size-11 text-uppercase g-py-10 g-px-20"
                                    href="#"
                                  >
                                    Shop Now
                                  </a>
                                </div>
                              </article>
                              {/* End Article */}
                            </div>
                            <div className="col-md-4 g-mb-30 g-mb-0--md">
                              {/* Article */}
                              <article
                                className="g-bg-size-cover g-bg-pos-center g-bg-cover g-bg-bluegray-opacity-0_3--after text-center g-px-40 g-py-80"
                                data-bg-img-src="assets/img-temp/600x400/img3.jpg"
                              >
                                <div className="g-pos-rel g-z-index-1">
                                  <span className="d-block g-color-white g-font-weight-400 text-uppercase mb-3">
                                    Glasses
                                  </span>
                                  <span className="d-block h2 g-color-white mb-4">
                                    RayBan
                                  </span>
                                  <a
                                    className="btn u-btn-white g-brd-primary--hover g-color-white--hover g-bg-primary--hover g-font-size-11 text-uppercase g-py-10 g-px-20"
                                    href="#"
                                  >
                                    Shop Now
                                  </a>
                                </div>
                              </article>
                              {/* End Article */}
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu */}
                      </li>
                      {/* End New Arrivals - Mega Menu */}
                      <li className="nav-item g-ml-10--lg">
                        <a
                          className="nav-link text-uppercase g-color-primary--hover g-pl-5 g-pr-0 g-py-20"
                          href="../index.html"
                        >
                          Main
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Navigation */}
                </div>
              </nav>
            </div>
          </header>
          {/* End Header */}
          {/* Revolution Slider */}
          <div className="g-overflow-hidden">
            <div
              id="rev_slider_1014_1_wrapper"
              className="rev_slider_wrapper fullscreen-container"
              data-alias="typewriter-effect"
              data-source="gallery"
              style={{ backgroundColor: "transparent", padding: 0 }}
            >
              {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
              <div
                id="rev_slider_1014_1"
                className="rev_slider fullscreenbanner"
                style={{ display: "none" }}
                data-version="5.4.1"
              >
                <ul>
                  {/* SLIDE  */}
                  <li
                    data-index="rs-2800"
                    data-transition="slidingoverlayhorizontal"
                    data-slotamount="default"
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed="default"
                    data-thumb="assets/img-temp/1920x1080/img2.jpg"
                    data-rotate={0}
                    data-saveperformance="off"
                    data-title="Slide"
                    data-param1=""
                    data-param2=""
                    data-param3=""
                    data-param4=""
                    data-param5=""
                    data-param6=""
                    data-param7=""
                    data-param8=""
                    data-param9=""
                    data-param10=""
                    data-description=""
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src="assets/img-temp/1920x1080/img2.jpg"
                      alt=""
                      data-bgposition="center center"
                      data-bgfit="cover"
                      data-bgparallax={10}
                      className="rev-slidebg"
                    />
                    {/* LAYERS */}
                    {/* LAYER NR. 1 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper"
                      id="slide-2800-layer-7"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['0','0','0','0']"
                      data-width="full"
                      data-height="full"
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"speed":5000,"to":"opacity:0;","ease":"Power4.easeInOut"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 5,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                      }}
                    />
                    {/* LAYER NR. 2 */}
                    <div
                      className="tp-caption   tp-resizeme"
                      id="slide-2800-layer-1"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['-160','-160','-130','-157']"
                      data-fontsize="['110','110','100','60']"
                      data-lineheight="['110','110','100','60']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="text"
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['center','center','center','center']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 6,
                        whiteSpace: "nowrap",
                        fontSize: 110,
                        lineHeight: 110,
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 1.00)",
                        borderWidth: 0,
                        letterSpacing: "-7px",
                      }}
                    >
                      Summer Collection
                    </div>
                    {/* LAYER NR. 4 */}
                    <div
                      className="tp-caption   tp-resizeme"
                      id="slide-2800-layer-2"
                      data-x="['center','center','center','center']"
                      data-hoffset="['-10','-10','-10','-10']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['0','0','-8','-32']"
                      data-fontsize="['40','40','30','30']"
                      data-width="['640','640','480','360']"
                      data-height="none"
                      data-whitespace="['nowrap','nowrap','normal','normal']"
                      data-type="text"
                      data-typewriter='{"lines":"Special%20Offer:%20Free%20Shipping%20Today,%20Shop%20with%20Unify","enabled":"on","speed":"70","delays":"1%7C100","looped":"on","cursorType":"one","blinking":"on","word_delay":"off","sequenced":"on","hide_cursor":"off","start_delay":"1500","newline_delay":"1000","deletion_speed":"20","deletion_delay":"1000","blinking_speed":"500","linebreak_delay":"60","cursor_type":"two","background":"off"}'
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['center','center','center','center']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 8,
                        minWidth: 640,
                        maxWidth: 640,
                        whiteSpace: "nowrap",
                        fontSize: 40,
                        lineHeight: 40,
                        fontWeight: 400,
                        color: "rgba(255, 255, 255, 1.00)",
                        borderWidth: 0,
                      }}
                    >
                      Get 20% off any Purchase over $100
                    </div>
                    {/* LAYER NR. 5 */}
                    <div
                      className="tp-caption rev-btn  tp-resizeme"
                      id="slide-2800-layer-4"
                      data-x="['right','right','center','center']"
                      data-hoffset="['660','550','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['140','140','100','83']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="button"
                      data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":""}]'
                      data-responsive_offset="on"
                      data-frames='[{"from":"x:-50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"150","ease":"Power2.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 0);bw:2px 2px 2px 2px;"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[50,50,50,50]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[50,50,50,50]"
                      style={{
                        zIndex: 9,
                        whiteSpace: "nowrap",
                        fontSize: 15,
                        lineHeight: 46,
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 1.00)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "rgba(255, 255, 255, 0.25)",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderRadius: "4px 4px 4px 4px",
                        outline: "none",
                        boxShadow: "none",
                        boxSizing: "border-box",
                        MozBoxSizing: "border-box",
                        WebkitBoxSizing: "border-box",
                        letterSpacing: 5,
                        cursor: "pointer",
                      }}
                    >
                      SHOP NOW
                    </div>
                    {/* LAYER NR. 6 */}
                    <div
                      className="tp-caption   tp-resizeme"
                      id="slide-2800-layer-6"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['137','137','158','141']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="text"
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 10,
                        whiteSpace: "nowrap",
                        fontSize: 25,
                        lineHeight: 25,
                        fontWeight: 400,
                        color: "rgba(255, 255, 255, 1.00)",
                        fontStyle: "italic",
                        borderWidth: 0,
                      }}
                    >
                      or
                    </div>
                    {/* LAYER NR. 7 */}
                    <div
                      className="tp-caption rev-btn  tp-resizeme"
                      id="slide-2800-layer-5"
                      data-x="['left','left','center','center']"
                      data-hoffset="['660','550','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['140','140','224','207']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="button"
                      data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":""}]'
                      data-responsive_offset="on"
                      data-frames='[{"from":"x:50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"150","ease":"Power2.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 0);bw:2px 2px 2px 2px;"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[50,50,50,50]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[50,50,50,50]"
                      style={{
                        zIndex: 11,
                        whiteSpace: "nowrap",
                        fontSize: 15,
                        lineHeight: 46,
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 1.00)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "rgba(255, 255, 255, 0.25)",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderRadius: "4px 4px 4px 4px",
                        outline: "none",
                        boxShadow: "none",
                        boxSizing: "border-box",
                        MozBoxSizing: "border-box",
                        WebkitBoxSizing: "border-box",
                        letterSpacing: 5,
                        cursor: "pointer",
                      }}
                    >
                      CONTACT
                    </div>
                  </li>
                  {/* END SLIDE  */}
                  {/* SLIDE  */}
                  <li
                    data-index="rs-2802"
                    data-transition="slidingoverlayhorizontal"
                    data-slotamount="default"
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed="default"
                    data-thumb="assets/img-temp/1920x1080/img1.jpg"
                    data-rotate={0}
                    data-saveperformance="off"
                    data-title="Slide"
                    data-param1=""
                    data-param2=""
                    data-param3=""
                    data-param4=""
                    data-param5=""
                    data-param6=""
                    data-param7=""
                    data-param8=""
                    data-param9=""
                    data-param10=""
                    data-description=""
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src="assets/img-temp/1920x1080/img1.jpg"
                      alt=""
                      data-bgposition="center center"
                      data-bgfit="cover"
                      data-bgrepeat="no-repeat"
                      className="rev-slidebg"
                    />
                    {/* LAYERS */}
                    {/* LAYER NR. 15 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper "
                      id="slide-2802-layer-7"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['0','0','0','0']"
                      data-width="full"
                      data-height="full"
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 19,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                      }}
                    />
                    {/* LAYER NR. 16 */}
                    <div
                      className="tp-caption   tp-resizeme"
                      id="slide-2802-layer-1"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['0','0','0','0']"
                      data-fontsize="['100','100','70','60']"
                      data-lineheight="['100','100','70','50']"
                      data-width="['760','760','none','360']"
                      data-height="none"
                      data-whitespace="['normal','normal','nowrap','normal']"
                      data-type="text"
                      data-typewriter='{"lines":"","enabled":"on","speed":"80","delays":"1%7C100","looped":"off","cursorType":"one","blinking":"on","word_delay":"off","sequenced":"off","hide_cursor":"on","start_delay":"1000","newline_delay":"1000","deletion_speed":"20","deletion_delay":"1000","blinking_speed":"500","linebreak_delay":"60","cursor_type":"two","background":"off"}'
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['center','center','center','center']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 20,
                        minWidth: 760,
                        maxWidth: 760,
                        whiteSpace: "normal",
                        fontSize: 100,
                        lineHeight: 100,
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 1.00)",
                        borderWidth: 0,
                        letterSpacing: "-5px",
                      }}
                    >
                      Finding your
                      <br />
                      Perfect Clothes..
                    </div>
                  </li>
                  {/* END SLIDE  */}
                  {/* SLIDE  */}
                  <li
                    data-index="rs-2801"
                    data-transition="slidingoverlayhorizontal"
                    data-slotamount="default"
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed="default"
                    data-thumb="assets/img-temp/1920x1080/img3.jpg"
                    data-rotate={0}
                    data-saveperformance="off"
                    data-title="Slide"
                    data-param1=""
                    data-param2=""
                    data-param3=""
                    data-param4=""
                    data-param5=""
                    data-param6=""
                    data-param7=""
                    data-param8=""
                    data-param9=""
                    data-param10=""
                    data-description=""
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src="assets/img-temp/1920x1080/img3.jpg"
                      alt=""
                      data-bgposition="center center"
                      data-bgfit="cover"
                      data-bgrepeat="no-repeat"
                      className="rev-slidebg"
                    />
                    {/* LAYERS */}
                    {/* LAYER NR. 8 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper "
                      id="slide-2801-layer-7"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['0','0','0','0']"
                      data-width="full"
                      data-height="full"
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 12,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                      }}
                    />
                    {/* LAYER NR. 9 */}
                    <div
                      className="tp-caption   tp-resizeme"
                      id="slide-2801-layer-1"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['-160','-160','-130','-157']"
                      data-fontsize="['130','130','100','80']"
                      data-lineheight="['130','130','100','80']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="text"
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['center','center','center','center']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 13,
                        whiteSpace: "nowrap",
                        fontSize: 130,
                        lineHeight: 130,
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 1.00)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                        letterSpacing: "-7px",
                      }}
                    >
                      High Quality
                    </div>
                    {/* LAYER NR. 10 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper  tp-resizeme"
                      id="slide-2801-layer-3"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['-50','-50','-54','-89']"
                      data-width={60}
                      data-height={3}
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 14,
                        backgroundColor: "rgba(0, 220, 186, 1.00)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                      }}
                    />
                    {/* LAYER NR. 11 */}
                    <div
                      className="tp-caption   tp-resizeme"
                      id="slide-2801-layer-2"
                      data-x="['center','center','center','center']"
                      data-hoffset="['-10','-10','-10','-10']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['0','0','-8','-32']"
                      data-fontsize="['40','40','30','30']"
                      data-width="['640','640','480','360']"
                      data-height="none"
                      data-whitespace="normal"
                      data-type="text"
                      data-typewriter='{"lines":"Stylish%20Collections%20for%20the%20Best,","enabled":"on","speed":"60","delays":"1%7C100","looped":"on","cursorType":"one","blinking":"on","word_delay":"off","sequenced":"on","hide_cursor":"off","start_delay":"1500","newline_delay":"1000","deletion_speed":"20","deletion_delay":"1000","blinking_speed":"500","linebreak_delay":"60","cursor_type":"two","background":"off"}'
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;sX:1;sY:1;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['center','center','center','center']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 15,
                        minWidth: 640,
                        maxWidth: 640,
                        whiteSpace: "nowrap",
                        fontSize: 40,
                        lineHeight: 40,
                        fontWeight: 400,
                        color: "rgba(255, 255, 255, 1.00)",
                        borderWidth: 0,
                      }}
                    >
                      Made to Captivate your Audience.
                    </div>
                    {/* LAYER NR. 12 */}
                    <div
                      className="tp-caption rev-btn  tp-resizeme"
                      id="slide-2801-layer-4"
                      data-x="['right','right','center','center']"
                      data-hoffset="['660','550','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['140','140','100','83']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="button"
                      data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":""}]'
                      data-responsive_offset="on"
                      data-frames='[{"from":"x:-50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"150","ease":"Power2.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 0);bw:2px 2px 2px 2px;"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[50,50,50,50]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[50,50,50,50]"
                      style={{
                        zIndex: 16,
                        whiteSpace: "nowrap",
                        fontSize: 15,
                        lineHeight: 46,
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 1.00)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "rgba(255, 255, 255, 0.25)",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderRadius: "4px 4px 4px 4px",
                        outline: "none",
                        boxShadow: "none",
                        boxSizing: "border-box",
                        MozBoxSizing: "border-box",
                        WebkitBoxSizing: "border-box",
                        letterSpacing: 5,
                        cursor: "pointer",
                      }}
                    >
                      ABOUT US
                    </div>
                    {/* LAYER NR. 13 */}
                    <div
                      className="tp-caption   tp-resizeme"
                      id="slide-2801-layer-6"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['137','137','158','141']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="text"
                      data-responsive_offset="on"
                      data-frames='[{"from":"y:50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 17,
                        whiteSpace: "nowrap",
                        fontSize: 25,
                        lineHeight: 25,
                        fontWeight: 400,
                        color: "rgba(255, 255, 255, 1.00)",
                        fontStyle: "italic",
                        borderWidth: 0,
                      }}
                    >
                      or
                    </div>
                    {/* LAYER NR. 14 */}
                    <div
                      className="tp-caption rev-btn  tp-resizeme"
                      id="slide-2801-layer-5"
                      data-x="['left','left','center','center']"
                      data-hoffset="['660','550','0','0']"
                      data-y="['middle','middle','middle','middle']"
                      data-voffset="['140','140','224','207']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="button"
                      data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":""}]'
                      data-responsive_offset="on"
                      data-frames='[{"from":"x:50px;opacity:0;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"150","ease":"Power2.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 0);bw:2px 2px 2px 2px;"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[50,50,50,50]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[50,50,50,50]"
                      style={{
                        zIndex: 18,
                        whiteSpace: "nowrap",
                        fontSize: 15,
                        lineHeight: 46,
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 1.00)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "rgba(255, 255, 255, 0.25)",
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderRadius: "4px 4px 4px 4px",
                        outline: "none",
                        boxShadow: "none",
                        boxSizing: "border-box",
                        MozBoxSizing: "border-box",
                        WebkitBoxSizing: "border-box",
                        letterSpacing: 5,
                        cursor: "pointer",
                      }}
                    >
                      CONTACT
                    </div>
                  </li>
                  {/* END SLIDE  */}
                </ul>
                <div
                  className="tp-bannertimer tp-bottom"
                  style={{ visibility: "hidden !important" }}
                />
              </div>
            </div>
          </div>
          {/* End Revolution Slider */}
          {/* Features */}
          <div className="g-brd-bottom g-brd-gray-light-v4">
            <div className="container g-py-30">
              <div className="row justify-content-center">
                <div className="col-md-4 mx-auto g-py-15">
                  {/* Media */}
                  <div className="media g-px-50--lg">
                    <i className="d-flex g-color-black g-font-size-30 g-pos-rel g-top-3 mr-4 icon-real-estate-048 u-line-icon-pro" />
                    <div className="media-body">
                      <span className="d-block g-font-weight-500 g-font-size-default text-uppercase">
                        Free Shipping
                      </span>
                      <span className="d-block g-color-gray-dark-v4">
                        In 2-3 Days
                      </span>
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="col-md-4 mx-auto g-brd-x--md g-brd-gray-light-v3 g-py-15">
                  {/* Media */}
                  <div className="media g-px-50--lg">
                    <i className="d-flex g-color-black g-font-size-30 g-pos-rel g-top-3 mr-4 icon-real-estate-040 u-line-icon-pro" />
                    <div className="media-body">
                      <span className="d-block g-font-weight-500 g-font-size-default text-uppercase">
                        Free Returns
                      </span>
                      <span className="d-block g-color-gray-dark-v4">
                        No Questions Asked
                      </span>
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                {/* Media */}
                <div className="col-md-4 mx-auto g-py-15">
                  <div className="media g-px-50--lg">
                    <i className="d-flex g-color-black g-font-size-30 g-pos-rel g-top-3 mr-4 icon-hotel-restaurant-062 u-line-icon-pro" />
                    <div className="media-body text-left">
                      <span className="d-block g-font-weight-500 g-font-size-default text-uppercase">
                        Free 24
                      </span>
                      <span className="d-block g-color-gray-dark-v4">
                        Days Storage
                      </span>
                    </div>
                  </div>
                  {/* End Media */}
                </div>
              </div>
            </div>
          </div>
          {/* End Features */}
          {/* Categories */}
          <div className="container g-pt-100 g-pb-70">
            <div className="row g-mx-minus-10">
              <div className="col-sm-6 col-md-4 g-px-10 g-mb-30">
                <article className="u-block-hover">
                  <img
                    className="w-100 u-block-hover__main--zoom-v1 g-mb-minus-8"
                    src="assets/img-temp/650x850/img1.jpg"
                    alt="Image Description"
                  />
                  <div className="g-pos-abs g-bottom-30 g-left-30">
                    <span className="d-block g-color-black">Collections</span>
                    <h2 className="h1 mb-0">Women</h2>
                  </div>
                  <a className="u-link-v2" href="#" />
                </article>
              </div>
              <div className="col-sm-6 col-md-4 g-px-10 g-mb-30">
                <article className="u-block-hover">
                  <img
                    className="w-100 u-block-hover__main--zoom-v1 g-mb-minus-8"
                    src="assets/img-temp/650x850/img2.jpg"
                    alt="Image Description"
                  />
                  <div className="g-pos-abs g-bottom-30 g-left-30">
                    <span className="d-block g-color-black">Collections</span>
                    <h2 className="h1 mb-0">Children</h2>
                  </div>
                  <a className="u-link-v2" href="#" />
                </article>
              </div>
              <div className="col-sm-6 col-md-4 g-px-10 g-mb-30">
                <article className="u-block-hover">
                  <img
                    className="w-100 u-block-hover__main--zoom-v1 g-mb-minus-8"
                    src="assets/img-temp/650x850/img3.jpg"
                    alt="Image Description"
                  />
                  <div className="g-pos-abs g-bottom-30 g-left-30">
                    <span className="d-block g-color-black">Collections</span>
                    <h2 className="h1 mb-0">Men</h2>
                  </div>
                  <a className="u-link-v2" href="#" />
                </article>
              </div>
            </div>
          </div>
          {/* End Categories */}
          {/* Products */}
          <div className="container g-pb-100">
            <div className="text-center mx-auto g-max-width-600 g-mb-50">
              <h2 className="g-color-black mb-4">Featured Products</h2>
              <p className="lead">
                We want to create a range of beautiful, practical and modern
                outerwear that doesn't cost the earth – but let's you still live
                life in style.
              </p>
            </div>
            <div
              id="carouselCus1"
              className="js-carousel g-pb-100 g-mx-minus-10"
              data-infinite="true"
              data-slides-show={4}
              data-lazy-load="ondemand"
              data-arrows-classes="u-arrow-v1 g-pos-abs g-bottom-0 g-width-45 g-height-45 g-color-gray-dark-v5 g-bg-secondary g-color-white--hover g-bg-primary--hover rounded"
              data-arrow-left-classes="fa fa-angle-left g-left-10"
              data-arrow-right-classes="fa fa-angle-right g-right-10"
              data-pagi-classes="u-carousel-indicators-v1 g-absolute-centered--x g-bottom-20 text-center"
            >
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img1.jpg"
                      alt="Image Description"
                    />
                    <figcaption className="w-100 g-bg-primary g-bg-black--hover text-center g-pos-abs g-bottom-0 g-transition-0_2 g-py-5">
                      <a
                        className="g-color-white g-font-size-11 text-uppercase g-letter-spacing-1 g-text-underline--none--hover"
                        href="#"
                      >
                        New Arrival
                      </a>
                    </figcaption>
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Summer shorts
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Man
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $52.00
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img2.jpg"
                      alt="Image Description"
                    />
                    <span className="u-ribbon-v1 g-width-40 g-height-40 g-color-white g-bg-primary g-font-size-13 text-center text-uppercase g-rounded-50x g-top-10 g-right-minus-10 g-px-2 g-py-10">
                      -40%
                    </span>
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Stylish shirt
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Woman
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $99.00
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img3.jpg"
                      alt="Image Description"
                    />
                    <figcaption className="w-100 g-bg-lightred text-center g-pos-abs g-bottom-0 g-transition-0_2 g-py-5">
                      <span className="g-color-white g-font-size-11 text-uppercase g-letter-spacing-1">
                        Sold Out
                      </span>
                    </figcaption>
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Classic jacket
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Man
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $49.99
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img4.jpg"
                      alt="Image Description"
                    />
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Wool lined parka
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Woman
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $82.37
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img5.jpg"
                      alt="Image Description"
                    />
                    <figcaption className="w-100 g-bg-lightred text-center g-pos-abs g-bottom-0 g-transition-0_2 g-py-5">
                      <span className="g-color-white g-font-size-11 text-uppercase g-letter-spacing-1">
                        Sold Out
                      </span>
                    </figcaption>
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Hooded jeans
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Man
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $35.99
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img6.jpg"
                      alt="Image Description"
                    />
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Waterproof jacket
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Woman
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $105.99
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img7.jpg"
                      alt="Image Description"
                    />
                    <span className="u-ribbon-v1 g-width-40 g-height-40 g-color-white g-bg-primary g-font-size-13 text-center text-uppercase g-rounded-50x g-top-10 g-right-minus-10 g-px-2 g-py-10">
                      -40%
                    </span>
                    <figcaption className="w-100 g-bg-primary g-bg-black--hover text-center g-pos-abs g-bottom-0 g-transition-0_2 g-py-5">
                      <a
                        className="g-color-white g-font-size-11 text-uppercase g-letter-spacing-1 g-text-underline--none--hover"
                        href="#"
                      >
                        New Arrival
                      </a>
                    </figcaption>
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Classic T-shirt
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Man
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $11.00
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
              <div className="js-slide">
                <div className="g-px-10">
                  {/* Product */}
                  <figure className="g-pos-rel g-mb-20">
                    <img
                      className="img-fluid"
                      data-lazy="assets/img-temp/480x700/img8.jpg"
                      alt="Image Description"
                    />
                  </figure>
                  <div className="media">
                    {/* Product Info */}
                    <div className="d-flex flex-column">
                      <h4 className="h6 g-color-black mb-1">
                        <a
                          className="u-link-v5 g-color-black g-color-primary--hover"
                          href="#"
                        >
                          Blue skirt
                        </a>
                      </h4>
                      <a
                        className="d-inline-block g-color-gray-dark-v5 g-font-size-13"
                        href="#"
                      >
                        Woman
                      </a>
                      <span className="d-block g-color-black g-font-size-17">
                        $34.00
                      </span>
                    </div>
                    {/* End Product Info */}
                    {/* Products Icons */}
                    <ul className="list-inline media-body text-right">
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </a>
                      </li>
                      <li className="list-inline-item align-middle mx-0">
                        <a
                          className="u-icon-v1 u-icon-size--sm g-color-gray-dark-v5 g-color-primary--hover g-font-size-15 rounded-circle"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                    {/* End Products Icons */}
                  </div>
                  {/* End Product */}
                </div>
              </div>
            </div>
          </div>
          {/* End Products */}
          {/* Promo Block */}
          <section className="g-bg-secondary g-pos-rel">
            <div className="container g-pt-100 g-pb-70">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-8 col-lg-6 order-md-2 g-mb-30">
                  <div className="g-pos-rel">
                    <img
                      className="img-fluid w-100"
                      src="assets/img-temp/725x725/img1.png"
                      alt="Image Description"
                    />
                    <span className="u-icon-v1 g-width-85 g-height-85 g-brd-3 g-brd-white g-color-white g-bg-primary g-font-weight-300 g-font-size-22 rounded-circle g-pos-abs g-top-100 g-left-0 g-brd-around">
                      <i className="g-font-style-normal">
                        $60
                        <span className="g-font-size-16">.00</span>
                      </i>
                    </span>
                  </div>
                </div>
                <div className="col-md-4 order-md-1 g-mb-30">
                  <div className="g-mb-30">
                    <h1 className="g-color-primary g-font-weight-400 g-font-size-40 mb-0">
                      Leather
                    </h1>
                    <h2 className="g-color-dark g-font-weight-300 g-font-size-75 g-line-height-1 mb-4">
                      Gloves
                    </h2>
                    <p className="lead">
                      We want to create a range of beautiful, practical and
                      modern outerwear that doesn't cost the earth.
                    </p>
                  </div>
                  <a
                    className="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25 g-mb-70"
                    href="#"
                  >
                    Shop Now
                  </a>
                  {/* Countdown */}
                  <div className="text-uppercase">
                    <div
                      className="js-countdown u-countdown-v3 g-line-height-1_3 g-color-black"
                      data-end-date="2019/08/20"
                      data-month-format="%m"
                      data-days-format="%D"
                      data-hours-format="%H"
                      data-minutes-format="%M"
                      data-seconds-format="%S"
                    >
                      <div className="d-inline-block text-center g-mx-15 mb-3">
                        <div className="js-cd-days g-color-lightred g-font-weight-500 g-font-size-15">
                          12
                        </div>
                        <span className="g-color-gray-dark-v4 g-font-size-11">
                          Days
                        </span>
                      </div>
                      <div className="hidden-down d-inline-block align-top g-font-size-15">
                        :
                      </div>
                      <div className="d-inline-block text-center g-mx-15 mb-3">
                        <div className="js-cd-hours g-font-weight-500 g-font-size-15">
                          01
                        </div>
                        <span className="g-color-gray-dark-v4 g-font-size-11">
                          Hours
                        </span>
                      </div>
                      <div className="hidden-down d-inline-block align-top g-font-size-15">
                        :
                      </div>
                      <div className="d-inline-block text-center g-mx-15 mb-3">
                        <div className="js-cd-minutes g-font-weight-500 g-font-size-15">
                          52
                        </div>
                        <span className="g-color-gray-dark-v4 g-font-size-11">
                          Minutes
                        </span>
                      </div>
                      <div className="hidden-down d-inline-block align-top g-font-size-15">
                        :
                      </div>
                      <div className="d-inline-block text-center g-mx-15 mb-3">
                        <div className="js-cd-seconds g-font-weight-500 g-font-size-15">
                          52
                        </div>
                        <span className="g-color-gray-dark-v4 g-font-size-11">
                          Seconds
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End Countdown */}
                </div>
              </div>
            </div>
          </section>
          {/* End Promo Block */}
          {/* New Arrivals */}
          <section className="container g-py-100">
            <div className="text-center mx-auto g-max-width-600 g-mb-50">
              <h2 className="g-color-black mb-4">New Arrivals</h2>
              <p className="lead">
                We want to create a range of beautiful, practical and modern
                outerwear that doesn't cost the earth – but let's you still live
                life in style.
              </p>
            </div>
            <div className="row g-mx-minus-10 g-mb-50">
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img1.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Glasses
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Accessories
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $22.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Footer */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img2.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Gloves
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Accessories
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Footer */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img3.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Chukka Shoes
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Footwear
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Footer */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img4.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Shoes
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Footwear
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Content */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img5.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Sneaker
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Footwear
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Content */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img6.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Sneaker
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Footwear
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Footer */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img7.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Desk Clock
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Hi-Tech
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Footer */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img8.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Alarm Clock
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Hi-Tech
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Footer */}
                  </div>
                </article>
                {/* End Article */}
              </div>
              <div className="col-md-6 col-lg-4 g-px-10">
                {/* Article */}
                <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                  {/* Article Image */}
                  <div className="g-max-width-100 g-mr-15">
                    <img
                      className="d-flex w-100"
                      src="assets/img-temp/150x150/img9.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Article Image */}
                  {/* Article Info */}
                  <div className="media-body align-self-center">
                    <h4 className="h5 g-mb-7">
                      <a
                        className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                        href="#"
                      >
                        Desk Clock
                      </a>
                    </h4>
                    <a
                      className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                      href="#"
                    >
                      Hi-Tech
                    </a>
                    {/* End Article Info */}
                    {/* Article Footer */}
                    <footer className="d-flex justify-content-between g-font-size-16">
                      <span className="g-color-black g-line-height-1">
                        $55.00
                      </span>
                      <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                        <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Cart"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-finance-100 u-line-icon-pro" />
                          </a>
                        </li>
                        <li className="list-inline-item align-middle">
                          <a
                            className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                            href="#"
                            title="Add to Wishlist"
                            data-toggle="tooltip"
                            data-placement="top"
                          >
                            <i className="icon-medical-022 u-line-icon-pro" />
                          </a>
                        </li>
                      </ul>
                    </footer>
                    {/* End Article Footer */}
                  </div>
                </article>
                {/* End Article */}
              </div>
            </div>
            <div className="text-center">
              <a
                className="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25"
                href="#"
              >
                All New Arrivals
              </a>
            </div>
          </section>
          {/* End New Arrivals */}
          {/* Categories */}
          <div className="container-fluid px-0">
            <div className="row align-items-center no-gutters">
              <div
                className="col-md-7 col-lg-8 u-block-hover g-bg-size-cover g-min-height-500 g-flex-centered"
                data-bg-img-src="assets/img-temp/1200x800/img1.jpg"
              >
                <div className="g-flex-centered-item text-right g-pa-50">
                  <h2 className="g-color-white g-font-weight-700 g-font-size-50 text-uppercase g-line-height-1 mb-4">
                    Summer
                    <br />
                    Collection
                  </h2>
                  <span className="u-link-v5 g-color-black g-color-primary--hover g-font-size-18">
                    Shop Now
                  </span>
                </div>
                <a className="u-link-v2" href="#" />
              </div>
              <div
                className="col-md-5 col-lg-4 u-block-hover g-bg-size-cover g-min-height-500 g-flex-centered"
                data-bg-img-src="assets/img/bg/secondary.png"
              >
                <div className="text-center">
                  <img
                    className="img-fluid mb-3"
                    src="assets/img-temp/500x320/img1.png"
                    alt="Image Description"
                  />
                  <h3 className="h5 u-link-v5 g-color-primary--hover g-font-weight-400 mb-3">
                    Sneaker Shoes for Man
                  </h3>
                  <span className="g-color-primary g-font-weight-700 g-font-size-20">
                    $45.00
                  </span>
                </div>
                <a className="u-link-v2" href="#" />
              </div>
            </div>
          </div>
          {/* End Categories */}
          {/* News */}
          <div className="container g-pt-100 g-pb-70">
            <div className="text-center mx-auto g-max-width-600 g-mb-50">
              <h2 className="g-color-black mb-4">Blog News</h2>
              <p className="lead">
                Keep in touch with the latest blogs &amp; news.
              </p>
            </div>
            <div className="row g-mx-minus-10">
              <div className="col-sm-6 col-md-4 g-px-10 g-mb-30">
                {/* Blog Background Overlay Blocks */}
                <article className="u-block-hover">
                  <div className="g-bg-cover g-bg-white-gradient-opacity-v1--after">
                    <img
                      className="d-flex align-items-end u-block-hover__main--mover-down"
                      src="assets/img-temp/650x650/img1.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="u-block-hover__additional--partially-slide-up text-center g-z-index-1 mt-auto">
                    <div className="u-block-hover__visible g-pa-25">
                      <span className="d-block g-color-white-opacity-0_7 g-font-size-13 mb-2">
                        sport
                      </span>
                      <h2 className="h4 g-color-white g-font-weight-400 mb-3">
                        <a
                          className="u-link-v5 g-color-white g-color-primary--hover g-cursor-pointer"
                          href="#"
                        >
                          24 Hours in Shopping
                        </a>
                      </h2>
                      <h4 className="d-inline-block g-color-white-opacity-0_7 g-font-size-11 mb-0">
                        By,
                        <a
                          className="g-color-white-opacity-0_7 text-uppercase"
                          href="#"
                        >
                          Dan Shaw
                        </a>
                      </h4>
                      <span className="g-color-white-opacity-0_7 g-pos-rel g-top-2 mx-2">
                        ·
                      </span>
                      <span className="g-color-white-opacity-0_7 g-font-size-10 text-uppercase">
                        May 31, 2017
                      </span>
                    </div>
                    <a
                      className="d-inline-block g-brd-bottom g-brd-white g-color-white g-font-weight-500 g-font-size-12 text-uppercase g-text-underline--none--hover g-mb-30"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </article>
                {/* End Blog Background Overlay Blocks */}
              </div>
              <div className="col-sm-6 col-md-4 g-px-10 g-mb-30">
                {/* Blog Background Overlay Blocks */}
                <article className="u-block-hover">
                  <div className="g-bg-cover g-bg-white-gradient-opacity-v1--after">
                    <img
                      className="d-flex align-items-end u-block-hover__main--mover-down"
                      src="assets/img-temp/650x650/img2.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="u-block-hover__additional--partially-slide-up text-center g-z-index-1 mt-auto">
                    <div className="u-block-hover__visible g-pa-25">
                      <span className="d-block g-color-white-opacity-0_7 g-font-size-13 mb-2">
                        design
                      </span>
                      <h2 className="h4 g-color-white g-font-weight-400 mb-3">
                        <a
                          className="u-link-v5 g-color-white g-color-primary--hover g-cursor-pointer"
                          href="#"
                        >
                          How to Design with Colors
                        </a>
                      </h2>
                      <h4 className="d-inline-block g-color-white-opacity-0_7 g-font-size-11 mb-0">
                        By,
                        <a
                          className="g-color-white-opacity-0_7 text-uppercase"
                          href="#"
                        >
                          Dan Shaw
                        </a>
                      </h4>
                      <span className="g-color-white-opacity-0_7 g-pos-rel g-top-2 mx-2">
                        ·
                      </span>
                      <span className="g-color-white-opacity-0_7 g-font-size-10 text-uppercase">
                        May 31, 2017
                      </span>
                    </div>
                    <a
                      className="d-inline-block g-brd-bottom g-brd-white g-color-white g-font-weight-500 g-font-size-12 text-uppercase g-text-underline--none--hover g-mb-30"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </article>
                {/* End Blog Background Overlay Blocks */}
              </div>
              <div className="col-sm-6 col-md-4 g-px-10 g-mb-30">
                {/* Blog Background Overlay Blocks */}
                <article className="u-block-hover">
                  <div className="g-bg-cover g-bg-white-gradient-opacity-v1--after">
                    <img
                      className="d-flex align-items-end u-block-hover__main--mover-down"
                      src="assets/img-temp/650x650/img3.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="u-block-hover__additional--partially-slide-up text-center g-z-index-1 mt-auto">
                    <div className="u-block-hover__visible g-pa-25">
                      <span className="d-block g-color-white-opacity-0_7 g-font-size-13 mb-2">
                        photography
                      </span>
                      <h2 className="h4 g-color-white g-font-weight-400 mb-3">
                        <a
                          className="u-link-v5 g-color-white g-color-primary--hover g-cursor-pointer"
                          href="#"
                        >
                          Stunning Woman's Capture
                        </a>
                      </h2>
                      <h4 className="d-inline-block g-color-white-opacity-0_7 g-font-size-11 mb-0">
                        By,
                        <a
                          className="g-color-white-opacity-0_7 text-uppercase"
                          href="#"
                        >
                          Dan Shaw
                        </a>
                      </h4>
                      <span className="g-color-white-opacity-0_7 g-pos-rel g-top-2 mx-2">
                        ·
                      </span>
                      <span className="g-color-white-opacity-0_7 g-font-size-10 text-uppercase">
                        May 31, 2017
                      </span>
                    </div>
                    <a
                      className="d-inline-block g-brd-bottom g-brd-white g-color-white g-font-weight-500 g-font-size-12 text-uppercase g-text-underline--none--hover g-mb-30"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </article>
                {/* End Blog Background Overlay Blocks */}
              </div>
            </div>
          </div>
          {/* End News */}
          {/* Footer */}
          <footer className="g-bg-main-light-v1">
            {/* Content */}
            <div className="g-brd-bottom g-brd-secondary-light-v1">
              <div className="container g-pt-100">
                <div className="row justify-content-start g-mb-30 g-mb-0--md">
                  <div className="col-md-5 g-mb-30">
                    <h2 className="h5 g-color-gray-light-v3 mb-4">Products</h2>
                    <div className="row">
                      <div className="col-4 g-mb-20">
                        {/* Links */}
                        <ul className="list-unstyled g-font-size-13 mb-0">
                          <li className="g-mb-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              SmartPhone
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Laptop
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Mouse
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Monitor
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Watch
                            </a>
                          </li>
                        </ul>
                        {/* End Links */}
                      </div>
                      <div className="col-4 g-mb-20">
                        {/* Links */}
                        <ul className="list-unstyled g-font-size-13 mb-0">
                          <li className="g-mb-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Tablet
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Accessorie
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Mouses Pad
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Handset
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Phablet
                            </a>
                          </li>
                        </ul>
                        {/* End Links */}
                      </div>
                      <div className="col-4 g-mb-20">
                        {/* Links */}
                        <ul className="list-unstyled g-font-size-13 mb-0">
                          <li className="g-mb-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Speakers
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Camera
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Play Station
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Xbox
                            </a>
                          </li>
                        </ul>
                        {/* End Links */}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                    <h2 className="h5 g-color-gray-light-v3 mb-4">Brands</h2>
                    <div className="row">
                      <div className="col-6 g-mb-20">
                        {/* Links */}
                        <ul className="list-unstyled g-font-size-13 mb-0">
                          <li className="g-mb-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Logitech
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Samsung
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Microsoft
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Apple
                            </a>
                          </li>
                        </ul>
                        {/* End Links */}
                      </div>
                      <div className="col-6 g-mb-20">
                        {/* Links */}
                        <ul className="list-unstyled g-font-size-13 mb-0">
                          <li className="g-mb-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Huawei
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Motorola
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Sony
                            </a>
                          </li>
                          <li className="g-my-10">
                            <a
                              className="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover"
                              href="#"
                            >
                              Nokia
                            </a>
                          </li>
                        </ul>
                        {/* End Links */}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 col-md-3 ml-auto g-mb-30 g-mb-0--sm">
                    <h2 className="h5 g-color-gray-light-v3 mb-4">Contacts</h2>
                    {/* Links */}
                    <ul className="list-unstyled g-color-gray-dark-v5 g-font-size-13">
                      <li className="media my-3">
                        <i className="d-flex mt-1 mr-3 icon-hotel-restaurant-235 u-line-icon-pro" />
                        <div className="media-body">
                          Unit 25 Suite 3, 925 Prospect
                          <br />
                          PI New York Avenue
                        </div>
                      </li>
                      <li className="media my-3">
                        <i className="d-flex mt-1 mr-3 icon-communication-062 u-line-icon-pro" />
                        <div className="media-body">htmlstream@support.com</div>
                      </li>
                      <li className="media my-3">
                        <i className="d-flex mt-1 mr-3 icon-communication-033 u-line-icon-pro" />
                        <div className="media-body">+32 333 444 555</div>
                      </li>
                    </ul>
                    {/* End Links */}
                  </div>
                </div>
                {/* Secondary Content */}
                <div className="row">
                  <div className="col-md-4 g-mb-50">
                    <h2 className="h5 g-color-gray-light-v3 mb-4">Subscribe</h2>
                    {/* Subscribe Form */}
                    <form className="input-group u-shadow-v19 rounded">
                      <input
                        className="form-control g-brd-none g-color-gray-dark-v5 g-bg-main-light-v2 g-bg-main-light-v2--focus g-placeholder-gray-dark-v3 rounded g-px-20 g-py-8"
                        type="email"
                        placeholder="Enter your email"
                      />
                      <span className="input-group-addon u-shadow-v19 g-brd-none g-bg-main-light-v2 g-pa-5">
                        <button
                          className="btn u-btn-primary rounded text-uppercase g-py-8 g-px-18"
                          type="submit"
                        >
                          <i className="fa fa-angle-right" />
                        </button>
                      </span>
                    </form>
                    {/* End Subscribe Form */}
                  </div>
                  <div className="col-6 col-md-3 offset-lg-1 g-mb-30">
                    <h2 className="h5 g-color-gray-light-v3 mb-4">
                      Language/Currency:
                    </h2>
                    {/* Large Button Group */}
                    <div className="btn-group dropup">
                      <button
                        className="btn btn-black g-bg-main-light-v1 btn-lg g-color-gray-dark-v5 g-color-primary--hover g-font-size-default g-pl-0 mr-5"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          className="g-ml-minus-6"
                          xmlns="http://www.w3.org/2000/svg"
                          height={11}
                          width={27}
                          viewBox="0 0 640 480"
                        >
                          <defs>
                            <clipPath id="a">
                              <path
                                fillOpacity=".67"
                                d="M-85.333 0h682.67v512h-682.67z"
                              />
                            </clipPath>
                          </defs>
                          <g
                            clipPath="url(#a)"
                            transform="translate(80) scale(.94)"
                          >
                            <g strokeWidth="1pt">
                              <path
                                fill="#006"
                                d="M-256 0H768.02v512.01H-256z"
                              />
                              <path
                                d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z"
                                fill="#fff"
                              />
                              <path
                                d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z"
                                fill="#fff"
                              />
                              <path
                                d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z"
                                fill="#c00"
                              />
                            </g>
                          </g>
                        </svg>
                        English
                        <i className="g-font-size-12 ml-2 fa fa-caret-up" />
                      </button>
                      <div className="dropdown-menu g-brd-gray-dark-v2 g-bg-main-light-v2">
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={11}
                            width={27}
                            viewBox="0 0 640 480"
                          >
                            <defs>
                              <clipPath id="a">
                                <path
                                  fillOpacity=".67"
                                  d="M-85.333 0h682.67v512h-682.67z"
                                />
                              </clipPath>
                            </defs>
                            <g
                              clipPath="url(#a)"
                              transform="translate(80) scale(.94)"
                            >
                              <g strokeWidth="1pt">
                                <path
                                  fill="#006"
                                  d="M-256 0H768.02v512.01H-256z"
                                />
                                <path
                                  d="M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z"
                                  fill="#fff"
                                />
                                <path
                                  d="M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z"
                                  fill="#fff"
                                />
                                <path
                                  d="M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z"
                                  fill="#c00"
                                />
                              </g>
                            </g>
                          </svg>
                          English
                        </a>
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={11}
                            width={27}
                            viewBox="0 0 640 480"
                          >
                            <g strokeWidth="1pt" fillRule="evenodd">
                              <path fill="#fff" d="M0 0h640v480H0z" />
                              <path fill="#00267f" d="M0 0h213.33v480H0z" />
                              <path
                                fill="#f31830"
                                d="M426.67 0H640v480H426.67z"
                              />
                            </g>
                          </svg>
                          Spanish
                        </a>
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={11}
                            width={27}
                            viewBox="0 0 640 480"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h640v480H0z" />
                              <path fill="#0039a6" d="M0 160.003h640V480H0z" />
                              <path fill="#d52b1e" d="M0 319.997h640V480H0z" />
                            </g>
                          </svg>
                          Russian
                        </a>
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={11}
                            width={27}
                            viewBox="0 0 640 480"
                          >
                            <path fill="#ffce00" d="M0 320h640v160.002H0z" />
                            <path d="M0 0h640v160H0z" />
                            <path fill="#d00" d="M0 160h640v160H0z" />
                          </svg>
                          German
                        </a>
                      </div>
                    </div>
                    {/* End Large Button Group */}
                    {/* Large Button Group */}
                    <div className="btn-group dropup">
                      <button
                        className="btn btn-black g-bg-main-light-v1 btn-lg g-color-gray-dark-v5 g-color-primary--hover g-font-size-default g-pl-0"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mr-2 fa fa-euro" />
                        Euro
                        <i className="mr-2 g-font-size-12 ml-2 fa fa-caret-up" />
                      </button>
                      <div className="dropdown-menu g-max-width-100 g-brd-gray-dark-v2 g-bg-main-light-v2">
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <i className="mr-2 fa fa-euro" />
                          Euro
                        </a>
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <i className="mr-2 fa fa-dollar" />
                          US Dollars
                        </a>
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <i className="mr-2 fa fa-gbp" />
                          GBP
                        </a>
                        <a
                          className="dropdown-item g-color-gray-dark-v5"
                          href="#"
                        >
                          <i className="mr-2 fa fa-yen" />
                          Yen
                        </a>
                      </div>
                    </div>
                    {/* End Large Button Group */}
                  </div>
                  <div className="col-6 col-md-3 ml-auto g-mb-30">
                    <h2 className="h5 g-color-gray-light-v3 mb-4">
                      Follow Us On:
                    </h2>
                    {/* Social Icons */}
                    <ul className="list-inline mb-50">
                      <li className="list-inline-item g-mr-2">
                        <a
                          className="u-icon-v1 u-icon-slide-up--hover g-color-gray-dark-v4 g-color-white--hover g-bg-facebook--hover rounded"
                          href="#"
                        >
                          <i className="g-font-size-18 g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                          <i className="g-color-white g-font-size-18 g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-2">
                        <a
                          className="u-icon-v1 u-icon-slide-up--hover g-color-gray-dark-v4 g-color-white--hover g-bg-twitter--hover rounded"
                          href="#"
                        >
                          <i className="g-font-size-18 g-line-height-1 u-icon__elem-regular fa fa-twitter" />
                          <i className="g-color-white g-font-size-18 g-line-height-0_8 u-icon__elem-hover fa fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-2">
                        <a
                          className="u-icon-v1 u-icon-slide-up--hover g-color-gray-dark-v4 g-color-white--hover g-bg-instagram--hover rounded"
                          href="#"
                        >
                          <i className="g-font-size-18 g-line-height-1 u-icon__elem-regular fa fa-instagram" />
                          <i className="g-color-white g-font-size-18 g-line-height-0_8 u-icon__elem-hover fa fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-2">
                        <a
                          className="u-icon-v1 u-icon-slide-up--hover g-color-gray-dark-v4 g-color-white--hover g-bg-google-plus--hover rounded"
                          href="#"
                        >
                          <i className="g-font-size-18 g-line-height-1 u-icon__elem-regular fa fa-google-plus" />
                          <i className="g-color-white g-font-size-18 g-line-height-0_8 u-icon__elem-hover fa fa-google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-2">
                        <a
                          className="u-icon-v1 u-icon-slide-up--hover g-color-gray-dark-v4 g-color-white--hover g-bg-linkedin--hover rounded"
                          href="#"
                        >
                          <i className="g-font-size-18 g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                          <i className="g-color-white g-font-size-18 g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                    {/* End Social Icons */}
                  </div>
                </div>
                {/* End Secondary Content */}
              </div>
            </div>
            {/* End Content */}
            {/* Copyright */}
            <div className="container g-pt-30 g-pb-10">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6 g-mb-20">
                  <p className="g-font-size-13 mb-0">
                    2019 © Htmlstream. All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 text-md-right g-mb-20">
                  <ul className="list-inline g-color-gray-dark-v5 g-font-size-25 mb-0">
                    <li className="list-inline-item g-cursor-pointer mr-1">
                      <i
                        className="fa fa-cc-visa"
                        title="Visa"
                        data-toggle="tooltip"
                        data-placement="top"
                      />
                    </li>
                    <li className="list-inline-item g-cursor-pointer mx-1">
                      <i
                        className="fa fa-cc-paypal"
                        title="Paypal"
                        data-toggle="tooltip"
                        data-placement="top"
                      />
                    </li>
                    <li className="list-inline-item g-cursor-pointer mx-1">
                      <i
                        className="fa fa-cc-mastercard"
                        title="Master Card"
                        data-toggle="tooltip"
                        data-placement="top"
                      />
                    </li>
                    <li className="list-inline-item g-cursor-pointer ml-1">
                      <i
                        className="fa fa-cc-stripe"
                        title="Stripe"
                        data-toggle="tooltip"
                        data-placement="top"
                      />
                    </li>
                    <li className="list-inline-item g-cursor-pointer ml-1">
                      <i
                        className="fa fa-cc-discover"
                        title="Discover"
                        data-toggle="tooltip"
                        data-placement="top"
                      />
                    </li>
                    <li className="list-inline-item g-cursor-pointer ml-1">
                      <i
                        className="fa fa-cc-jcb"
                        title="JCB"
                        data-toggle="tooltip"
                        data-placement="top"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Copyright */}
          </footer>
          {/* End Footer */}
          {/* Go To Top */}
          <a
            className="js-go-to u-go-to-v2"
            href="#"
            data-type="fixed"
            data-position='{
     "bottom": 15,
     "right": 15
   }'
            data-offset-top={400}
            data-compensation="#js-header"
            data-show-effect="zoomIn"
          >
            <i className="hs-icon hs-icon-arrow-top" />
          </a>
          {/* End Go To Top */}
          {/* Modal Window */}
          <div
            id="modal-type-onscroll"
            className="js-autonomous-popup text-left g-bg-white g-pos-rel g-rounded-5"
            style={{ display: "none" }}
            data-modal-type="onscroll"
            data-open-effect="fadeIn"
            data-close-effect="fadeIn"
            data-breakpoint={1000}
            data-speed={500}
          >
            <button
              type="button"
              className="close g-color-main-light-v3 g-color-primary--hover g-font-size-13 g-pos-abs g-top-15 g-right-15 g-opacity-1"
              onclick="Custombox.modal.close();"
            >
              <i className="hs-icon hs-icon-close" />
            </button>
            {/* Modal Window - Content */}
            <div className="g-width-720">
              <div className="row align-items-center">
                <div
                  className="col-sm-6 g-height-350--sm g-bg-size-cover g-bg-pos-top-center g-rounded-left-5"
                  data-bg-img-src="assets/img-temp/300x300/img1.jpg"
                />
                <div className="col-sm-6">
                  <div className="g-pl-30 g-pl-20--sm g-pr-30 g-py-20">
                    {/* Info */}
                    <div className="g-mb-35">
                      <h3 className="h1 g-color-primary">Subscribe</h3>
                      <p className="g-font-weight-300 g-font-size-16">
                        Get free promotions every month!
                      </p>
                    </div>
                    {/* End Info */}
                    {/* Subscribe Form */}
                    <form className="input-group u-shadow-v19 rounded g-mb-20">
                      <input
                        className="form-control g-brd-right-none g-brd-gray-light-v4 g-color-white g-bg-main-light-v3 g-rounded-left-5 g-px-20 g-py-8"
                        type="email"
                        placeholder="Enter your email"
                      />
                      <span className="input-group-addon u-shadow-v19 g-brd-left-none g-brd-gray-light-v4 g-bg-main-light-v3 g-rounded-right-5 g-pa-5">
                        <button
                          className="btn u-btn-primary rounded text-uppercase g-py-8 g-px-18"
                          type="submit"
                        >
                          <i className="fa fa-angle-right" />
                        </button>
                      </span>
                    </form>
                    {/* End Subscribe Form */}
                    {/* Social Icons */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item g-mx-0">
                        <a
                          className="u-icon-v3 u-icon-size--xs g-color-main-light-v3 g-color-white--hover g-bg-white g-bg-primary--hover g-font-size-13 rounded"
                          href="#"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-0">
                        <a
                          className="u-icon-v3 u-icon-size--xs g-color-main-light-v3 g-color-white--hover g-bg-white g-bg-primary--hover g-font-size-13 rounded"
                          href="#"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-0">
                        <a
                          className="u-icon-v3 u-icon-size--xs g-color-main-light-v3 g-color-white--hover g-bg-white g-bg-primary--hover g-font-size-13 rounded"
                          href="#"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-0">
                        <a
                          className="u-icon-v3 u-icon-size--xs g-color-main-light-v3 g-color-white--hover g-bg-white g-bg-primary--hover g-font-size-13 rounded"
                          href="#"
                        >
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li className="list-inline-item g-mx-0">
                        <a
                          className="u-icon-v3 u-icon-size--xs g-color-main-light-v3 g-color-white--hover g-bg-white g-bg-primary--hover g-font-size-13 rounded"
                          href="#"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                    {/* End Social Icons */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Modal Window - Content */}
          </div>
          {/* End Modal Window */}
        </main>
        <div className="u-outer-spaces-helper" />
        {/* JS Global Compulsory */}
        {/* JS Implementing Plugins */}
        {/* JS Revolution Slider */}
        {/* JS Unify */}
        {/* JS Customization */}
        {/* JS Plugins Init. */}
      </>
    </div>
  );
};

export default Home;
