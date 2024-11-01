jQuery(document).ready(function ($) {
  $(function () {
    $("#shopper-dotcom-wp-settings-tabs").tabs();
  });

  var integrate_now = document.getElementById("spcom_integrate_now_link");
  var integrate_now_anchor = document.getElementById(
    "spcom_integrate_now_anchor"
  );
  var connect_now = document.getElementById("spcom_home_connect_now");
  var toggle_referral = document.getElementById("spcom_enable_referral_link");
  if (integrate_now) {
    integrate_now.onclick = function () {
      document.getElementById("shopper-dotcom-connection-tab").click();
    };
  }
  if (integrate_now_anchor) {
    integrate_now_anchor.onclick = function () {
      document.getElementById("shopper-dotcom-connection-tab").click();
    };
  }
  if (connect_now) {
    connect_now.onclick = function () {
      document.getElementById("shopper-dotcom-connection-tab").click();
    };
  }
  if (toggle_referral) {
    toggle_referral.addEventListener("change", function () {
      document.getElementById("shopper-referral-settings-save").click();
    });
  }

  const textField = document.getElementById("shopper_user_referral_link");
  const copyButton = document.getElementById("spcom_referral_link_copy_button");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      try {
        // Copy the text field content to the clipboard
        await navigator.clipboard.writeText(textField.value);
      } catch (err) {
        console.error("Failed to copy text to clipboard", err);
      }

      // Provide visual feedback to the user
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 2000);
    });
  }

  function spcom_toggle_inputs() {
    if ($("#spcom_enable_store").is(":checked")) {
      $(
        "#shopper-store-input-label1,#shopper-store-input-label2,#shopper-store-input-label3,#shopper-store-input-label4,#shopper-store-input-label5"
      ).removeClass("shopper-dotcom-input-label-disabled");
      $(
        "#shopper-dotcom-store-input1,#shopper-dotcom-store-input2,#shopper-dotcom-store-input3,#shopper-dotcom-store-input4,#cars"
      ).prop("disabled", false);
      $(
        "#shopper-dotcom-store-input1,#shopper-dotcom-store-input2,#shopper-dotcom-store-input3,#shopper-dotcom-store-input4,#cars"
      ).removeClass("spcom-inputs-disabled");
      $("#shopper-dotcom-wp-prievw-store").css("display", "block");
    } else {
      $(
        "#shopper-store-input-label1,#shopper-store-input-label2,#shopper-store-input-label3,#shopper-store-input-label4,#shopper-store-input-label5"
      ).addClass("shopper-dotcom-input-label-disabled");
      $(
        "#shopper-dotcom-store-input1,#shopper-dotcom-store-input2,#shopper-dotcom-store-input3,#shopper-dotcom-store-input4,#cars"
      ).prop("disabled", true);
      $(
        "#shopper-dotcom-store-input1,#shopper-dotcom-store-input2,#shopper-dotcom-store-input3,#shopper-dotcom-store-input4,#cars"
      ).addClass("spcom-inputs-disabled");
      $("#shopper-dotcom-wp-prievw-store").css("display", "none");
    }
  }
  spcom_toggle_inputs();
  $("#spcom_enable_store").on("click", function (e) {
    spcom_toggle_inputs();
  });

  function spcom_store_slug_validation(e) {
    var regex = new RegExp("^[0-9a-zA-Z_-]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  function spcom_store_num_validation(e) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  $("#shopper-dotcom-store-input1,#shopper-link-cust-prefix-input").keypress(
    function (e) {
      spcom_store_slug_validation(e);
    }
  );
  $("#shopper-link-prefix-select").on("change", function (e) {
    $("#shopper-link-cust-prefix-input").val(
      $("#shopper-link-prefix-select").val()
    );
  });
  $("#shopper-dotcom-store-input2,#shopper-dotcom-store-input3").keypress(
    function (e) {
      spcom_store_num_validation(e);
    }
  );
  window.addEventListener(
    "message",
    function (event) {
      let { jwtToken = null } = event.data;
      if (jwtToken) {
        $("#spcom_login_token").val(jwtToken);
        document
          .getElementById("shopper-dotcom-wp-settings-form-sub-button")
          .click();
      }
    },
    false
  );

  var logout_button = document.getElementById(
    "shopper-dotcom-wp-settings-logout-button"
  );
  if (logout_button) {
    logout_button.onclick = function () {
      $("#spcom_login_token").val("logout-clicked");
      document
        .getElementById("shopper-dotcom-wp-settings-form-sub-button")
        .click();
    };
  }

  var sync_button = document.getElementById(
    "shopper-dotcom-wp-settings-sync-button"
  );
  if (sync_button) {
    sync_button.onclick = function () {
      $("#spcom_login_token").val("sync-now");
      document
        .getElementById("shopper-dotcom-wp-settings-form-sub-button")
        .click();
    };
  }

  var debug_toggle_button = document.getElementById("spcom_debug_toggle");
  if (debug_toggle_button) {
    debug_toggle_button.onclick = function () {
      $("#spcom_login_token").val("toggle-debugger");
      document
        .getElementById("shopper-dotcom-wp-settings-form-sub-button")
        .click();
    };
  }

  var not_cnntd_close = document.getElementById("spcom_not_cnntd_banner_close");
  if (not_cnntd_close) {
    not_cnntd_close.onclick = function () {
      $("#spcom_not_connected_txt_banner").css("display", "none");
    };
  }
  var free_version_close_btn = document.getElementById(
    "spcom_free_version_banner_close"
  );
  if (free_version_close_btn) {
    free_version_close_btn.onclick = function () {
      $("#spcom_free_version_upgrade_banner").css("display", "none");
    };
  }

  function updateShopperQueryString(val) {
    if (history.pushState) {
      let searchParams = new URLSearchParams(window.location.search);
      if (
        searchParams.has("page") &&
        searchParams.get("page") == "shopper-dotcom-wp-options"
      ) {
        searchParams.set("tab", val);
        let newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?" +
          searchParams.toString();
        window.history.pushState({ path: newurl }, "", newurl);
      }
    }
  }

  var connection_tab = document.getElementById("shopper-dotcom-connection-tab");
  if (connection_tab) {
    connection_tab.onclick = function () {
      updateShopperQueryString("account-info");
    };
  }

  var settings_tab = document.getElementById("shopper-dotcom-settings-tab");
  if (settings_tab) {
    settings_tab.onclick = function () {
      updateShopperQueryString("store-settings");
    };
  }
  var import_tab = document.getElementById("shopper-dotcom-import-tab");
  if (import_tab) {
    import_tab.onclick = function () {
      updateShopperQueryString("import-settings");
    };
  }
  var global_settings_tab = document.getElementById(
    "shopper-dotcom-global-settings-tab"
  );
  if (global_settings_tab) {
    global_settings_tab.onclick = function () {
      updateShopperQueryString("global-settings");
    };
  }

  var links_tab = document.getElementById("shopper-dotcom-links-tab");
  if (links_tab) {
    links_tab.onclick = function () {
      updateShopperQueryString("link-settings");
    };
  }

  var referral_tab = document.getElementById("shopper-dotcom-referral-tab");
  if (referral_tab) {
    referral_tab.onclick = function () {
      updateShopperQueryString("referral-settings");
    };
  }

  var home_tab = document.getElementById("shopper-dotcom-home-tab");
  if (home_tab) {
    home_tab.onclick = function () {
      updateShopperQueryString("shopper-home");
    };
  }

  var help_tab = document.getElementById("shopper-dotcom-help-tab");
  if (help_tab) {
    help_tab.onclick = function () {
      updateShopperQueryString("shopper-help");
    };
  }

  var go_premium = document.getElementById("shopper-dotcom-go-premium");
  if (go_premium) {
    go_premium.onclick = function () {
      window.open(
        "https://www.shopper.com/wordpress-affiliate-plugin",
        "_blank"
      );
    };
  }

  let searchParams = new URLSearchParams(window.location.search);
  if (
    searchParams.has("page") &&
    searchParams.has("tab") &&
    searchParams.get("page") == "shopper-dotcom-wp-options"
  ) {
    if (searchParams.get("tab") == "account-info") {
      document.getElementById("shopper-dotcom-connection-tab").click();
    } else if (searchParams.get("tab") == "store-settings") {
      document.getElementById("shopper-dotcom-settings-tab").click();
    } else if (searchParams.get("tab") == "import-settings") {
      document.getElementById("shopper-dotcom-import-tab").click();
    } else if (searchParams.get("tab") == "global-settings") {
      document.getElementById("shopper-dotcom-global-settings-tab").click();
    } else if (searchParams.get("tab") == "link-settings") {
      document.getElementById("shopper-dotcom-links-tab").click();
    } else if (searchParams.get("tab") == "referral-settings") {
      document.getElementById("shopper-dotcom-referral-tab").click();
    } else if (searchParams.get("tab") == "shopper-home") {
      document.getElementById("shopper-dotcom-home-tab").click();
    } else if (searchParams.get("tab") == "shopper-help") {
      document.getElementById("shopper-dotcom-help-tab").click();
    }
  }

  // show global settings preview on the fly
  $("#shopper-global-btn-layout").on("change", function (e) {
    switch (e.target.value) {
      case "button1":
        applyStyleToClass("shopper-global-btn-grdnt-container", {
          display: "none",
        });
        applyStyleToClass("spcom_button_layout4", { borderRadius: "35px" });
        $("#shopper-global-btn-radius").val(35);
        applyStyleToClass("spcom_button_layout4", { color: "#FFFFFF" });
        $("#shopper-global-btn-txt-clr-picker").val("#FFFFFF");
        $("#shopper-global-btn-txt-clr").val("#FFFFFF");
        applyStyleToClass("spcom_button_layout4", {
          background: "#535C61",
        });
        $("#shopper-global-btn-bg-clr-picker").val("#535C61");
        $("#shopper-global-btn-bg-clr").val("#535C61");
        applyStyleToClass("spcom_button_layout4", { border: "none" });
        break;
      case "button2":
        applyStyleToClass("shopper-global-btn-grdnt-container", {
          display: "block",
        });
        applyStyleToClass("spcom_button_layout4", { borderRadius: "2px" });
        $("#shopper-global-btn-radius").val(2);
        applyStyleToClass("spcom_button_layout4", { color: "#000000" });
        $("#shopper-global-btn-txt-clr-picker").val("#000000");
        $("#shopper-global-btn-txt-clr").val("#000000");
        applyStyleToClass("spcom_button_layout4", {
          background: "linear-gradient(#FFFFFF,#C6C6D7)",
        });
        $("#shopper-global-btn-bg-clr-picker").val("#FFFFFF");
        $("#shopper-global-btn-bg-clr").val("#FFFFFF");
        $("#shopper-global-btn-grdnt-clr-picker").val("#C6C6D7");
        $("#shopper-global-btn-grdnt-clr").val("#C6C6D7");
        applyStyleToClass("spcom_button_layout4", {
          border: "0.25px solid #240404",
        });
        break;
      case "button3":
        applyStyleToClass("shopper-global-btn-grdnt-container", {
          display: "none",
        });
        applyStyleToClass("spcom_button_layout4", { borderRadius: "5px" });
        $("#shopper-global-btn-radius").val(5);
        applyStyleToClass("spcom_button_layout4", { color: "#000000" });
        $("#shopper-global-btn-txt-clr-picker").val("#000000");
        $("#shopper-global-btn-txt-clr").val("#000000");
        applyStyleToClass("spcom_button_layout4", {
          background: "#FFFFFF",
        });
        $("#shopper-global-btn-bg-clr-picker").val("#FFFFFF");
        $("#shopper-global-btn-bg-clr").val("#FFFFFF");
        applyStyleToClass("spcom_button_layout4", {
          border: "2px solid #240404",
        });
        break;
      case "button4":
        applyStyleToClass("shopper-global-btn-grdnt-container", {
          display: "none",
        });
        applyStyleToClass("spcom_button_layout4", { borderRadius: "5px" });
        $("#shopper-global-btn-radius").val(5);
        applyStyleToClass("spcom_button_layout4", { color: "#FFFFFF" });
        $("#shopper-global-btn-txt-clr-picker").val("#FFFFFF");
        $("#shopper-global-btn-txt-clr").val("#FFFFFF");
        applyStyleToClass("spcom_button_layout4", {
          background: "#F25225",
        });
        $("#shopper-global-btn-bg-clr-picker").val("#F25225");
        $("#shopper-global-btn-bg-clr").val("#F25225");
        applyStyleToClass("spcom_button_layout4", { border: "none" });
        break;
      default:
        break;
    }
  });
  $("#shopper-global-btn-width").on("change", function (e) {
    applyStyleToClass("spcom_button_layout4", { width: e.target.value + "%" });
  });
  $("#shopper-global-btn-height").on("change", function (e) {
    applyStyleToClass("spcom_button_layout4", {
      height: e.target.value + "px",
    });
  });

  //btn text clr
  $("#shopper-global-btn-txt-clr").keyup(function (e) {
    $("#shopper-global-btn-txt-clr-picker").val(e.target.value);
    applyStyleToClass("spcom_button_layout4", { color: e.target.value });
  });
  $("#shopper-global-btn-txt-clr-picker").on("input", function (e) {
    $("#shopper-global-btn-txt-clr").val(e.target.value);
    applyStyleToClass("spcom_button_layout4", {
      color: e.target.value,
    });
  });
  //btn text clr

  $("#shopper-global-btn-font-family").on("change", function (e) {
    applyStyleToClass("spcom_button_common_text", {
      fontFamily: e.target.value,
    });
  });
  $("#shopper-global-btn-radius").on("input", function (e) {
    applyStyleToClass("spcom_button_layout4", {
      borderRadius: e.target.value + "px",
    });
  });

  // btn clr picker
  $("#shopper-global-btn-bg-clr").keyup(function (e) {
    let btnlayout = $("#shopper-global-btn-layout").val();
    let gradientClr = $("#shopper-global-btn-grdnt-clr").val();
    if (btnlayout != "button2") {
      applyStyleToClass("spcom_button_layout4", {
        background: e.target.value,
      });
    } else {
      applyStyleToClass("spcom_button_layout4", {
        background:
          "linear-gradient(" + e.target.value + "," + gradientClr + ")",
      });
    }
    $("#shopper-global-btn-bg-clr-picker").val(e.target.value);
  });
  $("#shopper-global-btn-bg-clr-picker").on("input", function (e) {
    let btnlayout = $("#shopper-global-btn-layout").val();
    let gradientClr = $("#shopper-global-btn-grdnt-clr").val();
    if (btnlayout != "button2") {
      applyStyleToClass("spcom_button_layout4", {
        background: e.target.value,
      });
    } else {
      applyStyleToClass("spcom_button_layout4", {
        background:
          "linear-gradient(" + e.target.value + "," + gradientClr + ")",
      });
    }
    $("#shopper-global-btn-bg-clr").val(e.target.value);
  });
  // btn clr picker

  // btn gradient picker
  $("#shopper-global-btn-grdnt-clr").keyup(function (e) {
    let bgClr = $("#shopper-global-btn-bg-clr").val();
    $("#shopper-global-btn-grdnt-clr-picker").val(e.target.value);
    applyStyleToClass("spcom_button_layout4", {
      background: "linear-gradient(" + bgClr + "," + e.target.value + ")",
    });
  });
  $("#shopper-global-btn-grdnt-clr-picker").on("input", function (e) {
    let bgClr = $("#shopper-global-btn-bg-clr").val();
    $("#shopper-global-btn-grdnt-clr").val(e.target.value);
    applyStyleToClass("spcom_button_layout4", {
      background: "linear-gradient(" + bgClr + "," + e.target.value + ")",
    });
  });
  // btn gradient picker

  $("#shopper-global-theme-font-family").on("change", function (e) {
    applyStyleToClass("spcom__p-name", {
      fontFamily: e.target.value,
    });
    applyStyleToClass("spcom__p-desc", {
      fontFamily: e.target.value,
    });
  });
  $("#shopper-global-theme-font-style").on("change", function (e) {
    applyStyleToClass("spcom__p-name", {
      fontStyle: e.target.value,
    });
    applyStyleToClass("spcom__p-desc", {
      fontStyle: e.target.value,
    });
  });
  $("#shopper-global-theme-font-weight").on("change", function (e) {
    applyStyleToClass("spcom__p-name", {
      fontWeight: e.target.value,
    });
  });
  $("#shopper-global-theme-txt-decrn").on("change", function (e) {
    applyStyleToClass("spcom__p-name", {
      textDecoration: e.target.value,
    });
    applyStyleToClass("spcom__p-desc", {
      textDecoration: e.target.value,
    });
  });

  // theme txt color
  $("#shopper-global-theme-txt-clr").keyup(function (e) {
    $("#shopper-global-theme-txt-clr-picker").val(e.target.value);
    applyStyleToClass("spcom__p-name", {
      color: e.target.value,
    });
    applyStyleToClass("spcom__p-desc", {
      color: e.target.value,
    });
  });
  $("#shopper-global-theme-txt-clr-picker").on("input", function (e) {
    $("#shopper-global-theme-txt-clr").val(e.target.value);
    applyStyleToClass("spcom__p-name", {
      color: e.target.value,
    });
    applyStyleToClass("spcom__p-desc", {
      color: e.target.value,
    });
  });
  // theme txt color

  // theme bg color
  $("#shopper-global-theme-bg-clr").keyup(function (e) {
    $("#shopper-global-theme-bg-clr-picker").val(e.target.value);
    applyStyleToClass("spcom__single1_layout", {
      backgroundColor: e.target.value,
    });
  });
  $("#shopper-global-theme-bg-clr-picker").on("input", function (e) {
    $("#shopper-global-theme-bg-clr").val(e.target.value);
    applyStyleToClass("spcom__single1_layout", {
      backgroundColor: e.target.value,
    });
  });
  // theme bg color

  $("#shopper-global-theme-radius").on("input", function (e) {
    applyStyleToClass("spcom__single1_layout", {
      borderRadius: e.target.value + "px",
    });
    applyStyleToClass("spcom__single1_layout_container", {
      borderRadius: e.target.value + "px",
    });
  });
  $("#shopper-global-theme-padding").on("input", function (e) {
    applyStyleToClass("spcom__single1_layout_container", {
      padding: e.target.value + "px",
    });
  });

  // padding color
  $("#shopper-global-theme-padding-clr").keyup(function (e) {
    $("#shopper-global-theme-padding-clr-picker").val(e.target.value);
    applyStyleToClass("spcom__single1_layout_container", {
      backgroundColor: e.target.value,
    });
  });
  $("#shopper-global-theme-padding-clr-picker").on("input", function (e) {
    $("#shopper-global-theme-padding-clr").val(e.target.value);
    applyStyleToClass("spcom__single1_layout_container", {
      backgroundColor: e.target.value,
    });
  });
  // padding color

  function applyStyleToClass(className, styleAttribute) {
    // Find all elements with the specified class
    var elements = $("." + className);

    // Apply the style attribute to each element
    elements.css(styleAttribute);
  }

  function setGlobalValuesOnload() {
    applyStyleToClass("spcom_button_layout4", {
      width: $("#shopper-global-btn-width").val() + "%",
    });
    applyStyleToClass("spcom_button_layout4", {
      height: $("#shopper-global-btn-height").val() + "px",
    });
    applyStyleToClass("spcom_button_layout4", {
      color: $("#shopper-global-btn-txt-clr").val(),
    });
    applyStyleToClass("spcom_button_common_text", {
      fontFamily: $("#shopper-global-btn-font-family").val(),
    });
    applyStyleToClass("spcom_button_layout4", {
      borderRadius: $("#shopper-global-btn-radius").val() + "px",
    });
    let btnlayout = $("#shopper-global-btn-layout").val();
    let btnBgClr = $("#shopper-global-btn-bg-clr").val();
    let gradientClr = $("#shopper-global-btn-grdnt-clr").val();
    if (btnlayout != "button2") {
      applyStyleToClass("spcom_button_layout4", {
        background: btnBgClr,
      });
    } else {
      applyStyleToClass("shopper-global-btn-grdnt-container", {
        display: "block",
      });
      applyStyleToClass("spcom_button_layout4", {
        background: "linear-gradient(" + btnBgClr + "," + gradientClr + ")",
      });
    }

    applyStyleToClass("spcom__p-name", {
      fontFamily: $("#shopper-global-theme-font-family").val(),
    });
    applyStyleToClass("spcom__p-desc", {
      fontFamily: $("#shopper-global-theme-font-family").val(),
    });
    applyStyleToClass("spcom__p-name", {
      fontStyle: $("#shopper-global-theme-font-style").val(),
    });
    applyStyleToClass("spcom__p-desc", {
      fontStyle: $("#shopper-global-theme-font-style").val(),
    });
    applyStyleToClass("spcom__p-name", {
      fontWeight: $("#shopper-global-theme-font-weight"),
    });
    applyStyleToClass("spcom__p-name", {
      textDecoration: $("#shopper-global-theme-txt-decrn").val(),
    });
    applyStyleToClass("spcom__p-desc", {
      textDecoration: $("#shopper-global-theme-txt-decrn").val(),
    });
    applyStyleToClass("spcom__p-name", {
      color: $("#shopper-global-theme-txt-clr").val(),
    });
    applyStyleToClass("spcom__p-desc", {
      color: $("#shopper-global-theme-txt-clr").val(),
    });
    applyStyleToClass("spcom__single1_layout", {
      backgroundColor: $("#shopper-global-theme-bg-clr").val(),
    });
    applyStyleToClass("spcom__single1_layout", {
      borderRadius: $("#shopper-global-theme-radius").val() + "px",
    });
    applyStyleToClass("spcom__single1_layout_container", {
      borderRadius: $("#shopper-global-theme-radius").val() + "px",
    });
    applyStyleToClass("spcom__single1_layout_container", {
      padding: $("#shopper-global-theme-padding").val() + "px",
    });
    applyStyleToClass("spcom__single1_layout_container", {
      backgroundColor: $("#shopper-global-theme-padding-clr").val(),
    });
  }

  // initialise after page load completed
  window.onload = () => {
    setGlobalValuesOnload();
  };
});
