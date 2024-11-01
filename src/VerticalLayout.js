import ButtonLayouts from "./ButtonLayouts";
import ShopperBacklink from "./ShopperBacklink";
import Picture from "./Picture";

export default function VerticalLayout(props) {
  return (
    <div className="shopper_dotcom_single_container shopper_dotcom_aff_link shopper_dotcom_vertical_theme">
      <div
        style={{ margin: `${props.attributes.themeAlignment}` }}
        className="spcom__single_vertical_theme"
      >
        {props.attributes.singleTheme == "vertical" && (
          <div className="spcom__single_vertical_simple_container">
            <div
              style={{
                width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
                borderRadius: `${props.attributes.singleBorderRadius}px`,
                backgroundColor: `${props.attributes.bgColor}`,
              }}
              className="shopper_dotcom_vertical_theme_card"
            >
              <Picture
                src={props.attributes.selectedProduct["product_full_image"]}
                alt="Product Image"
                className="shopper_dotcom_vertical_theme_image"
                inlineStyle={{
                  borderTopLeftRadius: `${props.attributes.singleBorderRadius}px`,
                  borderTopRightRadius: `${props.attributes.singleBorderRadius}px`,
                }}
              />
              <div className="shopper_dotcom_vertical_theme_text spcom__p-name_n_address">
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
                <div className="shopper_dotcom_vertical_theme_sub-text">
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
                </div>
                <ButtonLayouts props={props} />
                <div className="shopper_dotcom_vertical_theme_bottom-text">
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
          </div>
        )}
        {props.attributes.singleTheme == "verticalOverlaped" && (
          <div
            style={{
              width: `${props.attributes.themeWidths?.themeContainerWidth}px`,
            }}
            className="shopper_dotcom_vertical_theme_card_overlaped"
          >
            <div className="shopper_dotcom_vertical_theme_blank_card" />
            <div
              style={{
                top: `${props.attributes.themeWidths?.singleOverlapedImgTop}px`,
                borderRadius: `${props.attributes.singleBorderRadius}px`,
              }}
              className="shopper_dotcom_vertical_theme_image-card"
            >
              <Picture
                src={props.attributes.selectedProduct["product_full_image"]}
                alt="Product Image"
                className="shopper_dotcom_vertical_theme_image"
              />
            </div>
            <div
              style={{
                left: `${props.attributes.themeWidths?.singleOverlapedTxtLeft}px`,
                background: `${props.attributes.bgColor}`,
              }}
              className="shopper_dotcom_vertical_theme_text-card"
            >
              <div className="shopper_dotcom_vertical_theme_text spcom__p-name_n_address">
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
                <div className="shopper_dotcom_vertical_theme_sub-text">
                  {props.attributes.pdtDescriptionToggle && (
                    <div
                      style={{
                        fontSize: `${props.attributes.themeWidths?.themePdescSize}px`,
                        fontFamily: `${props.attributes.fontFamily}`,
                        fontStyle: `${props.attributes.fontStyle}`,
                        color: `${props.attributes.fontColor}`,
                        textDecoration: `${props.attributes.textDecoration}`,
                      }}
                      className="spcom__p-desc spcom__font spcom__ellipsis line6"
                      dangerouslySetInnerHTML={{
                        __html:
                          props.attributes.selectedProduct[
                            "product_description"
                          ],
                      }}
                    ></div>
                  )}
                </div>
                <ButtonLayouts props={props} />
                <div className="shopper_dotcom_vertical_theme_bottom-text shopper_dotcom_vertical_theme_text-ellipsis">
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
          </div>
        )}
      </div>
    </div>
  );
}
