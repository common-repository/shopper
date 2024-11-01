import ButtonLayouts from "./ButtonLayouts";
import ShopperBacklink from "./ShopperBacklink";
import Picture from "./Picture";

export default function HorizontalLayout1(props) {
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
    <div className="spcom__horizontal_container spcom__horizontal_theme2">
      {Object.entries(props.attributes.multiProductsSelected).map(
        ([index, pdt]) => {
          prod_props = isLocalProdSettings()
            ? pdt.productProps
            : props.attributes;
          return (
            <div
              style={{
                width: `${props.attributes.themeWidths?.themeContainerWidth}%`,
                backgroundColor: `${props.attributes.bgColor}`,
                flexDirection: `${prod_props?.bannerPosition}`,
                borderRadius: `${props.attributes.singleBorderRadius}px`,
                margin: `${props.attributes.themeAlignment}`,
              }}
              className="shopper_dotcom_horizontal_theme_card shopper_dotcom_aff_link"
            >
              <div
                style={{
                  flexDirection: `${prod_props?.bannerPosition}`,
                }}
                className="shopper_dotcom_single_container"
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
                      borderRadius: `${
                        prod_props?.bannerPosition == "row"
                          ? "10px 10px 10px 0px"
                          : "10px 10px 0px 10px"
                      }`,
                    }}
                    className="spcom__single1_layout_banner spcom__font"
                  >
                    {prod_props?.bannerText}
                  </div>
                )}
                <div
                  style={{
                    background: `${props.attributes.bgColor}`,
                    borderRadius: `${props.attributes.singleBorderRadius}px`,
                    borderRight: `${
                      prod_props?.bannerPosition == "row"
                        ? "0px"
                        : "4px solid" + prod_props?.bannerBgColor
                    }`,
                    borderLeft: `${
                      prod_props?.bannerPosition == "row"
                        ? "4px solid" + prod_props?.bannerBgColor
                        : "0px"
                    }`,
                  }}
                  className="spcom__single1_layout spcom__font"
                >
                  <div
                    className={`spcom_hrzntl_img_txt_btns ${
                      !pdt.product_description?.length
                        ? "spcom_align_center"
                        : ""
                    }`}
                  >
                    <div className="sp_com__image_container">
                      <Picture
                        src={pdt.product_full_image}
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
                      {prod_props?.pdtDescriptionToggle && (
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
                    <div className="spcom_horizontal_button_layouts">
                      <ButtonLayouts
                        props={props}
                        cur_prod={isLocalProdSettings() ? pdt : false}
                      />
                    </div>
                  </div>
                  <div className="spcom_hrzntl_aff_dsclr">
                    {index ==
                      props.attributes.multiProductsSelected.length - 1 && (
                      <>
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}