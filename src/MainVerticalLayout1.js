import ButtonLayouts from "./ButtonLayouts";
import { Icon } from "@wordpress/components";
import icons from "./icons.js";
import ShopperBacklink from "./ShopperBacklink";
import Picture from "./Picture";

export default function MainVerticalLayout1(props) {
  function isLocalProdSettings() {
    if (
      props.attributes.selectedLayout == "mainVertical" ||
      props.attributes.selectedLayout == "horizontal"
    ) {
      return true;
    }
    return false;
  }
  let prod_props = props.attributes;
  return (
    <div className="sp_com_slider-container spcom_vertical_main_top_container">
      <div
        style={{
          margin: `${props.attributes.themeAlignment}`,
        }}
        className="spcom__main_vertical_container spcom__main_vertical_theme1 sp_com_slider-wrapper"
      >
        {Object.entries(props.attributes.multiProductsSelected).map(
          ([index, pdt]) => {
            prod_props = isLocalProdSettings()
              ? pdt.productProps
              : props.attributes;
            return (
              <div
                style={{
                  width: `${props.attributes.themeWidths?.themeContainerWidth}px`,
                  minWidth: `${props.attributes.themeWidths?.themeContainerWidth}px`,
                  backgroundColor: `${props.attributes.bgColor}`,
                  flexDirection: `${prod_props?.bannerPosition}`,
                  borderRadius: `${props.attributes.singleBorderRadius}px`,
                }}
                className="shopper_dotcom_vertical_theme_card shopper_dotcom_aff_link child"
              >
                {prod_props?.bannerToggle && (
                  <div
                    style={{
                      fontSize: `${props.attributes.themeWidths?.bannerFontSize}px`,
                      fontFamily: `${prod_props?.bannerFontFamily}`,
                      background: `${prod_props?.bannerBgColor}`,
                      fontStyle: `${prod_props?.bannerFontStyle}`,
                      fontWeight: `${prod_props?.bannerFontWeight}`,
                      textDecoration: `${prod_props?.bannerTextDecoration}`,
                      borderTopLeftRadius: `${
                        prod_props?.bannerPosition == "row"
                          ? `${
                              props.attributes.singleBorderRadius <= 50
                                ? props.attributes.singleBorderRadius
                                : 0
                            }px`
                          : "0px"
                      }`,
                      borderTopRightRadius: `${
                        prod_props?.bannerPosition == "row"
                          ? "0px"
                          : `${
                              props.attributes.singleBorderRadius <= 50
                                ? props.attributes.singleBorderRadius
                                : 0
                            }px`
                      }`,
                    }}
                    className="spcom__single1_layout_banner spcom__font spcom__ellipsis line1"
                  >
                    {prod_props?.bannerText}
                  </div>
                )}
                <div className="shopper_dotcom_vertical_theme_text spcom__p-name_n_address">
                  <Picture
                    src={pdt.product_full_image}
                    alt="Product Image"
                    className="shopper_dotcom_vertical_theme_image"
                  />
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
                    {pdt.product_title}
                  </div>
                  {prod_props?.priceToggle && (
                    <div
                      style={{
                        fontSize: `${props.attributes.themeWidths?.priceFontSize}px`,
                        fontFamily: `${props.attributes.fontFamily}`,
                        fontStyle: `${props.attributes.fontStyle}`,
                        color: `${props.attributes.fontColor}`,
                        fontWeight: `${props.attributes.fontWeight}`,
                        textDecoration: `${props.attributes.textDecoration}`,
                      }}
                      className="spcom__product_price spcom__font"
                    >
                      {prod_props?.priceText}
                    </div>
                  )}
                  <div className="shopper_dotcom_vertical_theme_sub-text">
                    {prod_props?.pdtDescriptionToggle &&
                      props.attributes.prodsWithDescrptn && (
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
                            __html: pdt.product_description,
                          }}
                        ></div>
                      )}
                  </div>
                  <ButtonLayouts
                    props={props}
                    cur_prod={isLocalProdSettings() ? pdt : false}
                  />
                  <div
                    className={`shopper_dotcom_vertical_theme_bottom-text ${
                      index != 0 ? "shopper_dotcom_hide_element" : ""
                    }`}
                  >
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
                    <ShopperBacklink props={props} />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div
        className="sp_com_prod_scroll_btn prev spcom_buttonprev"
        disabled="true"
      >
        <div className="spcom-carasoul-btn">
          <Icon className="shopper_com___icon_common" icon={icons.leftArrow} />
        </div>
      </div>
      <div className="sp_com_prod_scroll_btn next spButtonNext">
        <div className="spcom-carasoul-btn">
          <Icon className="shopper_com___icon_common" icon={icons.rightArrow} />
        </div>
      </div>
    </div>
  );
}
