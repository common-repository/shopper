<?php

/**
 * Template Name: Affiliate Redirection Page
 * Template Post Type: spcom_aff_cpt
 *
 */
global $wpdb;
$slug_id = get_query_var('slug_id');
$collection_products = $wpdb->prefix . "shopper_dot_com_collection_products";
$all_collections = $wpdb->prefix . "shopper_dot_com_all_collections";
$shopper_store_table = $wpdb->prefix . "shopper_dot_com_store";
$query_select = "SELECT * FROM $shopper_store_table";
$select_result = $wpdb->get_row($query_select);
$storeArray = json_decode(json_encode($select_result), true);
$affiliate_link = false;
$linkSlugType = "name";
if ($storeArray && $storeArray['link_cloaking_slug_type'] == "slug") {
    $linkSlugType = "slug";
}

if ($linkSlugType == "name") {
    $current_product  = $wpdb->get_results('SELECT * FROM ' . $collection_products . ' WHERE pdt_name_slug = "' . $slug_id . '"', ARRAY_A);
    $current_collection  = $wpdb->get_results('SELECT * FROM ' . $all_collections . ' WHERE colln_name_slug = "' . $slug_id . '"', ARRAY_A);
} else {
    $current_product  = $wpdb->get_results('SELECT * FROM ' . $collection_products . ' WHERE pdt_slug = "' . $slug_id . '"', ARRAY_A);
    $current_collection  = $wpdb->get_results('SELECT * FROM ' . $all_collections . ' WHERE colln_slug = "' . $slug_id . '"', ARRAY_A);
}

if (!count($current_product) && !count($current_collection)) { // for the old links to work
    $current_product  = $wpdb->get_results('SELECT * FROM ' . $collection_products . ' WHERE product_id = "' . $slug_id . '"', ARRAY_A);
    $current_collection  = $wpdb->get_results('SELECT * FROM ' . $all_collections . ' WHERE collection_id = "' . $slug_id . '"', ARRAY_A);
}

if (count($current_product)) {
    $affiliate_link = $current_product[0]['products_affilate'];
} elseif (count($current_collection)) {
    $affiliate_link = $current_collection[0]['collection_url'];
}
if ($affiliate_link) {
    $status_code = 302;
    $shopper_store_table = $wpdb->prefix . "shopper_dot_com_store";
    $store_table = "SELECT * FROM $shopper_store_table";
    $store_data_row = $wpdb->get_row($store_table);
    $store_array = json_decode(json_encode($store_data_row), true);
    if ($store_array) {
        $status_code = $store_array['link_cloaking_redirect_type'];
    }
    wp_redirect($affiliate_link, $status_code);
}
