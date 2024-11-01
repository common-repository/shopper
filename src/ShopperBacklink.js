export default function ShopperBacklink({ props }) {
  const { enableReferralLink, doesReferralLinkExist, referralLink } =
    props.attributes;

  return (
    !enableReferralLink || doesReferralLinkExist ? null : (
      <div className="shopper_referral_container">
        <div className="shopper_referral_icon">i</div>
        <div className="shopper_backlink_hover">
          <div className="spcom__font">
            Powered by{" "}
            <a
              className="spcom_raw-a-text"
              target="_blank"
              href={referralLink}
              rel="noopener"
            >
              Shopper.com
            </a>
          </div>
        </div>
      </div>
    )
  );
}