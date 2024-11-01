<?php
/*
   Plugin Name: Shopper  - Affiliate Link Management, 25000+ Brand Partnerships & Creative Product Displays
   Plugin URI: https://www.shopper.com/
   description: The ultimate affiliate marketing plugin to boost your earnings: easy affiliate link management, 25K+ brand partnerships, high converting product displays, link break alerts & more.
   Version: 3.2.5
   Author: Shopper.com
   */

define('SHOPPER_MY_PLUGIN_URL', plugin_dir_url(__FILE__));  //plugin url
define('SHOPPER_MY_PLUGIN_PATH', plugin_dir_path(__FILE__));  //plugin path
define('SHOPPER_MY_PLUGIN_VER', '3.2.5');
global $shopper_dotcom_db_version;
$shopper_dotcom_db_version = '2.7';


/**
 Include files *********************/

require_once(dirname(__FILE__) . '/templates/form.php');
require_once(dirname(__FILE__) . '/templates/product-data.php');

/***include css and js for admin ****** */
function wp_shopper_custom_css_js()
{
  wp_enqueue_script(
    'shopper-dotcom-wp-myplugin-script',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/js/script.js',
    array(
      'jquery',
    ),
    SHOPPER_MY_PLUGIN_VER,
    true
  );
  wp_enqueue_script(
    'shopper-dotcom-wp-myplugin-alert-script',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/js/script.js',
    array(
      'jquery',
    ),
    SHOPPER_MY_PLUGIN_VER,
    true
  );
  wp_enqueue_script('jquery-ui-tabs');
  wp_enqueue_style(
    'shopper-dotcom-wp-admin-style',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/css/plugin.css?spcom_ver=' . SHOPPER_MY_PLUGIN_VER
  );
  wp_enqueue_style(
    'shopper-dotcom-wp-myplugin-jquery-ui-min-style',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/css/jquery-ui.min.css?spcom_ver=' . SHOPPER_MY_PLUGIN_VER
  );
  wp_enqueue_style(
    'shopper-dotcom-wp-myplugin-block-style',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'src/block_style.css?spcom_ver=' . SHOPPER_MY_PLUGIN_VER
  );
}
add_action('admin_enqueue_scripts', 'wp_shopper_custom_css_js');

/***include css and js for normal pages ****** */
function wp_shopper_custom_css_pages()
{
  wp_enqueue_script(
    'shopper-dotcom-wp-block-script',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'src/shopper_block_script.js',
    array(
      'jquery',
    ),
    SHOPPER_MY_PLUGIN_VER,
    true
  );
  wp_enqueue_style(
    'shopper-dotcom-wp-page-style',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'assets/css/plugin.css?spcom_ver=' . SHOPPER_MY_PLUGIN_VER
  );
  wp_enqueue_style(
    'shopper-dotcom-gutenberg-block-frontend-style',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'build/index.css?spcom_ver=' . SHOPPER_MY_PLUGIN_VER
  );
}
add_action('wp_enqueue_scripts', 'wp_shopper_custom_css_pages');

/**
 * Activate the plugin.
 */
