import ButtonLayouts from "./ButtonLayouts";
import MainVerticalLayout1 from "./MainVerticalLayout1";
import MainVerticalLayout2 from "./MainVerticalLayout2";
import MainVerticalLayout3 from "./MainVerticalLayout3";
import HorizontalLayout1 from "./HorizontalLayout1";
import HorizontalLayout2 from "./HorizontalLayout2";
import HorizontalLayout3 from "./HorizontalLayout3";
import VerticalLayout from "./VerticalLayout";
import ShopperBacklink from "./ShopperBacklink";
import Picture from "./Picture";

import { Icon } from "@wordpress/components";
import icons from "./icons.js";

export default function ThemesAndLayouts({ props, is_edit_screen }) {
  function generateRedirectionURL(pdt_id) {
    let baseurl = window.location.origin;
    let redrnSlug = props.attributes.affRdrctnSlug;
    let redrctn_url = baseurl + "/" + redrnSlug + "/" + pdt_id + "/";
    return redrctn_url;
  }
  return (
    <>
      {(props.attributes.selectedProduct ||
        props.attributes.multiProductsSelected ||
        props.attributes.selectedCollection) && (
        <div
          id={`${
            is_edit_screen
              ? "shopper_dotcom_edit_block"
              : "shopper_dotcom_save_block"
          }`}
        >
          {/* single layout*/}
          {props.attributes.selectedProduct &&
            props.attributes.selectedLayout == "single" && (
              <>
                {props.attributes.singleTheme == "simple" && (
                  <div
                    style={{
                      width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
                      flexDirection: `${props.attributes.bannerPosition}`,
                      margin: `${props.attributes.themeAlignment}`,
                    }}
                    className="shopper_dotcom_single_container shopper_dotcom_aff_link shopper_dotcom_single_left"
                  >
                    {props.attributes.bannerToggle && (
                      <div
                        style={{
                          fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
                          fontFamily: `${props.attributes.bannerFontFamily}`,
                          background: `${props.attributes.bannerBgColor}`,
                          fontStyle: `${props.attributes.bannerFontStyle}`,
                          fontWeight: `${props.attributes.bannerFontWeight}`,
                          textDecoration: `${props.attributes.bannerTextDecoration}`,
                          borderTopLeftRadius: `${
                            props.attributes.bannerPosition == "row"
                              ? `${
                                  props.attributes.singleBorderRadius <= 50
                                    ? props.attributes.singleBorderRadius
                                    : 0
                                }px`
                              : "0px"
                          }`,
                          borderTopRightRadius: `${
                            props.attributes.bannerPosition == "row"
                              ? "0px"
                              : `${
                                  props.attributes.singleBorderRadius <= 50
                                    ? props.attributes.singleBorderRadius
                                    : 0
                                }px`
                          }`,
                        }}
                        className="spcom__single1_layout_banner spcom__font"
                      >
                        {props.attributes.bannerText}
                      </div>
                    )}
                    <div
                      style={{
                        background: `${props.attributes.bgColor}`,
                        borderRadius: `${props.attributes.singleBorderRadius}px`,
                        borderWidth: `${props.attributes.singleBorderWidth}px`,
                        borderColor: `${props.attributes.singleBorderColor}`,
                      }}
                      className="spcom__single1_layout spcom__font"
                    >
                      <div className="sp_com__image_container">
                        <Picture
                          src={
                            props.attributes.selectedProduct[
                              "product_full_image"
                            ]
                          }
                          alt="Product Image"
                        />
                      </div>
                      <div className="spcom__p-name_n_address">
                        <div
                          style={{
                            fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
                            fontFamily: `${props.attributes.fontFamily}`,
                            fontStyle: `${props.attributes.fontStyle}`,
                            color: `${props.attributes.fontColor}`,
                            fontWeight: `${props.attributes.fontWeight}`,
                            textDecoration: `${props.attributes.textDecoration}`,
                          }}
                          className="spcom__p-name spcom__font spcom__ellipsis line2"
                        >
                          {props.attributes.selectedProduct["product_title"]}
                        </div>
                        {props.attributes.priceToggle && (
                          <div
                            style={{
                              fontFamily: `${props.attributes.fontFamily}`,
                              fontStyle: `${props.attributes.fontStyle}`,
                              color: `${props.attributes.fontColor}`,
                              fontWeight: `${props.attributes.fontWeight}`,
                              textDecoration: `${props.attributes.textDecoration}`,
                            }}
                            className="spcom__product_price spcom__font"
                          >
                            {props.attributes.priceText}
                          </div>
                        )}
                        {props.attributes.pdtDescriptionToggle && (
                          <div
                            style={{
                              fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
                              fontFamily: `${props.attributes.fontFamily}`,
                              fontStyle: `${props.attributes.fontStyle}`,
                              color: `${props.attributes.fontColor}`,
                              textDecoration: `${props.attributes.textDecoration}`,
                            }}
                            className="spcom__p-desc spcom__font spcom__ellipsis line4"
                            dangerouslySetInnerHTML={{
                              __html:
                                props.attributes.selectedProduct[
                                  "product_description"
                                ],
                            }}
                          ></div>
                        )}
                        {/* button  start */}
                        <ButtonLayouts props={props} />
                        {/* button  end */}
                        {props.attributes.affDisclosureToggle && (
                          <div
                            style={{
                              fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
                              fontFamily: `${props.attributes.affDisclosureFont}`,
                              fontStyle: `${props.attributes.affDisclosureStyle}`,
                              color: `${props.attributes.affDisclosureColor}`,
                              fontWeight: `${props.attributes.affDisclosureWeight}`,
                              textDecoration: `${props.attributes.affDisclosureDecoration}`,
                            }}
                            className="spcom__single1_layout_aff_dsclr spcom__font"
                          >
                            {props.attributes.affDisclosureText}
                          </div>
                        )}
                      </div>
                    </div>
                    <ShopperBacklink props={props} />
                  </div>
                )}
                {props.attributes.singleTheme == "simpleRight" && (
                  <div
                    style={{
                      width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
                      flexDirection: `${props.attributes.bannerPosition}`,
                      margin: `${props.attributes.themeAlignment}`,
                    }}
                    className="shopper_dotcom_single_container shopper_dotcom_aff_link shopper_dotcom_single_right"
                  >
                    {props.attributes.bannerToggle && (
                      <div
                        style={{
                          fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
                          fontFamily: `${props.attributes.bannerFontFamily}`,
                          background: `${props.attributes.bannerBgColor}`,
                          fontStyle: `${props.attributes.bannerFontStyle}`,
                          fontWeight: `${props.attributes.bannerFontWeight}`,
                          textDecoration: `${props.attributes.bannerTextDecoration}`,
                          borderTopLeftRadius: `${
                            props.attributes.bannerPosition == "row"
                              ? `${
                                  props.attributes.singleBorderRadius <= 50
                                    ? props.attributes.singleBorderRadius
                                    : 0
                                }px`
                              : "0px"
                          }`,
                          borderTopRightRadius: `${
                            props.attributes.bannerPosition == "row"
                              ? "0px"
                              : `${
                                  props.attributes.singleBorderRadius <= 50
                                    ? props.attributes.singleBorderRadius
                                    : 0
                                }px`
                          }`,
                        }}
                        className="spcom__single1_layout_banner spcom__font"
                      >
                        {props.attributes.bannerText}
                      </div>
                    )}
                    <div
                      style={{
                        background: `${props.attributes.bgColor}`,
                        borderRadius: `${props.attributes.singleBorderRadius}px`,
                        borderWidth: `${props.attributes.singleBorderWidth}px`,
                        borderColor: `${props.attributes.singleBorderColor}`,
                      }}
                      className="spcom__single1_layout spcom__font"
                    >
                      <div className="sp_com__image_container">
                        <Picture
                          src={
                            props.attributes.selectedProduct[
                              "product_full_image"
                            ]
                          }
                          alt="Product Image"
                        />
                      </div>
                      <div className="spcom__p-name_n_address">
                        <div
                          style={{
                            fontSize: `${props.attributes.themeWidths?.themePnameSize}px`,
                            fontFamily: `${props.attributes.fontFamily}`,
                            fontStyle: `${props.attributes.fontStyle}`,
                            color: `${props.attributes.fontColor}`,
                            fontWeight: `${props.attributes.fontWeight}`,
                            textDecoration: `${props.attributes.textDecoration}`,
                          }}
                          className="spcom__p-name spcom__font spcom__ellipsis line2"
                        >
                          {props.attributes.selectedProduct["product_title"]}
                        </div>
                        {props.attributes.priceToggle && (
                          <div
                            style={{
                              fontFamily: `${props.attributes.fontFamily}`,
                              fontStyle: `${props.attributes.fontStyle}`,
                              color: `${props.attributes.fontColor}`,
                              fontWeight: `${props.attributes.fontWeight}`,
                              textDecoration: `${props.attributes.textDecoration}`,
                            }}
                            className="spcom__product_price spcom__font"
                          >
                            {props.attributes.priceText}
                          </div>
                        )}
                        {props.attributes.pdtDescriptionToggle && (
                          <div
                            style={{
                              fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
                              fontFamily: `${props.attributes.fontFamily}`,
                              fontStyle: `${props.attributes.fontStyle}`,
                              color: `${props.attributes.fontColor}`,
                              textDecoration: `${props.attributes.textDecoration}`,
                            }}
                            className="spcom__p-desc spcom__font spcom__ellipsis line4"
                            dangerouslySetInnerHTML={{
                              __html:
                                props.attributes.selectedProduct[
                                  "product_description"
                                ],
                            }}
                          ></div>
                        )}
                        {/* button  start */}
                        <ButtonLayouts props={props} />
                        {/* button  end */}
                        {props.attributes.affDisclosureToggle && (
                          <div
                            style={{
                              fontSize: `${props.attributes.themeWidths?.themeAffdesclrSize}px`,
                              fontFamily: `${props.attributes.affDisclosureFont}`,
                              fontStyle: `${props.attributes.affDisclosureStyle}`,
                              color: `${props.attributes.affDisclosureColor}`,
                              fontWeight: `${props.attributes.affDisclosureWeight}`,
                              textDecoration: `${props.attributes.affDisclosureDecoration}`,
                            }}
                            className="spcom__single1_layout_aff_dsclr spcom__font"
                          >
                            {props.attributes.affDisclosureText}
                          </div>
                        )}
                      </div>
                    </div>
                    <ShopperBacklink props={props} />
                  </div>
                )}
                <VerticalLayout {...props} />
              </>
            )}

          {/*button layout*/}
          {(props.attributes.selectedProduct ||
            props.attributes.selectedCollection) &&
            props.attributes.selectedLayout == "button" && (
              <>
                <div className="shopper_dotcom_aff_link">
                  <ButtonLayouts props={props} />
                </div>
              </>
            )}

          {/*product as image layout */}
          {props.attributes.selectedProduct &&
            props.attributes.selectedLayout == "image" && (
              <div className="shopper_image_layout shopper_dotcom_aff_link">
                <a
                  className="spcom_raw-a-text spcom_affiliate_anchor_tag"
                  href={generateRedirectionURL(
                    props.attributes.selectedProductOrCollnAffl
                  )}
                  rel={props.attributes.relValue}
                  data-link-type={
                    props.attributes.buttonNewTabToggle ? "_blank" : "_self"
                  }
                >
                  <div
                    className="spcom__p-tile"
                    style={{
                      width: `${props.attributes.tileWidth}%`,
                      background: `${props.attributes.bgColor}`,
                      borderRadius: `${props.attributes.borderRadius}px`,
                      padding: `${props.attributes.tilePadding}px`,
                      margin: `${props.attributes.collAlignment}`,
                    }}
                  >
                    <div className="sp_com__image_container">
                      <Picture
                        src={
                          props.attributes.selectedProduct["product_full_image"]
                        }
                        alt="Product Image"
                        mediaOverRide={[
                          { size: 820, query: "(min-width: 640px)" },
                          { size: 640, query: "(min-width: 414px)" },
                          { size: 480, query: "(min-width: 150px)" },
                        ]}
                      />
                    </div>
                    {props.attributes.prodNameToggle && (
                      <div
                        className="spcom__p-name spcom__font spcom__ellipsis line2"
                        style={{
                          fontFamily: `${props.attributes.fontFamily}`,
                          fontSize: `${props.attributes.fontSize}px`,
                          color: `${props.attributes.fontColor}`,
                          fontStyle: `${props.attributes.fontStyle}`,
                          fontWeight: `${props.attributes.fontWeight}`,
                          textDecoration: `${props.attributes.textDecoration}`,
                        }}
                      >
                        {props.attributes.selectedProduct["product_title"]}
                      </div>
                    )}
                  </div>
                </a>
              </div>
            )}

          {/*collection as image layout */}
          {props.attributes.selectedCollection &&
            props.attributes.selectedCollectionProducts &&
            props.attributes.selectedLayout == "image" && (
              <>
                <div
                  className="spcom_embedded-collection spcom_embedded-collection-landscape spcom_embedded-collection-percentage"
                  style={{
                    width: `${props.attributes.collTileWidth}%`,
                    background: `${props.attributes.collBgColor}`,
                    borderRadius: `${props.attributes.borderRadius}px`,
                    padding: `${props.attributes.tilePadding}px`,
                    margin: `${props.attributes.collAlignment}`,
                  }}
                >
                  {props.attributes.collNameToggle && (
                    <div
                      className="spcom_embedded-title spcom__font"
                      style={{
                        fontFamily: `${props.attributes.fontFamily}`,
                        fontSize: `${props.attributes.fontSize}px`,
                        color: `${props.attributes.fontColor}`,
                        fontStyle: `${props.attributes.fontStyle}`,
                        fontWeight: `${props.attributes.fontWeight}`,
                        textDecoration: `${props.attributes.textDecoration}`,
                      }}
                    >
                      {props.attributes.selectedCollection["collection_title"]}
                    </div>
                  )}
                  {props.attributes.selectedCollection["collection_image"] &&
                    props.attributes.collCoverToggle && (
                      <div className="spcom_collection-cover-container">
                        <div className="spcom_collection-cover-landscape">
                          <Picture
                            src={
                              props.attributes.selectedCollection[
                                "collection_full_image"
                              ]
                            }
                            alt="Product Image"
                            mediaOverRide={[
                              { size: 820, query: "(min-width: 640px)" },
                              { size: 640, query: "(min-width: 414px)" },
                              { size: 480, query: "(min-width: 150px)" },
                            ]}
                          />
                        </div>
                      </div>
                    )}
                  <div className="spcom_embedded-collection-product-list btn-centre">
                    <div className="sp_com_parent">
                      <div className="sp_com_slider-container">
                        <div className="sp_com_slider-wrapper">
                          {Object.entries(
                            props.attributes.selectedCollectionProducts
                          ).map(([key, value]) => (
                            <div className="child shopper_dotcom_aff_link">
                              <a
                                className="spcom_raw-a-text spcom_affiliate_anchor_tag"
                                href={generateRedirectionURL(
                                  value["product_id"]
                                )}
                                rel={props.attributes.relValue}
                                data-link-type={
                                  props.attributes.buttonNewTabToggle
                                    ? "_blank"
                                    : "_self"
                                }
                              >
                                <div
                                  className="sp_com_embedded-collection-product-item"
                                  style={{
                                    minWidth: "unset",
                                    width: `${props.attributes.collProdSize}px`,
                                    height: `${props.attributes.collProdSize}px`,
                                  }}
                                >
                                  <Picture
                                    src={value["product_full_image"]}
                                    alt={value["product_title"]}
                                  />
                                </div>
                                {props.attributes.prodNameToggle && (
                                  <div
                                    className="sp_com_embedded-collection-product-name spcom__ellipsis line3 spcom__font"
                                    style={{
                                      fontSize: `${props.attributes.collProdFontSize}px`,
                                      fontFamily: `${props.attributes.fontFamily}`,
                                      color: `${props.attributes.fontColor}`,
                                      fontStyle: `${props.attributes.fontStyle}`,
                                      fontWeight: `${props.attributes.fontWeight}`,
                                      textDecoration: `${props.attributes.textDecoration}`,
                                    }}
                                  >
                                    {value["product_title"]}
                                  </div>
                                )}
                              </a>
                            </div>
                          ))}
                        </div>
                        <div
                          className="sp_com_prod_scroll_btn prev spcom_buttonprev"
                          disabled="true"
                        >
                          <div className="spcom-carasoul-btn">
                            <Icon
                              className="shopper_com___icon_common"
                              icon={icons.leftArrow}
                            />
                          </div>
                        </div>
                        <div className="sp_com_prod_scroll_btn next spButtonNext">
                          <div className="spcom-carasoul-btn">
                            <Icon
                              className="shopper_com___icon_common"
                              icon={icons.rightArrow}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          {/*vertical layout*/}
          {props.attributes.multiProductsSelected &&
            props.attributes.selectedLayout == "mainVertical" && (
              <>
                {props.attributes.vertclHrzntlTheme == "simple" && (
                  <MainVerticalLayout1 {...props} />
                )}
                {props.attributes.vertclHrzntlTheme == "simpleAligned" && (
                  <MainVerticalLayout2 {...props} />
                )}
                {props.attributes.vertclHrzntlTheme == "boxed" && (
                  <MainVerticalLayout3 {...props} />
                )}
              </>
            )}

          {/*horizontal layout*/}
          {props.attributes.multiProductsSelected &&
            props.attributes.selectedLayout == "horizontal" && (
              <>
                {props.attributes.vertclHrzntlTheme == "simple" && (
                  <HorizontalLayout1 {...props} />
                )}
                {props.attributes.vertclHrzntlTheme == "simpleAligned" && (
                  <HorizontalLayout2 {...props} />
                )}
                {props.attributes.vertclHrzntlTheme == "boxed" && (
                  <HorizontalLayout3 {...props} />
                )}
              </>
            )}
        </div>
      )}
    </>
  );
}
