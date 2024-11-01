/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AffiliateLink.js":
/*!******************************!*\
  !*** ./src/AffiliateLink.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__);

// Import WordPress Components.






// Create shopper affiliate button with Popover for product/collection selection.
const ShopperAffiliateButton = props => {
  const {
    contentRef,
    isActive,
    onChange,
    value
  } = props;
  const anchorRef = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.useAnchorRef)({
    ref: contentRef,
    value
  });

  // State to show popover.
  const [showPopover, setShowPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showSearchResults, setshowSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [allProducts, setAllProducts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [allCollections, setAllCollections] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  function searchproduct(event) {
    let searchurl = "shopper/v1/search/?searchtext=" + event.target.value;
    wp.apiFetch({
      path: searchurl
    }).then(filteredcollPdts => {
      setAllProducts(filteredcollPdts[0]);
      setAllCollections(filteredcollPdts[1]);
    });
    if (event.target.value && (allProducts || allCollections)) {
      setshowSearchResults(true);
    }
  }
  function applyShopperLink(val) {
    const attributes = {};
    if (val) {
      attributes.href = val;
      attributes.target = "_blank";
      attributes.rel = "nofollow sponsored noopener";
      attributes.className = "shopper_dot_com-affiliate-link";
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.applyFormat)(value, {
        type: "a",
        attributes
      }));
      setShowPopover(false);
    }
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichTextToolbarButton, {
    isActive: isActive,
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].shopper,
    onClick: () => {
      setShowPopover(true);
    },
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Affiliate Link", "shopper-dot-com/affiliatelink")
  }), showPopover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLPopover, {
    anchorRef: anchorRef,
    className: "shopper-aff-link-ins-container",
    onClose: () => setShowPopover(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "spcom__font spcom__ellipsis",
    type: "search",
    placeholder: "Search",
    onChange: searchproduct
  }), showSearchResults && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_searched_aff_links_list"
  }, Object.entries(allProducts).map(_ref => {
    let [key, val] = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_aff_link_element",
      onClick: () => applyShopperLink(val["products_affilate"])
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__p-name spcom__font spcom__ellipsis line1"
    }, val["product_title"]));
  }))))));
};

// Register the Format.
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.registerFormatType)("shopper-dot-com/affiliate-link", {
  className: "shopper_dot_com-affiliate-link",
  edit: ShopperAffiliateButton,
  tagName: "shopper",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Affiliate Link", "shopper-dot-com/affiliatelink")
});

/***/ }),

/***/ "./src/ButtonLayouts.js":
/*!******************************!*\
  !*** ./src/ButtonLayouts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonLayouts)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function ButtonLayouts(_ref) {
  let {
    props,
    cur_prod = false
  } = _ref;
  let prodProps = props.attributes;
  let pdtSlug = props.attributes.selectedProductOrCollnAffl;
  if (cur_prod) {
    prodProps = cur_prod.productProps;
    pdtSlug = props.attributes.linkCloakingSlugType == "name" ? cur_prod.pdt_name_slug : cur_prod.pdt_slug;
  }
  function generateRedirectionURL(slug) {
    let baseurl = window.location.origin;
    let redrnSlug = props.attributes.affRdrctnSlug;
    let redrctn_url = baseurl + "/" + redrnSlug + "/" + slug + "/";
    return redrctn_url;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__single_buy_button1"
  }, prodProps?.buttonLayout == "button1" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_button_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "spcom_raw-a-text spcom_affiliate_anchor_tag",
    href: generateRedirectionURL(pdtSlug),
    rel: props.attributes.relValue,
    "data-link-type": props.attributes.buttonNewTabToggle ? "_blank" : "_self"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${prodProps?.buttonWidth}%`,
      height: `${prodProps?.buttonHeight}px`,
      borderRadius: `${prodProps?.buttonRadius}px`,
      background: `${prodProps?.buttonColor}`,
      margin: `${prodProps?.collAlignment}`
    },
    className: "spcom_commom_button_layout spcom_button_layout1 spcom__font"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_button_common_text spcom__ellipsis",
    style: {
      fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
      fontFamily: `${prodProps?.buttonTextFont}`,
      color: `${prodProps?.buttonTextColor}`,
      fontStyle: `${prodProps?.buttonTextStyle}`,
      fontWeight: `${prodProps?.buttonTextWeight}`,
      textDecoration: `${prodProps?.buttonTextDecoration}`
    }
  }, prodProps?.buttonText)))), prodProps?.buttonLayout == "button2" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_button_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "spcom_raw-a-text spcom_affiliate_anchor_tag",
    href: generateRedirectionURL(pdtSlug),
    rel: props.attributes.relValue,
    "data-link-type": props.attributes.buttonNewTabToggle ? "_blank" : "_self"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${prodProps?.buttonWidth}%`,
      height: `${prodProps?.buttonHeight}px`,
      borderRadius: `${prodProps?.buttonRadius}px`,
      background: `linear-gradient(${prodProps?.buttonColor},${prodProps?.buttonGradient})`,
      margin: `${prodProps?.collAlignment}`
    },
    className: "spcom_commom_button_layout spcom_button_layout2 spcom__font"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_button_common_text spcom__ellipsis",
    style: {
      fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
      fontFamily: `${prodProps?.buttonTextFont}`,
      color: `${prodProps?.buttonTextColor}`,
      fontStyle: `${prodProps?.buttonTextStyle}`,
      fontWeight: `${prodProps?.buttonTextWeight}`,
      textDecoration: `${prodProps?.buttonTextDecoration}`
    }
  }, prodProps?.buttonText)))), prodProps?.buttonLayout == "button3" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_button_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "spcom_raw-a-text spcom_affiliate_anchor_tag",
    href: generateRedirectionURL(pdtSlug),
    rel: props.attributes.relValue,
    "data-link-type": props.attributes.buttonNewTabToggle ? "_blank" : "_self"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${prodProps?.buttonWidth}%`,
      height: `${prodProps?.buttonHeight}px`,
      borderRadius: `${prodProps?.buttonRadius}px`,
      background: `${prodProps?.buttonColor}`,
      margin: `${prodProps?.collAlignment}`
    },
    className: "spcom_commom_button_layout spcom_button_layout3 spcom__font"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_button_common_text spcom__ellipsis",
    style: {
      fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
      fontFamily: `${prodProps?.buttonTextFont}`,
      color: `${prodProps?.buttonTextColor}`,
      fontStyle: `${prodProps?.buttonTextStyle}`,
      fontWeight: `${prodProps?.buttonTextWeight}`,
      textDecoration: `${prodProps?.buttonTextDecoration}`
    }
  }, prodProps?.buttonText)))), prodProps?.buttonLayout == "button4" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_button_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "spcom_raw-a-text spcom_affiliate_anchor_tag",
    href: generateRedirectionURL(pdtSlug),
    rel: props.attributes.relValue,
    "data-link-type": props.attributes.buttonNewTabToggle ? "_blank" : "_self"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${prodProps?.buttonWidth}%`,
      height: `${prodProps?.buttonHeight}px`,
      borderRadius: `${prodProps?.buttonRadius}px`,
      background: `${prodProps?.buttonColor}`,
      margin: `${prodProps?.collAlignment}`
    },
    className: "spcom_commom_button_layout spcom_button_layout4 spcom__font"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_button_common_text spcom__ellipsis",
    style: {
      fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
      fontFamily: `${prodProps?.buttonTextFont}`,
      color: `${prodProps?.buttonTextColor}`,
      fontStyle: `${prodProps?.buttonTextStyle}`,
      fontWeight: `${prodProps?.buttonTextWeight}`,
      textDecoration: `${prodProps?.buttonTextDecoration}`
    }
  }, prodProps?.buttonText)))));
}

/***/ }),

/***/ "./src/HorizontalLayout1.js":
/*!**********************************!*\
  !*** ./src/HorizontalLayout1.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalLayout1)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");




function HorizontalLayout1(props) {
  function isLocalProdSettings() {
    if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
      return true;
    }
    return false;
  }
  let prod_props = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__horizontal_container spcom__horizontal_theme2"
  }, Object.entries(props.attributes.multiProductsSelected).map(_ref => {
    let [index, pdt] = _ref;
    prod_props = isLocalProdSettings() ? pdt.productProps : props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
        backgroundColor: `${props.attributes.bgColor}`,
        flexDirection: `${prod_props?.bannerPosition}`,
        borderRadius: `${props.attributes.singleBorderRadius}px`,
        margin: `${props.attributes.themeAlignment}`
      },
      className: "shopper_dotcom_horizontal_theme_card shopper_dotcom_aff_link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        flexDirection: `${prod_props?.bannerPosition}`
      },
      className: "shopper_dotcom_single_container"
    }, prod_props?.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
        fontFamily: `${prod_props?.bannerFontFamily}`,
        background: `${prod_props?.bannerBgColor}`,
        fontStyle: `${prod_props?.bannerFontStyle}`,
        fontWeight: `${prod_props?.bannerFontWeight}`,
        textDecoration: `${prod_props?.bannerTextDecoration}`,
        borderRadius: `${prod_props?.bannerPosition == "row" ? "10px 10px 10px 0px" : "10px 10px 0px 10px"}`
      },
      className: "spcom__single1_layout_banner spcom__font"
    }, prod_props?.bannerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        background: `${props.attributes.bgColor}`,
        borderRadius: `${props.attributes.singleBorderRadius}px`,
        borderRight: `${prod_props?.bannerPosition == "row" ? "0px" : "4px solid" + prod_props?.bannerBgColor}`,
        borderLeft: `${prod_props?.bannerPosition == "row" ? "4px solid" + prod_props?.bannerBgColor : "0px"}`
      },
      className: "spcom__single1_layout spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `spcom_hrzntl_img_txt_btns ${!pdt.product_description?.length ? "spcom_align_center" : ""}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com__image_container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: pdt.product_full_image,
      alt: "Product Image"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__p-name_n_address"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-name spcom__font spcom__ellipsis line2"
    }, pdt.product_title), prod_props?.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.priceFontSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__product_price spcom__font"
    }, prod_props?.priceText), prod_props?.pdtDescriptionToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-desc spcom__font spcom__ellipsis line4",
      dangerouslySetInnerHTML: {
        __html: pdt.product_description
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_horizontal_button_layouts"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      cur_prod: isLocalProdSettings() ? pdt : false
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_hrzntl_aff_dsclr"
    }, index == props.attributes.multiProductsSelected.length - 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
        fontFamily: `${props.attributes.affDisclosureFont}`,
        fontStyle: `${props.attributes.affDisclosureStyle}`,
        color: `${props.attributes.affDisclosureColor}`,
        fontWeight: `${props.attributes.affDisclosureWeight}`,
        textDecoration: `${props.attributes.affDisclosureDecoration}`
      },
      className: "spcom__single1_layout_aff_dsclr spcom__font"
    }, props.attributes.affDisclosureText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      props: props
    }))))));
  }));
}

/***/ }),

/***/ "./src/HorizontalLayout2.js":
/*!**********************************!*\
  !*** ./src/HorizontalLayout2.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalLayout2)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");




function HorizontalLayout2(props) {
  function isLocalProdSettings() {
    if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
      return true;
    }
    return false;
  }
  let prod_props = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__horizontal_container spcom__horizontal_theme3"
  }, Object.entries(props.attributes.multiProductsSelected).map(_ref => {
    let [index, pdt] = _ref;
    prod_props = isLocalProdSettings() ? pdt.productProps : props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
        backgroundColor: `${props.attributes.bgColor}`,
        flexDirection: `${prod_props?.bannerPosition}`,
        borderRadius: `${props.attributes.singleBorderRadius}px`,
        margin: `${props.attributes.themeAlignment}`
      },
      className: "shopper_dotcom_horizontal_theme_card shopper_dotcom_aff_link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        flexDirection: `${prod_props?.bannerPosition}`
      },
      className: "shopper_dotcom_single_container"
    }, prod_props?.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
        fontFamily: `${prod_props?.bannerFontFamily}`,
        background: `${prod_props?.bannerBgColor}`,
        fontStyle: `${prod_props?.bannerFontStyle}`,
        fontWeight: `${prod_props?.bannerFontWeight}`,
        textDecoration: `${prod_props?.bannerTextDecoration}`,
        borderTopLeftRadius: `${prod_props?.bannerPosition == "row" ? `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px` : "0px"}`,
        borderTopRightRadius: `${prod_props?.bannerPosition == "row" ? "0px" : `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px`}`
      },
      className: "spcom__single1_layout_banner spcom__font"
    }, prod_props?.bannerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        background: `${props.attributes.bgColor}`,
        borderRadius: `${props.attributes.singleBorderRadius}px`
      },
      className: "spcom__single1_layout spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `spcom_hrzntl_img_txt_btns ${!pdt.product_description?.length ? "spcom_align_center" : ""}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com__image_container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: pdt.product_full_image,
      alt: "Product Image"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__p-name_n_address"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-name spcom__font spcom__ellipsis line2"
    }, pdt.product_title), prod_props?.pdtDescriptionToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-desc spcom__font spcom__ellipsis line4",
      dangerouslySetInnerHTML: {
        __html: pdt.product_description
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_horizontal_button_layouts"
    }, prod_props?.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.priceFontSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__product_price spcom__font"
    }, prod_props?.priceText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      cur_prod: isLocalProdSettings() ? pdt : false
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_hrzntl_aff_dsclr"
    }, index == props.attributes.multiProductsSelected.length - 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
        fontFamily: `${props.attributes.affDisclosureFont}`,
        fontStyle: `${props.attributes.affDisclosureStyle}`,
        color: `${props.attributes.affDisclosureColor}`,
        fontWeight: `${props.attributes.affDisclosureWeight}`,
        textDecoration: `${props.attributes.affDisclosureDecoration}`
      },
      className: "spcom__single1_layout_aff_dsclr spcom__font"
    }, props.attributes.affDisclosureText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      props: props
    }))))));
  }));
}

/***/ }),

/***/ "./src/HorizontalLayout3.js":
/*!**********************************!*\
  !*** ./src/HorizontalLayout3.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalLayout3)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");




function HorizontalLayout3(props) {
  function isLocalProdSettings() {
    if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
      return true;
    }
    return false;
  }
  let prod_props = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__horizontal_container spcom__horizontal_theme4",
    style: {
      width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
      borderRadius: `${props.attributes.singleBorderRadius}px`,
      backgroundColor: `${props.attributes.bgColor}`,
      margin: `${props.attributes.themeAlignment}`
    }
  }, Object.entries(props.attributes.multiProductsSelected).map(_ref => {
    let [index, pdt] = _ref;
    prod_props = isLocalProdSettings() ? pdt.productProps : props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dotcom_horizontal_theme_card shopper_dotcom_aff_link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        flexDirection: `${prod_props?.bannerPosition}`
      },
      className: "shopper_dotcom_single_container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__single1_layout spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `spcom_hrzntl_img_txt_btns ${!pdt.product_description?.length ? "spcom_align_center" : ""}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com__image_container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: pdt.product_full_image,
      alt: "Product Image"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__p-name_n_address"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-name spcom__font spcom__ellipsis line2"
    }, pdt.product_title), prod_props?.pdtDescriptionToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-desc spcom__font spcom__ellipsis line4",
      dangerouslySetInnerHTML: {
        __html: pdt.product_description
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_horizontal_button_layouts"
    }, prod_props?.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
        fontFamily: `${prod_props?.bannerFontFamily}`,
        background: `${prod_props?.bannerBgColor}`,
        fontStyle: `${prod_props?.bannerFontStyle}`,
        fontWeight: `${prod_props?.bannerFontWeight}`,
        textDecoration: `${prod_props?.bannerTextDecoration}`
      },
      className: "spcom__single1_layout_banner spcom__font"
    }, prod_props?.bannerText), prod_props?.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.priceFontSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__product_price spcom__font"
    }, prod_props?.priceText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      cur_prod: isLocalProdSettings() ? pdt : false
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_hrzntl_aff_dsclr"
    }, index == props.attributes.multiProductsSelected.length - 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
        fontFamily: `${props.attributes.affDisclosureFont}`,
        fontStyle: `${props.attributes.affDisclosureStyle}`,
        color: `${props.attributes.affDisclosureColor}`,
        fontWeight: `${props.attributes.affDisclosureWeight}`,
        textDecoration: `${props.attributes.affDisclosureDecoration}`
      },
      className: "spcom__single1_layout_aff_dsclr spcom__font"
    }, props.attributes.affDisclosureText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      props: props
    }))))));
  }));
}

/***/ }),

/***/ "./src/MainVerticalLayout1.js":
/*!************************************!*\
  !*** ./src/MainVerticalLayout1.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainVerticalLayout1)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");






function MainVerticalLayout1(props) {
  function isLocalProdSettings() {
    if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
      return true;
    }
    return false;
  }
  let prod_props = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_slider-container spcom_vertical_main_top_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      margin: `${props.attributes.themeAlignment}`
    },
    className: "spcom__main_vertical_container spcom__main_vertical_theme1 sp_com_slider-wrapper"
  }, Object.entries(props.attributes.multiProductsSelected).map(_ref => {
    let [index, pdt] = _ref;
    prod_props = isLocalProdSettings() ? pdt.productProps : props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: `${props.attributes.themeWidths?.themeContainerWidth}px`,
        minWidth: `${props.attributes.themeWidths?.themeContainerWidth}px`,
        backgroundColor: `${props.attributes.bgColor}`,
        flexDirection: `${prod_props?.bannerPosition}`,
        borderRadius: `${props.attributes.singleBorderRadius}px`
      },
      className: "shopper_dotcom_vertical_theme_card shopper_dotcom_aff_link child"
    }, prod_props?.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
        fontFamily: `${prod_props?.bannerFontFamily}`,
        background: `${prod_props?.bannerBgColor}`,
        fontStyle: `${prod_props?.bannerFontStyle}`,
        fontWeight: `${prod_props?.bannerFontWeight}`,
        textDecoration: `${prod_props?.bannerTextDecoration}`,
        borderTopLeftRadius: `${prod_props?.bannerPosition == "row" ? `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px` : "0px"}`,
        borderTopRightRadius: `${prod_props?.bannerPosition == "row" ? "0px" : `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px`}`
      },
      className: "spcom__single1_layout_banner spcom__font spcom__ellipsis line1"
    }, prod_props?.bannerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dotcom_vertical_theme_text spcom__p-name_n_address"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: pdt.product_full_image,
      alt: "Product Image",
      className: "shopper_dotcom_vertical_theme_image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-name spcom__font spcom__ellipsis line2"
    }, pdt.product_title), prod_props?.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.priceFontSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__product_price spcom__font"
    }, prod_props?.priceText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dotcom_vertical_theme_sub-text"
    }, prod_props?.pdtDescriptionToggle && props.attributes.prodsWithDescrptn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-desc spcom__font spcom__ellipsis line4",
      dangerouslySetInnerHTML: {
        __html: pdt.product_description
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      cur_prod: isLocalProdSettings() ? pdt : false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `shopper_dotcom_vertical_theme_bottom-text ${index != 0 ? "shopper_dotcom_hide_element" : ""}`
    }, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
        fontFamily: `${props.attributes.affDisclosureFont}`,
        fontStyle: `${props.attributes.affDisclosureStyle}`,
        color: `${props.attributes.affDisclosureColor}`,
        fontWeight: `${props.attributes.affDisclosureWeight}`,
        textDecoration: `${props.attributes.affDisclosureDecoration}`
      },
      className: "spcom__single1_layout_aff_dsclr spcom__font"
    }, props.attributes.affDisclosureText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      props: props
    }))));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn prev spcom_buttonprev",
    disabled: "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].leftArrow
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn next spButtonNext"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].rightArrow
  }))));
}

/***/ }),