function shopper_dotcom_activate_db()
{
  global $wpdb, $shopper_dotcom_db_version;
  $charset_collate = $wpdb->get_charset_collate();
  $sql_new_table = array();
  $sql_update = array(); //for db updates if any
  $spcom_auth = $wpdb->prefix . "shopper_dot_com_auth";
  if ($wpdb->get_var("show tables like '" . $spcom_auth . "'") !== $spcom_auth) {
    $sql_new_table[] = "CREATE TABLE " . $spcom_auth . "(
              `id` int(11) NOT NULL AUTO_INCREMENT,
              `api_token` text,
              `debug_status` varchar(255),
              `connection_status` varchar(255),
              `profile_name` varchar(255),
              `user_name` varchar(255),
              `user_mail` varchar(255),
              `is_free_plan` int(11),
              `rem_coll_count` int(11),
              `rem_prod_count` int(11),
              `last_update_date` date,
              `enable_referral_link` int(11) DEFAULT 1,
              PRIMARY KEY (`id`)
            ) $charset_collate;";
  }
  $spcom_store = $wpdb->prefix . "shopper_dot_com_store";
  if ($wpdb->get_var("show tables like '" . $spcom_store . "'") !== $spcom_store) {
    $sql_new_table[] = "CREATE TABLE " . $spcom_store . " (
              `id` int(11) NOT NULL AUTO_INCREMENT,
              `store_name` varchar(255) NOT NULL,
              `collection_per_page` varchar(255) NOT NULL,
              `product_per_page` varchar(255) NOT NULL,
              `cars` varchar(255) NOT NULL,
              `store_title` varchar(255) DEFAULT NULL,
              `store_enable` varchar(255) DEFAULT NULL,
              `link_cloaking_slug_type` varchar(255) DEFAULT 'slug',
              `link_cloaking_redirect_type` int(11) DEFAULT 302,
              `link_cloaking_prefix` varchar(255) DEFAULT 'p',
              `link_cloaking_prefix_custom` varchar(255) DEFAULT 'p',
              PRIMARY KEY (`id`)
            ) $charset_collate;";
  }
  $spcom_all_collections = $wpdb->prefix . "shopper_dot_com_all_collections";
  if ($wpdb->get_var("show tables like '" . $spcom_all_collections . "'") !== $spcom_all_collections) {
    $sql_new_table[] = "CREATE TABLE " . $spcom_all_collections . "(
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `collection_id` varchar(255) NOT NULL,
            `collection_title` varchar(255) NOT NULL,
            `collection_image` varchar(255) NOT NULL,
            `collection_full_image` varchar(255) NOT NULL,
            `collection_url` varchar(255) NOT NULL,
            `collection_products` varchar(255) NOT NULL,
            `collection_view` varchar(255) DEFAULT NULL,
            `collection_prod_image1` varchar(255) NOT NULL,
            `collection_prod_image2` varchar(255) NOT NULL,
            `collection_prod_image3` varchar(255) NOT NULL,
            `current_update_time` date NOT NULL,
            `colln_slug` varchar(255) NOT NULL,
            `colln_name_slug` varchar(255) NOT NULL,
            PRIMARY KEY (`id`)
            ) $charset_collate;";
  }
  $collection_products = $wpdb->prefix . "shopper_dot_com_collection_products";
  if ($wpdb->get_var("show tables like '" . $collection_products . "'") !== $collection_products) {
    $sql_new_table[] = "CREATE TABLE " . $collection_products . "(
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `collection_id` varchar(255) NOT NULL,
            `collection_name` varchar(255) NOT NULL,
            `product_id` varchar(255) NOT NULL,
            `product_title` varchar(255) NOT NULL,
            `product_image` varchar(255) NOT NULL,
            `product_full_image` varchar(255) NOT NULL,
            `product_url` varchar(255) NOT NULL,
            `products_affilate` varchar(255) NOT NULL,
            `current_update_time` date NOT NULL,
            `product_description` text,
            `pdt_slug` varchar(255) NOT NULL,
            `pdt_name_slug` varchar(255) NOT NULL,
            PRIMARY KEY (`id`)
            ) $charset_collate;";
  }
  $spcom_aff_slugs = $wpdb->prefix . "shopper_dot_com_aff_slugs";
  if ($wpdb->get_var("show tables like '" . $spcom_aff_slugs . "'") !== $spcom_aff_slugs) {
    $sql_new_table[] = "CREATE TABLE " . $spcom_aff_slugs . "(
              `id` int(11) NOT NULL AUTO_INCREMENT,
              `slug` text,
              PRIMARY KEY (`id`)
            ) $charset_collate;";
  }
  $spcom_themes = $wpdb->prefix . "shopper_dot_com_themes";
  if ($wpdb->get_var("show tables like '" . $spcom_themes . "'") !== $spcom_themes) {
    $sql_new_table[] = "CREATE TABLE " . $spcom_themes . "(
              `id` int(11) NOT NULL AUTO_INCREMENT,
              `value` varchar(255) NOT NULL,
              `label` varchar(255) NOT NULL,
              `layout` varchar(255) NOT NULL,
              `is_user_theme` int(11) NOT NULL DEFAULT 1,
              `theme_props` json NOT NULL,
              UNIQUE (`value`,`label`),
              PRIMARY KEY (`id`)
            ) $charset_collate;";
  }

  $spcom_global_settings = $wpdb->prefix . "shopper_dot_com_global_settings";
  if ($wpdb->get_var("show tables like '" . $spcom_global_settings . "'") !== $spcom_global_settings) {
    $sql_new_table[] = "CREATE TABLE " . $spcom_global_settings . "(
              `id` int(11) NOT NULL AUTO_INCREMENT,
              `default_props` json NOT NULL,
              PRIMARY KEY (`id`)
            ) $charset_collate;";
  }

  $installed_db_ver = get_option("shopper_dotcom_db_version");
  if ($installed_db_ver < $shopper_dotcom_db_version) { // DB Auto update section
    $spcom_connection = $wpdb->prefix . "shopper_dot_com_connection";
    if ($wpdb->get_var("show tables like '" . $spcom_connection . "'") == $spcom_connection) {
      $sql_update[] = $wpdb->query($wpdb->prepare("DROP TABLE $spcom_connection"));
    }

    if ($wpdb->get_var("show tables like '" . $spcom_aff_slugs . "'") !== $spcom_aff_slugs) {
      $sql_update[] = "CREATE TABLE " . $spcom_aff_slugs . "(
              `id` int(11) NOT NULL AUTO_INCREMENT,
              `slug` text,
              PRIMARY KEY (`id`)
            ) $charset_collate;";
    }

    if ($wpdb->get_var("show tables like '" . $spcom_themes . "'") !== $spcom_themes) {
      $sql_update[] = "CREATE TABLE " . $spcom_themes . "(
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `value` varchar(255) NOT NULL,
        `label` varchar(255) NOT NULL,
        `layout` varchar(255) NOT NULL,
        `is_user_theme` int(11) NOT NULL DEFAULT 1,
        `theme_props` json NOT NULL,
        UNIQUE (`value`,`label`),
        PRIMARY KEY (`id`)
      ) $charset_collate;";
    }

    //Add columns if not present.
    // Check if $collection_products table exists
    if ($wpdb->get_var("SHOW TABLES LIKE '$collection_products'") == $collection_products) {

      // Check if pdt_slug column exists in $collection_products table
      $pdt_slug_exists = $wpdb->get_var("SHOW COLUMNS FROM $collection_products LIKE 'pdt_slug'");

      // Check if pdt_name_slug column exists in $collection_products table
      $pdt_name_slug_exists = $wpdb->get_var("SHOW COLUMNS FROM $collection_products LIKE 'pdt_name_slug'");

      // Check if any of the columns don't exist, then add them
      if (empty($pdt_slug_exists)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $collection_products ADD pdt_slug varchar(255)"));
      }
      if (empty($pdt_name_slug_exists)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $collection_products ADD pdt_name_slug varchar(255)"));
      }
    }

    // Check if $spcom_all_collections table exists
    if ($wpdb->get_var("SHOW TABLES LIKE '$spcom_all_collections'") == $spcom_all_collections) {

      // Check if colln_slug column exists in $spcom_all_collections table
      $colln_slug_exists = $wpdb->get_var("SHOW COLUMNS FROM $spcom_all_collections LIKE 'colln_slug'");

      // Check if colln_name_slug column exists in $spcom_all_collections table
      $colln_name_slug_exists = $wpdb->get_var("SHOW COLUMNS FROM $spcom_all_collections LIKE 'colln_name_slug'");

      // Check if any of the columns don't exist, then add them
      if (empty($colln_slug_exists)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $spcom_all_collections ADD colln_slug varchar(255)"));
      }
      if (empty($colln_name_slug_exists)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $spcom_all_collections ADD colln_name_slug varchar(255)"));
      }
    }

    // Check if $spcom_store table exists
    if ($wpdb->get_var("SHOW TABLES LIKE '$spcom_store'") == $spcom_store) {

      // Check if link_cloaking_slug_type column exists in $spcom_store table
      $link_slug_type = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = %s AND TABLE_NAME = %s AND COLUMN_NAME = %s ",
        DB_NAME,
        $spcom_store,
        'link_cloaking_slug_type'
      ));
      if (empty($link_slug_type)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $spcom_store ADD link_cloaking_slug_type varchar(255) DEFAULT 'slug'"));
      }

      // Check if link_cloaking_redirect_type column exists in $spcom_store table
      $link_rdrt_type = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = %s AND TABLE_NAME = %s AND COLUMN_NAME = %s ",
        DB_NAME,
        $spcom_store,
        'link_cloaking_redirect_type'
      ));
      if (empty($link_rdrt_type)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $spcom_store ADD link_cloaking_redirect_type int DEFAULT 302"));
      }

      // Check if link_cloaking_prefix column exists in $spcom_store table
      $link_cloaking_prefix = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = %s AND TABLE_NAME = %s AND COLUMN_NAME = %s ",
        DB_NAME,
        $spcom_store,
        'link_cloaking_prefix'
      ));
      if (empty($link_cloaking_prefix)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $spcom_store ADD link_cloaking_prefix varchar(255) DEFAULT 'p'"));
      }

      // Check if link_cloaking_prefix_custom column exists in $spcom_store table
      $link_cloaking_prefix_custom = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = %s AND TABLE_NAME = %s AND COLUMN_NAME = %s ",
        DB_NAME,
        $spcom_store,
        'link_cloaking_prefix_custom'
      ));
      if (empty($link_cloaking_prefix_custom)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $spcom_store ADD link_cloaking_prefix_custom varchar(255) DEFAULT 'p'"));
      }
    }

    // Check if $spcom_auth table exists
    if ($wpdb->get_var("SHOW TABLES LIKE '$spcom_auth'") == $spcom_auth) {
      // Check if enable_referral_link column exists in $spcom_auth table
      $enable_referral_link = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = %s AND TABLE_NAME = %s AND COLUMN_NAME = %s ",
        DB_NAME,
        $spcom_auth,
        'enable_referral_link'
      ));
      if (empty($enable_referral_link)) {
        $sql_update[] = $wpdb->query($wpdb->prepare("ALTER TABLE $spcom_auth ADD enable_referral_link int DEFAULT 1"));
      }
    }
  }
  // initialize shopper_dotcom_db_version option
  if (!empty($sql_new_table)) {
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql_new_table);
    $installed_db_ver = get_option("shopper_dotcom_db_version");
    if (!$installed_db_ver) {
      add_option("shopper_dotcom_db_version", '1.0');
    } else {
      update_option("shopper_dotcom_db_version", $shopper_dotcom_db_version);
    }
  }
  if (!empty($sql_update)) {
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql_update);
    update_option("shopper_dotcom_db_version", $shopper_dotcom_db_version);
  }
}
register_activation_hook(__FILE__, 'shopper_dotcom_activate_db');

