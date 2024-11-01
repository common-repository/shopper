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
    let slider_wrapper = document.getElementsByClassName(
      "sp_com_slider-wrapper"
    );
    for (let i = 0; i < slider_wrapper.length; i++) {
      if (
        slider_wrapper[i].scrollWidth !=
        Math.max(slider_wrapper[i].offsetWidth, slider_wrapper[i].clientWidth)
      ) {
        // hide the scroll buttons if no overflow
        slider_wrapper[i].parentElement.querySelector(
          ".spButtonNext"
        ).style.display = "flex";
        slider_wrapper[i].parentElement.querySelector(
          ".spcom_buttonprev"
        ).style.display = "flex";
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
    let aff_link_container = document.getElementsByClassName(
      "shopper_dotcom_aff_link"
    );
    for (let i = 0; i < aff_link_container.length; i++) {
      aff_link_container[i].addEventListener("click", this.affButtonClick);
    }
    let back_link_hover = document.getElementsByClassName(
      "shopper_backlink_hover"
    );
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
        let aff_url_red_type =
          aff_button.getAttribute("data-link-type") || "_self";
        if (aff_url_red_type == "_self") window.location.href = redirctn_url;
        else window.open(redirctn_url, "_blank");
      }
    }
  },
  backLinkClick: function (ev) {
    ev.stopPropagation();
  },
  // carousel prev button click
  prevButtonClick: function (ev) {
    let $slider = ev.target
      .closest(".sp_com_slider-container")
      .querySelector(".sp_com_slider-wrapper");
    if ($slider) {
      let $child = $slider.querySelector(".child");
      let positionInfo = $child.getBoundingClientRect();
      let width = positionInfo.width;
      $slider.scrollLeft -= (width + _pading) * _skip_length;
    }
  },
  // carousel next button click
  nextButtonClick: function (ev) {
    let $slider = ev.target
      .closest(".sp_com_slider-container")
      .querySelector(".sp_com_slider-wrapper");
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
  },
};

// initialise after page load completed
window.onload = (event) => {
  StorePageUtils.init();
};
