import "./embed.css";
import "./shopper_style.css";
import "./sort_button_style.css";
import "./selectbutton.css";
import "./vertical_theme_style.css";
import "./block_style.css";
import "./shopper_block_script.js";
import icons from "./icons.js";
import "./AffiliateLink.js";
import { BlockControls, InspectorControls } from "@wordpress/block-editor";
import {
  Panel,
  PanelBody,
  ToggleControl,
  TextControl,
  TextareaControl,
  RangeControl,
  SelectControl,
  ColorPalette,
  ButtonGroup,
  Button,
  Icon,
  ToolbarGroup,
  ToolbarButton,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

import ThemesAndLayouts from "./ThemesAndLayouts";

/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
wp.blocks.registerBlockType("shopperplugin/add-product-block", {
  title: "Shopper.com",
  icon: icons.shopper,
  category: "widgets",
  attributes: {
    showProducts: { type: "boolean", default: true },
    showCollections: { type: "boolean", default: false },
    searchText: { type: "string", default: null },
    allProducts: { type: "object", default: null },
    allCollections: { type: "object", default: null },
    filteredProducts: { type: "object", default: null },
    filteredCollections: { type: "object", default: null },
    selectedLayout: { type: "string", default: null },
    selectedProductOrCollnAffl: { type: "string", default: null },
    selectedProduct: { type: "object", default: null },
    selectedCollection: { type: "object", default: null },
    selectedCollectionProducts: { type: "array", default: null },
    singleTheme: { type: "string", default: "simple" },
    vertclHrzntlTheme: { type: "string", default: "simple" },
    singleBorderRadius: { type: "integer", default: 10 },
    singleBorderWidth: { type: "integer", default: 4 },
    singleBorderColor: { type: "string", default: "#766d6b" },
    bannerAlignment: { type: "string", default: "-18px auto auto -18px" },
    bannerPosition: { type: "string", default: "row" },
    bannerToggle: { type: "boolean", default: true },
    bannerText: { type: "string", default: "New" },
    bannerBgColor: { type: "string", default: "#241F21" },
    bannerFontFamily: { type: "string", default: "" },
    bannerFontStyle: { type: "string", default: "" },
    bannerFontWeight: { type: "string", default: "bold" },
    bannerTextDecoration: { type: "string", default: "" },
    priceToggle: { type: "boolean", default: true },
    priceText: { type: "string", default: "$499" },
    pdtDescriptionToggle: { type: "boolean", default: true },
    affDisclosureToggle: { type: "boolean", default: true },
    affDisclosureText: {
      type: "string",
      default:
        "We earn a commission if you make a purchase, at no additional cost to you.",
    },
    affDisclosureFont: { type: "string", default: "" },
    affDisclosureStyle: { type: "string", default: "" },
    affDisclosureColor: { type: "string", default: "#000000" },
    affDisclosureWeight: { type: "string", default: "lighter" },
    affDisclosureDecoration: { type: "string", default: "" },
    buttonLayout: { type: "string", default: "button1" },
    buttonText: { type: "string", default: "Buy Now" },
    buttonTextFont: { type: "string", default: "" },
    buttonTextStyle: { type: "string", default: "" },
    buttonTextWeight: { type: "string", default: "normal" },
    buttonTextDecoration: { type: "string", default: "" },
    buttonRadius: { type: "integer", default: 35 },
    buttonColor: { type: "string", default: "#535C61" },
    buttonGradient: { type: "string", default: "#C6C6D7" },
    buttonTextColor: { type: "string", default: "#FFFFFF" },
    buttonHeight: { type: "integer", default: 44 },
    buttonWidth: { type: "integer", default: 33 },
    buttonNewTabToggle: { type: "boolean", default: true },
    buttonFollowToggle: { type: "boolean", default: true },
    buttonSponsoredToggle: { type: "boolean", default: true },
    relValue: { type: "string", default: "nofollow sponsored noopener" },
    prodNameToggle: { type: "boolean", default: false },
    collNameToggle: { type: "boolean", default: true },
    collCoverToggle: { type: "boolean", default: true },
    fontSize: { type: "integer", default: 18 },
    collProdFontSize: { type: "integer", default: 14 },
    fontColor: { type: "string", default: "#000" },
    bgColor: { type: "string", default: "#fff" },
    collBgColor: { type: "string", default: "#9c9c9c" },
    tileWidth: { type: "integer" },
    collTileWidth: { type: "integer", default: 100 },
    borderRadius: { type: "integer", default: 16 },
    tilePadding: { type: "integer", default: 12 },
    fontFamily: { type: "string", default: "" },
    fontStyle: { type: "string", default: "" },
    fontWeight: { type: "string", default: "bold" },
    textDecoration: { type: "string", default: "" },
    nofPdts: { type: "integer", default: 5 },
    collProdSize: { type: "integer", default: 100 },
    collAlignment: { type: "string", default: "" },
    showOptionList: { type: "boolean", default: false },
    sortbySwitcher: { type: "string", default: "" },
    isFreeTier: { type: "boolean", default: false },
    remainingCollCount: { type: "integer", default: 0 },
    remainingProdCount: { type: "integer", default: 0 },
    verticalLayout: { type: "string", default: "simple" },
    themeAlignment: { type: "string", default: "0 auto 0 0" },
    mainVerticalLayout: { type: "string", default: "mainVertical1" },
    multiProductsSelected: { type: "array", default: [] },
    multiProductsList: { type: "array", default: null },
    multiProductsListOrder: { type: "array", default: null },
    selectedMultiProd: { type: "object", default: null },
    prodsWithDescrptn: { type: "boolean", default: false },
    themeWidths: { type: "object", default: { sizeSliderValue: 100 } },
    affRdrctnSlug: { type: "string", default: "" },
    themesList: { type: "array", default: null },
    selectedTheme: { type: "string", default: "simple" },
    isDefaultTheme: { type: "boolean", default: true },
    saveThemeToggle: { type: "boolean", default: false },
    referralLink: { type: "string", default: "https://www.shopper.com/" },
    linkCloakingSlugType: { type: "string", default: "name" },
    enableReferralLink: { type: "boolean", default: false },
    doesReferralLinkExist: { type: "boolean", default: false },
  },
  edit: function (props) {
    const [showSelctnPopup, setShowSelctnPopup] = useState(false);
    const [replaceOneSingleProd, setReplaceOneSingleProd] = useState(false);
    const [valueList, setValueList] = useState([]);
    const [startObservation, setStartObservation] = useState(false);
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
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
          if (
            mutation?.attributeName == "src" ||
            mutation?.type == "childList"
          ) {
            // donot show the save new theme option
            // since the changes in dom are due to
            // the default theme selected
            props.setAttributes({
              saveThemeToggle: false,
            });
          } else {
            // show the save new theme option
            // since the changes are user made and
            // observe for further changes from here on
            setStartObservation(true);
            props.setAttributes({
              saveThemeToggle: true,
            });
          }
        } else {
          props.setAttributes({
            saveThemeToggle: true,
          });
        }
      });
    });

    // choose what changes to observe in DOM
    var observerConfig = {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    };

    // stop observing if save option is already visible
    if (!props.attributes.saveThemeToggle) {
      var single_theme_container = document.getElementsByClassName(
        "shopper_dotcom_single_container"
      );
      var vertical_theme_container = document.getElementsByClassName(
        "spcom_vertical_main_top_container"
      );
      var horizontal_theme_container = document.getElementsByClassName(
        "spcom__horizontal_container"
      );
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
        method: "GET",
      }).then((res) => {
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
        method: "GET",
      }).then((res) => {
        if (res) {
          let referral_link =
            "https://www.shopper.com/join/" +
            res +
            "?redUrl=https://www.shopper.com/wordpress-affiliate-plugin";
          props.setAttributes({
            referralLink: referral_link,
          });
        }
      });
    }

    function getLinkCloakingSlugType() {
      wp.apiFetch({
        path: "shopper/v1/get_slug_type",
        method: "GET",
      }).then((res) => {
        let slugType = "name";
        if (res) {
          slugType = res;
        }
        props.setAttributes({
          linkCloakingSlugType: slugType,
        });
      });
    }

    function getUserThemes(selectedLayout = props.attributes.selectedLayout) {
      let theme_list = [];
      let layout = selectedLayout;
      if (layout == "single") {
        theme_list = [
          { value: "simple", label: "Simple Left" },
          { value: "simpleRight", label: "Simple Right" },
          { value: "vertical", label: "Vertical" },
          { value: "verticalOverlaped", label: "Vertical Overlapped" },
        ];
      } else {
        theme_list = [
          { value: "simple", label: "Simple" },
          { value: "simpleAligned", label: "Simple Aligned" },
          { value: "boxed", label: "Boxed" },
        ];
      }
      wp.apiFetch({
        path: "shopper/v1/get_themes/?layout=" + layout,
      }).then((userThemes) => {
        if (userThemes.length) {
          theme_list = theme_list.concat(userThemes);
        }
        props.setAttributes({
          themesList: theme_list,
        });
      });
    }

    function getCurrentThemeProps(theme_name) {
      let layout = props.attributes.selectedLayout;
      if (props.attributes.selectedLayout == "single") {
        layout += "-" + props.attributes.singleTheme;
      } else if (
        props.attributes.selectedLayout == "mainVertical" ||
        props.attributes.selectedLayout == "horizontal"
      ) {
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
        mainVerticalLayout: props.attributes.mainVerticalLayout,
      };
      return currentThemeProps;
    }

    function saveNewTheme() {
      let input_field = document.getElementById("shopper_theme_name_input");
      let saved_banner = document.getElementById("spcom_theme_saved_banner");
      let duplicate_banner = document.getElementById(
        "spcom_theme_duplicate_banner"
      );
      let theme_name = input_field.value;
      let theme_props = getCurrentThemeProps(theme_name);
      wp.apiFetch({
        path: "shopper/v1/save_theme",
        method: "POST",
        data: JSON.stringify(theme_props),
      }).then((res) => {
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
          } else if (
            props.attributes.selectedLayout == "mainVertical" ||
            props.attributes.selectedLayout == "horizontal"
          ) {
            setVertclHorzntlTheme(base_theme);
          }
          selected_props.selectedTheme = selected_props.theme_name; // sets the current selected user theme
          delete selected_props.theme_name;
          delete selected_props.layout;
          props.setAttributes(selected_props);
          updateLayoutWidths(
            selected_props.themeWidths?.sizeSliderValue || 100,
            base_theme
          );
        } else {
          setIsDefaultTheme(true);
          if (props.attributes.selectedLayout == "single") {
            setSingleTheme(theme);
          } else if (
            props.attributes.selectedLayout == "mainVertical" ||
            props.attributes.selectedLayout == "horizontal"
          ) {
            setVertclHorzntlTheme(theme);
          }
          updateLayoutWidths(
            props.attributes.themeWidths?.sizeSliderValue || 100,
            theme
          );
          setGlobalProps();
        }
      }
    }

    function setIsDefaultTheme(val) {
      if (val == true) {
        setStartObservation(false);
      }
      props.setAttributes({
        isDefaultTheme: val,
      });
    }

    function updateCurrentTheme(theme) {
      let updated_banner = document.getElementById(
        "spcom_theme_updated_banner"
      );
      let theme_props = getCurrentThemeProps(theme);
      wp.apiFetch({
        path: "shopper/v1/update_theme",
        method: "POST",
        data: JSON.stringify(theme_props),
      }).then((res) => {
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
      let deleted_banner = document.getElementById(
        "spcom_theme_deleted_banner"
      );
      wp.apiFetch({
        path: "shopper/v1/delete_theme/?theme_name=" + theme,
        method: "POST",
      }).then((res) => {
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
        path: "shopper/v1/items",
      }).then((allCollPdts) => {
        props.setAttributes({
          allProducts: allCollPdts[0],
          allCollections: allCollPdts[1],
          isFreeTier: allCollPdts[2] > 0 ? true : false,
          remainingCollCount: allCollPdts[3],
          remainingProdCount: allCollPdts[4],
          affRdrctnSlug: allCollPdts[5],
          enableReferralLink: allCollPdts[6] > 0 ? true : false,
        });
        setTopZindex();
      });
    }

    function doesPostBodyContainClass(className) {
      const postContent = document.querySelector(
        ".edit-post-visual-editor"
      ).innerHTML;
      const containsClass = postContent.includes(className);
      return containsClass;
    }

    function checkReferralLinkExists() {
      const referralLinkInPost = doesPostBodyContainClass(
        "shopper_referral_container"
      );
      if (referralLinkInPost) {
        props.setAttributes({
          doesReferralLinkExist: true,
        });
      }
    }

    function resetProdSelection() {
      props.setAttributes({
        selectedProduct: null,
        selectedCollection: null,
        filteredProducts: null,
        filteredCollections: null,
      });
    }

    function resetLayoutSelection() {
      resetProdSelection();
      props.setAttributes({
        selectedLayout: null,
      });
    }

    function updateSelectedLayout(layout) {
      if (layout == "mainVertical" || layout == "horizontal") {
        props.setAttributes({
          selectedLayout: layout,
          priceToggle: false,
          collAlignment: "0 auto",
          bannerPosition: layout == "mainVertical" ? "row" : "row-reverse",
          showProducts: true,
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
          priceToggle: false,
        });
        if (layout == "single") {
          setButtonLayout("button4");
          setSingleBorderColor("#ffffff");
          setSingleBorderRadius(10);
          setButtonHeight(44);
          setSingleTheme("simple");
          props.setAttributes({
            showProducts: true,
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
        saveThemeToggle: false,
      });
    }

    function setTopZindex() {
      setShowSelctnPopup(true);
      var top_element = document.getElementsByClassName(
        "interface-interface-skeleton__body"
      )[0];
      var sidebar_element = document.getElementsByClassName(
        "interface-interface-skeleton__sidebar"
      )[0];
      var header_element = document.getElementsByClassName(
        "interface-interface-skeleton__header"
      )[0];
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
      var top_element = document.getElementsByClassName(
        "interface-interface-skeleton__body"
      )[0];
      var sidebar_element = document.getElementsByClassName(
        "interface-interface-skeleton__sidebar"
      )[0];
      var header_element = document.getElementsByClassName(
        "interface-interface-skeleton__header"
      )[0];
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
        showProducts: !props.attributes.showProducts,
      });
    }

    function toggleCollectionDisplay() {
      props.setAttributes({
        showCollections: !props.attributes.showCollections,
      });
    }

    function searchproduct(event) {
      props.setAttributes({ searchText: event.target.value });
      let searchurl = "shopper/v1/search/?searchtext=" + event.target.value;
      wp.apiFetch({
        path: searchurl,
      }).then((filteredcollPdts) => {
        props.setAttributes({
          filteredProducts: filteredcollPdts[0],
          filteredCollections: filteredcollPdts[1],
        });
      });
    }

    function updateSelectedProduct(e, prod) {
      var buttonTextVal =
        props.attributes.selectedLayout == "button"
          ? prod["product_title"]
          : "Buy Now";
      if (
        props.attributes.selectedLayout == "mainVertical" ||
        props.attributes.selectedLayout == "horizontal"
      ) {
        // manage multiple products addition/removal of vertical and horizontal layouts
        addMultipleProducts(prod);
      } else {
        props.setAttributes({
          selectedProduct: prod,
          selectedCollection: null,
          buttonText: buttonTextVal,
          selectedProductOrCollnAffl:
            props.attributes.linkCloakingSlugType == "name"
              ? prod.pdt_name_slug
              : prod.pdt_slug,
        });
      }
    }

    function addMultipleProducts(prod) {
      setValueList(() => {
        let currentList = props.attributes.multiProductsSelected;
        const setProductDefaults = (pdt) => {
          pdt.productProps = {
            bannerToggle: true,
            bannerPosition:
              props.attributes.selectedLayout == "mainVertical"
                ? "row"
                : "row-reverse",
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
            buttonHeight: globalData?.buttonHeight
              ? globalData?.buttonHeight
              : props.attributes.selectedLayout == "mainVertical"
              ? 44
              : 36,
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
            buttonSponsoredToggle: true,
          };
          return pdt;
        };
        if (!replaceOneSingleProd) {
          // check if product is already added
          let existingProd = currentList?.filter(
            (product) => product.id == prod.id
          );
          if (existingProd?.length <= 0 || currentList.length <= 0) {
            // add the selected product
            prod = setProductDefaults(prod);

            currentList = [...currentList, prod];
          } else {
            // keep all products except the one to remove
            currentList = currentList.filter(
              (product) => product.id !== prod.id
            );
          }
          updateMultiProdList(currentList);
        } else {
          // for replacing single products individually
          prod = setProductDefaults(prod);
          let selected_prod = props.attributes.selectedMultiProd;
          let multi_pdts = props.attributes.multiProductsSelected;
          const selected_prod_index = multi_pdts?.findIndex(
            (obj) => obj?.id === selected_prod?.id
          );
          multi_pdts[selected_prod_index] = prod;
          currentList = multi_pdts;
          updateMultiProdList(currentList, "replace", prod);
        }
        return currentList;
      });
    }

    function updateMultiProdList(
      newList,
      type = "add",
      replacementprod = null
    ) {
      let multiProdList = [{ value: -1, label: "All Products" }];
      let multiProductsListOrder = [];
      let index = 0;
      let pdts_with_dscrptn = 0;
      newList?.map((pdt) => {
        multiProdList = [
          ...multiProdList,
          { value: pdt.id, label: pdt.product_title },
        ];
        multiProductsListOrder = [
          ...multiProductsListOrder,
          { value: index, label: index + 1 },
        ];
        if (pdt.product_description?.length) pdts_with_dscrptn += 1;
        index += 1;
      });
      let selectedProd = props.attributes.selectedMultiProd;
      if (type == "replace") {
        selectedProd = replacementprod;
      } else if (
        type == "delete" ||
        !selectedProd ||
        newList?.findIndex((obj) => obj?.id === selectedProd?.id) == -1
      ) {
        selectedProd = newList ? newList[0] : null;
      }
      props.setAttributes({
        multiProductsSelected: newList,
        multiProductsList: multiProdList,
        multiProductsListOrder: multiProductsListOrder,
        selectedMultiProd: type == "add" ? null : selectedProd, //by default all products will be selected
        prodsWithDescrptn: pdts_with_dscrptn > 0 ? true : false,
      });
    }

    function updateSelectedMultiProd(pdt_id) {
      let existingProd = props.attributes.multiProductsSelected?.filter(
        (product) => product.id == pdt_id
      );
      existingProd = existingProd.length ? existingProd[0] : null;
      props.setAttributes({
        selectedMultiProd: existingProd,
      });
    }

    function changeProdPosition(position) {
      let selected_prod = props.attributes.selectedMultiProd;
      let multi_pdts = props.attributes.multiProductsSelected;
      if (selected_prod && multi_pdts.length > 0) {
        switch (position) {
          case "delete":
            let updatedList = props.attributes.multiProductsSelected?.filter(
              (product) => product.id !== selected_prod.id
            );
            updateMultiProdList(updatedList, "delete"); // will be cononsidered duplicate so gets deleted
            break;
        }
      }
    }
    function updateProdPositionWithDropdown(position) {
      let selected_prod = props.attributes.selectedMultiProd;
      let multi_pdts = props.attributes.multiProductsSelected;
      if (selected_prod && multi_pdts.length > 0) {
        const selected_prod_index = multi_pdts?.findIndex(
          (obj) => obj?.id === selected_prod?.id
        );
        const swapElements = (pdt_lst, indx1, indx2) => {
          if (indx1 != indx2) {
            [pdt_lst[indx1], pdt_lst[indx2]] = [pdt_lst[indx2], pdt_lst[indx1]];
          }
          return pdt_lst;
        };
        let updatedList = swapElements(
          multi_pdts,
          selected_prod_index,
          position
        );
        updateMultiProdList(updatedList);
      }
    }

    function updateIndividualProdProps(prod_id, key, val) {
      let selectedPdtList = JSON.parse(
        JSON.stringify(props.attributes.multiProductsSelected)
      );
      if (prod_id == "all") {
        selectedPdtList?.map((pdt) => {
          pdt.productProps[key] = val;
        });
        props.setAttributes({
          multiProductsSelected: selectedPdtList,
        });
      } else if (prod_id >= 0) {
        let existingProd = selectedPdtList?.filter(
          (product) => product.id == prod_id
        );
        const existingProdIndex = selectedPdtList?.findIndex(
          (obj) => obj?.id === prod_id
        );
        if (existingProd.length > 0 && existingProdIndex != -1) {
          existingProd[0].productProps[key] = val;
          selectedPdtList[existingProdIndex] = existingProd[0];
          props.setAttributes({
            multiProductsSelected: selectedPdtList,
            selectedMultiProd: existingProd[0],
          });
        }
      }
    }

    function updateSelectedCollection(e, colln) {
      let searchurl =
        "shopper/v1/collectionproducts/?collctn_id=" + colln["collection_id"];
      wp.apiFetch({
        path: searchurl,
      }).then((collPdts) => {
        props.setAttributes({
          selectedCollection: colln,
          selectedProduct: null,
          buttonText:
            props.attributes.selectedLayout != "single"
              ? colln["collection_title"]
              : "Buy Now",
          selectedProductOrCollnAffl:
            props.attributes.linkCloakingSlugType == "name"
              ? colln.colln_name_slug
              : colln.colln_slug,
          selectedCollectionProducts: collPdts,
        });
      });
    }
    function highLightSearch(e) {
      var search_input = document.getElementById("spcom__search_input");
      search_input.style.width = "35%";
    }

    function toggleProductName() {
      props.setAttributes({
        prodNameToggle: !props.attributes.prodNameToggle,
      });
    }
    function toggleCollectionName() {
      props.setAttributes({
        collNameToggle: !props.attributes.collNameToggle,
      });
    }
    function toggleCollCover() {
      props.setAttributes({
        collCoverToggle: !props.attributes.collCoverToggle,
      });
    }
    function setfFontSize(val) {
      var fontVal = 1;
      if (parseInt(val) >= 1) {
        fontVal = val;
      }
      props.setAttributes({
        fontSize: fontVal,
      });
    }
    function setfFontColor(val) {
      props.setAttributes({
        fontColor: val,
      });
    }
    function setBgColor(val) {
      props.setAttributes({
        bgColor: val,
      });
    }
    function setCollBgColor(val) {
      if (val) {
        props.setAttributes({
          collBgColor: val,
        });
      } else {
        props.setAttributes({
          collBgColor: "#ffffff00",
        });
      }
    }
    function setTileWidth(val) {
      props.setAttributes({
        tileWidth: parseInt(val),
      });
    }
    function setCollTileWidth(val) {
      props.setAttributes({
        collTileWidth: parseInt(val),
        collProdSize: parseInt(val),
        fontSize: parseInt((val / 100) * 18),
        collProdFontSize: parseInt((val / 100) * 14),
      });
    }
    function updateLayoutWidths(
      val = 100,
      theme = props.attributes.singleTheme
    ) {
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
            singleOverlapedHeight = parseInt((val / 100) * 575);
            singleOverlapedImgTop = parseInt((val / 100) * 124);
            singleOverlapedTxtTop = parseInt((val / 100) * 255);
            singleOverlapedTxtLeft = parseInt((val / 100) * 275);
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
        case "button3" || "button4":
          btnFontSize = 16;
          break;
        default:
          break;
      }
      props.setAttributes({
        themeWidths: {
          sizeSliderValue: parseInt(val),
          themeContainerWidth: parseInt((val / 100) * themeContainerWidth),
          themePnameSize: parseInt((val / 100) * themePnameSize),
          themePdescSize: parseInt((val / 100) * themePdescSize),
          themeAffdesclrSize: parseInt((val / 100) * 12),
          btnFontSize: parseInt((val / 100) * btnFontSize),
          bannerWidth: parseInt((val / 100) * 14),
          bannerFontSize: parseInt((val / 100) * 14),
          priceFontSize: parseInt((val / 100) * priceFontSize),
          singleOverlapedHeight: singleOverlapedHeight,
          singleOverlapedImgTop: singleOverlapedImgTop,
          singleOverlapedTxtTop: singleOverlapedTxtTop,
          singleOverlapedTxtLeft: singleOverlapedTxtLeft,
        },
        buttonHeight: parseInt((val / 100) * buttonHeight),
      });
      updateIndividualProdProps(
        "all",
        "buttonHeight",
        parseInt((val / 100) * buttonHeight)
      );
    }
    function setBorderRadius(val) {
      props.setAttributes({
        borderRadius: parseInt(val),
      });
    }
    function setSingleBorderColor(val) {
      props.setAttributes({
        singleBorderColor: val,
      });
    }
    function setTilePadding(val) {
      props.setAttributes({
        tilePadding: parseInt(val),
      });
    }
    function setFont(val) {
      props.setAttributes({
        fontFamily: val,
      });
    }
    function setFontStyle(val) {
      props.setAttributes({
        fontStyle: val,
      });
    }
    function setFontWeight(val) {
      props.setAttributes({
        fontWeight: val,
      });
    }
    function setTextDecoration(val) {
      props.setAttributes({
        textDecoration: val,
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
        singleTheme: val, // set base theme
        selectedTheme: val, // value used for showing current theme in case of default theme
        bannerBgColor: bannerColor,
        bgColor: bgColor,
        singleBorderWidth: borderWidth,
        singleBorderRadius: borderRadius,
        singleBorderColor: borderColor,
        fontColor: fontColor,
        affDisclosureColor: affDsclrColor,
        themeWidths: null,
        saveThemeToggle: false,
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
          props.attributes.multiProductsSelected?.map((pdt) => {
            pdt.productProps["priceToggle"] = true;
          });
        } else {
          props.attributes.multiProductsSelected?.map((pdt) => {
            pdt.productProps["priceToggle"] = false;
          });
        }
      }
      props.setAttributes({
        vertclHrzntlTheme: val, // set base theme
        selectedTheme: val, // value used for showing current default theme in case of default theme
        buttonWidth: buttonWidth,
        bannerToggle: bannerToggle,
        priceToggle: priceToggle,
        pdtDescriptionToggle: pdtDescriptionToggle,
        collAlignment: collAlignment,
        singleBorderRadius: borderRadius,
        bgColor: bgColor,
        saveThemeToggle: false,
      });
    }
    function setBannerLayout(val) {
      let flexDirection = val == "rightLayout" ? "row-reverse" : "row";
      let bannerAlignment = "-18px auto auto -18px";
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerPosition",
          flexDirection
        );
      } else {
        props.setAttributes({
          bannerPosition: flexDirection,
          bannerAlignment: bannerAlignment,
        });
        updateIndividualProdProps("all", "bannerPosition", flexDirection);
      }
    }
    function setSingleBorderRadius(val) {
      props.setAttributes({
        singleBorderRadius: parseInt(val),
      });
    }
    function setSingleBorderWidth(val) {
      props.setAttributes({
        singleBorderWidth: parseInt(val),
      });
    }
    function toggleProductBanner() {
      if (isSingleProdSelected()) {
        let bannerToggleVal =
          props.attributes.selectedMultiProd.productProps?.bannerToggle;
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerToggle",
          !bannerToggleVal
        );
      } else {
        props.setAttributes({
          bannerToggle: !props.attributes.bannerToggle,
        });
        updateIndividualProdProps(
          "all",
          "bannerToggle",
          !props.attributes.bannerToggle
        );
        setStartObservation(true);
      }
    }
    function toggleProductPrice() {
      if (isSingleProdSelected()) {
        let newPriceToggle =
          !props.attributes.selectedMultiProd.productProps?.priceToggle;
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "priceToggle",
          newPriceToggle
        );
      } else {
        props.setAttributes({
          priceToggle: !props.attributes.priceToggle,
        });
        updateIndividualProdProps(
          "all",
          "priceToggle",
          !props.attributes.priceToggle
        );
        setStartObservation(true);
      }
    }
    function toggleProductDescription() {
      if (isSingleProdSelected()) {
        let newPdtDescriptionToggle =
          !props.attributes.selectedMultiProd.productProps
            ?.pdtDescriptionToggle;
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "pdtDescriptionToggle",
          newPdtDescriptionToggle
        );
      } else {
        props.setAttributes({
          pdtDescriptionToggle: !props.attributes.pdtDescriptionToggle,
        });
        updateIndividualProdProps(
          "all",
          "pdtDescriptionToggle",
          !props.attributes.pdtDescriptionToggle
        );
        setStartObservation(true);
      }
    }
    function toggleAffDisclr() {
      props.setAttributes({
        affDisclosureToggle: !props.attributes.affDisclosureToggle,
      });
      setStartObservation(true);
    }
    function setBannerText(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerText",
          val
        );
      } else {
        props.setAttributes({
          bannerText: val,
        });
        updateIndividualProdProps("all", "bannerText", val);
      }
    }
    function setPriceText(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "priceText",
          val
        );
      } else {
        props.setAttributes({
          priceText: val,
        });
        updateIndividualProdProps("all", "priceText", val);
      }
    }
    function setAffDisclrText(val) {
      props.setAttributes({
        affDisclosureText: val,
      });
    }
    function setAffDisclrFont(val) {
      props.setAttributes({
        affDisclosureFont: val,
      });
    }
    function setAffDisclrStyle(val) {
      props.setAttributes({
        affDisclosureStyle: val,
      });
    }
    function setAffColor(val) {
      props.setAttributes({
        affDisclosureColor: val,
      });
    }
    function setAffDisclrWeight(val) {
      props.setAttributes({
        affDisclosureWeight: val,
      });
    }
    function setAffDisclrDecoration(val) {
      props.setAttributes({
        affDisclosureDecoration: val,
      });
    }
    function setBannerBgColour(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerBgColor",
          val
        );
      } else {
        props.setAttributes({
          bannerBgColor: val,
        });
        updateIndividualProdProps("all", "bannerBgColor", val);
      }
    }
    function setBannerFontFamily(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerFontFamily",
          val
        );
      } else {
        props.setAttributes({
          bannerFontFamily: val,
        });
        updateIndividualProdProps("all", "bannerFontFamily", val);
      }
    }
    function setBannerFontStyle(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerFontStyle",
          val
        );
      } else {
        props.setAttributes({
          bannerFontStyle: val,
        });
        updateIndividualProdProps("all", "bannerFontStyle", val);
      }
    }
    function setBannerFontWeight(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerFontWeight",
          val
        );
      } else {
        props.setAttributes({
          bannerFontWeight: val,
        });
        updateIndividualProdProps("all", "bannerFontWeight", val);
      }
    }
    function setBannerTextDecoration(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "bannerTextDecoration",
          val
        );
      } else {
        props.setAttributes({
          bannerTextDecoration: val,
        });
        updateIndividualProdProps("all", "bannerTextDecoration", val);
      }
    }
    function setButtonLayout(val) {
      setButtonLayoutProps(val);
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonLayout",
          val
        );
      } else {
        props.setAttributes({
          buttonLayout: val,
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
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonHeight",
          val
        );
      } else {
        props.setAttributes({
          buttonHeight: val,
        });
        updateIndividualProdProps("all", "buttonHeight", val);
      }
    }
    function setButtonWidth(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonWidth",
          val
        );
      } else {
        props.setAttributes({
          buttonWidth: val,
        });
        updateIndividualProdProps("all", "buttonWidth", val);
      }
    }
    function setButtonBordrRadius(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonRadius",
          val
        );
      } else {
        props.setAttributes({
          buttonRadius: val,
        });
        updateIndividualProdProps("all", "buttonRadius", val);
      }
    }
    function setButtonColor(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonColor",
          val
        );
      } else {
        props.setAttributes({
          buttonColor: val,
        });
        updateIndividualProdProps("all", "buttonColor", val);
      }
    }
    function setButtonGradient(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonGradient",
          val
        );
      } else {
        props.setAttributes({
          buttonGradient: val,
        });
        updateIndividualProdProps("all", "buttonGradient", val);
      }
    }
    function setButtonTextColor(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonTextColor",
          val
        );
      } else {
        props.setAttributes({
          buttonTextColor: val,
        });
        updateIndividualProdProps("all", "buttonTextColor", val);
      }
    }
    function setButtonText(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonText",
          val
        );
      } else {
        props.setAttributes({
          buttonText: val,
        });
        updateIndividualProdProps("all", "buttonText", val);
      }
    }
    function toggleButtonNewTab() {
      props.setAttributes({
        buttonNewTabToggle: !props.attributes.buttonNewTabToggle,
      });
    }
    function toggleButtonFollow() {
      props.setAttributes({
        buttonFollowToggle: !props.attributes.buttonFollowToggle,
      });
      // things are working opposite here
      if (props.attributes.buttonFollowToggle) {
        props.setAttributes({
          buttonSponsoredToggle: false,
          relValue: "noopener",
        });
      } else {
        props.setAttributes({
          relValue: "nofollow noopener",
        });
      }
    }
    function toggleButtonSponsored() {
      props.setAttributes({
        buttonSponsoredToggle: !props.attributes.buttonSponsoredToggle,
      });
      // things are working opposite here
      if (!props.attributes.buttonSponsoredToggle) {
        props.setAttributes({
          buttonFollowToggle: true,
          relValue: "nofollow sponsored noopener",
        });
      } else {
        props.setAttributes({
          relValue: "nofollow noopener",
        });
      }
    }
    function setButtonFont(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonTextFont",
          val
        );
      } else {
        props.setAttributes({
          buttonTextFont: val,
        });
        updateIndividualProdProps("all", "buttonTextFont", val);
      }
    }
    function setButtonFontStyle(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonTextStyle",
          val
        );
      } else {
        props.setAttributes({
          buttonTextStyle: val,
        });
        updateIndividualProdProps("all", "buttonTextStyle", val);
      }
    }
    function setButtonFontWeight(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonTextWeight",
          val
        );
      } else {
        props.setAttributes({
          buttonTextWeight: val,
        });
        updateIndividualProdProps("all", "buttonTextWeight", val);
      }
    }
    function setButtonTextDecoration(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "buttonTextDecoration",
          val
        );
      } else {
        props.setAttributes({
          buttonTextDecoration: val,
        });
        updateIndividualProdProps("all", "buttonTextDecoration", val);
      }
    }
    function setAlignment(val) {
      if (isSingleProdSelected()) {
        updateIndividualProdProps(
          props.attributes.selectedMultiProd.id,
          "collAlignment",
          val
        );
      } else {
        props.setAttributes({
          collAlignment: val,
        });
        updateIndividualProdProps("all", "collAlignment", val);
      }
    }
    function setThemeAlignment(val) {
      props.setAttributes({
        themeAlignment: val,
      });
    }
    function setNofPdts(val) {
      var colln_full_width = document.getElementsByClassName(
        "spcom_embedded-collection-product-list"
      )[0];
      if (colln_full_width) {
        //calculate width of one single child element, 12 is the padding
        let child_width = colln_full_width.offsetWidth / parseInt(val) - 12;
        props.setAttributes({
          nofPdts: val,
          collProdSize: child_width,
        });
      }
    }
    function toggleShowOptionList() {
      props.setAttributes({
        showOptionList: !props.attributes.showOptionList,
      });
    }
    function setSortbySwitcher(val) {
      let all_data = [
        props.attributes.allProducts,
        props.attributes.allCollections,
        props.attributes.filteredProducts,
        props.attributes.filteredCollections,
      ];
      if (val == "newest") {
        all_data.map((arr) => {
          if (arr && arr.length) {
            arr.sort((a, b) =>
              a.current_update_time < b.current_update_time ? 1 : -1
            );
          }
        });
      } else {
        all_data.map((arr) => {
          if (arr && arr.length) {
            arr.sort((a, b) =>
              a.current_update_time > b.current_update_time ? 1 : -1
            );
          }
        });
      }
      props.setAttributes({
        sortbySwitcher: val,
      });
    }
    function shopperUpgradePlan() {
      window.open("https://admin.shopper.com/pricing", "_blank");
    }
    function isSingleProdSelected() {
      if (
        (props.attributes.selectedLayout == "mainVertical" ||
          props.attributes.selectedLayout == "horizontal") &&
        props.attributes.selectedMultiProd
      ) {
        return true;
      }
      return false;
    }
    const banner_layout_allignmet_list = [
      { value: "leftLayout", label: "Align Left" },
      { value: "rightLayout", label: "Align Right" },
    ];
    const button_layout_list = [
      { value: "button1", label: "Simple" },
      { value: "button2", label: "3D" },
      { value: "button3", label: "Outline" },
      { value: "button4", label: "Fill" },
    ];
    const font_list = [
      { value: "", label: "Default" },
      { value: "Arial", label: "Arial" },
      { value: "Verdana", label: "Verdana" },
      { value: "Courier New", label: "Courier New" },
      { value: "Brush Script MT", label: "Brush Script MT" },
    ];
    const font_style = [
      { value: "unset", label: "Normal" },
      { value: "italic", label: "Italic" },
      { value: "oblique", label: "Oblique" },
    ];
    const font_weight = [
      { value: "lighter", label: "Lighter" },
      { value: "normal", label: "Normal" },
      { value: "bold", label: "Bold" },
    ];
    const text_decoration = [
      { value: "none", label: "Normal" },
      { value: "underline", label: "Underline" },
      { value: "overline", label: "Overline" },
      { value: "line-through", label: "Line Through" },
    ];
    const button_heights = {
      S: 36,
      M: 44,
      L: 55,
      XL: 65,
    };
    const button_widths = {
      Small: 33,
      Medium: 66,
      Full: 100,
    };
    const alignment_class_list = {
      Left: "0 auto 0 0",
      Center: "0 auto",
      Right: "0 0 0 auto",
    };
    return (
      <>
        {(props.attributes.selectedProduct ||
          props.attributes.multiProductsSelected.length ||
          props.attributes.selectedCollection) && (
          <>
            <BlockControls>
              <div
                onClick={() => {
                  setReplaceOneSingleProd(false);
                  getAllCollnProdts();
                }}
                className="spcom_replace_product spcom__font"
              >
                <ToolbarGroup>
                  <ToolbarButton>
                    Replace{" "}
                    {props.attributes.selectedProduct ||
                    props.attributes.multiProductsSelected
                      ? "Product"
                      : "Collection"}
                  </ToolbarButton>
                </ToolbarGroup>
              </div>
            </BlockControls>
            <InspectorControls>
              <Panel>
                {(props.attributes.selectedLayout == "single" ||
                  props.attributes.selectedLayout == "mainVertical" ||
                  props.attributes.selectedLayout == "horizontal") && (
                  <>
                    <PanelBody
                      initialOpen={false}
                      className="shopper_com_block_settings"
                      title="Themes & Layouts"
                    >
                      <SelectControl
                        label="Theme"
                        value={props.attributes.selectedTheme}
                        options={props.attributes.themesList}
                        onChange={(theme) => setUserTheme(theme)}
                        __nextHasNoMarginBottom
                      />
                      {props.attributes.isDefaultTheme &&
                        props.attributes.saveThemeToggle && (
                          <div className="shopper_save_theme_container">
                            <label className="spcom_panel_sub_settings_label">
                              Save as a New Theme
                            </label>
                            <div className="shopper_save_theme_presets">
                              <input
                                className="components-text-control__input"
                                id="shopper_theme_name_input"
                                maxlength="25"
                                placeholder="New Theme"
                              ></input>
                              <Button
                                onClick={() => {
                                  saveNewTheme();
                                }}
                                variant="secondary"
                              >
                                Save
                              </Button>
                            </div>
                            <div
                              className="spcom_theme_saved_banner"
                              id="spcom_theme_saved_banner"
                            >
                              Theme Saved
                            </div>
                            <div
                              className="spcom_theme_duplicate_banner"
                              id="spcom_theme_duplicate_banner"
                            >
                              A theme with the same name exists
                            </div>
                          </div>
                        )}
                      {!props.attributes.isDefaultTheme && (
                        <div className="spcom_update_remove_theme">
                          <div className="shopper_com_custom_button_group">
                            <Button
                              onClick={() => {
                                updateCurrentTheme(
                                  props.attributes.selectedTheme
                                );
                              }}
                              variant="secondary"
                            >
                              Save Changes
                            </Button>
                            <Button
                              onClick={() => {
                                deleteTheme(props.attributes.selectedTheme);
                              }}
                              variant="secondary"
                            >
                              Remove Theme
                            </Button>
                          </div>
                          <div
                            className="spcom_theme_updated_banner"
                            id="spcom_theme_updated_banner"
                          >
                            Theme Updated
                          </div>
                          <div
                            className="spcom_theme_deleted_banner"
                            id="spcom_theme_deleted_banner"
                          >
                            Theme Deleted
                          </div>
                        </div>
                      )}
                      <div className="spcom_button_group">
                        <label className="spcom_panel_sub_settings_label">
                          Alignment
                        </label>
                        <ButtonGroup label="Alignment">
                          {Object.keys(alignment_class_list).map(
                            (alignment) => (
                              <Button
                                variant={
                                  alignment_class_list[alignment] ==
                                  props.attributes.themeAlignment
                                    ? "primary"
                                    : ""
                                }
                                onClick={() =>
                                  setThemeAlignment(
                                    alignment_class_list[alignment]
                                  )
                                }
                              >
                                {alignment}
                              </Button>
                            )
                          )}
                        </ButtonGroup>
                      </div>
                      <div className="shopper_stngs_group_dropdowns">
                        <SelectControl
                          label="Font family"
                          value={props.attributes.fontFamily}
                          options={font_list}
                          onChange={(newFont) => setFont(newFont)}
                          __nextHasNoMarginBottom
                        />
                        <SelectControl
                          label="Font Style"
                          value={props.attributes.fontStyle}
                          options={font_style}
                          onChange={(newFontStyle) =>
                            setFontStyle(newFontStyle)
                          }
                          __nextHasNoMarginBottom
                        />
                      </div>
                      <div className="shopper_stngs_group_dropdowns">
                        <SelectControl
                          label="Font Weight"
                          value={props.attributes.fontWeight}
                          options={font_weight}
                          onChange={(newFontWeight) =>
                            setFontWeight(newFontWeight)
                          }
                          __nextHasNoMarginBottom
                        />
                        <SelectControl
                          label="Text Decoration"
                          value={props.attributes.textDecoration}
                          options={text_decoration}
                          onChange={(newFont) => setTextDecoration(newFont)}
                          __nextHasNoMarginBottom
                        />
                      </div>
                      <div className="spcom_colrSelectionTab">
                        <TextControl
                          label="Text Color"
                          value={props.attributes.fontColor}
                          onChange={(value) => setfFontColor(value)}
                        />
                        <div className="spcom_clrPaletteSmall">
                          <ColorPalette
                            label="Color Picker"
                            value={props.attributes.fontColor}
                            onChange={(color) => setfFontColor(color)}
                          />
                        </div>
                      </div>
                      <div className="spcom_colrSelectionTab">
                        <TextControl
                          label="Background Color"
                          value={props.attributes.bgColor}
                          onChange={(value) => setBgColor(value)}
                        />
                        <div className="spcom_clrPaletteSmall">
                          <ColorPalette
                            label="Color Picker"
                            value={props.attributes.bgColor}
                            onChange={(color) => setBgColor(color)}
                          />
                        </div>
                      </div>
                      {(props.attributes.selectedLayout == "mainVertical" ||
                        props.attributes.selectedLayout == "horizontal" ||
                        props.attributes.selectedLayout == "single") && (
                        <>
                          <div className="spcom_image_size_control">
                            <RangeControl
                              label="Size (%)"
                              value={
                                props.attributes.themeWidths?.sizeSliderValue ||
                                100
                              }
                              onChange={(value) => updateLayoutWidths(value)}
                              min={
                                props.attributes.selectedLayout == "horizontal"
                                  ? 30
                                  : 50
                              }
                              max={100}
                            />
                            <div className="spcom_button_group">
                              <ButtonGroup>
                                {Object.keys(button_widths).map((b) => (
                                  <Button
                                    variant={
                                      button_widths[b] ==
                                      props.attributes.themeWidths
                                        ?.themeContainerWidth
                                        ? "primary"
                                        : ""
                                    }
                                    onClick={() =>
                                      updateLayoutWidths(button_widths[b])
                                    }
                                  >
                                    {b}
                                  </Button>
                                ))}
                              </ButtonGroup>
                            </div>
                          </div>
                          <RangeControl
                            label="Radius (px)"
                            value={props.attributes.singleBorderRadius}
                            onChange={(value) => setSingleBorderRadius(value)}
                            min={0}
                            max={
                              props.attributes.selectedLayout !=
                                "mainVertical" ||
                              props.attributes.selectedLayout != "horizontal"
                                ? 50
                                : 100
                            }
                          />
                          {props.attributes.selectedLayout != "mainVertical" &&
                            props.attributes.selectedLayout != "horizontal" &&
                            props.attributes.singleTheme != "vertical" &&
                            props.attributes.singleTheme !=
                              "verticalOverlaped" && (
                              <>
                                <RangeControl
                                  label="Padding"
                                  value={props.attributes.singleBorderWidth}
                                  onChange={(value) =>
                                    setSingleBorderWidth(value)
                                  }
                                  min={0}
                                  max={100}
                                />
                                <div className="spcom_colrSelectionTab">
                                  <TextControl
                                    label="Padding Color"
                                    value={props.attributes.singleBorderColor}
                                    onChange={(value) =>
                                      setSingleBorderColor(value)
                                    }
                                  />
                                  <div className="spcom_clrPaletteSmall">
                                    <ColorPalette
                                      label="Color Picker"
                                      value={props.attributes.singleBorderColor}
                                      onChange={(color) =>
                                        setSingleBorderColor(color)
                                      }
                                    />
                                  </div>
                                </div>
                              </>
                            )}
                        </>
                      )}
                    </PanelBody>
                    {(props.attributes.selectedLayout == "mainVertical" ||
                      props.attributes.selectedLayout == "horizontal") && (
                      <PanelBody
                        initialOpen={false}
                        className="shopper_com_block_settings"
                        title="Product Settings"
                      >
                        <SelectControl
                          label="Product"
                          value={
                            props.attributes.selectedMultiProd
                              ? props.attributes.selectedMultiProd.id
                              : -1
                          }
                          options={props.attributes.multiProductsList}
                          onChange={(product) =>
                            updateSelectedMultiProd(product)
                          }
                          __nextHasNoMarginBottom
                        />
                        <>
                          <div className="shopper_com_multi_pdt_stngs_container">
                            {props.attributes.selectedMultiProd && (
                              <div>
                                <SelectControl
                                  label="Change listing order"
                                  value={props.attributes.multiProductsSelected?.findIndex(
                                    (obj) =>
                                      obj?.id ===
                                      props.attributes.selectedMultiProd?.id
                                  )}
                                  options={
                                    props.attributes.multiProductsListOrder
                                  }
                                  onChange={(position) =>
                                    updateProdPositionWithDropdown(position)
                                  }
                                  __nextHasNoMarginBottom
                                />
                              </div>
                            )}
                            {props.attributes.prodsWithDescrptn && (
                              <ToggleControl
                                label="Show / Hide Product Description"
                                className="shopper_com_show_hide_pdt_dscrptn"
                                checked={
                                  isSingleProdSelected()
                                    ? props.attributes.selectedMultiProd
                                        ?.productProps?.pdtDescriptionToggle
                                    : props.attributes.pdtDescriptionToggle
                                }
                                onChange={toggleProductDescription}
                                __nextHasNoMarginBottom
                              />
                            )}
                            {props.attributes.selectedMultiProd && (
                              <div className="shopper_com_custom_button_group">
                                <Button
                                  onClick={() => {
                                    setReplaceOneSingleProd(true);
                                    getAllCollnProdts();
                                  }}
                                  variant="secondary"
                                >
                                  Replace Product
                                </Button>
                                <Button
                                  onClick={() => {
                                    changeProdPosition("delete");
                                  }}
                                  variant="secondary"
                                >
                                  Delete Product
                                </Button>
                              </div>
                            )}
                            {!props.attributes.selectedMultiProd && (
                              <div className="shopper_com_custom_button_group">
                                <Button
                                  onClick={() => {
                                    setReplaceOneSingleProd(false);
                                    getAllCollnProdts();
                                  }}
                                  variant="secondary"
                                >
                                  Replace Products
                                </Button>
                              </div>
                            )}
                          </div>
                        </>
                      </PanelBody>
                    )}
                    {props.attributes.singleTheme != "vertical" &&
                      props.attributes.singleTheme != "verticalOverlaped" && (
                        <>
                          <PanelBody
                            initialOpen={false}
                            className="shopper_com_block_settings_component"
                            title="Badge Settings"
                          >
                            {(props.attributes.selectedLayout ==
                              "mainVertical" ||
                              props.attributes.selectedLayout ==
                                "horizontal") && (
                              <SelectControl
                                label="Product"
                                value={props.attributes.selectedMultiProd?.id}
                                options={props.attributes.multiProductsList}
                                onChange={(product) =>
                                  updateSelectedMultiProd(product)
                                }
                                __nextHasNoMarginBottom
                              />
                            )}
                            <ToggleControl
                              label="Show / Hide Badge"
                              checked={
                                isSingleProdSelected()
                                  ? props.attributes.selectedMultiProd
                                      ?.productProps?.bannerToggle
                                  : props.attributes.bannerToggle
                              }
                              onChange={toggleProductBanner}
                            />
                            {(isSingleProdSelected()
                              ? props.attributes.selectedMultiProd?.productProps
                                  ?.bannerToggle
                              : props.attributes.bannerToggle) && (
                              <>
                                <SelectControl
                                  label="Layout"
                                  value={
                                    isSingleProdSelected()
                                      ? props.attributes.selectedMultiProd
                                          .productProps?.bannerPosition == "row"
                                        ? "leftLayout"
                                        : "rightLayout"
                                      : props.attributes.bannerPosition == "row"
                                      ? "leftLayout"
                                      : "rightLayout"
                                  }
                                  options={banner_layout_allignmet_list}
                                  onChange={(newBannerAllignnmet) =>
                                    setBannerLayout(newBannerAllignnmet)
                                  }
                                  __nextHasNoMarginBottom
                                />
                                <TextControl
                                  label="Badge Text"
                                  value={
                                    isSingleProdSelected()
                                      ? props.attributes.selectedMultiProd
                                          .productProps?.bannerText
                                      : props.attributes.bannerText
                                  }
                                  onChange={(value) => setBannerText(value)}
                                />
                                <div className="spcom_colrSelectionTab">
                                  <TextControl
                                    label="Badge Background Color"
                                    value={
                                      isSingleProdSelected()
                                        ? props.attributes.selectedMultiProd
                                            .productProps?.bannerBgColor
                                        : props.attributes.bannerBgColor
                                    }
                                    onChange={(value) =>
                                      setBannerBgColour(value)
                                    }
                                  />
                                  <div className="spcom_clrPaletteSmall">
                                    <ColorPalette
                                      label="Color Picker"
                                      value={
                                        isSingleProdSelected()
                                          ? props.attributes.selectedMultiProd
                                              .productProps?.bannerBgColor
                                          : props.attributes.bannerBgColor
                                      }
                                      onChange={(color) =>
                                        setBannerBgColour(color)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="shopper_stngs_group_dropdowns">
                                  <SelectControl
                                    label="Badge Text Font"
                                    value={
                                      isSingleProdSelected()
                                        ? props.attributes.selectedMultiProd
                                            .productProps?.bannerFontFamily
                                        : props.attributes.bannerFontFamily
                                    }
                                    options={font_list}
                                    onChange={(newFont) =>
                                      setBannerFontFamily(newFont)
                                    }
                                    __nextHasNoMarginBottom
                                  />
                                  <SelectControl
                                    label="Font Style"
                                    value={
                                      isSingleProdSelected()
                                        ? props.attributes.selectedMultiProd
                                            .productProps?.bannerFontStyle
                                        : props.attributes.bannerFontStyle
                                    }
                                    options={font_style}
                                    onChange={(newFontStyle) =>
                                      setBannerFontStyle(newFontStyle)
                                    }
                                    __nextHasNoMarginBottom
                                  />
                                </div>
                                <div className="shopper_stngs_group_dropdowns">
                                  <SelectControl
                                    label="Font Weight"
                                    value={
                                      isSingleProdSelected()
                                        ? props.attributes.selectedMultiProd
                                            .productProps?.bannerFontWeight
                                        : props.attributes.bannerFontWeight
                                    }
                                    options={font_weight}
                                    onChange={(newFontWeight) =>
                                      setBannerFontWeight(newFontWeight)
                                    }
                                    __nextHasNoMarginBottom
                                  />
                                  <SelectControl
                                    label="Text Decoration"
                                    value={
                                      isSingleProdSelected()
                                        ? props.attributes.selectedMultiProd
                                            .productProps?.bannerTextDecoration
                                        : props.attributes.bannerTextDecoration
                                    }
                                    options={text_decoration}
                                    onChange={(decoration) =>
                                      setBannerTextDecoration(decoration)
                                    }
                                    __nextHasNoMarginBottom
                                  />
                                </div>
                              </>
                            )}
                          </PanelBody>
                          <PanelBody
                            initialOpen={false}
                            className="shopper_com_block_settings_component"
                            title="Price Settings"
                          >
                            {(props.attributes.selectedLayout ==
                              "mainVertical" ||
                              props.attributes.selectedLayout ==
                                "horizontal") && (
                              <SelectControl
                                label="Product"
                                value={props.attributes.selectedMultiProd?.id}
                                options={props.attributes.multiProductsList}
                                onChange={(product) =>
                                  updateSelectedMultiProd(product)
                                }
                                __nextHasNoMarginBottom
                              />
                            )}
                            <ToggleControl
                              label="Show / Hide Product Price"
                              checked={
                                isSingleProdSelected()
                                  ? props.attributes.selectedMultiProd
                                      ?.productProps?.priceToggle
                                  : props.attributes.priceToggle
                              }
                              onChange={toggleProductPrice}
                            />
                            {(isSingleProdSelected()
                              ? props.attributes.selectedMultiProd?.productProps
                                  ?.priceToggle
                              : props.attributes.priceToggle) && (
                              <TextControl
                                label="Product Price"
                                value={
                                  isSingleProdSelected()
                                    ? props.attributes.selectedMultiProd
                                        .productProps?.priceText
                                    : props.attributes.priceText
                                }
                                onChange={(value) => setPriceText(value)}
                              />
                            )}
                          </PanelBody>
                        </>
                      )}
                  </>
                )}
                {/* Button Settings - common for single and button*/}
                {(props.attributes.selectedLayout == "button" ||
                  props.attributes.selectedLayout == "single" ||
                  props.attributes.selectedLayout == "mainVertical" ||
                  props.attributes.selectedLayout == "horizontal") && (
                  <>
                    <PanelBody
                      initialOpen={false}
                      className="shopper_com_block_settings"
                      title="Button Settings"
                    >
                      {(props.attributes.selectedLayout == "mainVertical" ||
                        props.attributes.selectedLayout == "horizontal") && (
                        <SelectControl
                          label="Product"
                          value={props.attributes.selectedMultiProd?.id}
                          options={props.attributes.multiProductsList}
                          onChange={(product) =>
                            updateSelectedMultiProd(product)
                          }
                          __nextHasNoMarginBottom
                        />
                      )}
                      <SelectControl
                        label="Layout"
                        value={
                          isSingleProdSelected()
                            ? props.attributes.selectedMultiProd?.productProps
                                ?.buttonLayout
                            : props.attributes.buttonLayout
                        }
                        options={button_layout_list}
                        onChange={(newButtonLayout) =>
                          setButtonLayout(newButtonLayout)
                        }
                        __nextHasNoMarginBottom
                      />
                      <label className="spcom_panel_sub_settings_label">
                        Button Size
                      </label>
                      <div className="spcom_button_group">
                        <ButtonGroup aria-label={"Button Size"}>
                          {Object.keys(button_heights).map((b) => (
                            <Button
                              variant={
                                button_heights[b] ===
                                (isSingleProdSelected()
                                  ? props.attributes.selectedMultiProd
                                      .productProps?.buttonHeight
                                  : props.attributes.buttonHeight)
                                  ? "primary"
                                  : ""
                              }
                              onClick={() => setButtonHeight(button_heights[b])}
                            >
                              {b}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </div>
                      <label className="spcom_panel_sub_settings_label">
                        Button Width
                      </label>
                      <div className="spcom_button_group">
                        <ButtonGroup aria-label={"Button Width"}>
                          {Object.keys(button_widths).map((b) => (
                            <Button
                              variant={
                                button_widths[b] ===
                                (isSingleProdSelected()
                                  ? props.attributes.selectedMultiProd
                                      .productProps?.buttonWidth
                                  : props.attributes.buttonWidth)
                                  ? "primary"
                                  : ""
                              }
                              onClick={() => setButtonWidth(button_widths[b])}
                            >
                              {b}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </div>
                      <div className="spcom_button_group">
                        <label className="spcom_panel_sub_settings_label">
                          Alignment
                        </label>
                        <ButtonGroup label="Alignment">
                          {Object.keys(alignment_class_list).map((b) => (
                            <Button
                              variant={
                                alignment_class_list[b] ==
                                (isSingleProdSelected()
                                  ? props.attributes.selectedMultiProd
                                      .productProps?.collAlignment
                                  : props.attributes.collAlignment)
                                  ? "primary"
                                  : ""
                              }
                              onClick={() =>
                                setAlignment(alignment_class_list[b])
                              }
                            >
                              {b}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </div>
                      <TextControl
                        label="Button Text"
                        value={
                          isSingleProdSelected()
                            ? props.attributes.selectedMultiProd.productProps
                                ?.buttonText
                            : props.attributes.buttonText
                        }
                        onChange={(value) => setButtonText(value)}
                      />
                      <div className="spcom_colrSelectionTab">
                        <TextControl
                          label="Text Color"
                          value={
                            isSingleProdSelected()
                              ? props.attributes.selectedMultiProd.productProps
                                  ?.buttonTextColor
                              : props.attributes.buttonTextColor
                          }
                          onChange={(value) => setButtonTextColor(value)}
                        />
                        <div className="spcom_clrPaletteSmall">
                          <ColorPalette
                            label="Color Picker"
                            value={
                              isSingleProdSelected()
                                ? props.attributes.selectedMultiProd
                                    .productProps?.buttonTextColor
                                : props.attributes.buttonTextColor
                            }
                            onChange={(color) => setButtonTextColor(color)}
                          />
                        </div>
                      </div>
                      <SelectControl
                        label="Button Text Font"
                        value={
                          isSingleProdSelected()
                            ? props.attributes.selectedMultiProd.productProps
                                ?.buttonTextFont
                            : props.attributes.buttonTextFont
                        }
                        options={font_list}
                        onChange={(newFont) => setButtonFont(newFont)}
                        __nextHasNoMarginBottom
                      />
                      <SelectControl
                        label="Font Style"
                        value={
                          isSingleProdSelected()
                            ? props.attributes.selectedMultiProd.productProps
                                ?.buttonTextStyle
                            : props.attributes.buttonTextStyle
                        }
                        options={font_style}
                        onChange={(newFontStyle) =>
                          setButtonFontStyle(newFontStyle)
                        }
                        __nextHasNoMarginBottom
                      />
                      <SelectControl
                        label="Font Weight"
                        value={
                          isSingleProdSelected()
                            ? props.attributes.selectedMultiProd.productProps
                                ?.buttonTextWeight
                            : props.attributes.buttonTextWeight
                        }
                        options={font_weight}
                        onChange={(newFontWeight) =>
                          setButtonFontWeight(newFontWeight)
                        }
                        __nextHasNoMarginBottom
                      />
                      <SelectControl
                        label="Text Decoration"
                        value={
                          isSingleProdSelected()
                            ? props.attributes.selectedMultiProd.productProps
                                ?.buttonTextDecoration
                            : props.attributes.buttonTextDecoration
                        }
                        options={text_decoration}
                        onChange={(decoration) =>
                          setButtonTextDecoration(decoration)
                        }
                        __nextHasNoMarginBottom
                      />
                      <RangeControl
                        label="Button Radius"
                        value={
                          isSingleProdSelected()
                            ? props.attributes.selectedMultiProd.productProps
                                ?.buttonRadius
                            : props.attributes.buttonRadius
                        }
                        onChange={(value) => setButtonBordrRadius(value)}
                        min={0}
                        max={35}
                      />
                      <div className="spcom_colrSelectionTab">
                        <TextControl
                          label="Button Background Colour"
                          value={
                            isSingleProdSelected()
                              ? props.attributes.selectedMultiProd.productProps
                                  ?.buttonColor
                              : props.attributes.buttonColor
                          }
                          onChange={(value) => setButtonColor(value)}
                        />
                        <div className="spcom_clrPaletteSmall">
                          <ColorPalette
                            label="Color Picker"
                            value={
                              isSingleProdSelected()
                                ? props.attributes.selectedMultiProd
                                    .productProps?.buttonColor
                                : props.attributes.buttonColor
                            }
                            onChange={(color) => setButtonColor(color)}
                          />
                        </div>
                      </div>
                      {(isSingleProdSelected()
                        ? props.attributes.selectedMultiProd.productProps
                            ?.buttonLayout == "button2"
                        : props.attributes.buttonLayout == "button2") && (
                        <div className="spcom_colrSelectionTab">
                          <TextControl
                            label="Button Gradient Colour"
                            value={
                              isSingleProdSelected()
                                ? props.attributes.selectedMultiProd
                                    .productProps?.buttonGradient
                                : props.attributes.buttonGradient
                            }
                            onChange={(value) => setButtonGradient(value)}
                          />
                          <div className="spcom_clrPaletteSmall">
                            <ColorPalette
                              label="Color Picker"
                              value={
                                isSingleProdSelected()
                                  ? props.attributes.selectedMultiProd
                                      .productProps?.buttonGradient
                                  : props.attributes.buttonGradient
                              }
                              onChange={(color) => setButtonGradient(color)}
                            />
                          </div>
                        </div>
                      )}
                    </PanelBody>
                    <PanelBody
                      initialOpen={false}
                      className="shopper_com_block_settings_component"
                      title="Link Settings"
                    >
                      <ToggleControl
                        label="Open In New Tab / Window"
                        checked={props.attributes.buttonNewTabToggle}
                        onChange={toggleButtonNewTab}
                      />
                      <ToggleControl
                        label="NoFollow / NoIndex"
                        checked={props.attributes.buttonFollowToggle}
                        onChange={toggleButtonFollow}
                      />
                      <ToggleControl
                        label="Sponsored Link"
                        checked={props.attributes.buttonSponsoredToggle}
                        onChange={toggleButtonSponsored}
                      />
                    </PanelBody>
                  </>
                )}
                {(props.attributes.selectedLayout == "single" ||
                  props.attributes.selectedLayout == "mainVertical" ||
                  props.attributes.selectedLayout == "horizontal") && (
                  <PanelBody
                    initialOpen={false}
                    className="shopper_com_block_settings_component"
                    title="Affiliate Settings"
                  >
                    <ToggleControl
                      label="Show / Hide Affiliate Disclosure"
                      checked={props.attributes.affDisclosureToggle}
                      onChange={toggleAffDisclr}
                    />
                    {props.attributes.affDisclosureToggle && (
                      <>
                        <TextareaControl
                          label="Affiliate Disclosure Text"
                          value={props.attributes.affDisclosureText}
                          onChange={(value) => setAffDisclrText(value)}
                        />
                        <SelectControl
                          label="Affiliate Disclosure Font"
                          value={props.attributes.affDisclosureFont}
                          options={font_list}
                          onChange={(newFont) => setAffDisclrFont(newFont)}
                          __nextHasNoMarginBottom
                        />
                        <SelectControl
                          label="Font Style"
                          value={props.attributes.affDisclosureStyle}
                          options={font_style}
                          onChange={(newFontStyle) =>
                            setAffDisclrStyle(newFontStyle)
                          }
                          __nextHasNoMarginBottom
                        />
                        <div className="spcom_colrSelectionTab">
                          <TextControl
                            label="Text Color"
                            value={props.attributes.affDisclosureColor}
                            onChange={(value) => setAffColor(value)}
                          />
                          <div className="spcom_clrPaletteSmall">
                            <ColorPalette
                              label="Color Picker"
                              value={props.attributes.affDisclosureColor}
                              onChange={(color) => setAffColor(color)}
                            />
                          </div>
                        </div>
                        <SelectControl
                          label="Font Weight"
                          value={props.attributes.affDisclosureWeight}
                          options={font_weight}
                          onChange={(newFontWeight) =>
                            setAffDisclrWeight(newFontWeight)
                          }
                          __nextHasNoMarginBottom
                        />
                        <SelectControl
                          label="Text Decoration"
                          value={props.attributes.affDisclosureDecoration}
                          options={text_decoration}
                          onChange={(decoration) =>
                            setAffDisclrDecoration(decoration)
                          }
                          __nextHasNoMarginBottom
                        />
                      </>
                    )}
                  </PanelBody>
                )}

                {props.attributes.selectedProduct &&
                  props.attributes.selectedLayout == "image" && (
                    <>
                      <PanelBody
                        initialOpen={false}
                        className="shopper_com_block_settings_component"
                        title="Widget Settings"
                      >
                        <div className="spcom_image_size_control">
                          <RangeControl
                            label="Size (%)"
                            value={props.attributes.tileWidth}
                            onChange={(value) => setTileWidth(value)}
                            min={10}
                            max={100}
                          />
                          <div className="spcom_button_group">
                            <ButtonGroup aria-label={"Button Width"}>
                              {Object.keys(button_widths).map((b) => (
                                <Button
                                  variant={
                                    button_widths[b] ==
                                    props.attributes.tileWidth
                                      ? "primary"
                                      : ""
                                  }
                                  onClick={() => setTileWidth(button_widths[b])}
                                >
                                  {b}
                                </Button>
                              ))}
                            </ButtonGroup>
                          </div>
                        </div>
                        <RangeControl
                          label="Rounded Corner Radius (px)"
                          value={props.attributes.borderRadius}
                          onChange={(value) => setBorderRadius(value)}
                          min={0}
                          max={100}
                        />
                        <TextControl
                          label="Padding (px)"
                          value={props.attributes.tilePadding}
                          onChange={(value) => setTilePadding(value)}
                        />
                        <div className="spcom_colrSelectionTab">
                          <TextControl
                            label="Padding Color"
                            value={props.attributes.bgColor}
                            onChange={(value) => setBgColor(value)}
                          />
                          <div className="spcom_clrPaletteSmall">
                            <ColorPalette
                              label="Color Picker"
                              value={props.attributes.bgColor}
                              onChange={(color) => setBgColor(color)}
                            />
                          </div>
                        </div>
                        <div className="spcom_button_group">
                          <label className="spcom_panel_sub_settings_label">
                            Alignment
                          </label>
                          <ButtonGroup label="Alignment">
                            {Object.keys(alignment_class_list).map((b) => (
                              <Button
                                variant={
                                  alignment_class_list[b] ==
                                  props.attributes.collAlignment
                                    ? "primary"
                                    : ""
                                }
                                onClick={() =>
                                  setAlignment(alignment_class_list[b])
                                }
                              >
                                {b}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </div>
                        <label className="spcom_panel_sub_settings_label">
                          Link Settings
                        </label>
                        <ToggleControl
                          label="Open In New Tab / Window"
                          checked={props.attributes.buttonNewTabToggle}
                          onChange={toggleButtonNewTab}
                        />
                        <ToggleControl
                          label="NoFollow / NoIndex"
                          checked={props.attributes.buttonFollowToggle}
                          onChange={toggleButtonFollow}
                        />
                        <ToggleControl
                          label="Sponsored Link"
                          checked={props.attributes.buttonSponsoredToggle}
                          onChange={toggleButtonSponsored}
                        />
                      </PanelBody>
                      <PanelBody
                        initialOpen={false}
                        className="shopper_com_block_settings_component"
                        title="Product Settings"
                      >
                        <ToggleControl
                          label="Show Product Name"
                          checked={props.attributes.prodNameToggle}
                          onChange={toggleProductName}
                        />
                        {props.attributes.prodNameToggle && (
                          <>
                            <SelectControl
                              label="Font family"
                              value={props.attributes.fontFamily}
                              options={font_list}
                              onChange={(newFont) => setFont(newFont)}
                              __nextHasNoMarginBottom
                            />
                            <SelectControl
                              label="Font Style"
                              value={props.attributes.fontStyle}
                              options={font_style}
                              onChange={(newFontStyle) =>
                                setFontStyle(newFontStyle)
                              }
                              __nextHasNoMarginBottom
                            />
                            <SelectControl
                              label="Font Weight"
                              value={props.attributes.fontWeight}
                              options={font_weight}
                              onChange={(newFontWeight) =>
                                setFontWeight(newFontWeight)
                              }
                              __nextHasNoMarginBottom
                            />
                            <SelectControl
                              label="Text Decoration"
                              value={props.attributes.textDecoration}
                              options={text_decoration}
                              onChange={(newFont) => setTextDecoration(newFont)}
                              __nextHasNoMarginBottom
                            />
                            <TextControl
                              label="Font Size"
                              value={props.attributes.fontSize}
                              onChange={(value) => setfFontSize(value)}
                              placeholder="Size in px"
                            />
                            <div className="spcom_colrSelectionTab">
                              <TextControl
                                label="Text Color"
                                value={props.attributes.fontColor}
                                onChange={(value) => setfFontColor(value)}
                              />
                              <div className="spcom_clrPaletteSmall">
                                <ColorPalette
                                  label="Color Picker"
                                  value={props.attributes.fontColor}
                                  onChange={(color) => setfFontColor(color)}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </PanelBody>
                    </>
                  )}
                {props.attributes.selectedLayout == "image" &&
                  props.attributes.selectedCollection && (
                    <>
                      <PanelBody
                        initialOpen={false}
                        className="shopper_com_block_settings_component"
                        title="Widget Settings"
                      >
                        <div className="spcom_image_size_control">
                          <RangeControl
                            label="Size (%)"
                            value={props.attributes.collTileWidth}
                            onChange={(value) => setCollTileWidth(value)}
                            min={18}
                            max={100}
                          />
                          <div className="spcom_button_group">
                            <ButtonGroup aria-label={"Width"}>
                              {Object.keys(button_widths).map((b) => (
                                <Button
                                  variant={
                                    button_widths[b] ==
                                    props.attributes.collTileWidth
                                      ? "primary"
                                      : ""
                                  }
                                  onClick={() =>
                                    setCollTileWidth(button_widths[b])
                                  }
                                >
                                  {b}
                                </Button>
                              ))}
                            </ButtonGroup>
                          </div>
                        </div>
                        {props.attributes.collBgColor != "#ffffff00" && (
                          <RangeControl
                            label="Rounded Corner Radius (px)"
                            value={props.attributes.borderRadius}
                            onChange={(value) => setBorderRadius(value)}
                            min={0}
                            max={100}
                          />
                        )}
                        <TextControl
                          label="Padding (px)"
                          value={props.attributes.tilePadding}
                          onChange={(value) => setTilePadding(value)}
                        />
                        <ToggleControl
                          label="Show Collection Name"
                          checked={props.attributes.collNameToggle}
                          onChange={toggleCollectionName}
                        />
                        <ToggleControl
                          label="Show Product Name"
                          checked={props.attributes.prodNameToggle}
                          onChange={toggleProductName}
                        />
                        {props.attributes.selectedCollection[
                          "collection_image"
                        ] && (
                          <ToggleControl
                            label="Show Collection Cover Image"
                            checked={props.attributes.collCoverToggle}
                            onChange={toggleCollCover}
                          />
                        )}
                        <TextControl
                          label="Number Of Products"
                          value={props.attributes.nofPdts}
                          onChange={(value) => setNofPdts(value)}
                        />
                        <div className="spcom_colrSelectionTab">
                          <TextControl
                            label="Background Color"
                            value={props.attributes.collBgColor}
                            onChange={(value) => setCollBgColor(value)}
                          />
                          <div className="spcom_clrPaletteSmall">
                            <ColorPalette
                              label="Color Picker"
                              value={props.attributes.collBgColor}
                              onChange={(color) => setCollBgColor(color)}
                            />
                          </div>
                        </div>
                        <div className="spcom_button_group">
                          <label className="spcom_panel_sub_settings_label">
                            Alignment
                          </label>
                          <ButtonGroup label="Alignment">
                            {Object.keys(alignment_class_list).map((b) => (
                              <Button
                                variant={
                                  alignment_class_list[b] ==
                                  props.attributes.collAlignment
                                    ? "primary"
                                    : ""
                                }
                                onClick={() =>
                                  setAlignment(alignment_class_list[b])
                                }
                              >
                                {b}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </div>
                        {(props.attributes.collNameToggle ||
                          props.attributes.prodNameToggle) && (
                          <>
                            <PanelBody
                              initialOpen={false}
                              className="shopper_com_block_settings"
                              title="Text Settings"
                            >
                              <SelectControl
                                label="Font family"
                                value={props.attributes.fontFamily}
                                options={font_list}
                                onChange={(newFont) => setFont(newFont)}
                                __nextHasNoMarginBottom
                              />
                              <SelectControl
                                label="Font Style"
                                value={props.attributes.fontStyle}
                                options={font_style}
                                onChange={(newFontStyle) =>
                                  setFontStyle(newFontStyle)
                                }
                                __nextHasNoMarginBottom
                              />
                              <SelectControl
                                label="Font Weight"
                                value={props.attributes.fontWeight}
                                options={font_weight}
                                onChange={(newFontWeight) =>
                                  setFontWeight(newFontWeight)
                                }
                                __nextHasNoMarginBottom
                              />
                              <SelectControl
                                label="Text Decoration"
                                value={props.attributes.textDecoration}
                                options={text_decoration}
                                onChange={(newFont) =>
                                  setTextDecoration(newFont)
                                }
                                __nextHasNoMarginBottom
                              />
                              {props.attributes.collNameToggle && (
                                <TextControl
                                  label="Font Size"
                                  value={props.attributes.fontSize}
                                  onChange={(value) => setfFontSize(value)}
                                />
                              )}
                              <div className="spcom_colrSelectionTab">
                                <TextControl
                                  label="Text Color"
                                  value={props.attributes.fontColor}
                                  onChange={(value) => setfFontColor(value)}
                                />
                                <div className="spcom_clrPaletteSmall">
                                  <ColorPalette
                                    label="Color Picker"
                                    value={props.attributes.fontColor}
                                    onChange={(color) => setfFontColor(color)}
                                  />
                                </div>
                              </div>
                            </PanelBody>
                          </>
                        )}
                        <label className="spcom_panel_sub_settings_label">
                          Link Settings
                        </label>
                        <ToggleControl
                          label="Open In New Tab / Window"
                          checked={props.attributes.buttonNewTabToggle}
                          onChange={toggleButtonNewTab}
                        />
                        <ToggleControl
                          label="NoFollow / NoIndex"
                          checked={props.attributes.buttonFollowToggle}
                          onChange={toggleButtonFollow}
                        />
                        <ToggleControl
                          label="Sponsored Link"
                          checked={props.attributes.buttonSponsoredToggle}
                          onChange={toggleButtonSponsored}
                        />
                      </PanelBody>
                    </>
                  )}
              </Panel>
            </InspectorControls>
          </>
        )}

        {!props.attributes.selectedProduct &&
          !props.attributes.multiProductsSelected?.length &&
          !props.attributes.selectedCollection && (
            <figure>
              <div className="spcom__find-products spcom__font">
                <div className="shopper_dot_com_branding">
                  <img
                    alt="Shopper.com"
                    src="https://cdn.shopper.com/next_assets/image/shopper-com-logo120x120.png"
                  />
                  <span>Shopper.com</span>
                </div>
                <div className="shopper_dot_com_description spcom__font">
                  Select a display to showcase your products
                </div>
                <a
                  onClick={() => {
                    setReplaceOneSingleProd(false);
                    getAllCollnProdts();
                    checkReferralLinkExists();
                  }}
                  className="shopper_dot_com_find-btn spcom__font"
                >
                  Select a Product Display
                </a>
              </div>
            </figure>
          )}
        {showSelctnPopup && (
          <section className="sp_com_outer_section_container">
            <div
              className="sp_com__popup_modal spcom_full-width-popup"
              id="shopper_dot_com_select_popup"
            >
              <article className="sp_com__popup__container_body">
                {!props.attributes.selectedLayout && (
                  <>
                    <div className="shopper_com_wf-header-modal">
                      <div className="shopper_com_header_layout_sel">
                        <div className="shopper_com_layout_sel_check">
                          <div className="shopper_com_layout_header_icon">
                            <Icon icon={icons.select_round_orange} />
                          </div>
                          <div className="shopper_com_header_text spcom__font">
                            Select a layout
                          </div>
                        </div>
                        <div className="shopper_com_layout_middle_line"></div>
                        <div className="shopper_com_layout_sel_check">
                          <div className="shopper_com_layout_header_icon">
                            <Icon icon={icons.unselected_round_grey} />
                          </div>
                          <div className="shopper_com_header_text sp_com_text_dull spcom__font">
                            Select a product or collection
                          </div>
                        </div>
                      </div>
                      <a className="spcom_popup_close_button" href="#">
                        <Icon onClick={unsetsetTopZindex} icon={icons.close} />
                      </a>
                    </div>
                    <div className="shopper_com_wf-search-modal sp_com_layouts">
                      <div
                        className="spcom__search_addprod_text spcom__font"
                        id="spcom__search_addprod_text"
                      >
                        Click to select a layout
                      </div>
                    </div>
                    <div className="sp_com_wf-content-modal sp_com_layouts">
                      <div className="shopper_com_prod_list">
                        <div className="spcom_layout_selection">
                          <div
                            onClick={(e) => updateSelectedLayout("single")}
                            className="spcom_layout_select spcom__font"
                          >
                            <div className="spcom_display_type">
                              {icons.singleDisplay}
                            </div>
                            <div className="layout_name_common">Single</div>
                          </div>
                          <div
                            onClick={(e) => updateSelectedLayout("button")}
                            className="spcom_layout_select spcom__font"
                          >
                            <div className="spcom_display_type">
                              {icons.buttonDisplay}
                            </div>
                            <div className="layout_name_common">Button</div>
                          </div>
                          <div
                            onClick={(e) => updateSelectedLayout("image")}
                            className="spcom_layout_select spcom__font"
                          >
                            <div className="spcom_display_type">
                              {icons.imageDisplay}
                            </div>
                            <div className="layout_name_common">Image</div>
                          </div>
                          <div
                            onClick={(e) =>
                              updateSelectedLayout("mainVertical")
                            }
                            className="spcom_layout_select spcom__font"
                          >
                            <div className="spcom_display_type">
                              {icons.verticalDisplay}
                            </div>
                            <div className="layout_name_common">Vertical</div>
                          </div>
                          <div
                            onClick={(e) => updateSelectedLayout("horizontal")}
                            className="spcom_layout_select spcom__font"
                          >
                            <div className="spcom_display_type">
                              {icons.horizontalDisplay}
                            </div>
                            <div className="layout_name_common">Horizontal</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {props.attributes.selectedLayout && (
                  <>
                    <div className="shopper_com_wf-header-modal">
                      <div className="shopper_com_header_layout_sel">
                        <div
                          onClick={(e) => {
                            resetLayoutSelection();
                            resetAllProductSelections();
                          }}
                          className="shopper_com_layout_sel_check shopper_com_layout_back_btn"
                        >
                          <div className="shopper_com_layout_header_icon">
                            <Icon icon={icons.select_ok} />
                          </div>
                          <div className="shopper_com_header_text spcom__font">
                            Select a layout
                          </div>
                        </div>
                        <div className="shopper_com_layout_middle_line"></div>
                        <div className="shopper_com_layout_sel_check">
                          <div className="shopper_com_layout_header_icon">
                            <Icon icon={icons.select_round_orange} />
                          </div>
                          <div className="shopper_com_header_text spcom__font">
                            Select a product or collection
                          </div>
                        </div>
                      </div>
                      <a className="spcom_popup_close_button" href="#">
                        <Icon onClick={unsetsetTopZindex} icon={icons.close} />
                      </a>
                    </div>
                    <div className="shopper_com_wf-search-modal shopper_com_prod__coll_select">
                      {(props.attributes.selectedLayout == "button" ||
                        props.attributes.selectedLayout == "image") && (
                        <div
                          className="spcom__search_addprod_text spcom__font"
                          id="spcom__search_addprod_text"
                        >
                          Click to select a product or collection
                        </div>
                      )}
                      <div className="spcom__prod_toggle_n_search_container">
                        <div className="spcom__prod_toggle_n_search_elements">
                          {(props.attributes.selectedLayout == "button" ||
                            props.attributes.selectedLayout == "image") && (
                            <div className="spcom__coll_prod_toggle">
                              <div className="spcom_product_switch">
                                <input
                                  checked={props.attributes.showProducts}
                                  type="checkbox"
                                  onChange={toggleProductDisplay}
                                />
                                <label
                                  style={{
                                    color: `${
                                      props.attributes.showProducts
                                        ? "#F25522"
                                        : "#212121"
                                    }`,
                                  }}
                                  className="spcom__font spcom_prod-coll_label"
                                >
                                  Products
                                </label>
                              </div>

                              <div className="spcom_collection_switch">
                                <input
                                  checked={props.attributes.showCollections}
                                  type="checkbox"
                                  onChange={toggleCollectionDisplay}
                                />
                                <label
                                  style={{
                                    color: `${
                                      props.attributes.showCollections
                                        ? "#F25522"
                                        : "#212121"
                                    }`,
                                  }}
                                  className="spcom__font spcom_prod-coll_label"
                                >
                                  Collections
                                </label>
                              </div>
                            </div>
                          )}
                          <div
                            onClick={highLightSearch}
                            className="spcom__search_input"
                            id="spcom__search_input"
                          >
                            <div className="shopper_com___icon_common">
                              <Icon
                                className="shopper_com___icon_common"
                                icon={icons.search}
                              />
                            </div>
                            <input
                              className="spcom__font spcom__ellipsis"
                              type="search"
                              placeholder="Search"
                              onChange={searchproduct}
                            />
                          </div>
                        </div>
                        <div className="spcom__sort_elements spcom_date_sort_select-container __multi-select">
                          <div
                            className="selected-input"
                            onClick={() => toggleShowOptionList()}
                          >
                            <div className="select-input-left">
                              <div className="spcom__font select-input-left-text">
                                Sort by:
                              </div>
                              <div className="select-input-right-text">
                                {props.attributes.sortbySwitcher == "newest"
                                  ? "Newest First"
                                  : props.attributes.sortbySwitcher == "oldest"
                                  ? "Oldest First"
                                  : ""}
                              </div>
                            </div>
                            <div className="_divider" />
                            <div className="select-input-right">
                              <div className="select-input-right-icon">
                                {props.attributes.showOptionList ? (
                                  <Icon
                                    onClick={() => toggleShowOptionList()}
                                    className="shopper_com___icon_common"
                                    icon={icons.upArrow}
                                  />
                                ) : (
                                  <Icon
                                    onClick={() => toggleShowOptionList()}
                                    className="shopper_com___icon_common"
                                    icon={icons.downArrow}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          {props.attributes.showOptionList && (
                            <div className="select-options-container">
                              <div className="select-options-container-content">
                                <div className="select-options-ul-container">
                                  <ul className="select-options-ul">
                                    {/* clear all option */}
                                    <li
                                      className={`select-option-li deselect-option ${
                                        props.attributes.sortbySwitcher
                                          ? "active"
                                          : ""
                                      }`}
                                      onClick={(e) => {
                                        setSortbySwitcher();
                                      }}
                                    >
                                      <div className="deselct-all spcom__font">
                                        Clear Selection
                                      </div>
                                    </li>
                                    <li
                                      className="spcom__coll_prod_toggle select-option-li spcom__font"
                                      onClick={() => {
                                        setSortbySwitcher("newest");
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={
                                          props.attributes.sortbySwitcher ==
                                          "newest"
                                        }
                                      />
                                      Newest First
                                    </li>
                                    <li
                                      className="spcom__coll_prod_toggle select-option-li spcom__font"
                                      onClick={() => {
                                        setSortbySwitcher("oldest");
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={
                                          props.attributes.sortbySwitcher ==
                                          "oldest"
                                        }
                                      />
                                      Oldest First
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="sp_com_wf-content-modal">
                      <div className="shopper_com_prod_list">
                        {/* list all products */}
                        {!props.attributes.filteredProducts?.length > 0 &&
                          !props.attributes.filteredCollections?.length > 0 &&
                          props.attributes.showProducts &&
                          props.attributes.allProducts?.length > 0 && (
                            <>
                              <div className="spcom__p-grid">
                                {Object.entries(
                                  props.attributes.allProducts
                                ).map(([key, value]) => (
                                  <div
                                    onClick={(e) =>
                                      updateSelectedProduct(e, value)
                                    }
                                    className={`spcom__p-tile ${
                                      props.attributes.isFreeTier &&
                                      props.attributes.remainingCollCount > 0
                                        ? "spcom_restriction"
                                        : ""
                                    } ${
                                      value["id"] ==
                                        props.attributes.selectedProduct?.id ||
                                      props.attributes.multiProductsSelected?.filter(
                                        (product) => product.id == value["id"]
                                      ).length > 0
                                        ? "spcom_highlight_tile"
                                        : ""
                                    }`}
                                  >
                                    <div className="sp_com__image_container">
                                      <img
                                        className="spcom_img-filter"
                                        src={value["product_image"]}
                                        alt="Product Image"
                                      />
                                    </div>
                                    <div className="spcom__p-name spcom__font spcom__ellipsis line2">
                                      {value["product_title"]}
                                    </div>
                                    {props.attributes.isFreeTier &&
                                      props.attributes.remainingProdCount >
                                        0 && (
                                        <div
                                          onClick={(e) => shopperUpgradePlan()}
                                          className="spcom_prod_block-overlay"
                                        >
                                          <div className="spcom_prod_block-content">
                                            <div>
                                              <Icon icon={icons.productLock} />
                                            </div>
                                            <div className="spcom_block_prod_text">
                                              +
                                              {
                                                props.attributes
                                                  .remainingProdCount
                                              }{" "}
                                              Products
                                            </div>
                                            <div className="spcom_block_prod_text spcom_text_orange">
                                              Upgrade to add them
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                        {/* list all collections */}
                        {!props.attributes.filteredProducts?.length > 0 &&
                          !props.attributes.filteredCollections?.length > 0 &&
                          props.attributes.selectedLayout != "single" &&
                          props.attributes.showCollections &&
                          props.attributes.allCollections?.length > 0 && (
                            <>
                              <div className="spcom__c-grid">
                                {Object.entries(
                                  props.attributes.allCollections
                                ).map(([key, value]) => (
                                  <div
                                    onClick={(e) =>
                                      updateSelectedCollection(e, value)
                                    }
                                    className={`spcom__c-tile ${
                                      props.attributes.isFreeTier &&
                                      props.attributes.remainingCollCount > 0
                                        ? "spcom_restriction"
                                        : ""
                                    }
                                      ${
                                        value["id"] ==
                                        props.attributes.selectedCollection?.id
                                          ? "spcom_highlight_tile"
                                          : ""
                                      }`}
                                  >
                                    <div className="sp_com__image_container-set">
                                      <img
                                        className="spcom_img-filter _left"
                                        src={value["collection_prod_image1"]}
                                        alt="Product Image"
                                      />
                                      <div className="spcom__right">
                                        <img
                                          className="spcom_img-filter spcom__top"
                                          src={value["collection_prod_image2"]}
                                          alt="Product Image"
                                        />
                                        <img
                                          className="spcom_img-filter spcom__bottom"
                                          src={value["collection_prod_image3"]}
                                          alt="Product Image"
                                        />
                                      </div>
                                    </div>
                                    <div className="spcom__c-name spcom__font spcom__ellipsis line2">
                                      {value["collection_title"]}
                                    </div>
                                    <div className="spcom__stats spcom__font spcom__ellipsis">
                                      {value["collection_products"]}
                                      Products
                                    </div>
                                    {props.attributes.isFreeTier &&
                                      props.attributes.remainingCollCount >
                                        0 && (
                                        <div
                                          onClick={(e) => shopperUpgradePlan()}
                                          className="spcom_prod_block-overlay"
                                        >
                                          <div className="spcom_prod_block-content">
                                            <div>
                                              <Icon icon={icons.productLock} />
                                            </div>
                                            <div className="spcom_block_prod_text">
                                              +
                                              {
                                                props.attributes
                                                  .remainingCollCount
                                              }{" "}
                                              Collections
                                            </div>
                                            <div className="spcom_block_prod_text spcom_text_orange">
                                              Upgrade to add them
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                        {/* list filtered products */}
                        {props.attributes.filteredProducts?.length > 0 &&
                          props.attributes.showProducts && (
                            <>
                              <div className="spcom__p-grid">
                                {Object.entries(
                                  props.attributes.filteredProducts
                                ).map(([key, value]) => (
                                  <div
                                    onClick={(e) =>
                                      updateSelectedProduct(e, value)
                                    }
                                    className={`spcom__p-tile ${
                                      props.attributes.isFreeTier &&
                                      props.attributes.remainingCollCount > 0
                                        ? "spcom_restriction"
                                        : ""
                                    } ${
                                      value["id"] ==
                                        props.attributes.selectedProduct?.id ||
                                      props.attributes.multiProductsSelected?.filter(
                                        (product) => product.id == value["id"]
                                      ).length > 0
                                        ? "spcom_highlight_tile"
                                        : ""
                                    }`}
                                  >
                                    <div className="sp_com__image_container">
                                      <img
                                        className="spcom_img-filter"
                                        src={value["product_image"]}
                                        alt="Product Image"
                                      />
                                    </div>
                                    <div className="spcom__p-name spcom__font spcom__ellipsis line2">
                                      {value["product_title"]}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                        {/* list filtered collections */}
                        {props.attributes.filteredCollections?.length > 0 &&
                          props.attributes.selectedLayout != "single" &&
                          props.attributes.showCollections && (
                            <>
                              <div className="spcom__c-grid">
                                {Object.entries(
                                  props.attributes.filteredCollections
                                ).map(([key, value]) => (
                                  <div
                                    onClick={(e) =>
                                      updateSelectedCollection(e, value)
                                    }
                                    className={`spcom__c-tile ${
                                      props.attributes.isFreeTier &&
                                      props.attributes.remainingCollCount > 0
                                        ? "spcom_restriction"
                                        : ""
                                    }
                                      ${
                                        value["id"] ==
                                        props.attributes.selectedCollection?.id
                                          ? "spcom_highlight_tile"
                                          : ""
                                      }`}
                                  >
                                    <div className="sp_com__image_container-set">
                                      <img
                                        className="spcom_img-filter _left"
                                        src={value["collection_prod_image1"]}
                                        alt="Product Image"
                                      />
                                      <div className="spcom__right">
                                        <img
                                          className="spcom_img-filter spcom__top"
                                          src={value["collection_prod_image2"]}
                                          alt="Product Image"
                                        />
                                        <img
                                          className="spcom_img-filter spcom__bottom"
                                          src={value["collection_prod_image3"]}
                                          alt="Product Image"
                                        />
                                      </div>
                                    </div>
                                    <div className="spcom__c-name spcom__font spcom__ellipsis line2">
                                      {value["collection_title"]}
                                    </div>
                                    <div className="spcom__stats spcom__font spcom__ellipsis">
                                      {value["collection_products"]} Products
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                      </div>
                    </div>
                  </>
                )}
                <div className="shopper_com_wf-footer-modal">
                  {props.attributes.selectedLayout?.length &&
                    (props.attributes.selectedProduct ||
                      props.attributes.multiProductsSelected?.length ||
                      props.attributes.selectedCollection) && (
                      <a className="spcom_raw-a-text" href="#">
                        <div
                          onClick={unsetsetTopZindex}
                          className="shopper_com_ftr_slct_btn"
                        >
                          Insert
                        </div>
                      </a>
                    )}
                  <img
                    alt="Shopper.com"
                    src="https://cdn.shopper.com/next_assets/image/shopper-com-logo120x120.png"
                  />
                </div>
              </article>
            </div>
          </section>
        )}

        <ThemesAndLayouts props={props} is_edit_screen={true} />
      </>
    );
  },

  save: function (props) {
    return <ThemesAndLayouts props={props} is_edit_screen={false} />;
  },
});
