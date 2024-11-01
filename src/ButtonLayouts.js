export default function ButtonLayouts({ props, cur_prod = false }) {
  let prodProps = props.attributes;
  let pdtSlug = props.attributes.selectedProductOrCollnAffl;
  if (cur_prod) {
    prodProps = cur_prod.productProps;
    pdtSlug =
      props.attributes.linkCloakingSlugType == "name"
        ? cur_prod.pdt_name_slug
        : cur_prod.pdt_slug;
  }
  function generateRedirectionURL(slug) {
    let baseurl = window.location.origin;
    let redrnSlug = props.attributes.affRdrctnSlug;
    let redrctn_url = baseurl + "/" + redrnSlug + "/" + slug + "/";
    return redrctn_url;
  }
  return (
    <div className="spcom__single_buy_button1">
      {prodProps?.buttonLayout == "button1" && (
        <div className="shopper_dotcom_button_container">
          <a
            className="spcom_raw-a-text spcom_affiliate_anchor_tag"
            href={generateRedirectionURL(pdtSlug)}
            rel={props.attributes.relValue}
            data-link-type={
              props.attributes.buttonNewTabToggle ? "_blank" : "_self"
            }
          >
            <div
              style={{
                width: `${prodProps?.buttonWidth}%`,
                height: `${prodProps?.buttonHeight}px`,
                borderRadius: `${prodProps?.buttonRadius}px`,
                background: `${prodProps?.buttonColor}`,
                margin: `${prodProps?.collAlignment}`,
              }}
              className="spcom_commom_button_layout spcom_button_layout1 spcom__font"
            >
              <div
                className="spcom_button_common_text spcom__ellipsis"
                style={{
                  fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
                  fontFamily: `${prodProps?.buttonTextFont}`,
                  color: `${prodProps?.buttonTextColor}`,
                  fontStyle: `${prodProps?.buttonTextStyle}`,
                  fontWeight: `${prodProps?.buttonTextWeight}`,
                  textDecoration: `${prodProps?.buttonTextDecoration}`,
                }}
              >
                {prodProps?.buttonText}
              </div>
            </div>
          </a>
        </div>
      )}
      {prodProps?.buttonLayout == "button2" && (
        <div className="shopper_dotcom_button_container">
          <a
            className="spcom_raw-a-text spcom_affiliate_anchor_tag"
            href={generateRedirectionURL(pdtSlug)}
            rel={props.attributes.relValue}
            data-link-type={
              props.attributes.buttonNewTabToggle ? "_blank" : "_self"
            }
          >
            <div
              style={{
                width: `${prodProps?.buttonWidth}%`,
                height: `${prodProps?.buttonHeight}px`,
                borderRadius: `${prodProps?.buttonRadius}px`,
                background: `linear-gradient(${prodProps?.buttonColor},${prodProps?.buttonGradient})`,
                margin: `${prodProps?.collAlignment}`,
              }}
              className="spcom_commom_button_layout spcom_button_layout2 spcom__font"
            >
              <div
                className="spcom_button_common_text spcom__ellipsis"
                style={{
                  fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
                  fontFamily: `${prodProps?.buttonTextFont}`,
                  color: `${prodProps?.buttonTextColor}`,
                  fontStyle: `${prodProps?.buttonTextStyle}`,
                  fontWeight: `${prodProps?.buttonTextWeight}`,
                  textDecoration: `${prodProps?.buttonTextDecoration}`,
                }}
              >
                {prodProps?.buttonText}
              </div>
            </div>
          </a>
        </div>
      )}
      {prodProps?.buttonLayout == "button3" && (
        <div className="shopper_dotcom_button_container">
          <a
            className="spcom_raw-a-text spcom_affiliate_anchor_tag"
            href={generateRedirectionURL(pdtSlug)}
            rel={props.attributes.relValue}
            data-link-type={
              props.attributes.buttonNewTabToggle ? "_blank" : "_self"
            }
          >
            <div
              style={{
                width: `${prodProps?.buttonWidth}%`,
                height: `${prodProps?.buttonHeight}px`,
                borderRadius: `${prodProps?.buttonRadius}px`,
                background: `${prodProps?.buttonColor}`,
                margin: `${prodProps?.collAlignment}`,
              }}
              className="spcom_commom_button_layout spcom_button_layout3 spcom__font"
            >
              <div
                className="spcom_button_common_text spcom__ellipsis"
                style={{
                  fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
                  fontFamily: `${prodProps?.buttonTextFont}`,
                  color: `${prodProps?.buttonTextColor}`,
                  fontStyle: `${prodProps?.buttonTextStyle}`,
                  fontWeight: `${prodProps?.buttonTextWeight}`,
                  textDecoration: `${prodProps?.buttonTextDecoration}`,
                }}
              >
                {prodProps?.buttonText}
              </div>
            </div>
          </a>
        </div>
      )}
      {prodProps?.buttonLayout == "button4" && (
        <div className="shopper_dotcom_button_container">
          <a
            className="spcom_raw-a-text spcom_affiliate_anchor_tag"
            href={generateRedirectionURL(pdtSlug)}
            rel={props.attributes.relValue}
            data-link-type={
              props.attributes.buttonNewTabToggle ? "_blank" : "_self"
            }
          >
            <div
              style={{
                width: `${prodProps?.buttonWidth}%`,
                height: `${prodProps?.buttonHeight}px`,
                borderRadius: `${prodProps?.buttonRadius}px`,
                background: `${prodProps?.buttonColor}`,
                margin: `${prodProps?.collAlignment}`,
              }}
              className="spcom_commom_button_layout spcom_button_layout4 spcom__font"
            >
              <div
                className="spcom_button_common_text spcom__ellipsis"
                style={{
                  fontSize: `${props.attributes.themeWidths?.btnFontSize}px`,
                  fontFamily: `${prodProps?.buttonTextFont}`,
                  color: `${prodProps?.buttonTextColor}`,
                  fontStyle: `${prodProps?.buttonTextStyle}`,
                  fontWeight: `${prodProps?.buttonTextWeight}`,
                  textDecoration: `${prodProps?.buttonTextDecoration}`,
                }}
              >
                {prodProps?.buttonText}
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