/***/ "./src/MainVerticalLayout2.js":
/*!************************************!*\
  !*** ./src/MainVerticalLayout2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainVerticalLayout2)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");






function MainVerticalLayout2(props) {
  function isLocalProdSettings() {
    if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
      return true;
    }
    return false;
  }
  let prod_props = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_slider-container spcom_vertical_main_top_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      margin: `${props.attributes.themeAlignment}`
    },
    className: "spcom__main_vertical_container spcom__main_vertical_theme3 sp_com_slider-wrapper"
  }, Object.entries(props.attributes.multiProductsSelected).map(_ref => {
    let [index, pdt] = _ref;
    prod_props = isLocalProdSettings() ? pdt.productProps : props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: `${props.attributes.themeWidths?.themeContainerWidth}px`,
        minWidth: `${props.attributes.themeWidths?.themeContainerWidth}px`,
        backgroundColor: `${props.attributes.bgColor}`,
        borderRadius: `${props.attributes.singleBorderRadius}px`
      },
      className: "shopper_dotcom_vertical_theme_card shopper_dotcom_aff_link child"
    }, prod_props?.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
        fontFamily: `${prod_props?.bannerFontFamily}`,
        background: `${prod_props?.bannerBgColor}`,
        fontStyle: `${prod_props?.bannerFontStyle}`,
        fontWeight: `${prod_props?.bannerFontWeight}`,
        textDecoration: `${prod_props?.bannerTextDecoration}`,
        borderTopLeftRadius: `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px`,
        borderTopRightRadius: `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px`
      },
      className: "spcom__single1_layout_banner spcom__font spcom__ellipsis line1"
    }, prod_props?.bannerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dotcom_vertical_theme_text spcom__p-name_n_address"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: pdt.product_full_image,
      alt: "Product Image",
      className: "shopper_dotcom_vertical_theme_image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-name spcom__font spcom__ellipsis line2"
    }, pdt["product_title"]), prod_props?.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.priceFontSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__product_price spcom__font"
    }, prod_props?.priceText), prod_props?.pdtDescriptionToggle && props.attributes.prodsWithDescrptn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dotcom_vertical_theme_sub-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-desc spcom__font spcom__ellipsis line4",
      dangerouslySetInnerHTML: {
        __html: pdt["product_description"]
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      cur_prod: isLocalProdSettings() ? pdt : false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `shopper_dotcom_vertical_theme_bottom-text ${index != 0 ? "shopper_dotcom_hide_element" : ""}`
    }, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
        fontFamily: `${props.attributes.affDisclosureFont}`,
        fontStyle: `${props.attributes.affDisclosureStyle}`,
        color: `${props.attributes.affDisclosureColor}`,
        fontWeight: `${props.attributes.affDisclosureWeight}`,
        textDecoration: `${props.attributes.affDisclosureDecoration}`
      },
      className: "spcom__single1_layout_aff_dsclr spcom__font"
    }, props.attributes.affDisclosureText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      props: props
    }))));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn prev spcom_buttonprev",
    disabled: "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].leftArrow
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn next spButtonNext"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].rightArrow
  }))));
}

/***/ }),

/***/ "./src/MainVerticalLayout3.js":
/*!************************************!*\
  !*** ./src/MainVerticalLayout3.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainVerticalLayout3)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");






function MainVerticalLayout3(props) {
  function isLocalProdSettings() {
    if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
      return true;
    }
    return false;
  }
  let prod_props = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_slider-container spcom_vertical_main_top_container spcom_vertical_boxed"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__main_vertical_container spcom__main_vertical_theme4 sp_com_slider-wrapper",
    style: {
      backgroundColor: `${props.attributes.bgColor}`,
      borderRadius: `${props.attributes.singleBorderRadius}px`,
      margin: `${props.attributes.themeAlignment}`
    }
  }, Object.entries(props.attributes.multiProductsSelected).map(_ref => {
    let [index, pdt] = _ref;
    prod_props = isLocalProdSettings() ? pdt.productProps : props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: `${props.attributes.themeWidths?.themeContainerWidth}px`,
        minWidth: `${props.attributes.themeWidths?.themeContainerWidth}px`
      },
      className: "shopper_dotcom_vertical_theme_card shopper_dotcom_aff_link child"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dotcom_vertical_theme_text spcom__p-name_n_address spcom_border_left"
    }, prod_props?.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
        fontFamily: `${prod_props?.bannerFontFamily}`,
        background: `${prod_props?.bannerBgColor}`,
        fontStyle: `${prod_props?.bannerFontStyle}`,
        fontWeight: `${prod_props?.bannerFontWeight}`,
        textDecoration: `${prod_props?.bannerTextDecoration}`,
        margin: prod_props?.bannerPosition == "row" ? "0 auto 16px 0" : "0 0 16px auto"
      },
      className: "spcom__single1_layout_banner spcom__font"
    }, prod_props?.bannerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: pdt.product_full_image,
      alt: "Product Image",
      class: "shopper_dotcom_vertical_theme_image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-name spcom__font spcom__ellipsis line2"
    }, pdt?.["product_title"]), prod_props?.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.priceFontSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__product_price spcom__font"
    }, prod_props?.priceText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dotcom_vertical_theme_sub-text"
    }, prod_props?.pdtDescriptionToggle && props.attributes.prodsWithDescrptn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        fontStyle: `${props.attributes.fontStyle}`,
        color: `${props.attributes.fontColor}`,
        textDecoration: `${props.attributes.textDecoration}`
      },
      className: "spcom__p-desc spcom__font spcom__ellipsis line4",
      dangerouslySetInnerHTML: {
        __html: pdt?.["product_description"]
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      cur_prod: isLocalProdSettings() ? pdt : false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `shopper_dotcom_vertical_theme_bottom-text ${index != 0 ? "shopper_dotcom_hide_element" : ""}`
    }, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
        fontFamily: `${props.attributes.affDisclosureFont}`,
        fontStyle: `${props.attributes.affDisclosureStyle}`,
        color: `${props.attributes.affDisclosureColor}`,
        fontWeight: `${props.attributes.affDisclosureWeight}`,
        textDecoration: `${props.attributes.affDisclosureDecoration}`
      },
      className: "spcom__single1_layout_aff_dsclr spcom__font"
    }, props.attributes.affDisclosureText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      props: props
    }))));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn prev spcom_buttonprev",
    disabled: "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].leftArrow
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn next spButtonNext"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_3__["default"].rightArrow
  }))));
}

/***/ }),

/***/ "./src/Picture.js":
/*!************************!*\
  !*** ./src/Picture.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Picture)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Picture(_ref) {
  let {
    src,
    alt,
    className = "spcom_img-filter",
    inlineStyle = {},
    mediaOverRide
  } = _ref;
  const imageFormats = ["webp", "jpg"]; // Define the supported formats 

  // Define media query sizes in ascending order
  let mediaSizes = [{
    size: 640,
    query: "(min-width: 640px)"
  }, {
    size: 150,
    query: "(min-width: 414px)"
  }, {
    size: 150,
    query: "(min-width: 150px)"
  }];

  // check media override is provided then update the media array
  if (mediaOverRide && mediaOverRide.length > 0) mediaSizes = mediaOverRide;
  const generateSourceSet = (src, sizes, formats) => {
    return sizes.map((size, index) => {
      return formats.map(format => {
        // only webp will be appended as extension
        const sourceURL = format === "webp" && src && src.indexOf("-imcv2") > -1 ? `${src}-w${sizes[index]}.${format}` : `${src}-w${sizes[index]}`;
        return format === "webp" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
          key: `${format}-${size}`,
          media: mediaSizes[index].query,
          srcSet: sourceURL,
          type: "image/webp"
        }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
          key: `${format}-${size}`,
          media: mediaSizes[index].query,
          srcSet: sourceURL
        });
      });
    }).flat();
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "spcom_picture_container"
  }, generateSourceSet(src, mediaSizes.map(item => item.size), imageFormats), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: `${src}`,
    alt: alt,
    className: className,
    style: {
      ...inlineStyle
    }
  }));
}

/***/ }),

/***/ "./src/ShopperBacklink.js":
/*!********************************!*\
  !*** ./src/ShopperBacklink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopperBacklink)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function ShopperBacklink(_ref) {
  let {
    props
  } = _ref;
  const {
    enableReferralLink,
    doesReferralLinkExist,
    referralLink
  } = props.attributes;
  return !enableReferralLink || doesReferralLinkExist ? null : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_referral_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_referral_icon"
  }, "i"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_backlink_hover"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__font"
  }, "Powered by", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "spcom_raw-a-text",
    target: "_blank",
    href: referralLink,
    rel: "noopener"
  }, "Shopper.com"))));
}

/***/ }),

/***/ "./src/ThemesAndLayouts.js":
/*!*********************************!*\
  !*** ./src/ThemesAndLayouts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemesAndLayouts)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _MainVerticalLayout1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainVerticalLayout1 */ "./src/MainVerticalLayout1.js");
/* harmony import */ var _MainVerticalLayout2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainVerticalLayout2 */ "./src/MainVerticalLayout2.js");
/* harmony import */ var _MainVerticalLayout3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainVerticalLayout3 */ "./src/MainVerticalLayout3.js");
/* harmony import */ var _HorizontalLayout1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HorizontalLayout1 */ "./src/HorizontalLayout1.js");
/* harmony import */ var _HorizontalLayout2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HorizontalLayout2 */ "./src/HorizontalLayout2.js");
/* harmony import */ var _HorizontalLayout3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HorizontalLayout3 */ "./src/HorizontalLayout3.js");
/* harmony import */ var _VerticalLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VerticalLayout */ "./src/VerticalLayout.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");