add_action('plugins_loaded', 'shopper_dot_com_upgrade_function');

function shopper_dot_com_upgrade_function()
{
  $current_plugin_path_name = plugin_basename(__FILE__);

  if ($current_plugin_path_name == 'shopper/index.php') {
    //Add option if not present.
    $installed_db_ver = get_option("shopper_dotcom_db_version");
    if (!$installed_db_ver) {
      add_option("shopper_dotcom_db_version", '1.0');
    }
    shopper_dotcom_activate_db();
  }
}

function shopper_dot_com_custom_cron_schedule($schedules)
{
  $schedules['per_day'] = array(
    'interval' => 86400,
    'display' => __('Every Day')
  );
  return $schedules;
}
add_filter('cron_schedules', 'shopper_dot_com_custom_cron_schedule');

//Schedule an action if it's not already scheduled
if (!wp_next_scheduled('shopper_sync_event')) {
  wp_schedule_event(time(), 'per_day', 'shopper_sync_event');
}

///Hook into that action that'll fire every 24 hours
add_action('shopper_sync_event', 'shopper_sync_all_data');

/**
 * Deactivation hook.
 */
function shopper_deactivate()
{
  // Clear the permalinks to remove our post type's rules from the database.
  flush_rewrite_rules();
  //clear scheduled event
  wp_clear_scheduled_hook('shopper_sync_event');
}
register_deactivation_hook(__FILE__, 'shopper_deactivate');

