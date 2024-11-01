<?php
function shopper_connection_settings_form()
{
    global $wpdb;
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
        $url_h = "https://";
    else
        $url_h = "http://";
    $api_id = $enable_store = $store_name = $collection_per_page =
        $product_per_page = $cars = $is_account_connected = $profile_name = $user_name = "";
    $enable_tracking = "1";
    $enable_referral_link = $is_free_plan = 1;
    $dynamic_input_class = 'shopper-dotcom-wp-settings-apiform';
    $shopper_connection_table = $wpdb->prefix . "shopper_dot_com_auth";
    $shopper_store = $wpdb->prefix . "shopper_dot_com_store";
    $spcom_aff_slugs = $wpdb->prefix . "shopper_dot_com_aff_slugs";
    $global_settings_table = $wpdb->prefix . "shopper_dot_com_global_settings";

    $query_select = "SELECT * FROM $shopper_connection_table";
    $select_result = $wpdb->get_row($query_select);
    $ConnectionArray = json_decode(json_encode($select_result), true);
    if ($ConnectionArray) {
        $api_id = $ConnectionArray['id'];
        $enable_tracking = $ConnectionArray['debug_status'];
        $is_account_connected = $ConnectionArray['connection_status'];
        $profile_name = $ConnectionArray['profile_name'];
        $user_name = $ConnectionArray['user_name'];
        $is_free_plan = $ConnectionArray['is_free_plan'];
        $enable_referral_link = $ConnectionArray['enable_referral_link'];
    }

    $referral_link = "https://www.shopper.com/";

    if ($user_name) {
        $referral_link .= 'join/' . $user_name;
    }

    if ($is_free_plan == 1) {
        $dynamic_input_class .= ' shopper_inputs_disabled';
    }

    $query_setting = "SELECT * FROM $shopper_store ";
    $setting_result = $wpdb->get_row($query_setting);
    $settting_Array = json_decode(json_encode($setting_result), true);
    if ($settting_Array) {
        $s_id = $settting_Array['id'];
        $store_name = $settting_Array['store_name'];
        $collection_per_page = $settting_Array['collection_per_page'];
        ~$product_per_page = $settting_Array['product_per_page'];
        $cars = $settting_Array['cars'];
        $store_title = $settting_Array['store_title'];
        $enable_store = $settting_Array['store_enable'];
        $link_slug_type = $settting_Array['link_cloaking_slug_type'] ? $settting_Array['link_cloaking_slug_type'] : "name";
        $link_redirect_type = $settting_Array['link_cloaking_redirect_type'] ? $settting_Array['link_cloaking_redirect_type'] : "302";
        $link_prefix_selection = $settting_Array['link_cloaking_prefix'] ? $settting_Array['link_cloaking_prefix'] : "p";
        $link_prefix_custom = $settting_Array['link_cloaking_prefix_custom'] ? $settting_Array['link_cloaking_prefix_custom'] : "p";
        $store_url = sanitize_url($url_h . $_SERVER['HTTP_HOST'] . "/" . $store_name);
    } elseif (!($settting_Array && isset($_POST['submit']) && isset($_POST['save']))) {        //if no data save default values to table
        $store_enable = "disabled";
        $store_name = "store";
        $collection_per_page = "6";
        $product_per_page = "6";
        $cars = "Collections";
        $store_title = "My Product Collections";
        $link_redirect_type = "302";
        $link_slug_type = "name";
        $link_prefix_selection = "p";
        $link_prefix_custom = "p";
        $store_url = sanitize_url($url_h . $_SERVER['HTTP_HOST'] . "/" . $store_name);
        $write_status = $wpdb->insert($shopper_store, array('store_enable' => $store_enable, 'store_name' => $store_name, 'collection_per_page' => $collection_per_page, 'product_per_page' => $product_per_page, 'cars' => $cars, 'store_title' => $store_title));
    }

    $aff_table_query_string = "SELECT * FROM $spcom_aff_slugs ";
    $aff_table_query_result = $wpdb->get_results($aff_table_query_string);
    $aff_redrn_slugs_data = json_decode(json_encode($aff_table_query_result), true);
    $aff_redrn_slugs = [];
    if ($aff_redrn_slugs_data) {
        foreach ($aff_redrn_slugs_data as $slug_obj) {
            array_push($aff_redrn_slugs, $slug_obj['slug']);
        }
    } else { //if no data save default values to table
        $aff_redrn_slugs = ["p", "links", "recommend", "buy", "checkout", "affiliate", "connect", "go"];
        foreach ($aff_redrn_slugs as $slug) {
            $write_status = $wpdb->insert($spcom_aff_slugs, array('slug' => $slug));
        }
    }

    $query_global_settings = "SELECT * FROM $global_settings_table";
    $global_query_result = $wpdb->get_row($query_global_settings);
    $global_settings_array = json_decode(json_encode($global_query_result), true);
    $button_font_family = $theme_font_family = $theme_font_style = $theme_text_decoration = null;
    $button_width = 100;
    $button_layout = "button1";
    $button_height = 44;
    $button_text_colour = "#FFFFFF";
    $button_radius = 10;
    $button_bg_colour = "#170703";
    $button_grdnt_colour = "#C6C6D7";
    $theme_font_weight = "bold";
    $theme_text_colour = "#000000";
    $theme_bg_colour = "#fff5f5";
    $theme_outer_radius = 10;
    $theme_padding = 4;
    $theme_padding_colour = "#766d6b";
    if ($global_settings_array) {
        $global_stngs_row_id = $global_settings_array['id'];
        $default_props = json_decode($global_settings_array['default_props'], true);
        $button_layout = $default_props['buttonLayout'];
        $button_width = $default_props['buttonWidth'];
        $button_height = $default_props['buttonHeight'];
        $button_text_colour = $default_props['buttonTextColor'];
        $button_font_family = $default_props['buttonTextFont'];
        $button_radius = $default_props['buttonRadius'];
        $button_bg_colour = $default_props['buttonColor'];
        $button_grdnt_colour = $default_props['buttonGradient'];
        $theme_font_family = $default_props['fontFamily'];
        $theme_font_style = $default_props['fontStyle'];
        $theme_font_weight = $default_props['fontWeight'];
        $theme_text_decoration = $default_props['textDecoration'];
        $theme_text_colour = $default_props['fontColor'];
        $theme_bg_colour = $default_props['bgColor'];
        $theme_outer_radius = $default_props['singleBorderRadius'];
        $theme_padding = $default_props['singleBorderWidth'];
        $theme_padding_colour = $default_props['singleBorderColor'];
    }

    $lassoURLs = $wpdb->prefix . 'lasso_lite_url_details';
    $isLassoInstalled = false;

    // Check if the table exists
    if ($wpdb->get_var($wpdb->prepare("SHOW TABLES LIKE %s", $lassoURLs)) == $lassoURLs) {
        $isLassoInstalled = true;
    }
    /********* Api  Details Form ******************/
    if (isset($_POST['submittoken'])) {
        $conn_form_val = $conn_stat = NULL;
        $conn_form_val = sanitize_text_field($_POST['spcom_login_token']);
        $enable_debug = !isset($_POST['spcom_debug_toggle']) ? "2" : "1";
        if ($conn_form_val && $conn_form_val != "logout-clicked" && $conn_form_val != "toggle-debugger" && $conn_form_val != "sync-now") {
            /****************** Insert/update Data *******************************/
            $conn_stat = "connected";
            if ($ConnectionArray) {
                $sql = $wpdb->update($shopper_connection_table, array('api_token' => $conn_form_val, 'connection_status' => $conn_stat, 'is_free_plan' => 0), array('ID' => $api_id));
                $conn_status = shopper_get_user_data();
                if ($conn_status) {
                    shopper_sync_all_data();
                }
            } else {
                $sql = $wpdb->insert($shopper_connection_table, array('api_token' => $conn_form_val, 'debug_status' => $enable_tracking, 'connection_status' => $conn_stat, 'is_free_plan' => 0));
                $conn_status = shopper_get_user_data();
                if ($conn_status) {
                    shopper_sync_all_data();
                }
            }
        } elseif ($conn_form_val == "toggle-debugger") {
            if ($ConnectionArray) {
                $conn_stat = NULL;
                $sql = $wpdb->update($shopper_connection_table, array('debug_status' => $enable_debug), array('ID' => $api_id));
            }
        } elseif ($conn_form_val == "sync-now") {
            shopper_sync_all_data();
        } else {
            if ($ConnectionArray) {
                $conn_stat = NULL;
                $sql = $wpdb->update($shopper_connection_table, array('connection_status' => $conn_stat), array('ID' => $api_id));
            }
        }
        shopper_force_refresh_page();
    }

    /************* Setting form ********************/
    if (isset($_POST['save']) && isset($_POST['spcom_enable_store'])) {
        $store_name = sanitize_text_field($_POST['store_name']);
        $page_slug = sanitize_key($_POST['store_name']);
        $collection_per_page = sanitize_text_field($_POST['collection_per_page']);
        $product_per_page = sanitize_text_field($_POST['product_per_page']);
        $cars = sanitize_text_field($_POST['cars']);
        $store_title = sanitize_text_field($_POST['store_title']);
        $enable_store = 'enabled';
        /****************** Insert/update Data *******************************/
        if (!empty($store_name) && !empty($cars)) {
            if ($settting_Array) {
                $sql = $wpdb->update($shopper_store, array('store_name' => $page_slug, 'collection_per_page' => $collection_per_page, 'product_per_page' => $product_per_page, 'cars' => $cars, 'store_title' => $store_title, 'store_enable' => $enable_store), array('ID' => $s_id));
            } else {
                $sql = $wpdb->insert($shopper_store, array('store_name' => $page_slug, 'collection_per_page' => $collection_per_page, 'product_per_page' => $product_per_page, 'cars' => $cars, 'store_title' => $store_title, 'store_enable' => $enable_store));
            }
            shopper_sync_all_data();
        }
        shopper_force_refresh_page();
    } elseif (isset($_POST['save']) && !isset($_POST['spcom_enable_store'])) {
        $enable_store = 'disabled';
        if ($settting_Array) {
            $sql = $wpdb->update($shopper_store, array('store_enable' => $enable_store), array('ID' => $s_id));
        }
        shopper_force_refresh_page();
    }

    if (isset($_POST['link-settings-save'])) {
        $link_redirect_type = $_POST['shopper-link-redirect-select'];
        $link_slug_type = $_POST['shopper-link-slug-select'];
        $link_prefix_selection = sanitize_text_field($_POST['shopper-link-prefix-select']);
        $link_prefix_custom = sanitize_key($_POST['shopper-link-cust-prefix-input']);
        $link_settings_array = array(
            'link_cloaking_slug_type' => $link_slug_type,
            'link_cloaking_redirect_type' => $link_redirect_type,
            'link_cloaking_prefix' => $link_prefix_selection,
            'link_cloaking_prefix_custom' => $link_prefix_custom
        );
        /****************** Insert/update Data *******************************/
        if (!empty($link_prefix_custom)) {
            if ($settting_Array) {
                $sql = $wpdb->update($shopper_store, $link_settings_array, array('ID' => $s_id));
            } else {
                $sql = $wpdb->insert($shopper_store, $link_settings_array);
            }
            $existing_slug = $wpdb->get_results('SELECT * FROM ' . $spcom_aff_slugs . ' WHERE slug = "' . $link_prefix_custom . '"');
            if (!$existing_slug) {
                $write_status = $wpdb->insert($spcom_aff_slugs, array('slug' => $link_prefix_custom));
            }
        }
        shopper_force_refresh_page();
    }
    if (isset($_POST['global-settings-save'])) {
        $global_data_array = json_encode(array(
            'enable_global_settings' => 1,
            'buttonLayout' => sanitize_text_field($_POST['shopper-global-btn-layout']),
            'buttonWidth' => intval($_POST['shopper-global-btn-width']),
            'buttonHeight' => intval($_POST['shopper-global-btn-height']),
            'buttonTextColor' => sanitize_text_field($_POST['shopper-global-btn-txt-clr']),
            'buttonTextFont' => sanitize_text_field($_POST['shopper-global-btn-font-family']),
            'buttonRadius' => intval($_POST['shopper-global-btn-radius']),
            'buttonColor' => sanitize_text_field($_POST['shopper-global-btn-bg-clr']),
            'buttonGradient' => sanitize_text_field($_POST['shopper-global-btn-grdnt-clr']),
            'fontFamily' => sanitize_text_field($_POST['shopper-global-theme-font-family']),
            'fontStyle' => sanitize_text_field($_POST['shopper-global-theme-font-style']),
            'fontWeight' => sanitize_text_field($_POST['shopper-global-theme-font-weight']),
            'textDecoration' => sanitize_text_field($_POST['shopper-global-theme-txt-decrn']),
            'fontColor' => sanitize_text_field($_POST['shopper-global-theme-txt-clr']),
            'bgColor' => sanitize_text_field($_POST['shopper-global-theme-bg-clr']),
            'singleBorderRadius' => intval($_POST['shopper-global-theme-radius']),
            'singleBorderWidth' => intval($_POST['shopper-global-theme-padding']),
            'singleBorderColor' => sanitize_text_field($_POST['shopper-global-theme-padding-clr']),
        ));
        /****************** Insert/update Data *******************************/
        if ($global_settings_array) {
            $sql = $wpdb->update($global_settings_table, array('default_props' => $global_data_array), array('ID' => $global_stngs_row_id));
        } else {
            $sql = $wpdb->insert($global_settings_table, array('default_props' => $global_data_array));
        }
        shopper_force_refresh_page();
    }

    if (isset($_POST['global-settings-reset'])) {
        if ($global_settings_array) {
            $sql = $wpdb->delete($global_settings_table, array('ID' => $global_stngs_row_id));
        }
        shopper_force_refresh_page();
    }

    if (isset($_POST['referral-settings-save'])) {
        $enable_referral_link = isset($_POST['spcom_enable_referral_link']) ? 1 : 0;
        if ($ConnectionArray) {
            $sql = $wpdb->update($shopper_connection_table, array('enable_referral_link' => $enable_referral_link), array('ID' => $api_id));
        }
        shopper_force_refresh_page();
    }

    if (isset($_POST['import-data'])) {
        getLassoData();
    }



?>
    <?php if (!$is_account_connected) { ?>
        <div class="spcom_not_connected_txt" id="spcom_not_connected_txt_banner">
            <div class="spcom_conntd_text_contents">
                <img alt="Shopper.com" src="https://cdn.shopper.com/next_assets/image/shopper-com-logo120x120.png" />
                &nbsp;The Shopper.com plugin isn't connected right now. To display your products from Shopper.com,
                <div class="spcom__font spcom_integrate_now" id="spcom_integrate_now_link">connect the plugin now.</div>
            </div>
            <div class="spcom_not_cnntd_banner_close" id="spcom_not_cnntd_banner_close">
                <img class="spcom_about-img-filter" src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/close_button.png') ?>" />
            </div>
        </div>
    <?php } ?>
    <!-- <div class="spcom_free_version_upgrade_banner spcom__font" id="spcom_free_version_upgrade_banner">
		<div class="spcom_free_version_text">
			You are currently using the free version. Upgrade your plan to add unlimited product displays & boost your affiliate income like never before.
		</div>
		<div class="spcom_free_version_banner_close" id="spcom_free_version_banner_close">
			<img class="spcom_free_version_banner_icon" src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/free_version_banner_close.svg') ?>" />
		</div>
	</div> -->
    <div class="shopper-dotcom-wp-admin-settings-container">
        <div class="shopper-dotcom-wp-settngs-form">
            <div class="shopper-dotcom-wp-settings">
                <div class="shopper-dotcom-wp-inner-settings">
                    <div id="shopper-dotcom-wp-settings-tabs">
                        <div class="spcom_top_page_tabs_container">
                            <div class="spcom_tabs_n_logo_container">
                                <div>
                                    <img class="spcom_li_logo" alt="Shopper.com" src="https://cdn.shopper.com/next_assets/image/shopper-com-logo120x120.png" />
                                </div>
                                <div class="spcom_top_page_tabs_list spcom__font">
                                    <ul>
                                        <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-home-tab" href="#shopper-dotcom-settings-home">Home</a></li>
                                        <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-settings-tab" href="#shopper-dotcom-page-settings">Page Settings</a></li>
                                        <li class="<?php if ($isLassoInstalled === false) {
                                                        echo 'shopper-dotcom-form-hidden-items';
                                                    } ?>">
                                            <a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-import-tab" href="#shopper-dotcom-import-settings">Import</a>
                                        </li>
                                        <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-global-settings-tab" href="#shopper-dotcom-display-settings">Display Settings</a></li>
                                        <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-links-tab" href="#shopper-dotcom-link-settings">Link Cloaking</a></li>
                                        <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-referral-tab" href="#shopper-dotcom-referral-settings">Referral Program</a></li>
                                        <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-connection-tab" href="#shopper-dotcom-account-settings">Account Information</a></li>
                                        <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-help-tab" href="#shopper-dotcom-help">Help</a></li>
                                        <?php if ($is_account_connected && $is_free_plan == 1) { ?>
                                            <li><a class="shopper-dotcom-tab-anchor" id="shopper-dotcom-go-premium" target="_blank" href="https://www.shopper.com/wordpress-affiliate-plugin">Go Premium</a></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                            <div class="spcom_top_page_support_link spcom__font">
                                <img class="spcom_support_logo" alt="Shopper.com" src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/support.svg') ?>" />
                                <div><a class="spcom__font shopper-dotcom-tab-anchor" id="shopper-dotcom-support" href="https://www.shopper.com/contact" target="_blank">Support</a></div>
                            </div>
                        </div>
                        <div class="tab1-api" id="shopper-dotcom-settings-home">
                            <div class="shopper_setings_tab_home_container spcom__font">
                                <div class="shopper_home_tab_top_container spcom__font">
                                    <div class="shopper_home_welcome_container">
                                        <div class="shopper_home_welcome_text_section">
                                            <div class="shopper_home_welcome_text_heading">
                                                Welcome to Shopper
                                            </div>
                                            <div class="shopper_home_welcome_text_contents_section">
                                                <div class="shopper_home_welcome_text_contents">
                                                    Welcome to Shopper,
                                                    the ultimate WordPress plugin designed for affiliate marketers like you. With Shopper,
                                                    you'll have access to the easiest and most powerful tool that maximizes your affiliate earnings.
                                                </div>
                                                <div class="shopper_home_welcome_text_contents">
                                                    With your free account,
                                                    you can collaborate with over 25,000 brands,
                                                    manage all your affiliate links in one place,
                                                    and create product displays that generate 25% more sales.
                                                </div>
                                                <div class="shopper_home_welcome_text_contents">
                                                    Try Shopper today and start earning more from your blog! Check out our video tutorial to get started.
                                                </div>
                                            </div>
                                            <?php if (!$is_account_connected) { ?>
                                                <div class="shopper_dotcom_welcome_buttons_wrapper">
                                                    <div class="shopper_dotcom_welcome_button_type_1">
                                                        <a class="spcom_raw-a-text" id="shopper-dotcom-support" href="https://www.shopper.com/wordpress-affiliate-plugin" target="_blank">New? Create a Free Account</a>
                                                    </div>
                                                    <div id="spcom_home_connect_now" class="shopper_dotcom_welcome_button_type_2">
                                                        Connect Your Existing Account
                                                    </div>
                                                </div>
                                            <?php } ?>
                                        </div>
                                        <div class="shopper_home_welcome_iframe_section">
                                            <iframe width="1280" height="720" src="https://www.youtube.com/embed/ADrCkZphR2I" title="Best Wordpress Plugin for Affiliate Marketers - Shopper.com Wordpress Plugin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div class="shopper_home_features_top_container">
                                    <div class="shopper_home_features_container spcom__font">
                                        <div class="shopper_home_features_heading">
                                            <div>
                                                Top features that smart bloggers love about Shopper -
                                            </div>
                                            <div>
                                                and why you will too
                                            </div>
                                        </div>
                                        <div class="shopper_home_features_list_grid">
                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/hand-shake.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        25,000+ Brands To Collaborate
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        Choose from our pre-designed product displays that are proven to generate 25% more sales - which
                                                        means
                                                        more earnings
                                                        with the same traffic.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/display.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        High-converting Product displays
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        Choose from our pre-designed product displays that are proven to generate 25% more sales - which
                                                        means
                                                        more earnings
                                                        with the same traffic.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/attachment.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        Easy Link Management
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        Say goodbye to the hassle of managing multiple affiliate links by organizing all your links in one
                                                        place, making it easy
                                                        to keep track of all.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/alert.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        Link Break Alerts
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        Get instant notifications whenever your links stop working, so that you can fix them immediately and
                                                        never miss out on a
                                                        single sale.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/api.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        API Access
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        Easily integrate your Shopper links with other tools and platforms that you use, which means you can
                                                        promote products
                                                        across a wide range of platforms.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/amazon.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        Amazon link localization
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        Automatically send your customers to their local Amazon store based on their location, which means a
                                                        better user
                                                        experience & more sales.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/analytics.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        Sales Analytics
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        View all the valuable insights such as clicks & conversions for every product that you are promoting
                                                        with our powerful
                                                        sales analytics.
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="shopper_dotcom_top_features_list_item">
                                                <div class="shopper_dotcom_top_features_list_item_img">
                                                    <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/seamless.svg') ?>" />
                                                </div>
                                                <div class="shopper_dotcom_top_features_list_text">
                                                    <div class="shopper_dotcom_top_features_list_title">
                                                        Seamless Compatibility with Gutenberg Block
                                                    </div>
                                                    <div class="shopper_dotcom_top_features_list_content">
                                                        Our product displays are designed to seamlessly integrate with the default Wordpress editor
                                                        Gutenberg,
                                                        which means more
                                                        sales without any technical difficulties.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shopper_home_features_bottom_text">
                                            <div>
                                                Join the thousands of affiliate marketers who trust
                                            </div>
                                            <div>
                                                Shopper to help them monetize their blogs.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php if ($is_account_connected && $is_free_plan == 1) { ?>
                                    <div class="shopper_dotcom_unlock_top_container">
                                        <div class="shopper_dotcom_unlock_text_title">
                                            Unlock Unlimited Products
                                        </div>
                                        <div class="shopper_dotcom_unlock_text_content">
                                            <div>You are currently using the free version. Upgrade your plan to add unlimited product</div>
                                            <div>displays & boost your affiliate income like never before.</div>
                                        </div>
                                        <div id="shopper_dotcom_unlock_buttons_wrapper">
                                            <div class="shopper_dotcom_welcome_button_type_1 shopper_dotcom_unlock_button">
                                                <a class="spcom_raw-a-text" href="https://www.shopper.com/wordpress-affiliate-plugin" target="_blank">Upgrade Now</a>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                        <div id="shopper-dotcom-page-settings">
                            <div class="spcom_settngs_store_outer_container">
                                <div class="shopper-dotcom-conn-help spcom_help_tab-title spcom__font">
                                    <div>Personalize your Shopper.com page</div>
                                    <a class="spcom_help_qstn_mark" target="_blank" href="https://www.shopper.com/help/adding-all-products/">
                                        <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/help-round-button.png') ?>" />
                                    </a>
                                </div>
                                <form method="post" enctype="multipart/form-data" class="shopper-dotcom-wp-settings-apiform">
                                    <div class="shopper-dotcom-wp-stngs-input-container">
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label class="shopper-dotcom-wp-settng-store">Activate page
                                                </label>
                                            </div>
                                            <div class="spcom_debug__info_tracking_container">
                                                <div class="spcom_debug__info_tracking">
                                                    <label class="spcom_optin_out_switch">
                                                        <input type="checkbox" id="spcom_enable_store" name="spcom_enable_store" value="1" <?php if ($enable_store != 'disabled') {
                                                                                                                                                echo "checked='checked'";
                                                                                                                                            } ?>>
                                                        <span class="spcom_optin_out_slider spcom_optin_out_round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-store-input-label1" class="shopper-dotcom-wp-settng-store">Page slug
                                                </label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box shopper-dotcom-store-slug-input">
                                                <input id="shopper-dotcom-store-input1" name="store_name" type="text" placeholder="store" value="<?php echo esc_textarea($store_name); ?>">
                                                <?php if ($ConnectionArray && $is_account_connected && $settting_Array && $enable_store != 'disabled') { ?>
                                                    <a id="shopper-dotcom-wp-prievw-store" class="spcom__font shopper-dotcom-wp-prievw-store" href="<?php echo esc_url($store_url) ?>" target="_blank" />Preview</a>
                                                <?php } ?>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-store-input-label2">Collections per page</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <input name="collection_per_page" id="shopper-dotcom-store-input2" type="text" value="<?php echo esc_textarea($collection_per_page); ?>">
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-store-input-label3">Products per page</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <input name="product_per_page" id="shopper-dotcom-store-input3" type="text" value="<?php echo esc_textarea($product_per_page); ?>">
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-store-input-label4">Front page display</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <select name="cars" id="cars">
                                                    <option value="Collections" <?php if ($cars == 'Collections') echo "selected"; ?>>Collections</option>
                                                    <option value="Products" <?php if ($cars == 'Products') echo "selected"; ?>>Products</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-store-input-label5">Page title</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <input name="store_title" id="shopper-dotcom-store-input4" type="text" value="<?php echo esc_textarea($store_title); ?>">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shopper-dotcom-form-submission-container shopper-dotcom-wp-settings-inputfiled">
                                        <input class="shopper-dotcom-wp-settings-form-sub" type="submit" name="save" value="Save Changes">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="shopper-dotcom-display-settings">
                            <div class="spcom_link_settngs_outer_container">
                                <div class="shopper-dotcom-conn-help spcom__font">
                                    Add global color and style for your product blocks and buttons!
                                    <div class="shopper-dotcom-page-sub-title spcom__font">
                                        With this feature, your product blocks and buttons will automatically adopt a consistent color and style.
                                        However, you have the flexibility to customize the color and style for each individual product display you insert.
                                    </div>
                                </div>
                                <form method="post" enctype="multipart/form-data" class="shopper-dotcom-wp-settings-apiform">
                                    <div class="shopper-dotcom-global-form-n-preview">
                                        <div class="shopper-dotcom-wp-stngs-input-container shopper-dotcom-global-form-inputs">
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-link-section-tilte spcom__font">
                                                    Layout
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Font Family</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-theme-font-family" id="shopper-global-theme-font-family">
                                                        <option value="" <?php if ($theme_font_family == "") echo "selected"; ?>>Default</option>
                                                        <option value="Arial" <?php if ($theme_font_family == "Arial") echo "selected"; ?>>Arial</option>
                                                        <option value="Verdana" <?php if ($theme_font_family == "Verdana") echo "selected"; ?>>Verdana</option>
                                                        <option value="Courier New" <?php if ($theme_font_family == "Courier New") echo "selected"; ?>>Courier New</option>
                                                        <option value="Brush Script MT" <?php if ($theme_font_family == "Brush Script MT") echo "selected"; ?>>Brush Script MT</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Font Style</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-theme-font-style" id="shopper-global-theme-font-style">
                                                        <option value="unset" <?php if ($theme_font_style == "unset") echo "selected"; ?>>Normal</option>
                                                        <option value="italic" <?php if ($theme_font_style == "italic") echo "selected"; ?>>Italic</option>
                                                        <option value="oblique" <?php if ($theme_font_style == "oblique") echo "selected"; ?>>Oblique</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Font Weight</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-theme-font-weight" id="shopper-global-theme-font-weight">
                                                        <option value="lighter" <?php if ($theme_font_weight == "lighter") echo "selected"; ?>>Lighter</option>
                                                        <option value="normal" <?php if ($theme_font_weight == "normal") echo "selected"; ?>>Normal</option>
                                                        <option value="bold" <?php if ($theme_font_weight == "bold") echo "selected"; ?>>Bold</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Text Decoration</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-theme-txt-decrn" id="shopper-global-theme-txt-decrn">
                                                        <option value="none" <?php if ($theme_text_decoration == "none") echo "selected"; ?>>Normal</option>
                                                        <option value="underline" <?php if ($theme_text_decoration == "underline") echo "selected"; ?>>Underline</option>
                                                        <option value="overline" <?php if ($theme_text_decoration == "overline") echo "selected"; ?>>Overline</option>
                                                        <option value="line-through" <?php if ($theme_text_decoration == "line-through") echo "selected"; ?>>Line Through</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Text Colour</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box shopper-dotcom-input-color-picker">
                                                    <input name="shopper-global-theme-txt-clr" id="shopper-global-theme-txt-clr" class="shopper-global-clr-text" type="text" maxlength="31" value="<?php echo esc_textarea($theme_text_colour); ?>">
                                                    <input name="shopper-global-theme-txt-clr-picker" id="shopper-global-theme-txt-clr-picker" class="shopper-global-clr-picker" type="color" maxlength="31" value="<?php echo esc_textarea($theme_text_colour); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Background Colour</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box shopper-dotcom-input-color-picker">
                                                    <input name="shopper-global-theme-bg-clr" id="shopper-global-theme-bg-clr" class="shopper-global-clr-text" type="text" maxlength="31" value="<?php echo esc_textarea($theme_bg_colour); ?>">
                                                    <input name="shopper-global-theme-bg-clr-picker" id="shopper-global-theme-bg-clr-picker" class="shopper-global-clr-picker" type="color" maxlength="31" value="<?php echo esc_textarea($theme_bg_colour); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Outer Radius</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <input name="shopper-global-theme-radius" id="shopper-global-theme-radius" type="number" maxlength="31" value="<?php echo esc_textarea($theme_outer_radius); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Padding</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <input name="shopper-global-theme-padding" id="shopper-global-theme-padding" type="number" maxlength="31" value="<?php echo esc_textarea($theme_padding); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Padding Colour</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box shopper-dotcom-input-color-picker">
                                                    <input name="shopper-global-theme-padding-clr" id="shopper-global-theme-padding-clr" class="shopper-global-clr-text" type="text" maxlength="31" value="<?php echo esc_textarea($theme_padding_colour); ?>">
                                                    <input name="shopper-global-theme-padding-clr-picker" id="shopper-global-theme-padding-clr-picker" class="shopper-global-clr-picker" type="color" maxlength="31" value="<?php echo esc_textarea($theme_padding_colour); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-link-section-tilte spcom-global_button-section spcom__font">
                                                    Button
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Button Layout</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-btn-layout" id="shopper-global-btn-layout">
                                                        <option value="button1" <?php if ($button_layout == "button1") echo "selected"; ?>>Simple</option>
                                                        <option value="button2" <?php if ($button_layout == "button2") echo "selected"; ?>>3D</option>
                                                        <option value="button3" <?php if ($button_layout == "button3") echo "selected"; ?>>Outline</option>
                                                        <option value="button4" <?php if ($button_layout == "button4") echo "selected"; ?>>Fill</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Button Width</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-btn-width" id="shopper-global-btn-width">
                                                        <option value=33 <?php if ($button_width == 33) echo "selected"; ?>>Small</option>
                                                        <option value=66 <?php if ($button_width == 66) echo "selected"; ?>>Medium</option>
                                                        <option value=100 <?php if ($button_width == 100) echo "selected"; ?>>Full</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Button Height</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-btn-height" id="shopper-global-btn-height">
                                                        <option value=36 <?php if ($button_height == 36) echo "selected"; ?>>Small</option>
                                                        <option value=44 <?php if ($button_height == 44) echo "selected"; ?>>Medium</option>
                                                        <option value=55 <?php if ($button_height == 55) echo "selected"; ?>>Large</option>
                                                        <option value=65 <?php if ($button_height == 65) echo "selected"; ?>>Exra Large</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Text Colour</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box shopper-dotcom-input-color-picker">
                                                    <input name="shopper-global-btn-txt-clr" id="shopper-global-btn-txt-clr" class="shopper-global-clr-text" type="text" maxlength="31" value="<?php echo esc_textarea($button_text_colour); ?>">
                                                    <input name="shopper-global-btn-txt-clr-picker" id="shopper-global-btn-txt-clr-picker" class="shopper-global-clr-picker" type="color" maxlength="31" value="<?php echo esc_textarea($button_text_colour); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label>Font</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <select name="shopper-global-btn-font-family" id="shopper-global-btn-font-family">
                                                        <option value="" <?php if ($button_font_family == "") echo "selected"; ?>>Default</option>
                                                        <option value="Arial" <?php if ($button_font_family == "Arial") echo "selected"; ?>>Arial</option>
                                                        <option value="Verdana" <?php if ($button_font_family == "Verdana") echo "selected"; ?>>Verdana</option>
                                                        <option value="Courier New" <?php if ($button_font_family == "Courier New") echo "selected"; ?>>Courier New</option>
                                                        <option value="Brush Script MT" <?php if ($button_font_family == "Brush Script MT") echo "selected"; ?>>Brush Script MT</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Button Radius</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <input name="shopper-global-btn-radius" id="shopper-global-btn-radius" type="number" maxlength="31" value="<?php echo esc_textarea($button_radius); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled">
                                                <div class="shopper-dotcom-input-label spcom__font">
                                                    <label id="shopper-link-cust-prefix-label">Background Colour</label>
                                                </div>
                                                <div class="shopper-dotcom-input-field-box shopper-dotcom-input-color-picker">
                                                    <input name="shopper-global-btn-bg-clr" id="shopper-global-btn-bg-clr" class="shopper-global-clr-text" type="text" maxlength="31" value="<?php echo esc_textarea($button_bg_colour); ?>">
                                                    <input name="shopper-global-btn-bg-clr-picker" id="shopper-global-btn-bg-clr-picker" class="shopper-global-clr-picker" type="color" maxlength="31" value="<?php echo esc_textarea($button_bg_colour); ?>">
                                                </div>
                                            </div>
                                            <div class="shopper-global-btn-grdnt-container">
                                                <div class="shopper-dotcom-wp-settings-inputfiled">
                                                    <div class="shopper-dotcom-input-label spcom__font">
                                                        <label id="shopper-link-cust-prefix-label">Gradient Colour</label>
                                                    </div>
                                                    <div class="shopper-dotcom-input-field-box shopper-dotcom-input-color-picker">
                                                        <input name="shopper-global-btn-grdnt-clr" id="shopper-global-btn-grdnt-clr" class="shopper-global-clr-text" type="text" maxlength="31" value="<?php echo esc_textarea($button_grdnt_colour); ?>">
                                                        <input name="shopper-global-btn-grdnt-clr-picker" id="shopper-global-btn-grdnt-clr-picker" class="shopper-global-clr-picker" type="color" maxlength="31" value="<?php echo esc_textarea($button_grdnt_colour); ?>">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-stngs-input-container shopper-dotcom-global-form-preview">
                                            <div class="shopper_dotcom_single_container shopper_dotcom_aff_link shopper_dotcom_single_left">
                                                <div class="shopper-dotcom-wp-settings-inputfiled">
                                                    <div class="shopper-dotcom-link-section-tilte spcom__font">
                                                        Preview
                                                    </div>
                                                </div>
                                                <div class="spcom__single1_layout_container">
                                                    <div class="spcom__single1_layout spcom__font">
                                                        <div class="sp_com__image_container">
                                                            <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/icon-256x256.png') ?>" />
                                                        </div>
                                                        <div class="spcom__p-name_n_address">
                                                            <div class="spcom__p-name spcom__font spcom__ellipsis line2">
                                                                Shopper.com - Maximize your Affiliate Earnings.
                                                            </div>
                                                            <div class="spcom__p-desc spcom__font spcom__ellipsis line4">
                                                                With Shopper you can instantly collaborate with 25k+ brands,
                                                                manage all your affiliate links in one place and create product
                                                                displays that generate <b> 25% more sales</b>. 🔥
                                                            </div>
                                                            <!-- button start  -->
                                                            <div class="spcom__single_buy_button1">
                                                                <div class="shopper_dotcom_button_container">
                                                                    <a class="spcom_raw-a-text spcom_affiliate_anchor_tag" href={generateRedirectionURL(prod_id)} rel={props.attributes.relValue} data-link-type={ props.attributes.buttonNewTabToggle ? "_blank" : "_self" }>
                                                                        <div class="spcom_commom_button_layout spcom_button_layout4 spcom__font">
                                                                            <div class="spcom_button_common_text spcom__ellipsis">
                                                                                Check this out
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <!-- button end -->
                                                            <div class="spcom__single1_layout_aff_dsclr spcom__font">
                                                                We earn a commission if you make a purchase, at no additional cost to you.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="shopper-dotcom-form-submission-container shopper-dotcom-wp-settings-inputfiled shopper_reset_preview_btn">
                                                    <input class="shopper-dotcom-wp-settings-form-sub" type="submit" name="global-settings-reset" value="Reset to Default">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shopper-dotcom-form-submission-container shopper-dotcom-wp-settings-inputfiled">
                                        <input class="shopper-dotcom-wp-settings-form-sub" type="submit" name="global-settings-save" value="Save Changes">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="shopper-dotcom-link-settings">
                            <div class="spcom_link_settngs_outer_container">
                                <div class="shopper-dotcom-conn-help spcom_help_tab-title spcom__font">
                                    <div>
                                        Customize your link structure and link redirection
                                        <a class="spcom_help_qstn_mark" target="_blank" href="https://www.shopper.com/help/customize-your-link-structure-and-link-redirection/">
                                            <img src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/help-round-button.png') ?>" />
                                        </a>
                                    </div>
                                </div>
                                <form method="post" enctype="multipart/form-data" class="shopper-dotcom-wp-settings-apiform">
                                    <div class="shopper-dotcom-wp-stngs-input-container">
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-link-rdrct-type-label">Link Redirect Type (Server side redirect)</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <select name="shopper-link-redirect-select" id="shopper-link-redirect-select">
                                                    <option value="301" <?php if ($link_redirect_type == 301) echo "selected"; ?>>301 Permanent</option>
                                                    <option value="302" <?php if ($link_redirect_type == 302) echo "selected"; ?>>302 Temporary</option>
                                                    <option value="307" <?php if ($link_redirect_type == 307) echo "selected"; ?>>307 Temporary (alternative)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label>Select a Link Prefix</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <select name="shopper-link-prefix-select" id="shopper-link-prefix-select">
                                                    <?php
                                                    foreach ($aff_redrn_slugs as $slug) { ?>
                                                        <option value="<?php echo esc_textarea($slug) ?>" <?php if ($link_prefix_selection == $slug) echo "selected"; ?>><?php echo esc_textarea($slug) ?></option>
                                                    <?php }  ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label>Or</label>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-link-cust-prefix-label">Add a custom Link Prefix</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <input name="shopper-link-cust-prefix-input" id="shopper-link-cust-prefix-input" type="text" maxlength="31" value="<?php echo esc_textarea($link_prefix_custom); ?>">
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-link-rdrct-type-label">Slug</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <select name="shopper-link-slug-select" id="shopper-link-slug-select">
                                                    <option value="name" <?php if ($link_slug_type == "name") echo "selected"; ?>>Product Name</option>
                                                    <option value="slug" <?php if ($link_slug_type == "slug") echo "selected"; ?>>Product ID</option>
                                                </select>
                                                <div class="spcom_field_description spcom__font">The “slug” is the link friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                                                    Select “Product Name” for adding the product name as the URL slug. Select Variable for adding just the product ID.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shopper-dotcom-form-submission-container shopper-dotcom-wp-settings-inputfiled">
                                        <input class="shopper-dotcom-wp-settings-form-sub" type="submit" name="link-settings-save" value="Save Changes">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="shopper-dotcom-referral-settings">
                            <div class="spcom_settngs_referral_outer_container">
                                <div class="shopper-dotcom-conn-help spcom_help_tab-title spcom__font">
                                    <div>Shopper.com Referral Program</div>
                                </div>
                                <div class="shopper-dotcom-page-sub-title spcom__font">
                                    Refer a friend to Shopper and earn a whopping 30% of all their payments for life.
                                    It's a fantastic opportunity to keep earning without any limits. The more customers you refer,
                                    the more you'll enjoy the benefits. So go ahead and spread the word about Shopper!
                                </div>
                                <div class="shopper_user_referral_link_container">
                                    <input id="shopper_user_referral_link" name="shopper_user_referral_link" disabled="" maxlength="80" type="text" class="shopper_user_referral_link spcom__font" autocomplete="off" dir="auto" value="<?php echo $referral_link ?>">
                                    <div id="spcom_referral_link_copy_button" class="spcom_referral_link_copy_button spcom__font">
                                        Copy
                                    </div>
                                </div>
                                <form method="post" enctype="multipart/form-data" id="shopper_referral_settings_form" class="<?php echo $dynamic_input_class ?>">
                                    <div class="shopper-dotcom-wp-stngs-input-container">
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label class="shopper-dotcom-wp-settng-store">Enable Referral on Product Displays
                                                </label>
                                            </div>
                                            <div class="spcom_referral_toggle_container">
                                                <div class="spcom_referral_toggle">
                                                    <label class="spcom_optin_out_switch">
                                                        <input type="checkbox" id="spcom_enable_referral_link" name="spcom_enable_referral_link" value="1" <?php if ($enable_referral_link != 0) {
                                                                                                                                                                echo "checked='checked'";
                                                                                                                                                            } ?>>
                                                        <span class="spcom_optin_out_slider spcom_optin_out_round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shopper-dotcom-page-sub-title spcom__font">
                                        Your referral links appear on the bottom of the product displays.
                                        You can easily toggle this feature on and off right from here.
                                        Please note that the option to disable referral links is available only with our paid plans.
                                    </div>
                                    <div class="shopper-dotcom-form-submission-container shopper-dotcom-wp-settings-inputfiled">
                                        <input class="shopper-dotcom-form-hidden-items shopper-dotcom-wp-settings-form-sub" type="submit" id="shopper-referral-settings-save" name="referral-settings-save" value="Save Changes">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab1-api" id="shopper-dotcom-account-settings">
                            <div class="spcom_settngs_conn_outer_container">
                                <form method="post" enctype="multipart/form-data" id="shopper-dotcom-wp-settings-apiform-token" class="shopper-dotcom-wp-settings-apiform">
                                    <?php if (!$is_account_connected) { ?>
                                        <div class="shopper_sso_login_iframe">
                                            <iframe src="https://www.shopper.com/spcom_wp_connect"></iframe>
                                        </div>
                                    <?php } ?>
                                    <div class="shopper-dotcom-wp-conn-input-container">
                                        <div class="shopper-dotcom-wp-settings-inputfiled spcom__font shopper-dotcom-form-hidden-items">
                                            <div class="shopper-dotcom-input-field-box">
                                                <input id="spcom_login_token" name="spcom_login_token" type="text">
                                            </div>

                                        </div>
                                        <?php if ($is_account_connected) { ?>
                                            <div class="spcom_acc_information_container spcom__font">
                                                <div class="shopper-dotcom-conn-help">Account Information</div>
                                                <div class="spcom_acc_conntd_details">
                                                    <div class="spcom_acc_conntd_logo">
                                                        <img alt="Shopper.com" src="https://cdn.shopper.com/next_assets/image/shopper-com-logo120x120.png" />
                                                    </div>
                                                    <div class="spcom_acc_conntd_acc_det">
                                                        <div class="spcom_acc_conntd_store_name"><?php echo esc_textarea($profile_name); ?></div>
                                                        <div class="spcom_acc_conntd_user_name"><?php echo esc_textarea($user_name); ?></div>
                                                        <div class="shopper-dotcom-conn-succs">
                                                            <div class="shopper-dotcom-wp-connected-green"></div>
                                                            <div>Connected to Shopper.com</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="shopper-dotcom-wp-conn-sync-elements">
                                                    <div>Added a new product or modified an existing one</div>
                                                    <div id="shopper-dotcom-wp-settings-sync-button" class="shopper-dotcom-wp-settings-sync-button">
                                                        <img class="shopper-dotcom-wp-sync-icon" src="<?php echo esc_url(trailingslashit(SHOPPER_MY_PLUGIN_URL) . '/assets/sync-icon.png') ?>" alt="" />
                                                        <div>Sync Now</div>
                                                    </div>
                                                </div>

                                                <div class="shopper-dotcom-wp-settings-inputfiled">
                                                    <div class="shopper-dotcom-wp-settings-logout-button" id="shopper-dotcom-wp-settings-logout-button">
                                                        Logout
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shopper-dotcom-wp-settings-inputfiled spcom__font">
                                                <div class="shopper-dotcom-input-label spcom__font"><label>Enable debugging</label></div>
                                                <div class="shopper-dotcom-input-field-box">
                                                    <div class="spcom_debug__info_tracking">
                                                        <label class="spcom_optin_out_switch">
                                                            <input type="checkbox" name="spcom_debug_toggle" id="spcom_debug_toggle" value="1" <?php if ($enable_tracking != '2') {
                                                                                                                                                    echo "checked='checked'";
                                                                                                                                                } ?>>
                                                            <span class="spcom_optin_out_slider spcom_optin_out_round"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        <?php } ?>
                                        <div class="shopper-dotcom-wp-settings-inputfiled spcom__font shopper-dotcom-form-hidden-items">
                                            <button class="shopper-dotcom-wp-settings-form-sub-button" id="shopper-dotcom-wp-settings-form-sub-button" type="submit" name="submittoken" value="Login">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab1-api" id="shopper-dotcom-import-settings">
                            <div class="spcom_settngs_import_outer_container">
                                <form method="post" enctype="multipart/form-data" class="shopper-dotcom-wp-settings-apiform">
                                    <div class="shopper-dotcom-wp-stngs-input-container">
                                        <div class="shopper-dotcom-wp-import-container">
                                            <div class="spcom_import_data spcom__font">
                                                <div class="shopper-dotcom-conn-help">Import Link Data</div>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-page-sub-title spcom__font">
                                            Import your existing products links to Shopper.
                                        </div>
                                        <div class="shopper-dotcom-wp-settings-inputfiled">
                                            <div class="shopper-dotcom-input-label spcom__font">
                                                <label id="shopper-import-source-label">Select a tool</label>
                                            </div>
                                            <div class="shopper-dotcom-input-field-box">
                                                <select name="shopper-import-source-select" id="shopper-import-source-select">
                                                    <option value="Lasso" <?php echo "selected"; ?>>Lasso</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="shopper-dotcom-form-submission-container shopper-dotcom-wp-settings-inputfiled">
                                            <input class="shopper-dotcom-wp-settings-form-sub" type="submit" name="import-data" value="Download">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab1-api shopper-dotcom-help-tab" id="shopper-dotcom-help">
                            <div class="spcom-help__wrapper spcom__font">
                                <div class="spcom-help__heading shopper-dotcom-conn-help">Help</div>
                                <div class="spcom-help__sub-heading">How to get started</div>
                                <div class="spcom-help__stages">
                                    <div class="spcom-help__stage">
                                        <div class="spcom-help__stage-left">1</div>
                                        <div class="spcom-help__stage-right">
                                            <div class="spcom-help__stage-heading">Login or Sign up</div>
                                            <div class="spcom-help__stage-text">
                                                <a class="spcom_integrate_now_anchor" id="spcom_integrate_now_anchor">Login</a>
                                                using your existing Shopper.com account or <a class="spcom_integrate_now_anchor" target="_blank" href="https://www.shopper.com/signup">Click here</a> to
                                                create a free Shopper.com account.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="spcom-help__stage">
                                        <div class="spcom-help__stage-left">2</div>
                                        <div class="spcom-help__stage-right">
                                            <div class="spcom-help__stage-heading">Add Products</div>
                                            <div class="spcom-help__stage-text">
                                                By using Gutenberg blocks, you can easily add high-converting product layouts
                                                to your posts.<a class="spcom_integrate_now_anchor" target="_blank" href="https://www.shopper.com/help/adding-specific-products/"> Here's how you do it</a>. A single display of all products is also
                                                possible. For instructions, <a class="spcom_integrate_now_anchor" target="_blank" href="https://www.shopper.com/help/adding-all-products/">click here</a>.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="spcom-help__sub-heading">Links to knowledge base and other utilities.</div>
                                <div class="spcom-help__sub-heading-medium">Documentation</div>
                                <a class="spcom-help__link spcom-help__d-block" target="_blank" href="https://www.shopper.com/help/">Knowledge base</a>
                                <div class="spcom-help__text">
                                    Guides, troubleshooting, FAQ and more.
                                </div>
                                <div class="spcom-help__sub-heading-medium">Blog</div>
                                <a class="spcom-help__link spcom-help__d-block" target="_blank" href="https://www.shopper.com/blog/">Shopper.com Blog</a>
                                <div class="spcom-help__text">
                                    Learn & grow your marketing - covering increasing revenue,
                                    generating traffic, optimising your marketing, interviews &
                                    case studies.
                                </div>
                                <div class="spcom-help__sub-heading-medium">Join the Community</div>
                                <a class="spcom-help__link spcom-help__d-block" target="_blank" href="https://www.instagram.com/theshopperdotcom/">Follow us on Instagram</a>
                                <a class="spcom-help__link spcom-help__d-block" target="_blank" href="https://twitter.com/shopperdotcom">Follow us on Twitter</a>
                                <a class="spcom-help__link spcom-help__d-block" target="_blank" href="https://www.linkedin.com/company/shopperdotcom/">Follow us on Linkedin</a>
                                <div class="spcom-help__text spcom-help__mtop16">
                                    Join our affiliate program. Earn 30% on every sale you generate. <a class="spcom-help__link" target="_blank" href="https://www.shopper.com/partnerships/shopper-com-affiliate-program">Join here</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php }
