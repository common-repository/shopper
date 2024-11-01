<?php

// If uninstall not called from WordPress, then exit.
if (!defined('WP_UNINSTALL_PLUGIN')) {
  exit();
}

if (!current_user_can('activate_plugins')) {
  exit();
}

global $wpdb;
$tableArray = [
  $wpdb->prefix . "shopper_dot_com_auth",
  $wpdb->prefix . "shopper_dot_com_collection_products",
  $wpdb->prefix . "shopper_dot_com_all_collections",
  $wpdb->prefix . "shopper_dot_com_store",
  $wpdb->prefix . "shopper_dot_com_aff_slugs",
  $wpdb->prefix . "shopper_dot_com_themes",
  $wpdb->prefix . "shopper_dot_com_global_settings",
];
delete_option('shopper_dotcom_db_version');

foreach ($tableArray as $tablename) {
  if ($wpdb->get_var("show tables like '" . $tablename . "'") == $tablename) {
    $wpdb->query($wpdb->prepare("DROP TABLE $tablename"));
  }
}