/********** Plugin Menu *************/

function shopper_theme_options_panel()
{
  $svg = file_get_contents(trailingslashit(SHOPPER_MY_PLUGIN_URL) . '/assets/shopper.svg');
  $icon_url = "data:image/svg+xml;base64," . base64_encode($svg);
  add_menu_page("Shopper.com", "Shopper.com", 'manage_options', 'shopper-dotcom-wp-options', 'shopper_connection_settings_form', $icon_url, 25);
  remove_menu_page('edit.php?post_type=shopper_dot_com_cpt');
  remove_menu_page('edit.php?post_type=spcom_aff_cpt');
}
add_action('admin_menu', 'shopper_theme_options_panel');

add_action('init', 'activate_shopper_dot_com_cpt', 100);
function activate_shopper_dot_com_cpt()
{
  global $wpdb;
  $shopper_store = $wpdb->prefix . "shopper_dot_com_store";
  if ($wpdb->get_var("SHOW TABLES LIKE '$shopper_store'") == $shopper_store) {
    $query_setting = "SELECT * FROM $shopper_store ";
    $setting_result = $wpdb->get_row($query_setting);
    $settting_Array = json_decode(json_encode($setting_result), true);
    $store_name = $settting_Array ? $settting_Array['store_name'] : "store";
    $aff_slug = $settting_Array ? $settting_Array['link_cloaking_prefix_custom'] : "p";

    if ($settting_Array && $settting_Array['store_enable'] != 'disabled') {
      register_post_type(
        'shopper_dot_com_cpt',
        array(
          'public'      => true,
          'has_archive'  => $store_name,
          'publicly_queriable' => true,
        )
      );
      register_taxonomy(
        'spcomcollection',
        'shopper_dot_com_cpt',
        array(
          'label' => __('spcomcollection'),
          'rewrite' => array('slug' => $store_name),
          'hierarchical' => true,
          'show_admin_column' => true,
        )
      );

      add_rewrite_tag('%spcomcollection%', '([^/]*)');
      add_rewrite_tag('%pageno%', '(\d+)');

      add_rewrite_rule($store_name . '/([^/]*)/page/(\d+)/?$', 'index.php?post_type=shopper_dot_com_cpt&spcomcollection=$matches[1]&pageno=$matches[2]', 'top');
    } else {
      function delete_shopper_dot_com_cpt()
      {
        unregister_post_type('shopper_dot_com_cpt');
      }
      add_action('init', 'delete_shopper_dot_com_cpt', 100);
    }
    if ($settting_Array && $aff_slug) {
      register_post_type(
        'spcom_aff_cpt',
        array(
          'public'      => true,
          'has_archive'  => $aff_slug,
          'publicly_queriable' => true,
        )
      );
      register_taxonomy(
        $aff_slug,
        'spcom_aff_cpt',
        array(
          'label' => __('spcom_aff_redrctn'),
          'rewrite' => false,
          'hierarchical' => true,
          'show_admin_column' => true,
        )
      );
      add_rewrite_tag('%slug_id%', '([^/]*)');

      $spcom_aff_slugs = $wpdb->prefix . "shopper_dot_com_aff_slugs";
      $aff_table_query_string = "SELECT * FROM $spcom_aff_slugs ";
      $aff_table_query_result = $wpdb->get_results($aff_table_query_string);
      $aff_redrn_slugs_data = json_decode(json_encode($aff_table_query_result), true);
      foreach ($aff_redrn_slugs_data as $slug_obj) {
        add_rewrite_rule($slug_obj['slug'] . '/([^/]*)/?$', 'index.php?post_type=spcom_aff_cpt&slug_id=$matches[1]', 'top');
      }
    }

    flush_rewrite_rules(false);
  }
}