function ThemesAndLayouts(_ref) {
  let {
    props,
    is_edit_screen
  } = _ref;
  function generateRedirectionURL(pdt_id) {
    let baseurl = window.location.origin;
    let redrnSlug = props.attributes.affRdrctnSlug;
    let redrctn_url = baseurl + "/" + redrnSlug + "/" + pdt_id + "/";
    return redrctn_url;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (props.attributes.selectedProduct || props.attributes.multiProductsSelected || props.attributes.selectedCollection) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `${is_edit_screen ? "shopper_dotcom_edit_block" : "shopper_dotcom_save_block"}`
  }, props.attributes.selectedProduct && props.attributes.selectedLayout == "single" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.attributes.singleTheme == "simple" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
      flexDirection: `${props.attributes.bannerPosition}`,
      margin: `${props.attributes.themeAlignment}`
    },
    className: "shopper_dotcom_single_container shopper_dotcom_aff_link shopper_dotcom_single_left"
  }, props.attributes.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
      fontFamily: `${props.attributes.bannerFontFamily}`,
      background: `${props.attributes.bannerBgColor}`,
      fontStyle: `${props.attributes.bannerFontStyle}`,
      fontWeight: `${props.attributes.bannerFontWeight}`,
      textDecoration: `${props.attributes.bannerTextDecoration}`,
      borderTopLeftRadius: `${props.attributes.bannerPosition == "row" ? `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px` : "0px"}`,
      borderTopRightRadius: `${props.attributes.bannerPosition == "row" ? "0px" : `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px`}`
    },
    className: "spcom__single1_layout_banner spcom__font"
  }, props.attributes.bannerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: `${props.attributes.bgColor}`,
      borderRadius: `${props.attributes.singleBorderRadius}px`,
      borderWidth: `${props.attributes.singleBorderWidth}px`,
      borderColor: `${props.attributes.singleBorderColor}`
    },
    className: "spcom__single1_layout spcom__font"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com__image_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: props.attributes.selectedProduct["product_full_image"],
    alt: "Product Image"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__p-name_n_address"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-name spcom__font spcom__ellipsis line2"
  }, props.attributes.selectedProduct["product_title"]), props.attributes.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__product_price spcom__font"
  }, props.attributes.priceText), props.attributes.pdtDescriptionToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-desc spcom__font spcom__ellipsis line4",
    dangerouslySetInnerHTML: {
      __html: props.attributes.selectedProduct["product_description"]
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: props
  }), props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
      fontFamily: `${props.attributes.affDisclosureFont}`,
      fontStyle: `${props.attributes.affDisclosureStyle}`,
      color: `${props.attributes.affDisclosureColor}`,
      fontWeight: `${props.attributes.affDisclosureWeight}`,
      textDecoration: `${props.attributes.affDisclosureDecoration}`
    },
    className: "spcom__single1_layout_aff_dsclr spcom__font"
  }, props.attributes.affDisclosureText))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_9__["default"], {
    props: props
  })), props.attributes.singleTheme == "simpleRight" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
      flexDirection: `${props.attributes.bannerPosition}`,
      margin: `${props.attributes.themeAlignment}`
    },
    className: "shopper_dotcom_single_container shopper_dotcom_aff_link shopper_dotcom_single_right"
  }, props.attributes.bannerToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
      fontFamily: `${props.attributes.bannerFontFamily}`,
      background: `${props.attributes.bannerBgColor}`,
      fontStyle: `${props.attributes.bannerFontStyle}`,
      fontWeight: `${props.attributes.bannerFontWeight}`,
      textDecoration: `${props.attributes.bannerTextDecoration}`,
      borderTopLeftRadius: `${props.attributes.bannerPosition == "row" ? `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px` : "0px"}`,
      borderTopRightRadius: `${props.attributes.bannerPosition == "row" ? "0px" : `${props.attributes.singleBorderRadius <= 50 ? props.attributes.singleBorderRadius : 0}px`}`
    },
    className: "spcom__single1_layout_banner spcom__font"
  }, props.attributes.bannerText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: `${props.attributes.bgColor}`,
      borderRadius: `${props.attributes.singleBorderRadius}px`,
      borderWidth: `${props.attributes.singleBorderWidth}px`,
      borderColor: `${props.attributes.singleBorderColor}`
    },
    className: "spcom__single1_layout spcom__font"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com__image_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: props.attributes.selectedProduct["product_full_image"],
    alt: "Product Image"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__p-name_n_address"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-name spcom__font spcom__ellipsis line2"
  }, props.attributes.selectedProduct["product_title"]), props.attributes.priceToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__product_price spcom__font"
  }, props.attributes.priceText), props.attributes.pdtDescriptionToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-desc spcom__font spcom__ellipsis line4",
    dangerouslySetInnerHTML: {
      __html: props.attributes.selectedProduct["product_description"]
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: props
  }), props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
      fontFamily: `${props.attributes.affDisclosureFont}`,
      fontStyle: `${props.attributes.affDisclosureStyle}`,
      color: `${props.attributes.affDisclosureColor}`,
      fontWeight: `${props.attributes.affDisclosureWeight}`,
      textDecoration: `${props.attributes.affDisclosureDecoration}`
    },
    className: "spcom__single1_layout_aff_dsclr spcom__font"
  }, props.attributes.affDisclosureText))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_9__["default"], {
    props: props
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_VerticalLayout__WEBPACK_IMPORTED_MODULE_8__["default"], props)), (props.attributes.selectedProduct || props.attributes.selectedCollection) && props.attributes.selectedLayout == "button" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_aff_link"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: props
  }))), props.attributes.selectedProduct && props.attributes.selectedLayout == "image" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_image_layout shopper_dotcom_aff_link"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "spcom_raw-a-text spcom_affiliate_anchor_tag",
    href: generateRedirectionURL(props.attributes.selectedProductOrCollnAffl),
    rel: props.attributes.relValue,
    "data-link-type": props.attributes.buttonNewTabToggle ? "_blank" : "_self"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__p-tile",
    style: {
      width: `${props.attributes.tileWidth}%`,
      background: `${props.attributes.bgColor}`,
      borderRadius: `${props.attributes.borderRadius}px`,
      padding: `${props.attributes.tilePadding}px`,
      margin: `${props.attributes.collAlignment}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com__image_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: props.attributes.selectedProduct["product_full_image"],
    alt: "Product Image",
    mediaOverRide: [{
      size: 820,
      query: "(min-width: 640px)"
    }, {
      size: 640,
      query: "(min-width: 414px)"
    }, {
      size: 480,
      query: "(min-width: 150px)"
    }]
  })), props.attributes.prodNameToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__p-name spcom__font spcom__ellipsis line2",
    style: {
      fontFamily: `${props.attributes.fontFamily}`,
      fontSize: `${props.attributes.fontSize}px`,
      color: `${props.attributes.fontColor}`,
      fontStyle: `${props.attributes.fontStyle}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    }
  }, props.attributes.selectedProduct["product_title"])))), props.attributes.selectedCollection && props.attributes.selectedCollectionProducts && props.attributes.selectedLayout == "image" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_embedded-collection spcom_embedded-collection-landscape spcom_embedded-collection-percentage",
    style: {
      width: `${props.attributes.collTileWidth}%`,
      background: `${props.attributes.collBgColor}`,
      borderRadius: `${props.attributes.borderRadius}px`,
      padding: `${props.attributes.tilePadding}px`,
      margin: `${props.attributes.collAlignment}`
    }
  }, props.attributes.collNameToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_embedded-title spcom__font",
    style: {
      fontFamily: `${props.attributes.fontFamily}`,
      fontSize: `${props.attributes.fontSize}px`,
      color: `${props.attributes.fontColor}`,
      fontStyle: `${props.attributes.fontStyle}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    }
  }, props.attributes.selectedCollection["collection_title"]), props.attributes.selectedCollection["collection_image"] && props.attributes.collCoverToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_collection-cover-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_collection-cover-landscape"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: props.attributes.selectedCollection["collection_full_image"],
    alt: "Product Image",
    mediaOverRide: [{
      size: 820,
      query: "(min-width: 640px)"
    }, {
      size: 640,
      query: "(min-width: 414px)"
    }, {
      size: 480,
      query: "(min-width: 150px)"
    }]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom_embedded-collection-product-list btn-centre"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_parent"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_slider-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_slider-wrapper"
  }, Object.entries(props.attributes.selectedCollectionProducts).map(_ref2 => {
    let [key, value] = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "child shopper_dotcom_aff_link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "spcom_raw-a-text spcom_affiliate_anchor_tag",
      href: generateRedirectionURL(value["product_id"]),
      rel: props.attributes.relValue,
      "data-link-type": props.attributes.buttonNewTabToggle ? "_blank" : "_self"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com_embedded-collection-product-item",
      style: {
        minWidth: "unset",
        width: `${props.attributes.collProdSize}px`,
        height: `${props.attributes.collProdSize}px`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_10__["default"], {
      src: value["product_full_image"],
      alt: value["product_title"]
    })), props.attributes.prodNameToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com_embedded-collection-product-name spcom__ellipsis line3 spcom__font",
      style: {
        fontSize: `${props.attributes.collProdFontSize}px`,
        fontFamily: `${props.attributes.fontFamily}`,
        color: `${props.attributes.fontColor}`,
        fontStyle: `${props.attributes.fontStyle}`,
        fontWeight: `${props.attributes.fontWeight}`,
        textDecoration: `${props.attributes.textDecoration}`
      }
    }, value["product_title"])));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn prev spcom_buttonprev",
    disabled: "true"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_12__["default"].leftArrow
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sp_com_prod_scroll_btn next spButtonNext"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom-carasoul-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    className: "shopper_com___icon_common",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_12__["default"].rightArrow
  })))))))), props.attributes.multiProductsSelected && props.attributes.selectedLayout == "mainVertical" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.attributes.vertclHrzntlTheme == "simple" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MainVerticalLayout1__WEBPACK_IMPORTED_MODULE_2__["default"], props), props.attributes.vertclHrzntlTheme == "simpleAligned" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MainVerticalLayout2__WEBPACK_IMPORTED_MODULE_3__["default"], props), props.attributes.vertclHrzntlTheme == "boxed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MainVerticalLayout3__WEBPACK_IMPORTED_MODULE_4__["default"], props)), props.attributes.multiProductsSelected && props.attributes.selectedLayout == "horizontal" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.attributes.vertclHrzntlTheme == "simple" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HorizontalLayout1__WEBPACK_IMPORTED_MODULE_5__["default"], props), props.attributes.vertclHrzntlTheme == "simpleAligned" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HorizontalLayout2__WEBPACK_IMPORTED_MODULE_6__["default"], props), props.attributes.vertclHrzntlTheme == "boxed" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HorizontalLayout3__WEBPACK_IMPORTED_MODULE_7__["default"], props))));
}

/***/ }),

/***/ "./src/VerticalLayout.js":
/*!*******************************!*\
  !*** ./src/VerticalLayout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VerticalLayout)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLayouts */ "./src/ButtonLayouts.js");
/* harmony import */ var _ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopperBacklink */ "./src/ShopperBacklink.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Picture */ "./src/Picture.js");




function VerticalLayout(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_single_container shopper_dotcom_aff_link shopper_dotcom_vertical_theme"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      margin: `${props.attributes.themeAlignment}`
    },
    className: "spcom__single_vertical_theme"
  }, props.attributes.singleTheme == "vertical" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spcom__single_vertical_simple_container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
      borderRadius: `${props.attributes.singleBorderRadius}px`,
      backgroundColor: `${props.attributes.bgColor}`
    },
    className: "shopper_dotcom_vertical_theme_card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: props.attributes.selectedProduct["product_full_image"],
    alt: "Product Image",
    className: "shopper_dotcom_vertical_theme_image",
    inlineStyle: {
      borderTopLeftRadius: `${props.attributes.singleBorderRadius}px`,
      borderTopRightRadius: `${props.attributes.singleBorderRadius}px`
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_vertical_theme_text spcom__p-name_n_address"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-name spcom__font spcom__ellipsis line2"
  }, props.attributes.selectedProduct["product_title"]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_vertical_theme_sub-text"
  }, props.attributes.pdtDescriptionToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-desc spcom__font spcom__ellipsis line4",
    dangerouslySetInnerHTML: {
      __html: props.attributes.selectedProduct["product_description"]
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_vertical_theme_bottom-text"
  }, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
      fontFamily: `${props.attributes.affDisclosureFont}`,
      fontStyle: `${props.attributes.affDisclosureStyle}`,
      color: `${props.attributes.affDisclosureColor}`,
      fontWeight: `${props.attributes.affDisclosureWeight}`,
      textDecoration: `${props.attributes.affDisclosureDecoration}`
    },
    className: "spcom__single1_layout_aff_dsclr spcom__font"
  }, props.attributes.affDisclosureText))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: props
  }))), props.attributes.singleTheme == "verticalOverlaped" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: `${props.attributes.themeWidths?.themeContainerWidth}px`
    },
    className: "shopper_dotcom_vertical_theme_card_overlaped"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_vertical_theme_blank_card"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      top: `${props.attributes.themeWidths?.singleOverlapedImgTop}px`,
      borderRadius: `${props.attributes.singleBorderRadius}px`
    },
    className: "shopper_dotcom_vertical_theme_image-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: props.attributes.selectedProduct["product_full_image"],
    alt: "Product Image",
    className: "shopper_dotcom_vertical_theme_image"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      left: `${props.attributes.themeWidths?.singleOverlapedTxtLeft}px`,
      background: `${props.attributes.bgColor}`
    },
    className: "shopper_dotcom_vertical_theme_text-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_vertical_theme_text spcom__p-name_n_address"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      fontWeight: `${props.attributes.fontWeight}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-name spcom__font spcom__ellipsis line2"
  }, props.attributes.selectedProduct["product_title"]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_vertical_theme_sub-text"
  }, props.attributes.pdtDescriptionToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
      fontFamily: `${props.attributes.fontFamily}`,
      fontStyle: `${props.attributes.fontStyle}`,
      color: `${props.attributes.fontColor}`,
      textDecoration: `${props.attributes.textDecoration}`
    },
    className: "spcom__p-desc spcom__font spcom__ellipsis line6",
    dangerouslySetInnerHTML: {
      __html: props.attributes.selectedProduct["product_description"]
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ButtonLayouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    props: props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "shopper_dotcom_vertical_theme_bottom-text shopper_dotcom_vertical_theme_text-ellipsis"
  }, props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
      fontFamily: `${props.attributes.affDisclosureFont}`,
      fontStyle: `${props.attributes.affDisclosureStyle}`,
      color: `${props.attributes.affDisclosureColor}`,
      fontWeight: `${props.attributes.affDisclosureWeight}`,
      textDecoration: `${props.attributes.affDisclosureDecoration}`
    },
    className: "spcom__single1_layout_aff_dsclr spcom__font"
  }, props.attributes.affDisclosureText))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ShopperBacklink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: props
  })))));
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.shopper = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "300.000000pt",
  height: "300.000000pt",
  viewBox: "0 0 300.000000 300.000000",
  preserveAspectRatio: "xMidYMid meet"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(0.000000,300.000000) scale(0.100000,-0.100000)",
  fill: "#000000",
  stroke: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M982 2450 c-109 -29 -187 -74 -272 -160 -87 -86 -131 -163 -160 -276 -19 -73 -20 -113 -20 -781 l0 -703 703 0 c668 0 708 1 781 20 113 29 190 73 276 160 87 86 131 163 160 276 19 73 20 113 20 781 l0 703 -707 -1 c-664 0 -713 -1 -781 -19z m1278 -158 c14 -10 34 -36 44 -57 17 -35 18 -42 5 -79 -17 -50 -67 -86 -118 -86 -97 1 -152 104 -101 188 37 60 113 75 170 34z m-550 -284 c64 -20 160 -64 160 -73 0 -6 -121 -195 -125 -195 -2 0 -32 13 -67 30 -119 56 -258 32 -258 -45 0 -33 28 -50 172 -101 227 -81 307 -163 307 -319 1 -155 -125 -273 -326 -305 -111 -18 -274 12 -383 71 -104 56 -102 45 -30 154 34 52 65 95 68 95 3 0 26 -13 51 -29 121 -77 303 -82 341 -11 28 52 -21 92 -180 149 -221 81 -292 153 -292 298 -1 231 276 368 562 281z"
})));
icons.select_ok = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "32",
  height: "32",
  fill: "#F5F5F5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M-5296 -3654C-5296 -3655.1 -5295.1 -3656 -5294 -3656H3119C3120.1 -3656 3121 -3655.1 3121 -3654V3668C3121 3669.1 3120.1 3670 3119 3670H-5294C-5295.1 3670 -5296 3669.1 -5296 3668V-3654Z",
  fill: "#EFF0F4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_0_1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-24",
  y: "-20",
  width: "1210",
  height: "712",
  rx: "20",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  filter: "url(#filter0_d_0_1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "1210",
  height: "72",
  transform: "translate(-24 -20)",
  fill: "#FFF1EA"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "16",
  r: "16",
  fill: "#F25522"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip1_0_1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.5026 19.5001L10.0026 16.0001L8.83594 17.1667L13.5026 21.8334L23.5026 11.8334L22.3359 10.6667L13.5026 19.5001Z",
  fill: "white"
})))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M-5294 -3655H3119V-3657H-5294V-3655ZM3120 -3654V3668H3122V-3654H3120ZM3119 3669H-5294V3671H3119V3669ZM-5295 3668V-3654H-5297V3668H-5295ZM-5294 3669C-5294.55 3669 -5295 3668.55 -5295 3668H-5297C-5297 3669.66 -5295.66 3671 -5294 3671V3669ZM3120 3668C3120 3668.55 3119.55 3669 3119 3669V3671C3120.66 3671 3122 3669.66 3122 3668H3120ZM3119 -3655C3119.55 -3655 3120 -3654.55 3120 -3654H3122C3122 -3655.66 3120.66 -3657 3119 -3657V-3655ZM-5294 -3657C-5295.66 -3657 -5297 -3655.66 -5297 -3654H-5295C-5295 -3654.55 -5294.55 -3655 -5294 -3655V-3657Z",
  fill: "black",
  "fill-opacity": "0.1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
  id: "filter0_d_0_1",
  x: "-28",
  y: "-23",
  width: "1218",
  height: "80",
  filterUnits: "userSpaceOnUse",
  "color-interpolation-filters": "sRGB"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
  in: "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
  result: "hardAlpha"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
  dy: "1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
  stdDeviation: "2"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComposite", {
  in2: "hardAlpha",
  operator: "out"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow_0_1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
  mode: "normal",
  in: "SourceGraphic",
  in2: "effect1_dropShadow_0_1",
  result: "shape"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_0_1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-24",
  y: "-20",
  width: "1210",
  height: "712",
  rx: "20",
  fill: "white"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip1_0_1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "20",
  height: "20",
  fill: "white",
  transform: "translate(6 6)"
}))));
icons.unselected_round_grey = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "16",
  r: "11",
  stroke: "#878792",
  "stroke-width": "10"
}));
icons.select_round_orange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "32",
  height: "32",
  fill: "#F5F5F5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M-5724 -3654C-5724 -3655.1 -5723.1 -3656 -5722 -3656H2691C2692.1 -3656 2693 -3655.1 2693 -3654V3668C2693 3669.1 2692.1 3670 2691 3670H-5722C-5723.1 3670 -5724 3669.1 -5724 3668V-3654Z",
  fill: "#EFF0F4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_0_1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-452",
  y: "-20",
  width: "1210",
  height: "712",
  rx: "20",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  filter: "url(#filter0_d_0_1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "1210",
  height: "72",
  transform: "translate(-452 -20)",
  fill: "#FFF1EA"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "16",
  r: "11",
  stroke: "#F25522",
  "stroke-width": "10"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M-5722 -3655H2691V-3657H-5722V-3655ZM2692 -3654V3668H2694V-3654H2692ZM2691 3669H-5722V3671H2691V3669ZM-5723 3668V-3654H-5725V3668H-5723ZM-5722 3669C-5722.55 3669 -5723 3668.55 -5723 3668H-5725C-5725 3669.66 -5723.66 3671 -5722 3671V3669ZM2692 3668C2692 3668.55 2691.55 3669 2691 3669V3671C2692.66 3671 2694 3669.66 2694 3668H2692ZM2691 -3655C2691.55 -3655 2692 -3654.55 2692 -3654H2694C2694 -3655.66 2692.66 -3657 2691 -3657V-3655ZM-5722 -3657C-5723.66 -3657 -5725 -3655.66 -5725 -3654H-5723C-5723 -3654.55 -5722.55 -3655 -5722 -3655V-3657Z",
  fill: "black",
  "fill-opacity": "0.1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
  id: "filter0_d_0_1",
  x: "-456",
  y: "-23",
  width: "1218",
  height: "80",
  filterUnits: "userSpaceOnUse",
  "color-interpolation-filters": "sRGB"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
  in: "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
  result: "hardAlpha"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
  dy: "1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
  stdDeviation: "2"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComposite", {
  in2: "hardAlpha",
  operator: "out"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow_0_1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
  mode: "normal",
  in: "SourceGraphic",
  in2: "effect1_dropShadow_0_1",
  result: "shape"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_0_1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-452",
  y: "-20",
  width: "1210",
  height: "712",
  rx: "20",
  fill: "white"
}))));
icons.close = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  fill: "#F5F5F5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M-6434 -3658C-6434 -3659.1 -6433.1 -3660 -6432 -3660H1981C1982.1 -3660 1983 -3659.1 1983 -3658V3664C1983 3665.1 1982.1 3666 1981 3666H-6432C-6433.1 3666 -6434 3665.1 -6434 3664V-3658Z",
  fill: "#EFF0F4"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_0_1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-1162",
  y: "-24",
  width: "1210",
  height: "712",
  rx: "20",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  filter: "url(#filter0_d_0_1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "1210",
  height: "72",
  transform: "translate(-1162 -24)",
  fill: "#FFF1EA"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "12",
  cy: "12",
  r: "11.625",
  stroke: "#3F3F46",
  "stroke-width": "0.75"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 8.00714L15.9929 7L12 10.9929L8.00714 7L7 8.00714L10.9929 12L7 15.9929L8.00714 17L12 13.0071L15.9929 17L17 15.9929L13.0071 12L17 8.00714Z",
  fill: "#3F3F46"
}))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M-6432 -3659H1981V-3661H-6432V-3659ZM1982 -3658V3664H1984V-3658H1982ZM1981 3665H-6432V3667H1981V3665ZM-6433 3664V-3658H-6435V3664H-6433ZM-6432 3665C-6432.55 3665 -6433 3664.55 -6433 3664H-6435C-6435 3665.66 -6433.66 3667 -6432 3667V3665ZM1982 3664C1982 3664.55 1981.55 3665 1981 3665V3667C1982.66 3667 1984 3665.66 1984 3664H1982ZM1981 -3659C1981.55 -3659 1982 -3658.55 1982 -3658H1984C1984 -3659.66 1982.66 -3661 1981 -3661V-3659ZM-6432 -3661C-6433.66 -3661 -6435 -3659.66 -6435 -3658H-6433C-6433 -3658.55 -6432.55 -3659 -6432 -3659V-3661Z",
  fill: "black",
  "fill-opacity": "0.1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
  id: "filter0_d_0_1",
  x: "-1166",
  y: "-27",
  width: "1218",
  height: "80",
  filterUnits: "userSpaceOnUse",
  "color-interpolation-filters": "sRGB"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
  in: "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
  result: "hardAlpha"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
  dy: "1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
  stdDeviation: "2"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComposite", {
  in2: "hardAlpha",
  operator: "out"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow_0_1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("feBlend", {
  mode: "normal",
  in: "SourceGraphic",
  in2: "effect1_dropShadow_0_1",
  result: "shape"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_0_1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-1162",
  y: "-24",
  width: "1210",
  height: "712",
  rx: "20",
  fill: "white"
}))));
icons.search = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.7761 14.5654L14.5608 14.7807C14.2623 15.0792 13.7782 15.0792 13.4797 14.7807L10.1915 11.4468C9.22701 12.1528 8.04014 12.5723 6.7531 12.5657C3.5592 12.5492 0.983594 9.94648 1.00008 6.75284C1.01656 3.55895 3.61905 0.983343 6.81295 1.00008C10.0068 1.01682 12.5825 3.61905 12.5657 6.81295C12.5594 8.05764 12.1564 9.20545 11.4823 10.1456L14.7761 13.4848C15.0746 13.7828 15.0746 14.2669 14.7761 14.5654ZM6.78302 2.81563C4.59213 2.81563 2.81614 4.59163 2.81614 6.78251C2.81614 8.9734 4.59213 10.7494 6.78302 10.7494C8.97391 10.7494 10.7499 8.9734 10.7499 6.78251C10.7497 4.59163 8.97366 2.81563 6.78302 2.81563Z",
  fill: "#878792"
}));
icons.leftArrow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "23",
  height: "22",
  viewBox: "0 0 23 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.0776 5.5L7.57764 11.1571L12.7721 16.5",
  stroke: "#222222",
  "stroke-width": "2.6",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.rightArrow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "23",
  height: "22",
  viewBox: "0 0 23 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.57764 5.5L15.0776 11.1571L9.88319 16.5",
  stroke: "#222222",
  "stroke-width": "2.6",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.embeddedWidgetIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "17",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4.25 15.168C3.45435 15.168 2.69129 14.8519 2.12868 14.2893C1.56607 13.7267 1.25 12.9636 1.25 12.168V3.16797C1.25 2.77014 1.40804 2.38861 1.68934 2.10731C1.97064 1.826 2.35218 1.66797 2.75 1.66797H5.75C6.14782 1.66797 6.52936 1.826 6.81066 2.10731C7.09196 2.38861 7.25 2.77014 7.25 3.16797V12.168C7.25 12.9636 6.93393 13.7267 6.37132 14.2893M4.25 15.168C5.04565 15.168 5.80871 14.8519 6.37132 14.2893M4.25 15.168H13.25C13.6478 15.168 14.0294 15.0099 14.3107 14.7286C14.592 14.4473 14.75 14.0658 14.75 13.668V10.668C14.75 10.2701 14.592 9.88861 14.3107 9.60731C14.0294 9.326 13.6478 9.16797 13.25 9.16797H11.4927M6.37132 14.2893L12.7355 7.92522C13.0167 7.64393 13.1747 7.26246 13.1747 6.86472C13.1747 6.46697 13.0167 6.08551 12.7355 5.80422L10.6137 3.68247C10.3325 3.40126 9.951 3.24329 9.55325 3.24329C9.1555 3.24329 8.77404 3.40126 8.49275 3.68247L7.25 4.92522M4.25 12.168H4.2575",
  stroke: "#64748B",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.prodnameSettingsIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13.25 7.25H2.75M13.25 7.25C13.6478 7.25 14.0294 7.40804 14.3107 7.68934C14.592 7.97064 14.75 8.35218 14.75 8.75V13.25C14.75 13.6478 14.592 14.0294 14.3107 14.3107C14.0294 14.592 13.6478 14.75 13.25 14.75H2.75C2.35218 14.75 1.97064 14.592 1.68934 14.3107C1.40804 14.0294 1.25 13.6478 1.25 13.25V8.75C1.25 8.35218 1.40804 7.97064 1.68934 7.68934C1.97064 7.40804 2.35218 7.25 2.75 7.25M13.25 7.25V5.75C13.25 5.35218 13.092 4.97064 12.8107 4.68934C12.5294 4.40804 12.1478 4.25 11.75 4.25M2.75 7.25V5.75C2.75 5.35218 2.90804 4.97064 3.18934 4.68934C3.47064 4.40804 3.85218 4.25 4.25 4.25M11.75 4.25V2.75C11.75 2.35218 11.592 1.97064 11.3107 1.68934C11.0294 1.40804 10.6478 1.25 10.25 1.25H5.75C5.35218 1.25 4.97064 1.40804 4.68934 1.68934C4.40804 1.97064 4.25 2.35218 4.25 2.75V4.25M11.75 4.25H4.25",
  stroke: "#71717A",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.widgetTypeicon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.21967 1.21967C1.07902 1.36032 1 1.55109 1 1.75V3.25C1 3.44891 1.07902 3.63968 1.21967 3.78033C1.36032 3.92098 1.55109 4 1.75 4H12.25C12.4489 4 12.6397 3.92098 12.7803 3.78033C12.921 3.63968 13 3.44891 13 3.25V1.75C13 1.55109 12.921 1.36032 12.7803 1.21967C12.6397 1.07902 12.4489 1 12.25 1H1.75C1.55109 1 1.36032 1.07902 1.21967 1.21967Z",
  stroke: "#64748B",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.21967 7.21967C1.07902 7.36032 1 7.55109 1 7.75V12.25C1 12.4489 1.07902 12.6397 1.21967 12.7803C1.36032 12.921 1.55109 13 1.75 13H6.25C6.44891 13 6.63968 12.921 6.78033 12.7803C6.92098 12.6397 7 12.4489 7 12.25V7.75C7 7.55109 6.92098 7.36032 6.78033 7.21967C6.63968 7.07902 6.44891 7 6.25 7H1.75C1.55109 7 1.36032 7.07902 1.21967 7.21967Z",
  stroke: "#64748B",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10.2197 7.21967C10.079 7.36032 10 7.55109 10 7.75V12.25C10 12.4489 10.079 12.6397 10.2197 12.7803C10.3603 12.921 10.5511 13 10.75 13H12.25C12.4489 13 12.6397 12.921 12.7803 12.7803C12.921 12.6397 13 12.4489 13 12.25V7.75C13 7.55109 12.921 7.36032 12.7803 7.21967C12.6397 7.07902 12.4489 7 12.25 7H10.75C10.5511 7 10.3603 7.07902 10.2197 7.21967Z",
  stroke: "#64748B",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
