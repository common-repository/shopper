// Import WordPress Components.
import { RichTextToolbarButton, URLPopover } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import icons from "./icons.js";
import {
  applyFormat,
  registerFormatType,
  useAnchorRef,
} from "@wordpress/rich-text";

// Create shopper affiliate button with Popover for product/collection selection.
const ShopperAffiliateButton = (props) => {
  
  const { contentRef, isActive, onChange, value } = props;
  const anchorRef = useAnchorRef({ ref: contentRef, value });

  // State to show popover.
  const [showPopover, setShowPopover] = useState(false);
  const [showSearchResults, setshowSearchResults] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [allCollections, setAllCollections] = useState([]);

  function searchproduct(event) {
    let searchurl = "shopper/v1/search/?searchtext=" + event.target.value;
    wp.apiFetch({
      path: searchurl,
    }).then((filteredcollPdts) => {
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
      attributes.rel="nofollow sponsored noopener";
      attributes.className = "shopper_dot_com-affiliate-link";
      onChange(
        applyFormat(value, {
          type: "a",
          attributes,
        })
      );
      setShowPopover(false);
    }
  }

  return (
    <>
      <RichTextToolbarButton
        isActive={isActive}
        icon={icons.shopper}
        onClick={() => {
          setShowPopover(true);
        }}
        title={__("Affiliate Link", "shopper-dot-com/affiliatelink")}
      />
      {showPopover && (
        <>
          <URLPopover
            anchorRef={anchorRef}
            className="shopper-aff-link-ins-container"
            onClose={() => setShowPopover(false)}
          >
            <input
              className="spcom__font spcom__ellipsis"
              type="search"
              placeholder="Search"
              onChange={searchproduct}
            />
            {showSearchResults && (
              <>
                <div className="shopper_searched_aff_links_list">
                  {Object.entries(allProducts).map(([key, val]) => (
                    <div
                      className="shopper_aff_link_element"
                      onClick={() => applyShopperLink(val["products_affilate"])}
                    >
                      <div className="spcom__p-name spcom__font spcom__ellipsis line1">
                        {val["product_title"]}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </URLPopover>
        </>
      )}
    </>
  );
};

// Register the Format.
registerFormatType("shopper-dot-com/affiliate-link", {
  className: "shopper_dot_com-affiliate-link",
  edit: ShopperAffiliateButton,
  tagName: "shopper",
  title: __("Affiliate Link", "shopper-dot-com/affiliatelink"),
});