// set the custom page template for shopper
add_filter('template_include', 'shopper_store_page_template');
function shopper_store_page_template($template)
{
  $this_term = get_queried_object();
  if ($this_term) {
    $this_term_name = $this_term->name;
    if ($this_term_name == 'shopper_dot_com_cpt') {
      $page_template = dirname(__FILE__) . '/templates/template-store.php';
      return $page_template;
    } elseif ($this_term_name == 'spcom_aff_cpt') {
      $page_template = dirname(__FILE__) . '/templates/template-aff-rdrctn.php';
      return $page_template;
    } elseif ($this_term->taxonomy) {
      $this_taxonomy_obj = get_taxonomy($this_term->taxonomy);
      $this_cpt = $this_taxonomy_obj->object_type;
      if ($this_cpt && $this_cpt[0] == 'shopper_dot_com_cpt') {
        $page_template = dirname(__FILE__) . '/templates/template-store.php';
        return $page_template;
      } elseif ($this_cpt && $this_cpt[0] == 'spcom_aff_cpt') {
        $page_template = dirname(__FILE__) . '/templates/template-aff-rdrctn.php';
        return $page_template;
      }
    }
  } elseif (get_query_var('post_type') && get_query_var('post_type') == 'shopper_dot_com_cpt') {
    $page_template = dirname(__FILE__) . '/templates/template-store.php';
    return $page_template;
  } elseif (get_query_var('post_type') && get_query_var('post_type') == 'spcom_aff_cpt') {
    $page_template = dirname(__FILE__) . '/templates/template-aff-rdrctn.php';
    return $page_template;
  }
  return $template;
}