icons.singleDisplay = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 89 63",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "83",
  height: "57",
  rx: "5.34091",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "16.3516",
  y: "12.3467",
  width: "57.4148",
  height: "25.3693",
  rx: "2.67045",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "16.3516",
  y: "43.0566",
  width: "36.0511",
  height: "8.01136",
  rx: "2.67045",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "83",
  height: "57",
  rx: "5.34091",
  stroke: "#F25225",
  "stroke-width": "5"
}));
icons.buttonDisplay = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 89 43",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "83.0005",
  height: "37.1644",
  rx: "4.95525",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "27.7734",
  y: "17.8657",
  width: "33.448",
  height: "7.43288",
  rx: "2.47763",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "83.0005",
  height: "37.1644",
  rx: "4.95525",
  stroke: "#F25225",
  "stroke-width": "5"
}));
icons.imageDisplay = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  viewBox: "0 0 89 63",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "83",
  height: "57",
  rx: "6.03636",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "83",
  height: "25",
  rx: "3.01818",
  transform: "matrix(1 0 0 -1 3 60)",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "67.8905",
  cy: "19.6",
  r: "9.05455",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "83",
  height: "57",
  rx: "6.03636",
  stroke: "#F25225",
  "stroke-width": "5"
}));
icons.verticalDisplay = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "91",
  height: "85",
  viewBox: "0 0 91 85",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3.73438",
  y: "12.1406",
  width: "38.2967",
  height: "61.6483",
  rx: "4.98876",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "9",
  y: "21",
  width: "28",
  height: "29",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "9",
  y: "56",
  width: "20",
  height: "7",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3.73438",
  y: "12.1406",
  width: "38.2967",
  height: "61.6483",
  rx: "4.98876",
  stroke: "#F25225",
  "stroke-width": "4.67033"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "49.5078",
  y: "12.1406",
  width: "38.2967",
  height: "61.6483",
  rx: "4.98876",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "55",
  y: "21",
  width: "28",
  height: "29",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "55",
  y: "56",
  width: "20",
  height: "7",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "49.5078",
  y: "12.1406",
  width: "38.2967",
  height: "61.6483",
  rx: "4.98876",
  stroke: "#F25225",
  "stroke-width": "4.67033"
}));
icons.horizontalDisplay = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "91",
  height: "85",
  viewBox: "0 0 91 85",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#clip0_1736_10613)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "84",
  height: "36",
  rx: "4.98876",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "10",
  y: "9",
  width: "30.7344",
  height: "23",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "47",
  y: "25",
  width: "27.68",
  height: "7",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "47",
  y: "9",
  width: "33",
  height: "10",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "84",
  height: "36",
  rx: "4.98876",
  stroke: "#F25225",
  "stroke-width": "4.67033"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "47",
  width: "84",
  height: "36",
  rx: "4.98876",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "10",
  y: "53",
  width: "30.7344",
  height: "23",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "47",
  y: "69",
  width: "27.68",
  height: "7",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "47",
  y: "53",
  width: "33",
  height: "10",
  rx: "2.49438",
  fill: "#F25225"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "47",
  width: "84",
  height: "36",
  rx: "4.98876",
  stroke: "#F25225",
  "stroke-width": "4.67033"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_1736_10613"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "91",
  height: "85",
  fill: "white"
}))));
icons.downArrow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20",
  height: "20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 8.5L9.85714 13.5L5 8.77778",
  stroke: "#222222",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
icons.upArrow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "17",
  height: "10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 11.5L9.85714 6.5L5 11.2222",
  stroke: "#222222",
  strokeWidth: "2.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
icons.productLock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "25",
  height: "32",
  viewBox: "0 0 25 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M21.3333 10.6667H19.8095V7.61905C19.8095 3.41333 16.3962 0 12.1905 0C7.98476 0 4.57143 3.41333 4.57143 7.61905V10.6667H3.04762C1.37143 10.6667 0 12.0381 0 13.7143V28.9524C0 30.6286 1.37143 32 3.04762 32H21.3333C23.0095 32 24.381 30.6286 24.381 28.9524V13.7143C24.381 12.0381 23.0095 10.6667 21.3333 10.6667ZM12.1905 24.381C10.5143 24.381 9.14286 23.0095 9.14286 21.3333C9.14286 19.6571 10.5143 18.2857 12.1905 18.2857C13.8667 18.2857 15.2381 19.6571 15.2381 21.3333C15.2381 23.0095 13.8667 24.381 12.1905 24.381ZM16.9143 10.6667H7.46667V7.61905C7.46667 5.01333 9.58476 2.89524 12.1905 2.89524C14.7962 2.89524 16.9143 5.01333 16.9143 7.61905V10.6667Z",
  fill: "#F25522"
}));
icons.replaceProduct = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 1000 1000",
  "enable-background": "new 0 0 1000 1000"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("metadata", null, " Svg Vector Icons : http://www.onlinewebfonts.com/icon "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M135.2,498.5c50.9,0,84.7-33.9,84.7-84.7l-0.2-26.7c0,0-12.6-75.8,88.5-75.8l409.3,2.8v108.1c19.8,19.8,52,19.8,71.9,0l158.1-158c19.8-19.9,19.8-52.1,0-71.9L789.3,24.8c-19.8-19.8-52-19.8-71.9,0v113.4c-9.9-2.9-396.5-4.5-396.5-4.5C92.9,133.7,43,282.9,43,343v63.4C43,457.2,84.3,498.5,135.2,498.5L135.2,498.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M870.1,501.1c-50.9,0-92.2,35.9-92.2,86.8l0.1,58.8c-2.8,21.9-39.6,36.3-93.7,36.3H282.6l-0.1-95.8c-19.8-19.8-52-19.8-71.9,0l-158,158c-19.8,19.9-19.8,52.1,0,71.9l158,158c19.9,19.9,52.1,19.9,71.9,0l0.1-113.7h401.8c228,0,277.9-150.1,277.9-210.2v-63.4C962.3,536.9,921,501.1,870.1,501.1L870.1,501.1z"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/shopper_block_script.js":
/*!*************************************!*\
  !*** ./src/shopper_block_script.js ***!
  \*************************************/
/***/ (() => {

var StorePageUtils = {
  _this: null,
  // initialise
  init: function () {
    _this = this;
    _pading = 20;
    _skip_length = 4;
    this.bindEvents();
  },
  // bind click events
  bindEvents: function () {
    let slider_wrapper = document.getElementsByClassName("sp_com_slider-wrapper");
    for (let i = 0; i < slider_wrapper.length; i++) {
      if (slider_wrapper[i].scrollWidth != Math.max(slider_wrapper[i].offsetWidth, slider_wrapper[i].clientWidth)) {
        // hide the scroll buttons if no overflow
        slider_wrapper[i].parentElement.querySelector(".spButtonNext").style.display = "flex";
        slider_wrapper[i].parentElement.querySelector(".spcom_buttonprev").style.display = "flex";
      }
    }
    let backButtonElm = document.getElementsByClassName("spcom_buttonprev");
    for (let i = 0; i < backButtonElm.length; i++) {
      backButtonElm[i].addEventListener("click", this.prevButtonClick);
    }
    let nextButtonElm = document.getElementsByClassName("spButtonNext");
    for (let i = 0; i < nextButtonElm.length; i++) {
      nextButtonElm[i].addEventListener("click", this.nextButtonClick);
    }
    let aff_link_container = document.getElementsByClassName("shopper_dotcom_aff_link");
    for (let i = 0; i < aff_link_container.length; i++) {
      aff_link_container[i].addEventListener("click", this.affButtonClick);
    }
    let back_link_hover = document.getElementsByClassName("shopper_backlink_hover");
    for (let i = 0; i < back_link_hover.length; i++) {
      back_link_hover[i].addEventListener("click", this.backLinkClick);
    }
  },
  // on clicking somewhere in the theme layout
  affButtonClick: function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let parentDiv = ev.target.closest(".shopper_dotcom_aff_link");
    let aff_button = parentDiv.querySelector(".spcom_affiliate_anchor_tag");
    if (aff_button) {
      let redirctn_url = aff_button.getAttribute("href");
      if (redirctn_url) {
        let aff_url_red_type = aff_button.getAttribute("data-link-type") || "_self";
        if (aff_url_red_type == "_self") window.location.href = redirctn_url;else window.open(redirctn_url, "_blank");
      }
    }
  },
  backLinkClick: function (ev) {
    ev.stopPropagation();
  },
  // carousel prev button click
  prevButtonClick: function (ev) {
    let $slider = ev.target.closest(".sp_com_slider-container").querySelector(".sp_com_slider-wrapper");
    if ($slider) {
      let $child = $slider.querySelector(".child");
      let positionInfo = $child.getBoundingClientRect();
      let width = positionInfo.width;
      $slider.scrollLeft -= (width + _pading) * _skip_length;
    }
  },
  // carousel next button click
  nextButtonClick: function (ev) {
    let $slider = ev.target.closest(".sp_com_slider-container").querySelector(".sp_com_slider-wrapper");
    if ($slider) {
      let $child = $slider.querySelector(".child");
      let positionInfo = $child.getBoundingClientRect();
      let width = positionInfo.width;
      if (width == 296) {
        _pading = 10;
        _skip_length = 1;
      }
      $slider.scrollLeft += (width + _pading) * _skip_length;
    }
  }
};

// initialise after page load completed
window.onload = event => {
  StorePageUtils.init();
};

/***/ }),

/***/ "./src/block_style.css":
/*!*****************************!*\
  !*** ./src/block_style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/embed.css":
/*!***********************!*\
  !*** ./src/embed.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/selectbutton.css":
/*!******************************!*\
  !*** ./src/selectbutton.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/shopper_style.css":
/*!*******************************!*\
  !*** ./src/shopper_style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sort_button_style.css":
/*!***********************************!*\
  !*** ./src/sort_button_style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/vertical_theme_style.css":
/*!**************************************!*\
  !*** ./src/vertical_theme_style.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["richText"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _embed_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embed.css */ "./src/embed.css");
/* harmony import */ var _shopper_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopper_style.css */ "./src/shopper_style.css");
/* harmony import */ var _sort_button_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort_button_style.css */ "./src/sort_button_style.css");
/* harmony import */ var _selectbutton_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectbutton.css */ "./src/selectbutton.css");
/* harmony import */ var _vertical_theme_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vertical_theme_style.css */ "./src/vertical_theme_style.css");
/* harmony import */ var _block_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block_style.css */ "./src/block_style.css");
/* harmony import */ var _shopper_block_script_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopper_block_script.js */ "./src/shopper_block_script.js");
/* harmony import */ var _shopper_block_script_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopper_block_script_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons.js */ "./src/icons.js");
/* harmony import */ var _AffiliateLink_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AffiliateLink.js */ "./src/AffiliateLink.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ThemesAndLayouts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ThemesAndLayouts */ "./src/ThemesAndLayouts.js");















