<?php

/**
 * Template Name: Store
 * Template Post Type: shopper_dot_com_cpt
 *
 */
get_header(null, array());

global $wpdb, $paged;
$shopper_store = $wpdb->prefix . "shopper_dot_com_store";
$dbdata = $wpdb->get_results("SELECT * FROM $shopper_store");
$store_name = $dbdata[0]->store_name;
$store_title = $dbdata[0]->store_title;
$req_url = sanitize_url($_SERVER['REQUEST_URI']);
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
    $url_h = "https://";
else
    $url_h = "http://";
$site_url = trailingslashit(get_site_url());
$collctn = "/" . strtolower($store_name) . "/";
$collctn_url = sanitize_url($url_h . $_SERVER['HTTP_HOST'] . $collctn);
$collctn_full_url = sanitize_url($collctn . get_query_var('spcomcollection'));
$getcondition = $wpdb->get_results("SELECT cars,collection_per_page,product_per_page,link_cloaking_prefix_custom FROM $shopper_store");
$carts = $getcondition[0]->cars;
$coll_per_page = $getcondition[0]->collection_per_page;
$pro_per_page = $getcondition[0]->product_per_page;
$aff_redrctn_slug = $getcondition[0]->link_cloaking_prefix_custom;
$redirection_path = trailingslashit($site_url . $aff_redrctn_slug);
$page_id = get_query_var('paged') ? (int) get_query_var('paged') : (get_query_var('pageno') ? (int) get_query_var('pageno') : 1);
$prod_start = ($page_id - 1) * $pro_per_page;
$coll_start = ($page_id - 1) * $coll_per_page;
$all_collections = $wpdb->prefix . "shopper_dot_com_all_collections";
$collection_products = $wpdb->prefix . "shopper_dot_com_collection_products";
$query_all_colltns = $wpdb->get_results("SELECT * FROM $all_collections");
$query_all_pdts    = $wpdb->get_results("SELECT * FROM $collection_products");
$page_pos = strpos($req_url, '/page');
if ($page_pos) {
    $req_url = substr($req_url, 0, $page_pos + 1);
}
function getPdtUrlSlug($pdt)
{
    $pdt_slug = $pdt->pdt_name_slug;
    if (get_linkcloaking_slug_type() == "slug") {
        $pdt_slug = $pdt->pdt_slug;
    }
    return $pdt_slug;
}
function getCollectionData($collnSlug)
{
    global $wpdb;
    $all_collections = $wpdb->prefix . "shopper_dot_com_all_collections";
    $collectionData = $wpdb->get_results('SELECT collection_id, collection_title FROM ' . $all_collections . ' WHERE colln_name_slug = "' . $collnSlug . '"');
    $resultDictionary = array();
    if (isset($collectionData)) {
        $resultDictionary = $collectionData[0];
    }
    return $resultDictionary;
}
if ($req_url == ("/" . strtolower($store_name) . "/") || $req_url == ("/" . strtolower($store_name))) {
?>
    <div class="Shopper_collection_product">
        <?php if ($carts == 'Collections' || $carts == 'Collectionsselected') { ?>
            <div class="shopper-dotcom-wp-page-container">
                <div class="shopper-dotcom-wp-blog-post">
                    <h3><?php if ($store_title) echo esc_textarea($store_title); ?></h3>
                    <div class="shopper-dotcom-wp-post-columns">
                        <?php
                        $page_id    = max($page_id, 1);
                        printf('<script>console.log(%s);</script>', json_encode($query_all_colltns));
                        foreach (array_slice($query_all_colltns, $coll_start, $coll_per_page) as $result) {  ?>
                            <a href="<?php echo esc_url($collctn_url . $result->colln_name_slug) ?>">
                                <div class="shopper-dotcom-wp-column sa1">
                                    <div class="shopper-dotcom-wp-image-wrapper">
                                        <img src="<?php
                                                    global $wpdb;
                                                    $coll_fetch_query = 'SELECT * FROM ' . $collection_products . ' WHERE collection_id = "' . $result->collection_id . '"' . ' AND product_image IS NOT NULL ' . 'LIMIT 1';
                                                    $query_coll_pdts    = $wpdb->get_results($coll_fetch_query);
                                                    if ($result->collection_image) {
                                                        echo esc_url($result->collection_image);
                                                    } elseif ($query_coll_pdts) {
                                                        echo esc_url($query_coll_pdts[0]->product_image);
                                                    }
                                                    ?>" alt="" />
                                    </div>
                                    <h4><?php echo esc_textarea($result->collection_title) ?></h4>
                                    <div class="sp__coll-stats">
                                        <div class="sp__coll-prod"><?php echo esc_textarea($result->collection_products) ?> Products</div>
                                    </div>
                                </div>
                            </a>
                        <?php   } ?>
                    </div>
                    <div>
                        <?php
                        $total    = ceil(count($query_all_colltns) / $coll_per_page);
                        echo paginate_links(
                            [
                                'total'   => $total,
                                'current' => $page_id,
                            ]
                        );
                        ?>
                    </div>
                </div>
            </div>
        <?php } else {  ?>
            <div class="shopper-dotcom-wp-page-container">
                <div class="shopper-dotcom-wp-blog-post">
                    <h3><?php if ($store_title) echo esc_textarea($store_title); ?></h3>
                    <div class="shopper-dotcom-wp-post-columns">
                        <?php
                        $page_id    = max($page_id, 1);
                        printf('<script>console.log(%s);</script>', json_encode($query_all_pdts));
                        foreach (array_slice($query_all_pdts, $prod_start, $pro_per_page) as $result) { ?>
                            <a href="<?php echo esc_url($redirection_path . getPdtUrlSlug($result) . "/") ?>" target="_blank">
                                <div class="shopper-dotcom-wp-column sa2">
                                    <div class="shopper-dotcom-wp-image-wrapper">
                                        <img src="<?php echo esc_url($result->product_image) ?>" alt="" />
                                    </div>
                                    <h4><?php echo esc_textarea($result->product_title) ?></h4>
                                </div>
                            </a>
                        <?php }  ?>
                    </div>
                    <div>
                        <?php
                        $total    = ceil(count($query_all_pdts) / $pro_per_page);
                        echo paginate_links(
                            [
                                'total'   => $total,
                                'current' => $page_id,
                            ]
                        );
                        ?>
                    </div>
                </div>
            </div>
        <?php
        } ?>
    </div>
<?php } elseif ($req_url == ($collctn_full_url . "/") || $collctn_full_url) {
?>
    <!-- Products inside collections -->
    <div class="Shopper_collection_product">
        <?php ?>
        <div class="shopper-dotcom-wp-page-container">
            <div class="shopper-dotcom-wp-blog-post">
                <h3><?php
                    $collnData = getCollectionData(get_query_var('spcomcollection'));
                    $coll_name = isset($collnData->collection_title) ? $collnData->collection_title : "";
                    echo esc_textarea(ucwords($coll_name)) ?></h3>
                <div class="shopper-dotcom-wp-post-columns">
                    <?php
                    $page_id    = max($page_id, 1);
                    $collctn_id = isset($collnData->collection_id) ? $collnData->collection_id : false;
                    $coll_prod_start = ($page_id - 1) * $pro_per_page;
                    $query_coll_pdts    = $wpdb->get_results('SELECT * FROM ' . $collection_products . ' WHERE collection_id = "' . $collctn_id . '"');
                    foreach (array_slice($query_coll_pdts, $coll_prod_start, $pro_per_page) as $result) { ?>
                        <a href="<?php echo esc_url($redirection_path . getPdtUrlSlug($result) . "/") ?>" target="_blank">
                            <div class="shopper-dotcom-wp-column sa2">
                                <div class="shopper-dotcom-wp-image-wrapper">
                                    <img src="<?php echo esc_url($result->product_image) ?>" alt="" />
                                </div>
                                <h4><?php echo esc_textarea($result->product_title) ?></h4>
                            </div>
                        </a>
                    <?php }  ?>
                </div>
                <div>
                    <?php
                    $total    = ceil(count($query_coll_pdts) / $pro_per_page);
                    echo paginate_links(
                        [
                            'total'   => $total,
                            'current' => $page_id,
                        ]
                    );
                    ?>
                </div>
            </div>
        </div>
    <?php
} ?>
    </div>

    <?php
    get_footer();