add_filter('pre_get_document_title', 'shopper_custom_collection_page_title', 10);
add_filter('wpseo_title', 'shopper_custom_collection_page_title', 15);
function shopper_custom_collection_page_title($title)
{
  $this_term = get_queried_object();
  if ($this_term) {
    $this_term_name = $this_term->name;
    if ($this_term_name == 'shopper_dot_com_cpt') {
      $title = ucwords(str_replace(["-", "/"], " ", explode('/', $_SERVER['REQUEST_URI'])[1]));
      return $title;
    } elseif (get_query_var('spcomcollection') && get_query_var('post_type') && get_query_var('post_type') == 'shopper_dot_com_cpt') {
      $title = ucwords(str_replace(["-", "/"], " ", get_query_var('spcomcollection')));
      return $title;
    }
  } elseif (get_query_var('post_type') && get_query_var('post_type') == 'shopper_dot_com_cpt') {
    $title = ucwords(str_replace(["-", "/"], " ", explode('/', $_SERVER['REQUEST_URI'])[1]));
    return $title;
  }
  return $title;
}

function shopperBlockAssets()
{
  wp_enqueue_script(
    'shopperAdddproductBlock',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'build/index.js',
    array('wp-blocks', 'wp-element'),
    SHOPPER_MY_PLUGIN_VER,
    true
  );
  wp_enqueue_style(
    'shopper-dotcom-gutenberg-block-style',
    trailingslashit(SHOPPER_MY_PLUGIN_URL) . 'build/index.css?spcom_ver=' . SHOPPER_MY_PLUGIN_VER
  );
}
add_action('enqueue_block_editor_assets', 'shopperBlockAssets');

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/items', array(
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => 'get_shopper_items'
  ));
});

function get_shopper_items()
{
  global $wpdb;
  $colln_products = $wpdb->prefix . "shopper_dot_com_collection_products";
  $all_collections = $wpdb->prefix . "shopper_dot_com_all_collections";
  $shopper_connection_table = $wpdb->prefix . "shopper_dot_com_auth";
  $shopper_store_table = $wpdb->prefix . "shopper_dot_com_store";
  $is_free_plan = $rem_collns = $rem_pdts = $redirect_slug =  0;
  $enable_referral_link = 1;

  $query_select = "SELECT * FROM $shopper_connection_table";
  $store_data = "SELECT * FROM $shopper_store_table";
  $select_result = $wpdb->get_row($query_select);
  $store_data_row = $wpdb->get_row($store_data);
  $connectionArray = json_decode(json_encode($select_result), true);
  $store_array = json_decode(json_encode($store_data_row), true);
  if ($connectionArray) {
    $is_free_plan = $connectionArray['is_free_plan'];
    $rem_collns = $connectionArray['rem_coll_count'];
    $rem_pdts = $connectionArray['rem_prod_count'];
    $enable_referral_link = $connectionArray['enable_referral_link'];
  }
  if ($store_array) {
    $redirect_slug = $store_array['link_cloaking_prefix_custom'];
  }
  $query_all_colltns = $wpdb->get_results("SELECT * FROM $all_collections", ARRAY_A);
  $query_all_pdts    = $wpdb->get_results("SELECT * FROM $colln_products", ARRAY_A);
  return array($query_all_pdts, $query_all_colltns, $is_free_plan, $rem_collns, $rem_pdts, $redirect_slug, $enable_referral_link);
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/search/', array(
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => 'search_shopper_items'
  ));
});