/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
wp.blocks.registerBlockType("shopperplugin/add-product-block", {
  title: "Shopper.com",
  icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].shopper,
  category: "widgets",
  attributes: {
    showProducts: {
      type: "boolean",
      default: true
    },
    showCollections: {
      type: "boolean",
      default: false
    },
    searchText: {
      type: "string",
      default: null
    },
    allProducts: {
      type: "object",
      default: null
    },
    allCollections: {
      type: "object",
      default: null
    },
    filteredProducts: {
      type: "object",
      default: null
    },
    filteredCollections: {
      type: "object",
      default: null
    },
    selectedLayout: {
      type: "string",
      default: null
    },
    selectedProductOrCollnAffl: {
      type: "string",
      default: null
    },
    selectedProduct: {
      type: "object",
      default: null
    },
    selectedCollection: {
      type: "object",
      default: null
    },
    selectedCollectionProducts: {
      type: "array",
      default: null
    },
    singleTheme: {
      type: "string",
      default: "simple"
    },
    vertclHrzntlTheme: {
      type: "string",
      default: "simple"
    },
    singleBorderRadius: {
      type: "integer",
      default: 10
    },
    singleBorderWidth: {
      type: "integer",
      default: 4
    },
    singleBorderColor: {
      type: "string",
      default: "#766d6b"
    },
    bannerAlignment: {
      type: "string",
      default: "-18px auto auto -18px"
    },
    bannerPosition: {
      type: "string",
      default: "row"
    },
    bannerToggle: {
      type: "boolean",
      default: true
    },
    bannerText: {
      type: "string",
      default: "New"
    },
    bannerBgColor: {
      type: "string",
      default: "#241F21"
    },
    bannerFontFamily: {
      type: "string",
      default: ""
    },
    bannerFontStyle: {
      type: "string",
      default: ""
    },
    bannerFontWeight: {
      type: "string",
      default: "bold"
    },
    bannerTextDecoration: {
      type: "string",
      default: ""
    },
    priceToggle: {
      type: "boolean",
      default: true
    },
    priceText: {
      type: "string",
      default: "$499"
    },
    pdtDescriptionToggle: {
      type: "boolean",
      default: true
    },
    affDisclosureToggle: {
      type: "boolean",
      default: true
    },
    affDisclosureText: {
      type: "string",
      default: "We earn a commission if you make a purchase, at no additional cost to you."
    },
    affDisclosureFont: {
      type: "string",
      default: ""
    },
    affDisclosureStyle: {
      type: "string",
      default: ""
    },
    affDisclosureColor: {
      type: "string",
      default: "#000000"
    },
    affDisclosureWeight: {
      type: "string",
      default: "lighter"
    },
    affDisclosureDecoration: {
      type: "string",
      default: ""
    },
    buttonLayout: {
      type: "string",
      default: "button1"
    },
    buttonText: {
      type: "string",
      default: "Buy Now"
    },
    buttonTextFont: {
      type: "string",
      default: ""
    },
    buttonTextStyle: {
      type: "string",
      default: ""
    },
    buttonTextWeight: {
      type: "string",
      default: "normal"
    },
    buttonTextDecoration: {
      type: "string",
      default: ""
    },
    buttonRadius: {
      type: "integer",
      default: 35
    },
    buttonColor: {
      type: "string",
      default: "#535C61"
    },
    buttonGradient: {
      type: "string",
      default: "#C6C6D7"
    },
    buttonTextColor: {
      type: "string",
      default: "#FFFFFF"
    },
    buttonHeight: {
      type: "integer",
      default: 44
    },
    buttonWidth: {
      type: "integer",
      default: 33
    },
    buttonNewTabToggle: {
      type: "boolean",
      default: true
    },
    buttonFollowToggle: {
      type: "boolean",
      default: true
    },
    buttonSponsoredToggle: {
      type: "boolean",
      default: true
    },
    relValue: {
      type: "string",
      default: "nofollow sponsored noopener"
    },
    prodNameToggle: {
      type: "boolean",
      default: false
    },
    collNameToggle: {
      type: "boolean",
      default: true
    },
    collCoverToggle: {
      type: "boolean",
      default: true
    },
    fontSize: {
      type: "integer",
      default: 18
    },
    collProdFontSize: {
      type: "integer",
      default: 14
    },
    fontColor: {
      type: "string",
      default: "#000"
    },
    bgColor: {
      type: "string",
      default: "#fff"
    },
    collBgColor: {
      type: "string",
      default: "#9c9c9c"
    },
    tileWidth: {
      type: "integer"
    },
    collTileWidth: {
      type: "integer",
      default: 100
    },
    borderRadius: {
      type: "integer",
      default: 16
    },
    tilePadding: {
      type: "integer",
      default: 12
    },
    fontFamily: {
      type: "string",
      default: ""
    },
    fontStyle: {
      type: "string",
      default: ""
    },
    fontWeight: {
      type: "string",
      default: "bold"
    },
    textDecoration: {
      type: "string",
      default: ""
    },
    nofPdts: {
      type: "integer",
      default: 5
    },
    collProdSize: {
      type: "integer",
      default: 100
    },
    collAlignment: {
      type: "string",
      default: ""
    },
    showOptionList: {
      type: "boolean",
      default: false
    },
    sortbySwitcher: {
      type: "string",
      default: ""
    },
    isFreeTier: {
      type: "boolean",
      default: false
    },
    remainingCollCount: {
      type: "integer",
      default: 0
    },
    remainingProdCount: {
      type: "integer",
      default: 0
    },
    verticalLayout: {
      type: "string",
      default: "simple"
    },
    themeAlignment: {
      type: "string",
      default: "0 auto 0 0"
    },
    mainVerticalLayout: {
      type: "string",
      default: "mainVertical1"
    },
    multiProductsSelected: {
      type: "array",
      default: []
    },
    multiProductsList: {
      type: "array",
      default: null
    },
    multiProductsListOrder: {
      type: "array",
      default: null
    },
    selectedMultiProd: {
      type: "object",
      default: null
    },
    prodsWithDescrptn: {
      type: "boolean",
      default: false
    },
    themeWidths: {
      type: "object",
      default: {
        sizeSliderValue: 100
      }
    },
    affRdrctnSlug: {
      type: "string",
      default: ""
    },
    themesList: {
      type: "array",
      default: null
    },
    selectedTheme: {
      type: "string",
      default: "simple"
    },
    isDefaultTheme: {
      type: "boolean",
      default: true
    },
    saveThemeToggle: {
      type: "boolean",
      default: false
    },
    referralLink: {
      type: "string",
      default: "https://www.shopper.com/"
    },
    linkCloakingSlugType: {
      type: "string",
      default: "name"
    },
    enableReferralLink: {
      type: "boolean",
      default: false
    },
    doesReferralLinkExist: {
      type: "boolean",
      default: false
    }
  },
  edit: function (props) {
    const [showSelctnPopup, setShowSelctnPopup] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [replaceOneSingleProd, setReplaceOneSingleProd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [valueList, setValueList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [startObservation, setStartObservation] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [globalData, setGlobalData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      getUserThemes();
      getUserName();
      getGlobalProps();
      getLinkCloakingSlugType();
    }, []);

    // observe changes in DOM and show save option
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (!startObservation) {
          // startObservation false means default theme is just selected
          if (mutation?.attributeName == "src" || mutation?.type == "childList") {
            // donot show the save new theme option
            // since the changes in dom are due to
            // the default theme selected
            props.setAttributes({
              saveThemeToggle: false
            });
          } else {
            // show the save new theme option
            // since the changes are user made and
            // observe for further changes from here on
            setStartObservation(true);
            props.setAttributes({
              saveThemeToggle: true
            });
          }
        } else {
          props.setAttributes({
            saveThemeToggle: true
          });
        }
      });
    });

    // choose what changes to observe in DOM
    var observerConfig = {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    };

    // stop observing if save option is already visible
    if (!props.attributes.saveThemeToggle) {
      var single_theme_container = document.getElementsByClassName("shopper_dotcom_single_container");
      var vertical_theme_container = document.getElementsByClassName("spcom_vertical_main_top_container");
      var horizontal_theme_container = document.getElementsByClassName("spcom__horizontal_container");
      for (let i = 0; i < single_theme_container.length; i++) {
        observer.observe(single_theme_container[i], observerConfig);
      }
      for (let i = 0; i < vertical_theme_container.length; i++) {
        observer.observe(vertical_theme_container[i], observerConfig);
      }
      for (let i = 0; i < horizontal_theme_container.length; i++) {
        observer.observe(horizontal_theme_container[i], observerConfig);
      }
    }
    function getGlobalProps() {
      wp.apiFetch({
        path: "shopper/v1/global_props",
        method: "GET"
      }).then(res => {
        let globalProps = {};
        if (res) {
          globalProps = JSON.parse(res.default_props);
          if (globalProps.enable_global_settings) {
            delete globalProps.enable_global_settings;
          } else {
            globalProps = {};
          }
        }
        setGlobalData(globalProps);
      });
    }
    function setGlobalProps() {
      props.setAttributes(globalData);
    }
    function getUserName() {
      wp.apiFetch({
        path: "shopper/v1/get_user",
        method: "GET"
      }).then(res => {
        if (res) {
          let referral_link = "https://www.shopper.com/join/" + res + "?redUrl=https://www.shopper.com/wordpress-affiliate-plugin";
          props.setAttributes({
            referralLink: referral_link
          });
        }
      });
    }
    function getLinkCloakingSlugType() {
      wp.apiFetch({
        path: "shopper/v1/get_slug_type",
        method: "GET"
      }).then(res => {
        let slugType = "name";
        if (res) {
          slugType = res;
        }
        props.setAttributes({
          linkCloakingSlugType: slugType
        });
      });
    }
    function getUserThemes() {
      let selectedLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.attributes.selectedLayout;
      let theme_list = [];
      let layout = selectedLayout;
      if (layout == "single") {
        theme_list = [{
          value: "simple",
          label: "Simple Left"
        }, {
          value: "simpleRight",
          label: "Simple Right"
        }, {
          value: "vertical",
          label: "Vertical"
        }, {
          value: "verticalOverlaped",
          label: "Vertical Overlapped"
        }];
      } else {
        theme_list = [{
          value: "simple",
          label: "Simple"
        }, {
          value: "simpleAligned",
          label: "Simple Aligned"
        }, {
          value: "boxed",
          label: "Boxed"
        }];
      }
      wp.apiFetch({
        path: "shopper/v1/get_themes/?layout=" + layout
      }).then(userThemes => {
        if (userThemes.length) {
          theme_list = theme_list.concat(userThemes);
        }
        props.setAttributes({
          themesList: theme_list
        });
      });
    }
    function getCurrentThemeProps(theme_name) {
      let layout = props.attributes.selectedLayout;
      if (props.attributes.selectedLayout == "single") {
        layout += "-" + props.attributes.singleTheme;
      } else if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
        layout += "-" + props.attributes.vertclHrzntlTheme;
      }
      let currentThemeProps = {
        theme_name: theme_name,
        layout: layout,
        singleBorderRadius: props.attributes.singleBorderRadius,
        singleBorderWidth: props.attributes.singleBorderWidth,
        singleBorderColor: props.attributes.singleBorderColor,
        bannerAlignment: props.attributes.bannerAlignment,
        bannerPosition: props.attributes.bannerPosition,
        bannerToggle: props.attributes.bannerToggle,
        bannerText: props.attributes.bannerText,
        bannerBgColor: props.attributes.bannerBgColor,
        bannerFontFamily: props.attributes.bannerFontFamily,
        bannerFontStyle: props.attributes.bannerFontStyle,
        bannerFontWeight: props.attributes.bannerFontWeight,
        bannerTextDecoration: props.attributes.bannerTextDecoration,
        priceToggle: props.attributes.priceToggle,
        priceText: props.attributes.priceText,
        pdtDescriptionToggle: props.attributes.pdtDescriptionToggle,
        affDisclosureToggle: props.attributes.affDisclosureToggle,
        affDisclosureText: props.attributes.affDisclosureText,
        affDisclosureFont: props.attributes.affDisclosureFont,
        affDisclosureStyle: props.attributes.affDisclosureStyle,
        affDisclosureColor: props.attributes.affDisclosureColor,
        affDisclosureWeight: props.attributes.affDisclosureWeight,
        affDisclosureDecoration: props.attributes.affDisclosureDecoration,
        buttonLayout: props.attributes.buttonLayout,
        buttonText: props.attributes.buttonText,
        buttonTextFont: props.attributes.buttonTextFont,
        buttonTextStyle: props.attributes.buttonTextStyle,
        buttonTextWeight: props.attributes.buttonTextWeight,
        buttonTextDecoration: props.attributes.buttonTextDecoration,
        buttonRadius: props.attributes.buttonRadius,
        buttonColor: props.attributes.buttonColor,
        buttonGradient: props.attributes.buttonGradient,
        buttonTextColor: props.attributes.buttonTextColor,
        buttonHeight: props.attributes.buttonHeight,
        buttonWidth: props.attributes.buttonWidth,
        buttonNewTabToggle: props.attributes.buttonNewTabToggle,
        buttonFollowToggle: props.attributes.buttonFollowToggle,
        buttonSponsoredToggle: props.attributes.buttonSponsoredToggle,
        relValue: props.attributes.relValue,
        prodNameToggle: props.attributes.prodNameToggle,
        collNameToggle: props.attributes.collNameToggle,
        collCoverToggle: props.attributes.collCoverToggle,
        fontSize: props.attributes.fontSize,
        collProdFontSize: props.attributes.collProdFontSize,
        fontColor: props.attributes.fontColor,
        bgColor: props.attributes.bgColor,
        collBgColor: props.attributes.collBgColor,
        tileWidth: props.attributes.tileWidth,
        collTileWidth: props.attributes.collTileWidth,
        borderRadius: props.attributes.borderRadius,
        tilePadding: props.attributes.tilePadding,
        fontFamily: props.attributes.fontFamily,
        fontStyle: props.attributes.fontStyle,
        fontWeight: props.attributes.fontWeight,
        textDecoration: props.attributes.textDecoration,
        nofPdts: props.attributes.nofPdts,
        collProdSize: props.attributes.collProdSize,
        collAlignment: props.attributes.collAlignment,
        themeAlignment: props.attributes.themeAlignment,
        themeWidths: props.attributes.themeWidths,
        verticalLayout: props.attributes.verticalLayout,
        mainVerticalLayout: props.attributes.mainVerticalLayout
      };
      return currentThemeProps;
    }
    function saveNewTheme() {
      let input_field = document.getElementById("shopper_theme_name_input");
      let saved_banner = document.getElementById("spcom_theme_saved_banner");
      let duplicate_banner = document.getElementById("spcom_theme_duplicate_banner");
      let theme_name = input_field.value;
      let theme_props = getCurrentThemeProps(theme_name);
      wp.apiFetch({
        path: "shopper/v1/save_theme",
        method: "POST",
        data: JSON.stringify(theme_props)
      }).then(res => {
        if (res == "created") {
          input_field.value = "";
          getUserThemes();
          saved_banner.style.display = "block";
          setTimeout(function () {
            saved_banner.style.display = "none";
          }, 2000);
        } else if (res == "duplicate") {
          duplicate_banner.style.display = "block";
          setTimeout(function () {
            duplicate_banner.style.display = "none";
          }, 2000);
        }
      });
    }
    function getThemeByName(theme) {
      let all_themes = props.attributes.themesList;
      for (let i = 0; i < all_themes.length; i++) {
        if (all_themes[i].value === theme) {
          return all_themes[i];
        }
      }
      return null;
    }
    function setUserTheme(theme) {
      let selected_theme = getThemeByName(theme);
      if (selected_theme) {
        if (selected_theme.is_user_theme) {
          setIsDefaultTheme(false);
          let selected_props = JSON.parse(selected_theme.theme_props);
          let base_theme = selected_props.layout.split("-")[1];
          if (props.attributes.selectedLayout == "single") {
            setSingleTheme(base_theme);
          } else if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
            setVertclHorzntlTheme(base_theme);
          }
          selected_props.selectedTheme = selected_props.theme_name; // sets the current selected user theme
          delete selected_props.theme_name;
          delete selected_props.layout;
          props.setAttributes(selected_props);
          updateLayoutWidths(selected_props.themeWidths?.sizeSliderValue || 100, base_theme);
        } else {
          setIsDefaultTheme(true);
          if (props.attributes.selectedLayout == "single") {
            setSingleTheme(theme);
          } else if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
            setVertclHorzntlTheme(theme);
          }
          updateLayoutWidths(props.attributes.themeWidths?.sizeSliderValue || 100, theme);
          setGlobalProps();
        }
      }
    }
    function setIsDefaultTheme(val) {
      if (val == true) {
        setStartObservation(false);
      }
      props.setAttributes({
        isDefaultTheme: val
      });
    }
    function updateCurrentTheme(theme) {
      let updated_banner = document.getElementById("spcom_theme_updated_banner");
      let theme_props = getCurrentThemeProps(theme);
      wp.apiFetch({
        path: "shopper/v1/update_theme",
        method: "POST",
        data: JSON.stringify(theme_props)
      }).then(res => {
        if (res == "updated") {
          getUserThemes();
          updated_banner.style.display = "block";
          setTimeout(function () {
            updated_banner.style.display = "none";
          }, 2000);
        }
      });
    }
    function deleteTheme(theme) {
      let deleted_banner = document.getElementById("spcom_theme_deleted_banner");
      wp.apiFetch({
        path: "shopper/v1/delete_theme/?theme_name=" + theme,
        method: "POST"
      }).then(res => {
        if (res == "deleted") {
          getUserThemes();
          deleted_banner.style.display = "block";
          setTimeout(function () {
            deleted_banner.style.display = "none";
          }, 2000);
        }
      });
    }
    function getAllCollnProdts() {
      resetProdSelection();
      wp.apiFetch({
        path: "shopper/v1/items"
      }).then(allCollPdts => {
        props.setAttributes({
          allProducts: allCollPdts[0],
          allCollections: allCollPdts[1],
          isFreeTier: allCollPdts[2] > 0 ? true : false,
          remainingCollCount: allCollPdts[3],
          remainingProdCount: allCollPdts[4],
          affRdrctnSlug: allCollPdts[5],
          enableReferralLink: allCollPdts[6] > 0 ? true : false
        });
        setTopZindex();
      });
    }
    function doesPostBodyContainClass(className) {
      const postContent = document.querySelector(".edit-post-visual-editor").innerHTML;
      const containsClass = postContent.includes(className);
      return containsClass;
    }
    function checkReferralLinkExists() {
      const referralLinkInPost = doesPostBodyContainClass("shopper_referral_container");
      if (referralLinkInPost) {
        props.setAttributes({
          doesReferralLinkExist: true
        });
      }
    }
    function resetProdSelection() {
      props.setAttributes({
        selectedProduct: null,
        selectedCollection: null,
        filteredProducts: null,
        filteredCollections: null
      });
    }
    function resetLayoutSelection() {
      resetProdSelection();
      props.setAttributes({
        selectedLayout: null
      });
    }
    function updateSelectedLayout(layout) {
      if (layout == "mainVertical" || layout == "horizontal") {
        props.setAttributes({
          selectedLayout: layout,
          priceToggle: false,
          collAlignment: "0 auto",
          bannerPosition: layout == "mainVertical" ? "row" : "row-reverse",
          showProducts: true
        });
        setSingleBorderRadius(10);
        setButtonLayout("button4");
        setButtonWidth(100);
        setButtonHeight(layout == "mainVertical" ? 44 : 36);
        setVertclHorzntlTheme("simple");
      } else {
        props.setAttributes({
          selectedLayout: layout,
          buttonWidth: layout == "single" ? 100 : 33,
          priceToggle: false
        });
        if (layout == "single") {
          setButtonLayout("button4");
          setSingleBorderColor("#ffffff");
          setSingleBorderRadius(10);
          setButtonHeight(44);
          setSingleTheme("simple");
          props.setAttributes({
            showProducts: true
          });
        } else if (layout == "button") {
          setButtonLayout("button4");
          setButtonWidth(66);
        }
      }
      setButtonColor("#000000");
      getUserThemes(layout);
      setGlobalProps();
    }
    function resetAllProductSelections() {
      props.setAttributes({
        selectedProduct: null,
        multiProductsSelected: [],
        themeWidths: {},
        saveThemeToggle: false
      });
    }
    function setTopZindex() {
      setShowSelctnPopup(true);
      var top_element = document.getElementsByClassName("interface-interface-skeleton__body")[0];
      var sidebar_element = document.getElementsByClassName("interface-interface-skeleton__sidebar")[0];
      var header_element = document.getElementsByClassName("interface-interface-skeleton__header")[0];
      var top_admin_bar = document.getElementById("wpadminbar");
      if (top_admin_bar) {
        top_admin_bar.style.zIndex = 0;
      }
      if (sidebar_element) {
        sidebar_element.style.zIndex = 1;
      }
      if (header_element) {
        header_element.style.zIndex = 1;
      }
      if (top_element) {
        top_element.style.zIndex = 111111;
      }
    }
    function unsetsetTopZindex() {
      setShowSelctnPopup(false);
      var top_element = document.getElementsByClassName("interface-interface-skeleton__body")[0];
      var sidebar_element = document.getElementsByClassName("interface-interface-skeleton__sidebar")[0];
      var header_element = document.getElementsByClassName("interface-interface-skeleton__header")[0];
      var top_admin_bar = document.getElementById("wpadminbar");
      if (top_admin_bar) {
        top_admin_bar.style.zIndex = 99999;
      }
      if (sidebar_element) {
        sidebar_element.style.zIndex = 100000;
      }
      if (header_element) {
        header_element.style.zIndex = 30;
      }
      if (top_element) {
        top_element.style.zIndex = 1;
      }
    }
    function toggleProductDisplay() {
      props.setAttributes({
        showProducts: !props.attributes.showProducts
      });
    }
    function toggleCollectionDisplay() {
      props.setAttributes({
        showCollections: !props.attributes.showCollections
      });
    }
    function searchproduct(event) {
      props.setAttributes({
        searchText: event.target.value
      });
      let searchurl = "shopper/v1/search/?searchtext=" + event.target.value;
      wp.apiFetch({
        path: searchurl
      }).then(filteredcollPdts => {
        props.setAttributes({
          filteredProducts: filteredcollPdts[0],
          filteredCollections: filteredcollPdts[1]
        });
      });
    }
    function updateSelectedProduct(e, prod) {
      var buttonTextVal = props.attributes.selectedLayout == "button" ? prod["product_title"] : "Buy Now";
      if (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") {
        // manage multiple products addition/removal of vertical and horizontal layouts
        addMultipleProducts(prod);
      } else {
        props.setAttributes({
          selectedProduct: prod,
          selectedCollection: null,
          buttonText: buttonTextVal,
          selectedProductOrCollnAffl: props.attributes.linkCloakingSlugType == "name" ? prod.pdt_name_slug : prod.pdt_slug
        });
      }
    }
    function addMultipleProducts(prod) {
      setValueList(() => {
        let currentList = props.attributes.multiProductsSelected;
        const setProductDefaults = pdt => {
          pdt.productProps = {
            bannerToggle: true,
            bannerPosition: props.attributes.selectedLayout == "mainVertical" ? "row" : "row-reverse",
            bannerAlignment: "-18px -18px auto auto",
            bannerFontFamily: "",
            bannerBgColor: "#241F21",
            bannerFontStyle: "",
            bannerFontWeight: "bold",
            bannerTextDecoration: "",
            bannerText: "New",
            pdtDescriptionToggle: true,
            priceToggle: false,
            priceText: "$499",
            buttonLayout: globalData?.buttonLayout || "button4",
            buttonHeight: globalData?.buttonHeight ? globalData?.buttonHeight : props.attributes.selectedLayout == "mainVertical" ? 44 : 36,
            buttonWidth: globalData?.buttonWidth || 100,
            collAlignment: "0 auto",
            buttonText: "Buy Now",
            buttonTextColor: globalData?.buttonTextColor || "",
            buttonGradient: globalData?.buttonGradient || "",
            buttonTextFont: globalData?.buttonTextFont || "",
            buttonTextStyle: "",
            buttonTextWeight: "normal",
            buttonTextDecoration: "",
            buttonRadius: globalData?.buttonRadius || false,
            buttonColor: globalData?.buttonColor || "#000000",
            buttonNewTabToggle: true,
            buttonFollowToggle: true,
            buttonSponsoredToggle: true
          };
          return pdt;
        };
        if (!replaceOneSingleProd) {
          // check if product is already added
          let existingProd = currentList?.filter(product => product.id == prod.id);
          if (existingProd?.length <= 0 || currentList.length <= 0) {
            // add the selected product
            prod = setProductDefaults(prod);
            currentList = [...currentList, prod];
          } else {
            // keep all products except the one to remove
            currentList = currentList.filter(product => product.id !== prod.id);
          }
          updateMultiProdList(currentList);
        } else {
          // for replacing single products individually
          prod = setProductDefaults(prod);
          let selected_prod = props.attributes.selectedMultiProd;
          let multi_pdts = props.attributes.multiProductsSelected;
          const selected_prod_index = multi_pdts?.findIndex(obj => obj?.id === selected_prod?.id);
          multi_pdts[selected_prod_index] = prod;
          currentList = multi_pdts;
          updateMultiProdList(currentList, "replace", prod);
        }
        return currentList;
      });
    }
    function updateMultiProdList(newList) {
      let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "add";
      let replacementprod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      let multiProdList = [{
        value: -1,
        label: "All Products"
      }];
      let multiProductsListOrder = [];
      let index = 0;
      let pdts_with_dscrptn = 0;
      newList?.map(pdt => {
        multiProdList = [...multiProdList, {
          value: pdt.id,
          label: pdt.product_title
        }];
        multiProductsListOrder = [...multiProductsListOrder, {
          value: index,
          label: index + 1
        }];
        if (pdt.product_description?.length) pdts_with_dscrptn += 1;
        index += 1;
      });
      let selectedProd = props.attributes.selectedMultiProd;
      if (type == "replace") {
        selectedProd = replacementprod;
      } else if (type == "delete" || !selectedProd || newList?.findIndex(obj => obj?.id === selectedProd?.id) == -1) {
        selectedProd = newList ? newList[0] : null;
      }
      props.setAttributes({
        multiProductsSelected: newList,
        multiProductsList: multiProdList,
        multiProductsListOrder: multiProductsListOrder,
        selectedMultiProd: type == "add" ? null : selectedProd,
        //by default all products will be selected
        prodsWithDescrptn: pdts_with_dscrptn > 0 ? true : false
      });
    }
    function updateSelectedMultiProd(pdt_id) {
      let existingProd = props.attributes.multiProductsSelected?.filter(product => product.id == pdt_id);
      existingProd = existingProd.length ? existingProd[0] : null;
      props.setAttributes({
        selectedMultiProd: existingProd
      });
    }
    function changeProdPosition(position) {
      let selected_prod = props.attributes.selectedMultiProd;
      let multi_pdts = props.attributes.multiProductsSelected;
      if (selected_prod && multi_pdts.length > 0) {
        switch (position) {
          case "delete":
            let updatedList = props.attributes.multiProductsSelected?.filter(product => product.id !== selected_prod.id);
            updateMultiProdList(updatedList, "delete"); // will be cononsidered duplicate so gets deleted
            break;
        }
      }
    }
    function updateProdPositionWithDropdown(position) {
      let selected_prod = props.attributes.selectedMultiProd;
      let multi_pdts = props.attributes.multiProductsSelected;
      if (selected_prod && multi_pdts.length > 0) {
        const selected_prod_index = multi_pdts?.findIndex(obj => obj?.id === selected_prod?.id);
        const swapElements = (pdt_lst, indx1, indx2) => {
          if (indx1 != indx2) {
            [pdt_lst[indx1], pdt_lst[indx2]] = [pdt_lst[indx2], pdt_lst[indx1]];
          }
          return pdt_lst;
        };
        let updatedList = swapElements(multi_pdts, selected_prod_index, position);
        updateMultiProdList(updatedList);
      }
    }
    function updateIndividualProdProps(prod_id, key, val) {
      let selectedPdtList = JSON.parse(JSON.stringify(props.attributes.multiProductsSelected));
      if (prod_id == "all") {
        selectedPdtList?.map(pdt => {
          pdt.productProps[key] = val;
        });
        props.setAttributes({
          multiProductsSelected: selectedPdtList
        });
      } else if (prod_id >= 0) {
        let existingProd = selectedPdtList?.filter(product => product.id == prod_id);
        const existingProdIndex = selectedPdtList?.findIndex(obj => obj?.id === prod_id);
        if (existingProd.length > 0 && existingProdIndex != -1) {
          existingProd[0].productProps[key] = val;
          selectedPdtList[existingProdIndex] = existingProd[0];
          props.setAttributes({
            multiProductsSelected: selectedPdtList,
            selectedMultiProd: existingProd[0]
          });
        }
      }
    }
    function updateSelectedCollection(e, colln) {
      let searchurl = "shopper/v1/collectionproducts/?collctn_id=" + colln["collection_id"];
      wp.apiFetch({
        path: searchurl
      }).then(collPdts => {
        props.setAttributes({
          selectedCollection: colln,
          selectedProduct: null,
          buttonText: props.attributes.selectedLayout != "single" ? colln["collection_title"] : "Buy Now",
          selectedProductOrCollnAffl: props.attributes.linkCloakingSlugType == "name" ? colln.colln_name_slug : colln.colln_slug,
          selectedCollectionProducts: collPdts
        });
      });
    }
    function highLightSearch(e) {
      var search_input = document.getElementById("spcom__search_input");
      search_input.style.width = "35%";
    }
    function toggleProductName() {
      props.setAttributes({
        prodNameToggle: !props.attributes.prodNameToggle
      });
    }
    function toggleCollectionName() {
      props.setAttributes({
        collNameToggle: !props.attributes.collNameToggle
      });
    }
    function toggleCollCover() {
      props.setAttributes({
        collCoverToggle: !props.attributes.collCoverToggle
      });
    }
    function setfFontSize(val) {
      var fontVal = 1;
      if (parseInt(val) >= 1) {
        fontVal = val;
      }
      props.setAttributes({
        fontSize: fontVal
      });
    }
    function setfFontColor(val) {
      props.setAttributes({
        fontColor: val
      });
    }
    function setBgColor(val) {
      props.setAttributes({
        bgColor: val
      });
    }
    function setCollBgColor(val) {
      if (val) {
        props.setAttributes({
          collBgColor: val
        });
      } else {
        props.setAttributes({
          collBgColor: "#ffffff00"
        });
      }
    }
    function setTileWidth(val) {
      props.setAttributes({
        tileWidth: parseInt(val)
      });
    }
    function setCollTileWidth(val) {
      props.setAttributes({
        collTileWidth: parseInt(val),
        collProdSize: parseInt(val),
        fontSize: parseInt(val / 100 * 18),
        collProdFontSize: parseInt(val / 100 * 14)
      });
    }
    function updateLayoutWidths() {
      let val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      let theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.attributes.singleTheme;
      let themePnameSize = 20;
      let themePdescSize = 14;
      let btnFontSize = 16;
      let themeContainerWidth = 100;
      let priceFontSize = 16;
      let buttonHeight = 44;
      let singleOverlapedHeight = 575;
      let singleOverlapedImgTop = 124;
      let singleOverlapedTxtTop = 255;
      let singleOverlapedTxtLeft = 275;
      switch (props.attributes.selectedLayout) {
        case "single":
          themePnameSize = 24;
          themePdescSize = 14;
          if (theme == "verticalOverlaped") {
            themeContainerWidth = 567;
            singleOverlapedHeight = parseInt(val / 100 * 575);
            singleOverlapedImgTop = parseInt(val / 100 * 124);
            singleOverlapedTxtTop = parseInt(val / 100 * 255);
            singleOverlapedTxtLeft = parseInt(val / 100 * 275);
          }
          break;
        case "mainVertical":
          themePnameSize = 24;
          themePdescSize = 14;
          themeContainerWidth = 296;
          buttonHeight = 44;
          break;
        case "horizontal":
          themePnameSize = 20;
          themePdescSize = 13;
          buttonHeight = 36;
          break;
        default:
          break;
      }
      switch (props.attributes.buttonLayout) {
        case "button1":
          btnFontSize = 18;
          break;
        case "button2":
          btnFontSize = 14;
          break;
        case "button3" || 0:
          btnFontSize = 16;
          break;
        default:
          break;
      }
      props.setAttributes({
        themeWidths: {
          sizeSliderValue: parseInt(val),
          themeContainerWidth: parseInt(val / 100 * themeContainerWidth),
          themePnameSize: parseInt(val / 100 * themePnameSize),
          themePdescSize: parseInt(val / 100 * themePdescSize),
          themeAffdesclrSize: parseInt(val / 100 * 12),
          btnFontSize: parseInt(val / 100 * btnFontSize),
          bannerWidth: parseInt(val / 100 * 14),
          bannerFontSize: parseInt(val / 100 * 14),
          priceFontSize: parseInt(val / 100 * priceFontSize),
          singleOverlapedHeight: singleOverlapedHeight,
          singleOverlapedImgTop: singleOverlapedImgTop,
          singleOverlapedTxtTop: singleOverlapedTxtTop,
          singleOverlapedTxtLeft: singleOverlapedTxtLeft
        },
        buttonHeight: parseInt(val / 100 * buttonHeight)
      });
      updateIndividualProdProps("all", "buttonHeight", parseInt(val / 100 * buttonHeight));
    }
    function setBorderRadius(val) {
      props.setAttributes({
        borderRadius: parseInt(val)
      });
    }
    function setSingleBorderColor(val) {
      props.setAttributes({
        singleBorderColor: val
      });
    }
    function setTilePadding(val) {
      props.setAttributes({
        tilePadding: parseInt(val)
      });
    }
    function setFont(val) {
      props.setAttributes({
        fontFamily: val
      });
    }
    function setFontStyle(val) {
      props.setAttributes({
        fontStyle: val
      });
    }
    function setFontWeight(val) {
      props.setAttributes({
        fontWeight: val
      });
    }
    function setTextDecoration(val) {
      props.setAttributes({
        textDecoration: val
      });
    }
    function setSingleTheme(val) {
      var bannerColor = "#241F21";
      var bgColor = "#fff";
      var borderWidth = 4;
      var borderRadius = 10;
      var borderColor = "#766d6b";
      var fontColor = "#000000";
      var affDsclrColor = "#000000";
      setButtonLayout("button4");
      setButtonWidth(100);
      setButtonColor("#000000");
      setBannerLayout("leftLayout");
      if (val == "vertical" || val == "verticalOverlaped") {
        borderWidth = 15;
        borderRadius = 9;
        borderColor = "#ffffff";
        setButtonColor("#FFD814");
        setButtonTextColor("#000000");
      }
      props.setAttributes({
        singleTheme: val,
        // set base theme
        selectedTheme: val,
        // value used for showing current theme in case of default theme
        bannerBgColor: bannerColor,
        bgColor: bgColor,
        singleBorderWidth: borderWidth,
        singleBorderRadius: borderRadius,
        singleBorderColor: borderColor,
        fontColor: fontColor,
        affDisclosureColor: affDsclrColor,
        themeWidths: null,
        saveThemeToggle: false
      });
    }
    function setVertclHorzntlTheme(val) {
      let buttonWidth = 100;
      let bannerToggle = true;
      let priceToggle = false;
      let pdtDescriptionToggle = true;
      let collAlignment = "0 auto 0 0";
      var borderRadius = 0;
      var bgColor = "#fff";
      if (props.attributes.selectedLayout == "mainVertical") {
        buttonWidth = val == "simpleAligned" ? 100 : 66;
        bannerToggle = val == "simpleAligned" ? false : true;
        borderRadius = val == "simple" || val == "boxed" ? 10 : 0;
        priceToggle = val == "boxed" ? false : true;
        pdtDescriptionToggle = val == "boxed" ? false : true;
        collAlignment = val == "boxed" ? "0 auto" : "0 auto 0 0";
      }
      if (props.attributes.selectedLayout == "horizontal") {
        setBannerLayout("rightLayout");
        buttonWidth = val == "simple" ? 100 : 66;
        bannerToggle = val == "simple" ? false : true;
        borderRadius = 10;
        priceToggle = val == "simpleAligned" || val == "boxed" ? false : true;
        pdtDescriptionToggle = val == "simpleAligned" ? false : true;
        collAlignment = val == "simpleAligned" ? "0 auto" : "0 auto 0 0";
        bgColor = val == "boxed" ? "#F5F5F5" : "#FFFFFF";
        if (val == "boxed") {
          props.attributes.multiProductsSelected?.map(pdt => {
            pdt.productProps["priceToggle"] = true;
          });
        } else {
          props.attributes.multiProductsSelected?.map(pdt => {
            pdt.productProps["priceToggle"] = false;
          });
        }
      }
      props.setAttributes({
        vertclHrzntlTheme: val,
        // set base theme
        selectedTheme: val,
        // value used for showing current default theme in case of default theme
        buttonWidth: buttonWidth,
        bannerToggle: bannerToggle,
        priceToggle: priceToggle,
        pdtDescriptionToggle: pdtDescriptionToggle,
        collAlignment: collAlignment,
        singleBorderRadius: borderRadius,
        bgColor: bgColor,
        saveThemeToggle: false
      });
    }
    function setBannerLayout(val) {
      let flexDirection = val == "rightLayout" ? "row-reverse" : "row";
      let bannerAlignment = "-18px auto auto -18px";
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerPosition", flexDirection);
      } else {
        props.setAttributes({
          bannerPosition: flexDirection,
          bannerAlignment: bannerAlignment
        });
        updateIndividualProdProps("all", "bannerPosition", flexDirection);
      }
    }
    function setSingleBorderRadius(val) {
      props.setAttributes({
        singleBorderRadius: parseInt(val)
      });
    }
    function setSingleBorderWidth(val) {
      props.setAttributes({
        singleBorderWidth: parseInt(val)
      });
    }
    function toggleProductBanner() {
      if (isSingleProdSelected()) {
        let bannerToggleVal = props.attributes.selectedMultiProd.productProps?.bannerToggle;
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerToggle", !bannerToggleVal);
      } else {
        props.setAttributes({
          bannerToggle: !props.attributes.bannerToggle
        });
        updateIndividualProdProps("all", "bannerToggle", !props.attributes.bannerToggle);
        setStartObservation(true);
      }
    }
    function toggleProductPrice() {
      if (isSingleProdSelected()) {
        let newPriceToggle = !props.attributes.selectedMultiProd.productProps?.priceToggle;
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "priceToggle", newPriceToggle);
      } else {
        props.setAttributes({
          priceToggle: !props.attributes.priceToggle
        });
        updateIndividualProdProps("all", "priceToggle", !props.attributes.priceToggle);
        setStartObservation(true);
      }
    }
    function toggleProductDescription() {
      if (isSingleProdSelected()) {
        let newPdtDescriptionToggle = !props.attributes.selectedMultiProd.productProps?.pdtDescriptionToggle;
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "pdtDescriptionToggle", newPdtDescriptionToggle);
      } else {
        props.setAttributes({
          pdtDescriptionToggle: !props.attributes.pdtDescriptionToggle
        });
        updateIndividualProdProps("all", "pdtDescriptionToggle", !props.attributes.pdtDescriptionToggle);
        setStartObservation(true);
      }
    }
    function toggleAffDisclr() {
      props.setAttributes({
        affDisclosureToggle: !props.attributes.affDisclosureToggle
      });
      setStartObservation(true);
    }
    function setBannerText(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerText", val);
      } else {
        props.setAttributes({
          bannerText: val
        });
        updateIndividualProdProps("all", "bannerText", val);
      }
    }
    function setPriceText(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "priceText", val);
      } else {
        props.setAttributes({
          priceText: val
        });
        updateIndividualProdProps("all", "priceText", val);
      }
    }
    function setAffDisclrText(val) {
      props.setAttributes({
        affDisclosureText: val
      });
    }
    function setAffDisclrFont(val) {
      props.setAttributes({
        affDisclosureFont: val
      });
    }
    function setAffDisclrStyle(val) {
      props.setAttributes({
        affDisclosureStyle: val
      });
    }
    function setAffColor(val) {
      props.setAttributes({
        affDisclosureColor: val
      });
    }
    function setAffDisclrWeight(val) {
      props.setAttributes({
        affDisclosureWeight: val
      });
    }
    function setAffDisclrDecoration(val) {
      props.setAttributes({
        affDisclosureDecoration: val
      });
    }
    function setBannerBgColour(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerBgColor", val);
      } else {
        props.setAttributes({
          bannerBgColor: val
        });
        updateIndividualProdProps("all", "bannerBgColor", val);
      }
    }
    function setBannerFontFamily(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerFontFamily", val);
      } else {
        props.setAttributes({
          bannerFontFamily: val
        });
        updateIndividualProdProps("all", "bannerFontFamily", val);
      }
    }
    function setBannerFontStyle(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerFontStyle", val);
      } else {
        props.setAttributes({
          bannerFontStyle: val
        });
        updateIndividualProdProps("all", "bannerFontStyle", val);
      }
    }
    function setBannerFontWeight(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerFontWeight", val);
      } else {
        props.setAttributes({
          bannerFontWeight: val
        });
        updateIndividualProdProps("all", "bannerFontWeight", val);
      }
    }
    function setBannerTextDecoration(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "bannerTextDecoration", val);
      } else {
        props.setAttributes({
          bannerTextDecoration: val
        });
        updateIndividualProdProps("all", "bannerTextDecoration", val);
      }
    }
    function setButtonLayout(val) {
      setButtonLayoutProps(val);
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonLayout", val);
      } else {
        props.setAttributes({
          buttonLayout: val
        });
        updateIndividualProdProps("all", "buttonLayout", val);
      }
    }
    function setButtonLayoutProps(val) {
      switch (val) {
        case "button1":
          setButtonBordrRadius(35);
          setButtonColor("#535C61");
          setButtonTextColor("#FFFFFF");
          break;
        case "button2":
          setButtonBordrRadius(2);
          setButtonColor("#FFFFFF");
          setButtonGradient("#C6C6D7");
          setButtonTextColor("#000000");
          break;
        case "button3":
          setButtonBordrRadius(5);
          setButtonColor("#FFFFFF");
          setButtonTextColor("#000000");
          break;
        case "button4":
          setButtonBordrRadius(5);
          setButtonColor("#F25225");
          setButtonTextColor("#FFFFFF");
          break;
        default:
          // Handle any other cases here
          break;
      }
    }
    function setButtonHeight(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonHeight", val);
      } else {
        props.setAttributes({
          buttonHeight: val
        });
        updateIndividualProdProps("all", "buttonHeight", val);
      }
    }
    function setButtonWidth(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonWidth", val);
      } else {
        props.setAttributes({
          buttonWidth: val
        });
        updateIndividualProdProps("all", "buttonWidth", val);
      }
    }
    function setButtonBordrRadius(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonRadius", val);
      } else {
        props.setAttributes({
          buttonRadius: val
        });
        updateIndividualProdProps("all", "buttonRadius", val);
      }
    }
    function setButtonColor(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonColor", val);
      } else {
        props.setAttributes({
          buttonColor: val
        });
        updateIndividualProdProps("all", "buttonColor", val);
      }
    }
    function setButtonGradient(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonGradient", val);
      } else {
        props.setAttributes({
          buttonGradient: val
        });
        updateIndividualProdProps("all", "buttonGradient", val);
      }
    }
    function setButtonTextColor(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonTextColor", val);
      } else {
        props.setAttributes({
          buttonTextColor: val
        });
        updateIndividualProdProps("all", "buttonTextColor", val);
      }
    }
    function setButtonText(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonText", val);
      } else {
        props.setAttributes({
          buttonText: val
        });
        updateIndividualProdProps("all", "buttonText", val);
      }
    }
    function toggleButtonNewTab() {
      props.setAttributes({
        buttonNewTabToggle: !props.attributes.buttonNewTabToggle
      });
    }
    function toggleButtonFollow() {
      props.setAttributes({
        buttonFollowToggle: !props.attributes.buttonFollowToggle
      });
      // things are working opposite here
      if (props.attributes.buttonFollowToggle) {
        props.setAttributes({
          buttonSponsoredToggle: false,
          relValue: "noopener"
        });
      } else {
        props.setAttributes({
          relValue: "nofollow noopener"
        });
      }
    }
    function toggleButtonSponsored() {
      props.setAttributes({
        buttonSponsoredToggle: !props.attributes.buttonSponsoredToggle
      });
      // things are working opposite here
      if (!props.attributes.buttonSponsoredToggle) {
        props.setAttributes({
          buttonFollowToggle: true,
          relValue: "nofollow sponsored noopener"
        });
      } else {
        props.setAttributes({
          relValue: "nofollow noopener"
        });
      }
    }
    function setButtonFont(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonTextFont", val);
      } else {
        props.setAttributes({
          buttonTextFont: val
        });
        updateIndividualProdProps("all", "buttonTextFont", val);
      }
    }
    function setButtonFontStyle(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonTextStyle", val);
      } else {
        props.setAttributes({
          buttonTextStyle: val
        });
        updateIndividualProdProps("all", "buttonTextStyle", val);
      }
    }
    function setButtonFontWeight(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonTextWeight", val);
      } else {
        props.setAttributes({
          buttonTextWeight: val
        });
        updateIndividualProdProps("all", "buttonTextWeight", val);
      }
    }
    function setButtonTextDecoration(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "buttonTextDecoration", val);
      } else {
        props.setAttributes({
          buttonTextDecoration: val
        });
        updateIndividualProdProps("all", "buttonTextDecoration", val);
      }
    }
    function setAlignment(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(props.attributes.selectedMultiProd.id, "collAlignment", val);
      } else {
        props.setAttributes({
          collAlignment: val
        });
        updateIndividualProdProps("all", "collAlignment", val);
      }
    }
    function setThemeAlignment(val) {
      props.setAttributes({
        themeAlignment: val
      });
    }
    function setNofPdts(val) {
      var colln_full_width = document.getElementsByClassName("spcom_embedded-collection-product-list")[0];
      if (colln_full_width) {
        //calculate width of one single child element, 12 is the padding
        let child_width = colln_full_width.offsetWidth / parseInt(val) - 12;
        props.setAttributes({
          nofPdts: val,
          collProdSize: child_width
        });
      }
    }
    function toggleShowOptionList() {
      props.setAttributes({
        showOptionList: !props.attributes.showOptionList
      });
    }
    function setSortbySwitcher(val) {
      let all_data = [props.attributes.allProducts, props.attributes.allCollections, props.attributes.filteredProducts, props.attributes.filteredCollections];
      if (val == "newest") {
        all_data.map(arr => {
          if (arr && arr.length) {
            arr.sort((a, b) => a.current_update_time < b.current_update_time ? 1 : -1);
          }
        });
      } else {
        all_data.map(arr => {
          if (arr && arr.length) {
            arr.sort((a, b) => a.current_update_time > b.current_update_time ? 1 : -1);
          }
        });
      }
      props.setAttributes({
        sortbySwitcher: val
      });
    }
    function shopperUpgradePlan() {
      window.open("https://admin.shopper.com/pricing", "_blank");
    }
    function isSingleProdSelected() {
      if ((props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && props.attributes.selectedMultiProd) {
        return true;
      }
      return false;
    }
    const banner_layout_allignmet_list = [{
      value: "leftLayout",
      label: "Align Left"
    }, {
      value: "rightLayout",
      label: "Align Right"
    }];
    const button_layout_list = [{
      value: "button1",
      label: "Simple"
    }, {
      value: "button2",
      label: "3D"
    }, {
      value: "button3",
      label: "Outline"
    }, {
      value: "button4",
      label: "Fill"
    }];
    const font_list = [{
      value: "",
      label: "Default"
    }, {
      value: "Arial",
      label: "Arial"
    }, {
      value: "Verdana",
      label: "Verdana"
    }, {
      value: "Courier New",
      label: "Courier New"
    }, {
      value: "Brush Script MT",
      label: "Brush Script MT"
    }];
    const font_style = [{
      value: "unset",
      label: "Normal"
    }, {
      value: "italic",
      label: "Italic"
    }, {
      value: "oblique",
      label: "Oblique"
    }];
    const font_weight = [{
      value: "lighter",
      label: "Lighter"
    }, {
      value: "normal",
      label: "Normal"
    }, {
      value: "bold",
      label: "Bold"
    }];
    const text_decoration = [{
      value: "none",
      label: "Normal"
    }, {
      value: "underline",
      label: "Underline"
    }, {
      value: "overline",
      label: "Overline"
    }, {
      value: "line-through",
      label: "Line Through"
    }];
    const button_heights = {
      S: 36,
      M: 44,
      L: 55,
      XL: 65
    };
    const button_widths = {
      Small: 33,
      Medium: 66,
      Full: 100
    };
    const alignment_class_list = {
      Left: "0 auto 0 0",
      Center: "0 auto",
      Right: "0 0 0 auto"
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (props.attributes.selectedProduct || props.attributes.multiProductsSelected.length || props.attributes.selectedCollection) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: () => {
        setReplaceOneSingleProd(false);
        getAllCollnProdts();
      },
      className: "spcom_replace_product spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToolbarButton, null, "Replace", " ", props.attributes.selectedProduct || props.attributes.multiProductsSelected ? "Product" : "Collection")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Panel, null, (props.attributes.selectedLayout == "single" || props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings",
      title: "Themes & Layouts"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Theme",
      value: props.attributes.selectedTheme,
      options: props.attributes.themesList,
      onChange: theme => setUserTheme(theme),
      __nextHasNoMarginBottom: true
    }), props.attributes.isDefaultTheme && props.attributes.saveThemeToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_save_theme_container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Save as a New Theme"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_save_theme_presets"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "components-text-control__input",
      id: "shopper_theme_name_input",
      maxlength: "25",
      placeholder: "New Theme"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      onClick: () => {
        saveNewTheme();
      },
      variant: "secondary"
    }, "Save")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_theme_saved_banner",
      id: "spcom_theme_saved_banner"
    }, "Theme Saved"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_theme_duplicate_banner",
      id: "spcom_theme_duplicate_banner"
    }, "A theme with the same name exists")), !props.attributes.isDefaultTheme && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_update_remove_theme"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_custom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      onClick: () => {
        updateCurrentTheme(props.attributes.selectedTheme);
      },
      variant: "secondary"
    }, "Save Changes"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      onClick: () => {
        deleteTheme(props.attributes.selectedTheme);
      },
      variant: "secondary"
    }, "Remove Theme")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_theme_updated_banner",
      id: "spcom_theme_updated_banner"
    }, "Theme Updated"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_theme_deleted_banner",
      id: "spcom_theme_deleted_banner"
    }, "Theme Deleted")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Alignment"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      label: "Alignment"
    }, Object.keys(alignment_class_list).map(alignment => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: alignment_class_list[alignment] == props.attributes.themeAlignment ? "primary" : "",
      onClick: () => setThemeAlignment(alignment_class_list[alignment])
    }, alignment)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_stngs_group_dropdowns"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font family",
      value: props.attributes.fontFamily,
      options: font_list,
      onChange: newFont => setFont(newFont),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Style",
      value: props.attributes.fontStyle,
      options: font_style,
      onChange: newFontStyle => setFontStyle(newFontStyle),
      __nextHasNoMarginBottom: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_stngs_group_dropdowns"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Weight",
      value: props.attributes.fontWeight,
      options: font_weight,
      onChange: newFontWeight => setFontWeight(newFontWeight),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Text Decoration",
      value: props.attributes.textDecoration,
      options: text_decoration,
      onChange: newFont => setTextDecoration(newFont),
      __nextHasNoMarginBottom: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Text Color",
      value: props.attributes.fontColor,
      onChange: value => setfFontColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.fontColor,
      onChange: color => setfFontColor(color)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Background Color",
      value: props.attributes.bgColor,
      onChange: value => setBgColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.bgColor,
      onChange: color => setBgColor(color)
    }))), (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal" || props.attributes.selectedLayout == "single") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_image_size_control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Size (%)",
      value: props.attributes.themeWidths?.sizeSliderValue || 100,
      onChange: value => updateLayoutWidths(value),
      min: props.attributes.selectedLayout == "horizontal" ? 30 : 50,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, null, Object.keys(button_widths).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: button_widths[b] == props.attributes.themeWidths?.themeContainerWidth ? "primary" : "",
      onClick: () => updateLayoutWidths(button_widths[b])
    }, b))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Radius (px)",
      value: props.attributes.singleBorderRadius,
      onChange: value => setSingleBorderRadius(value),
      min: 0,
      max: props.attributes.selectedLayout != "mainVertical" || props.attributes.selectedLayout != "horizontal" ? 50 : 100
    }), props.attributes.selectedLayout != "mainVertical" && props.attributes.selectedLayout != "horizontal" && props.attributes.singleTheme != "vertical" && props.attributes.singleTheme != "verticalOverlaped" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Padding",
      value: props.attributes.singleBorderWidth,
      onChange: value => setSingleBorderWidth(value),
      min: 0,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Padding Color",
      value: props.attributes.singleBorderColor,
      onChange: value => setSingleBorderColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.singleBorderColor,
      onChange: color => setSingleBorderColor(color)
    })))))), (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings",
      title: "Product Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Product",
      value: props.attributes.selectedMultiProd ? props.attributes.selectedMultiProd.id : -1,
      options: props.attributes.multiProductsList,
      onChange: product => updateSelectedMultiProd(product),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_multi_pdt_stngs_container"
    }, props.attributes.selectedMultiProd && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Change listing order",
      value: props.attributes.multiProductsSelected?.findIndex(obj => obj?.id === props.attributes.selectedMultiProd?.id),
      options: props.attributes.multiProductsListOrder,
      onChange: position => updateProdPositionWithDropdown(position),
      __nextHasNoMarginBottom: true
    })), props.attributes.prodsWithDescrptn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show / Hide Product Description",
      className: "shopper_com_show_hide_pdt_dscrptn",
      checked: isSingleProdSelected() ? props.attributes.selectedMultiProd?.productProps?.pdtDescriptionToggle : props.attributes.pdtDescriptionToggle,
      onChange: toggleProductDescription,
      __nextHasNoMarginBottom: true
    }), props.attributes.selectedMultiProd && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_custom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      onClick: () => {
        setReplaceOneSingleProd(true);
        getAllCollnProdts();
      },
      variant: "secondary"
    }, "Replace Product"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      onClick: () => {
        changeProdPosition("delete");
      },
      variant: "secondary"
    }, "Delete Product")), !props.attributes.selectedMultiProd && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_custom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      onClick: () => {
        setReplaceOneSingleProd(false);
        getAllCollnProdts();
      },
      variant: "secondary"
    }, "Replace Products"))))), props.attributes.singleTheme != "vertical" && props.attributes.singleTheme != "verticalOverlaped" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings_component",
      title: "Badge Settings"
    }, (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Product",
      value: props.attributes.selectedMultiProd?.id,
      options: props.attributes.multiProductsList,
      onChange: product => updateSelectedMultiProd(product),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show / Hide Badge",
      checked: isSingleProdSelected() ? props.attributes.selectedMultiProd?.productProps?.bannerToggle : props.attributes.bannerToggle,
      onChange: toggleProductBanner
    }), (isSingleProdSelected() ? props.attributes.selectedMultiProd?.productProps?.bannerToggle : props.attributes.bannerToggle) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Layout",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerPosition == "row" ? "leftLayout" : "rightLayout" : props.attributes.bannerPosition == "row" ? "leftLayout" : "rightLayout",
      options: banner_layout_allignmet_list,
      onChange: newBannerAllignnmet => setBannerLayout(newBannerAllignnmet),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Badge Text",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerText : props.attributes.bannerText,
      onChange: value => setBannerText(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Badge Background Color",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerBgColor : props.attributes.bannerBgColor,
      onChange: value => setBannerBgColour(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerBgColor : props.attributes.bannerBgColor,
      onChange: color => setBannerBgColour(color)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_stngs_group_dropdowns"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Badge Text Font",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerFontFamily : props.attributes.bannerFontFamily,
      options: font_list,
      onChange: newFont => setBannerFontFamily(newFont),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Style",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerFontStyle : props.attributes.bannerFontStyle,
      options: font_style,
      onChange: newFontStyle => setBannerFontStyle(newFontStyle),
      __nextHasNoMarginBottom: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_stngs_group_dropdowns"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Weight",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerFontWeight : props.attributes.bannerFontWeight,
      options: font_weight,
      onChange: newFontWeight => setBannerFontWeight(newFontWeight),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Text Decoration",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.bannerTextDecoration : props.attributes.bannerTextDecoration,
      options: text_decoration,
      onChange: decoration => setBannerTextDecoration(decoration),
      __nextHasNoMarginBottom: true
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings_component",
      title: "Price Settings"
    }, (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Product",
      value: props.attributes.selectedMultiProd?.id,
      options: props.attributes.multiProductsList,
      onChange: product => updateSelectedMultiProd(product),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show / Hide Product Price",
      checked: isSingleProdSelected() ? props.attributes.selectedMultiProd?.productProps?.priceToggle : props.attributes.priceToggle,
      onChange: toggleProductPrice
    }), (isSingleProdSelected() ? props.attributes.selectedMultiProd?.productProps?.priceToggle : props.attributes.priceToggle) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Product Price",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.priceText : props.attributes.priceText,
      onChange: value => setPriceText(value)
    })))), (props.attributes.selectedLayout == "button" || props.attributes.selectedLayout == "single" || props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings",
      title: "Button Settings"
    }, (props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Product",
      value: props.attributes.selectedMultiProd?.id,
      options: props.attributes.multiProductsList,
      onChange: product => updateSelectedMultiProd(product),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Layout",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd?.productProps?.buttonLayout : props.attributes.buttonLayout,
      options: button_layout_list,
      onChange: newButtonLayout => setButtonLayout(newButtonLayout),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Button Size"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      "aria-label": "Button Size"
    }, Object.keys(button_heights).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: button_heights[b] === (isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonHeight : props.attributes.buttonHeight) ? "primary" : "",
      onClick: () => setButtonHeight(button_heights[b])
    }, b)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Button Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      "aria-label": "Button Width"
    }, Object.keys(button_widths).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: button_widths[b] === (isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonWidth : props.attributes.buttonWidth) ? "primary" : "",
      onClick: () => setButtonWidth(button_widths[b])
    }, b)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Alignment"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      label: "Alignment"
    }, Object.keys(alignment_class_list).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: alignment_class_list[b] == (isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.collAlignment : props.attributes.collAlignment) ? "primary" : "",
      onClick: () => setAlignment(alignment_class_list[b])
    }, b)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Button Text",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonText : props.attributes.buttonText,
      onChange: value => setButtonText(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Text Color",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonTextColor : props.attributes.buttonTextColor,
      onChange: value => setButtonTextColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonTextColor : props.attributes.buttonTextColor,
      onChange: color => setButtonTextColor(color)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Button Text Font",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonTextFont : props.attributes.buttonTextFont,
      options: font_list,
      onChange: newFont => setButtonFont(newFont),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Style",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonTextStyle : props.attributes.buttonTextStyle,
      options: font_style,
      onChange: newFontStyle => setButtonFontStyle(newFontStyle),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Weight",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonTextWeight : props.attributes.buttonTextWeight,
      options: font_weight,
      onChange: newFontWeight => setButtonFontWeight(newFontWeight),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Text Decoration",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonTextDecoration : props.attributes.buttonTextDecoration,
      options: text_decoration,
      onChange: decoration => setButtonTextDecoration(decoration),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Button Radius",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonRadius : props.attributes.buttonRadius,
      onChange: value => setButtonBordrRadius(value),
      min: 0,
      max: 35
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Button Background Colour",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonColor : props.attributes.buttonColor,
      onChange: value => setButtonColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonColor : props.attributes.buttonColor,
      onChange: color => setButtonColor(color)
    }))), (isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonLayout == "button2" : props.attributes.buttonLayout == "button2") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Button Gradient Colour",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonGradient : props.attributes.buttonGradient,
      onChange: value => setButtonGradient(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: isSingleProdSelected() ? props.attributes.selectedMultiProd.productProps?.buttonGradient : props.attributes.buttonGradient,
      onChange: color => setButtonGradient(color)
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings_component",
      title: "Link Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Open In New Tab / Window",
      checked: props.attributes.buttonNewTabToggle,
      onChange: toggleButtonNewTab
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "NoFollow / NoIndex",
      checked: props.attributes.buttonFollowToggle,
      onChange: toggleButtonFollow
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Sponsored Link",
      checked: props.attributes.buttonSponsoredToggle,
      onChange: toggleButtonSponsored
    }))), (props.attributes.selectedLayout == "single" || props.attributes.selectedLayout == "mainVertical" || props.attributes.selectedLayout == "horizontal") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings_component",
      title: "Affiliate Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show / Hide Affiliate Disclosure",
      checked: props.attributes.affDisclosureToggle,
      onChange: toggleAffDisclr
    }), props.attributes.affDisclosureToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextareaControl, {
      label: "Affiliate Disclosure Text",
      value: props.attributes.affDisclosureText,
      onChange: value => setAffDisclrText(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Affiliate Disclosure Font",
      value: props.attributes.affDisclosureFont,
      options: font_list,
      onChange: newFont => setAffDisclrFont(newFont),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Style",
      value: props.attributes.affDisclosureStyle,
      options: font_style,
      onChange: newFontStyle => setAffDisclrStyle(newFontStyle),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Text Color",
      value: props.attributes.affDisclosureColor,
      onChange: value => setAffColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.affDisclosureColor,
      onChange: color => setAffColor(color)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Weight",
      value: props.attributes.affDisclosureWeight,
      options: font_weight,
      onChange: newFontWeight => setAffDisclrWeight(newFontWeight),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Text Decoration",
      value: props.attributes.affDisclosureDecoration,
      options: text_decoration,
      onChange: decoration => setAffDisclrDecoration(decoration),
      __nextHasNoMarginBottom: true
    }))), props.attributes.selectedProduct && props.attributes.selectedLayout == "image" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings_component",
      title: "Widget Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_image_size_control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Size (%)",
      value: props.attributes.tileWidth,
      onChange: value => setTileWidth(value),
      min: 10,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      "aria-label": "Button Width"
    }, Object.keys(button_widths).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: button_widths[b] == props.attributes.tileWidth ? "primary" : "",
      onClick: () => setTileWidth(button_widths[b])
    }, b))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Rounded Corner Radius (px)",
      value: props.attributes.borderRadius,
      onChange: value => setBorderRadius(value),
      min: 0,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Padding (px)",
      value: props.attributes.tilePadding,
      onChange: value => setTilePadding(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Padding Color",
      value: props.attributes.bgColor,
      onChange: value => setBgColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.bgColor,
      onChange: color => setBgColor(color)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Alignment"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      label: "Alignment"
    }, Object.keys(alignment_class_list).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: alignment_class_list[b] == props.attributes.collAlignment ? "primary" : "",
      onClick: () => setAlignment(alignment_class_list[b])
    }, b)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Link Settings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Open In New Tab / Window",
      checked: props.attributes.buttonNewTabToggle,
      onChange: toggleButtonNewTab
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "NoFollow / NoIndex",
      checked: props.attributes.buttonFollowToggle,
      onChange: toggleButtonFollow
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Sponsored Link",
      checked: props.attributes.buttonSponsoredToggle,
      onChange: toggleButtonSponsored
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings_component",
      title: "Product Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show Product Name",
      checked: props.attributes.prodNameToggle,
      onChange: toggleProductName
    }), props.attributes.prodNameToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font family",
      value: props.attributes.fontFamily,
      options: font_list,
      onChange: newFont => setFont(newFont),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Style",
      value: props.attributes.fontStyle,
      options: font_style,
      onChange: newFontStyle => setFontStyle(newFontStyle),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Weight",
      value: props.attributes.fontWeight,
      options: font_weight,
      onChange: newFontWeight => setFontWeight(newFontWeight),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Text Decoration",
      value: props.attributes.textDecoration,
      options: text_decoration,
      onChange: newFont => setTextDecoration(newFont),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Font Size",
      value: props.attributes.fontSize,
      onChange: value => setfFontSize(value),
      placeholder: "Size in px"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Text Color",
      value: props.attributes.fontColor,
      onChange: value => setfFontColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.fontColor,
      onChange: color => setfFontColor(color)
    })))))), props.attributes.selectedLayout == "image" && props.attributes.selectedCollection && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings_component",
      title: "Widget Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_image_size_control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Size (%)",
      value: props.attributes.collTileWidth,
      onChange: value => setCollTileWidth(value),
      min: 18,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      "aria-label": "Width"
    }, Object.keys(button_widths).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: button_widths[b] == props.attributes.collTileWidth ? "primary" : "",
      onClick: () => setCollTileWidth(button_widths[b])
    }, b))))), props.attributes.collBgColor != "#ffffff00" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.RangeControl, {
      label: "Rounded Corner Radius (px)",
      value: props.attributes.borderRadius,
      onChange: value => setBorderRadius(value),
      min: 0,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Padding (px)",
      value: props.attributes.tilePadding,
      onChange: value => setTilePadding(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show Collection Name",
      checked: props.attributes.collNameToggle,
      onChange: toggleCollectionName
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show Product Name",
      checked: props.attributes.prodNameToggle,
      onChange: toggleProductName
    }), props.attributes.selectedCollection["collection_image"] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Show Collection Cover Image",
      checked: props.attributes.collCoverToggle,
      onChange: toggleCollCover
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Number Of Products",
      value: props.attributes.nofPdts,
      onChange: value => setNofPdts(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Background Color",
      value: props.attributes.collBgColor,
      onChange: value => setCollBgColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.collBgColor,
      onChange: color => setCollBgColor(color)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_button_group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Alignment"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
      label: "Alignment"
    }, Object.keys(alignment_class_list).map(b => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      variant: alignment_class_list[b] == props.attributes.collAlignment ? "primary" : "",
      onClick: () => setAlignment(alignment_class_list[b])
    }, b)))), (props.attributes.collNameToggle || props.attributes.prodNameToggle) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.PanelBody, {
      initialOpen: false,
      className: "shopper_com_block_settings",
      title: "Text Settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font family",
      value: props.attributes.fontFamily,
      options: font_list,
      onChange: newFont => setFont(newFont),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Style",
      value: props.attributes.fontStyle,
      options: font_style,
      onChange: newFontStyle => setFontStyle(newFontStyle),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Font Weight",
      value: props.attributes.fontWeight,
      options: font_weight,
      onChange: newFontWeight => setFontWeight(newFontWeight),
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.SelectControl, {
      label: "Text Decoration",
      value: props.attributes.textDecoration,
      options: text_decoration,
      onChange: newFont => setTextDecoration(newFont),
      __nextHasNoMarginBottom: true
    }), props.attributes.collNameToggle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Font Size",
      value: props.attributes.fontSize,
      onChange: value => setfFontSize(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_colrSelectionTab"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.TextControl, {
      label: "Text Color",
      value: props.attributes.fontColor,
      onChange: value => setfFontColor(value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_clrPaletteSmall"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ColorPalette, {
      label: "Color Picker",
      value: props.attributes.fontColor,
      onChange: color => setfFontColor(color)
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "spcom_panel_sub_settings_label"
    }, "Link Settings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Open In New Tab / Window",
      checked: props.attributes.buttonNewTabToggle,
      onChange: toggleButtonNewTab
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "NoFollow / NoIndex",
      checked: props.attributes.buttonFollowToggle,
      onChange: toggleButtonFollow
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.ToggleControl, {
      label: "Sponsored Link",
      checked: props.attributes.buttonSponsoredToggle,
      onChange: toggleButtonSponsored
    })))))), !props.attributes.selectedProduct && !props.attributes.multiProductsSelected?.length && !props.attributes.selectedCollection && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__find-products spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dot_com_branding"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      alt: "Shopper.com",
      src: "https://cdn.shopper.com/next_assets/image/shopper-com-logo120x120.png"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Shopper.com")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_dot_com_description spcom__font"
    }, "Select a display to showcase your products"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      onClick: () => {
        setReplaceOneSingleProd(false);
        getAllCollnProdts();
        checkReferralLinkExists();
      },
      className: "shopper_dot_com_find-btn spcom__font"
    }, "Select a Product Display"))), showSelctnPopup && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "sp_com_outer_section_container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com__popup_modal spcom_full-width-popup",
      id: "shopper_dot_com_select_popup"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "sp_com__popup__container_body"
    }, !props.attributes.selectedLayout && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_wf-header-modal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_header_layout_sel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_sel_check"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_header_icon"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].select_round_orange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_header_text spcom__font"
    }, "Select a layout")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_middle_line"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_sel_check"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_header_icon"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].unselected_round_grey
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_header_text sp_com_text_dull spcom__font"
    }, "Select a product or collection"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "spcom_popup_close_button",
      href: "#"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      onClick: unsetsetTopZindex,
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].close
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_wf-search-modal sp_com_layouts"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__search_addprod_text spcom__font",
      id: "spcom__search_addprod_text"
    }, "Click to select a layout")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com_wf-content-modal sp_com_layouts"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_prod_list"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_layout_selection"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: e => updateSelectedLayout("single"),
      className: "spcom_layout_select spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_display_type"
    }, _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].singleDisplay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layout_name_common"
    }, "Single")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: e => updateSelectedLayout("button"),
      className: "spcom_layout_select spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_display_type"
    }, _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].buttonDisplay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layout_name_common"
    }, "Button")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: e => updateSelectedLayout("image"),
      className: "spcom_layout_select spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_display_type"
    }, _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].imageDisplay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layout_name_common"
    }, "Image")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: e => updateSelectedLayout("mainVertical"),
      className: "spcom_layout_select spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_display_type"
    }, _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].verticalDisplay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layout_name_common"
    }, "Vertical")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: e => updateSelectedLayout("horizontal"),
      className: "spcom_layout_select spcom__font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_display_type"
    }, _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].horizontalDisplay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "layout_name_common"
    }, "Horizontal")))))), props.attributes.selectedLayout && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_wf-header-modal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_header_layout_sel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: e => {
        resetLayoutSelection();
        resetAllProductSelections();
      },
      className: "shopper_com_layout_sel_check shopper_com_layout_back_btn"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_header_icon"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].select_ok
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_header_text spcom__font"
    }, "Select a layout")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_middle_line"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_sel_check"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_layout_header_icon"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].select_round_orange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_header_text spcom__font"
    }, "Select a product or collection"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "spcom_popup_close_button",
      href: "#"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      onClick: unsetsetTopZindex,
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].close
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_wf-search-modal shopper_com_prod__coll_select"
    }, (props.attributes.selectedLayout == "button" || props.attributes.selectedLayout == "image") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__search_addprod_text spcom__font",
      id: "spcom__search_addprod_text"
    }, "Click to select a product or collection"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__prod_toggle_n_search_container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__prod_toggle_n_search_elements"
    }, (props.attributes.selectedLayout == "button" || props.attributes.selectedLayout == "image") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__coll_prod_toggle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_product_switch"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      checked: props.attributes.showProducts,
      type: "checkbox",
      onChange: toggleProductDisplay
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      style: {
        color: `${props.attributes.showProducts ? "#F25522" : "#212121"}`
      },
      className: "spcom__font spcom_prod-coll_label"
    }, "Products")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom_collection_switch"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      checked: props.attributes.showCollections,
      type: "checkbox",
      onChange: toggleCollectionDisplay
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      style: {
        color: `${props.attributes.showCollections ? "#F25522" : "#212121"}`
      },
      className: "spcom__font spcom_prod-coll_label"
    }, "Collections"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: highLightSearch,
      className: "spcom__search_input",
      id: "spcom__search_input"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com___icon_common"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      className: "shopper_com___icon_common",
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].search
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: "spcom__font spcom__ellipsis",
      type: "search",
      placeholder: "Search",
      onChange: searchproduct
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__sort_elements spcom_date_sort_select-container __multi-select"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "selected-input",
      onClick: () => toggleShowOptionList()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-input-left"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__font select-input-left-text"
    }, "Sort by:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-input-right-text"
    }, props.attributes.sortbySwitcher == "newest" ? "Newest First" : props.attributes.sortbySwitcher == "oldest" ? "Oldest First" : "")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "_divider"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-input-right"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-input-right-icon"
    }, props.attributes.showOptionList ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      onClick: () => toggleShowOptionList(),
      className: "shopper_com___icon_common",
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].upArrow
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      onClick: () => toggleShowOptionList(),
      className: "shopper_com___icon_common",
      icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].downArrow
    })))), props.attributes.showOptionList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-options-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-options-container-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "select-options-ul-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "select-options-ul"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `select-option-li deselect-option ${props.attributes.sortbySwitcher ? "active" : ""}`,
      onClick: e => {
        setSortbySwitcher();
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "deselct-all spcom__font"
    }, "Clear Selection")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "spcom__coll_prod_toggle select-option-li spcom__font",
      onClick: () => {
        setSortbySwitcher("newest");
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      checked: props.attributes.sortbySwitcher == "newest"
    }), "Newest First"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "spcom__coll_prod_toggle select-option-li spcom__font",
      onClick: () => {
        setSortbySwitcher("oldest");
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      checked: props.attributes.sortbySwitcher == "oldest"
    }), "Oldest First")))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sp_com_wf-content-modal"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_prod_list"
    }, !props.attributes.filteredProducts?.length > 0 && !props.attributes.filteredCollections?.length > 0 && props.attributes.showProducts && props.attributes.allProducts?.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__p-grid"
    }, Object.entries(props.attributes.allProducts).map(_ref => {
      let [key, value] = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: e => updateSelectedProduct(e, value),
        className: `spcom__p-tile ${props.attributes.isFreeTier && props.attributes.remainingCollCount > 0 ? "spcom_restriction" : ""} ${value["id"] == props.attributes.selectedProduct?.id || props.attributes.multiProductsSelected?.filter(product => product.id == value["id"]).length > 0 ? "spcom_highlight_tile" : ""}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "sp_com__image_container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter",
        src: value["product_image"],
        alt: "Product Image"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__p-name spcom__font spcom__ellipsis line2"
      }, value["product_title"]), props.attributes.isFreeTier && props.attributes.remainingProdCount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: e => shopperUpgradePlan(),
        className: "spcom_prod_block-overlay"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom_prod_block-content"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].productLock
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom_block_prod_text"
      }, "+", props.attributes.remainingProdCount, " ", "Products"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom_block_prod_text spcom_text_orange"
      }, "Upgrade to add them"))));
    }))), !props.attributes.filteredProducts?.length > 0 && !props.attributes.filteredCollections?.length > 0 && props.attributes.selectedLayout != "single" && props.attributes.showCollections && props.attributes.allCollections?.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__c-grid"
    }, Object.entries(props.attributes.allCollections).map(_ref2 => {
      let [key, value] = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: e => updateSelectedCollection(e, value),
        className: `spcom__c-tile ${props.attributes.isFreeTier && props.attributes.remainingCollCount > 0 ? "spcom_restriction" : ""}
                                      ${value["id"] == props.attributes.selectedCollection?.id ? "spcom_highlight_tile" : ""}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "sp_com__image_container-set"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter _left",
        src: value["collection_prod_image1"],
        alt: "Product Image"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__right"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter spcom__top",
        src: value["collection_prod_image2"],
        alt: "Product Image"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter spcom__bottom",
        src: value["collection_prod_image3"],
        alt: "Product Image"
      }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__c-name spcom__font spcom__ellipsis line2"
      }, value["collection_title"]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__stats spcom__font spcom__ellipsis"
      }, value["collection_products"], "Products"), props.attributes.isFreeTier && props.attributes.remainingCollCount > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: e => shopperUpgradePlan(),
        className: "spcom_prod_block-overlay"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom_prod_block-content"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__.Icon, {
        icon: _icons_js__WEBPACK_IMPORTED_MODULE_8__["default"].productLock
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom_block_prod_text"
      }, "+", props.attributes.remainingCollCount, " ", "Collections"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom_block_prod_text spcom_text_orange"
      }, "Upgrade to add them"))));
    }))), props.attributes.filteredProducts?.length > 0 && props.attributes.showProducts && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__p-grid"
    }, Object.entries(props.attributes.filteredProducts).map(_ref3 => {
      let [key, value] = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: e => updateSelectedProduct(e, value),
        className: `spcom__p-tile ${props.attributes.isFreeTier && props.attributes.remainingCollCount > 0 ? "spcom_restriction" : ""} ${value["id"] == props.attributes.selectedProduct?.id || props.attributes.multiProductsSelected?.filter(product => product.id == value["id"]).length > 0 ? "spcom_highlight_tile" : ""}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "sp_com__image_container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter",
        src: value["product_image"],
        alt: "Product Image"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__p-name spcom__font spcom__ellipsis line2"
      }, value["product_title"]));
    }))), props.attributes.filteredCollections?.length > 0 && props.attributes.selectedLayout != "single" && props.attributes.showCollections && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "spcom__c-grid"
    }, Object.entries(props.attributes.filteredCollections).map(_ref4 => {
      let [key, value] = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: e => updateSelectedCollection(e, value),
        className: `spcom__c-tile ${props.attributes.isFreeTier && props.attributes.remainingCollCount > 0 ? "spcom_restriction" : ""}
                                      ${value["id"] == props.attributes.selectedCollection?.id ? "spcom_highlight_tile" : ""}`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "sp_com__image_container-set"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter _left",
        src: value["collection_prod_image1"],
        alt: "Product Image"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__right"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter spcom__top",
        src: value["collection_prod_image2"],
        alt: "Product Image"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "spcom_img-filter spcom__bottom",
        src: value["collection_prod_image3"],
        alt: "Product Image"
      }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__c-name spcom__font spcom__ellipsis line2"
      }, value["collection_title"]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "spcom__stats spcom__font spcom__ellipsis"
      }, value["collection_products"], " Products"));
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shopper_com_wf-footer-modal"
    }, props.attributes.selectedLayout?.length && (props.attributes.selectedProduct || props.attributes.multiProductsSelected?.length || props.attributes.selectedCollection) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "spcom_raw-a-text",
      href: "#"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: unsetsetTopZindex,
      className: "shopper_com_ftr_slct_btn"
    }, "Insert")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      alt: "Shopper.com",
      src: "https://cdn.shopper.com/next_assets/image/shopper-com-logo120x120.png"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ThemesAndLayouts__WEBPACK_IMPORTED_MODULE_12__["default"], {
      props: props,
      is_edit_screen: true
    }));
  },
  save: function (props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ThemesAndLayouts__WEBPACK_IMPORTED_MODULE_12__["default"], {
      props: props,
      is_edit_screen: false
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map