function search_shopper_items($data)
{
  global $wpdb;
  $search_text = "%" . str_replace("%", " ", $data->get_param('searchtext')) . "%";
  $colln_products = $wpdb->prefix . "shopper_dot_com_collection_products";
  $all_collections = $wpdb->prefix . "shopper_dot_com_all_collections";
  $searched_product    = $wpdb->get_results('SELECT * FROM ' . $colln_products . ' WHERE product_title LIKE "' . $search_text . '"', ARRAY_A);
  $searched_collection    = $wpdb->get_results('SELECT * FROM ' . $all_collections . ' WHERE collection_title LIKE "' . $search_text . '"', ARRAY_A);
  return array($searched_product, $searched_collection);
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/collectionproducts/', array(
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => 'get_shopper_collectionproducts'
  ));
});

function get_shopper_collectionproducts($data)
{
  global $wpdb;
  $collctn_id = $data->get_param('collctn_id');
  $collection_products = $wpdb->prefix . "shopper_dot_com_collection_products";
  $collectionproducts  = $wpdb->get_results('SELECT * FROM ' . $collection_products . ' WHERE collection_id = "' . $collctn_id . '"', ARRAY_A);
  return $collectionproducts;
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/get_themes', array(
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => 'get_user_themes'
  ));
});

function get_user_themes($request)
{
  global $wpdb;
  $layout = $request->get_param('layout');
  $themes_db = $wpdb->prefix . "shopper_dot_com_themes";
  $user_themes = $wpdb->get_results('SELECT * FROM ' . $themes_db . ' WHERE layout LIKE "' . "%" . $layout . "%" . '"', ARRAY_A);
  return $user_themes;
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/save_theme', array(
    'methods' => 'POST',
    'permission_callback' => '__return_true',
    'callback' =>  'save_user_theme',
  ));
});

function save_user_theme($request)
{
  global $wpdb;
  $themes_db = $wpdb->prefix . "shopper_dot_com_themes";
  $parameters = $request->get_params();
  $theme_props =  json_decode($parameters[0], true);
  $existing_themes = $wpdb->get_col('SELECT value FROM ' . $themes_db);
  if (in_array($theme_props["theme_name"], $existing_themes)) {
    return "duplicate";
  }
  $sql = $wpdb->insert($themes_db, array(
    'value' => $theme_props["theme_name"],
    'label' => $theme_props["theme_name"],
    'layout' => $theme_props["layout"],
    'theme_props' => $parameters[0],
  ));
  if ($sql) return "created";
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/update_theme', array(
    'methods' => 'POST',
    'permission_callback' => '__return_true',
    'callback' =>  'update_user_theme',
  ));
});

function update_user_theme($request)
{
  global $wpdb;
  $themes_db = $wpdb->prefix . "shopper_dot_com_themes";
  $parameters = $request->get_params();
  $theme_props =  json_decode($parameters[0], true);
  $existing_theme_id  = $wpdb->get_var('SELECT id FROM ' . $themes_db . ' WHERE value = "' . $theme_props["theme_name"] . '"');
  $sql = $wpdb->update($themes_db, array('theme_props' => $parameters[0]), array('ID' => $existing_theme_id));
  if ($sql) return "updated";
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/delete_theme', array(
    'methods' => 'POST',
    'permission_callback' => '__return_true',
    'callback' =>  'delete_user_theme',
  ));
});

function delete_user_theme($request)
{
  global $wpdb;
  $themes_db = $wpdb->prefix . "shopper_dot_com_themes";
  $theme_name = $request->get_param('theme_name');
  $sql = $wpdb->query($wpdb->prepare("DELETE FROM $themes_db WHERE value = '$theme_name'"));
  if ($sql) return "deleted";
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/global_props', array(
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => 'get_global_props'
  ));
});

function get_global_props()
{
  global $wpdb;
  $global_db = $wpdb->prefix . "shopper_dot_com_global_settings";
  $global_query = "SELECT default_props FROM $global_db";
  $global_data_row = $wpdb->get_row($global_query);
  if ($global_data_row) {
    $global_data_row = json_decode(json_encode($global_data_row), true);
    return $global_data_row;
  }
  return false;
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/get_user', array(
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => 'get_user_name'
  ));
});

function get_user_name()
{
  global $wpdb;
  $shopper_connection_table = $wpdb->prefix . "shopper_dot_com_auth";
  $query_select = "SELECT * FROM $shopper_connection_table";
  $select_result = $wpdb->get_row($query_select);
  $ConnectionArray = json_decode(json_encode($select_result), true);
  if ($ConnectionArray) {
    return $ConnectionArray['user_name'];
  }
  return false;
}

add_action('rest_api_init', function () {
  register_rest_route('shopper/v1', '/get_slug_type', array(
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => 'get_linkcloaking_slug_type'
  ));
});

function get_linkcloaking_slug_type()
{
  global $wpdb;
  $shopper_store_table = $wpdb->prefix . "shopper_dot_com_store";
  $query_select = "SELECT * FROM $shopper_store_table";
  $select_result = $wpdb->get_row($query_select);
  $storeArray = json_decode(json_encode($select_result), true);
  if ($storeArray) {
    return $storeArray['link_cloaking_slug_type'];
  }
  return "name";
}

function getLassoData()
{

  global $wpdb;

  $table1 = $wpdb->prefix . 'lasso_lite_url_details';
  $table2 = $wpdb->prefix . 'posts';
  $table3 = $wpdb->prefix . 'postmeta';

  $query = "SELECT {$table2}.post_title AS 'Product Name', 
                 {$table1}.redirect_url AS 'Product URL',
                 '' AS 'Collection URL',
                 thumbnail.meta_value AS 'Image URL',
                 'auto' AS 'Affiliate Status',
                 '' AS 'Affiliate URL',
                 description.meta_value AS 'Description',
                 '' AS 'Offer URL'
          FROM {$table1}
          JOIN {$table2} ON {$table1}.lasso_id = {$table2}.ID
          LEFT JOIN {$table3} AS thumbnail ON {$table2}.ID = thumbnail.post_id 
              AND thumbnail.meta_key = '_lasso_lite_custom_thumbnail'
          LEFT JOIN {$table3} AS description ON {$table2}.ID = description.post_id 
              AND description.meta_key = '_description'
          WHERE {$table2}.post_status != 'trash'";

  $results = $wpdb->get_results($query);

  if (!empty($results)) {
    $filename = 'shopper_product_template.csv';
    $file = fopen($filename, 'w');

    // Write the headers to the CSV file
    $headers = array(
      'Product Name (Mandatory)',
      'Product URL (Mandatory)',
      'Collection URL (Use semicolon to separate multiple URLs)',
      'Image URL (Mandatory if auto-fetch image is not checked in the upload page)',
      'Affiliate Status (auto/custom/disabled)',
      'Affiliate URL (Mandatory when Affiliate status is “custom”)',
      'Description',
      'Offer URL (Shopper.com coupon or deal URL)'
    );
    fputcsv($file, $headers);

    foreach ($results as $result) {
      // Access the fetched data for each row
      $productTitle = $result->{'Product Name'};
      $productURL = $result->{'Product URL'};
      $collectionURL = '';
      $imageURL = $result->{'Image URL'};
      $affiliateStatus = 'auto';
      $affiliateURL = '';
      $description = $result->{'Description'};
      $offerURL = '';

      // Prepare the data for writing to the CSV file
      $data = array($productTitle, $productURL, $collectionURL, $imageURL, $affiliateStatus, $affiliateURL, $description, $offerURL);
      fputcsv($file, $data);
    }

    fclose($file);

    // Download the generated CSV file
    echo '<script>';
    echo 'var link = document.createElement("a");';
    echo 'link.href = ' . wp_json_encode($filename) . ';';
    echo 'link.download = ' . wp_json_encode($filename) . ';';
    echo 'link.click();';
    echo '</script>';
  }
}
