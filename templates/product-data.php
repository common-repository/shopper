<?php
function shopper_sync_all_data()
{
	try {
		/* http://api.shopper.com/v1/collections?page=1&limit=100" */
		global $wpdb;
		$shopper_connection_table = $wpdb->prefix . "shopper_dot_com_auth";
		$api_id = "";

		$query_select = "SELECT * FROM $shopper_connection_table";
		$select_result = $wpdb->get_row($query_select);
		$ConnectionArray = json_decode(json_encode($select_result), true);
		$api_id = $ConnectionArray['id'];
		$app_token = $ConnectionArray['api_token'];
		$allow_tracking = $ConnectionArray['debug_status'];
		$enable_referral_link = $ConnectionArray['enable_referral_link'];

		$args = array(
			'headers'     => array(
				'X-Session-Token' => $app_token,
			),
		);
		$collns = shopper_get_collection_data($args, $shopper_connection_table, $api_id, $enable_referral_link);
		if ($collns) {
			$all_collections = $wpdb->prefix . "shopper_dot_com_all_collections";
			$collection_products = $wpdb->prefix . "shopper_dot_com_collection_products";
			$wpdb->query("TRUNCATE TABLE $all_collections");
			/*Start Insert All Collections Data in Database */
			for ($i = 0; $i < count($collns); $i++) {
				if (!$collns[$i]['private']) {
					$collectionid = sanitize_text_field($collns[$i]['id']);
					$collectionname = sanitize_text_field($collns[$i]['name']);
					$collectionproducts = sanitize_text_field($collns[$i]['products']);
					$collectionurl = sanitize_url($collns[$i]['url']);
					$collectionviews = sanitize_text_field($collns[$i]['views']);
					$create_date = sanitize_text_field($collns[$i]['create_date']);
					if (!empty($collns[$i]['thumbnail'])) {
						$collection_img_incoming = $collns[$i]['thumbnail'];
					} elseif (!empty($collns[$i]['cover_image'])) {
						$collection_img_incoming = $collns[$i]['cover_image'];
					} else {
						$collection_img_incoming = false;
					}
					$collectionimage = !empty($collection_img_incoming) ? sanitize_url($collection_img_incoming . "-w320") : false;
					$collection_full_image = !empty($collns[$i]['cover_image']) ? sanitize_url($collns[$i]['cover_image']) : false;
					$collection_slug = sanitize_text_field($collns[$i]['slug']);
					$uniqCollectionName = makeUniqueNameSlug($collectionname);

					$sqlquery = $wpdb->get_results('SELECT * FROM ' . $all_collections . ' WHERE collection_id="' . $collectionid . '"');
					if (!$sqlquery) {
						$write_status = $wpdb->insert($all_collections, array(
							'collection_id' => $collectionid,
							'collection_title' => $collectionname,
							'collection_image' => $collectionimage,
							'collection_full_image' => $collection_full_image,
							'collection_url' => $collectionurl,
							'collection_products' => $collectionproducts,
							'collection_view' => $collectionviews,
							'current_update_time' => $create_date,
							'colln_slug' => $collection_slug,
							'colln_name_slug' => $uniqCollectionName,
						));
					}
					//create a collection as a category if it doesn't exist, to be recognised as a valid URL in wordpress 
					$categ_id = get_term_by('slug', $uniqCollectionName, 'spcomcollection');
					if (!$categ_id) {
						$categ_id = wp_insert_category(array(
							'cat_name' => $uniqCollectionName,
							'category_description' => $collectionid,
							'taxonomy' => 'spcomcollection'
						));
					} else {
						$categ_id = $categ_id->term_id;
					}

					// create products as cpt
					// $existing_post = get_page_by_title( $productname, OBJECT, 'shopper_dot_com_cpt' );
					// if (!$existing_post){
					// 	$products = array(
					// 		'post_title'      => $productname,
					// 		'post_content'    => $productid,
					// 		'post_status'     => 'publish',
					// 		'post_type'       => 'shopper_dot_com_cpt',
					// 		'post_category'   => array( $categ_id )
					// 	);

					// 	$post_id = wp_insert_post($products);
					// 	wp_set_post_terms( $post_id, array($categ_id), 'spcomcollection' );
					// }
				}
			}
			/*End Insert All Collections Data in Database */

			$coll_pdts = shopper_get_products_data($args, $shopper_connection_table, $api_id, $enable_referral_link);
			/*Start Insert All  product Data in Database */
			if ($coll_pdts) {
				$wpdb->query("TRUNCATE TABLE $collection_products");
				for ($j = 0; $j < count($coll_pdts); $j++) {
					$productid = sanitize_text_field($coll_pdts[$j]['id']);
					$productname = sanitize_text_field($coll_pdts[$j]['name']);
					$producturl = sanitize_url($coll_pdts[$j]['url']);
					$productimage = isset($coll_pdts[$j]['image']) ? sanitize_url($coll_pdts[$j]['image'] . "-w320") : false;
					$product_desc = isset($coll_pdts[$j]['description']) ?  $coll_pdts[$j]['description'] : NULL;
					$product_full_image = isset($coll_pdts[$j]['image']) ? sanitize_url($coll_pdts[$j]['image']) : false;
					$affilate_url = sanitize_url($coll_pdts[$j]['affiliate_url']);
					$create_date = sanitize_text_field($coll_pdts[$j]['create_date']);
					$prod_coll_id = sanitize_text_field($coll_pdts[$j]['collection']['id']);
					$prod_coll_name = sanitize_text_field($coll_pdts[$j]['collection']['name']);
					$productSlug = sanitize_text_field($coll_pdts[$j]['slug']);
					$uniqProductName = makeUniqueNameSlug($productname);

					$sqlquery = $wpdb->get_results('SELECT * FROM ' . $collection_products . ' WHERE product_id = "' . $productid . '"');
					if (!$sqlquery) {
						$write_status = $wpdb->insert($collection_products, array(
							'collection_id' => $prod_coll_id,
							'collection_name' => $prod_coll_name,
							'product_id' => $productid,
							'product_title' => $productname,
							'product_image' => $productimage,
							'product_description' => $product_desc,
							'product_full_image' => $product_full_image,
							'product_url' => $producturl,
							'products_affilate' => $affilate_url,
							'current_update_time' => $create_date,
							'pdt_slug' => $productSlug,
							'pdt_name_slug' => $uniqProductName,
						));
					}
				}
			}
			/*End Insert All Collection Product Data in Database */

			$query_all_colltns = $wpdb->get_results("SELECT * FROM $all_collections");
			foreach ($query_all_colltns as $collection) {
				$collctn_id = sanitize_text_field($collection->collection_id);
				$coll_id = sanitize_text_field($collection->id);
				$prod_fetch_query = $wpdb->get_results('SELECT * FROM ' . $collection_products . ' WHERE collection_id = "' . $collctn_id . '"' . ' AND product_image IS NOT NULL ' . 'LIMIT 3', ARRAY_A);
				if (count($prod_fetch_query) > 0) {
					if (!sanitize_text_field($collection->collection_image)) {
						$coll_image = $prod_fetch_query[0]['product_image'];
					} else {
						$coll_image = sanitize_text_field($collection->collection_image);
					}
					if (count($prod_fetch_query) == 3) {
						$wpdb->update($all_collections, array('collection_prod_image1' => $coll_image, 'collection_prod_image2' => $prod_fetch_query[1]['product_image'], 'collection_prod_image3' => $prod_fetch_query[2]['product_image']), array('ID' => $coll_id));
					} elseif (count($prod_fetch_query) == 2) {
						$wpdb->update($all_collections, array('collection_prod_image1' => $coll_image, 'collection_prod_image2' => $prod_fetch_query[1]['product_image'], 'collection_prod_image3' => $prod_fetch_query[1]['product_image']), array('ID' => $coll_id));
					} elseif (count($prod_fetch_query) == 1) {
						$wpdb->update($all_collections, array('collection_prod_image1' => $coll_image, 'collection_prod_image2' => $prod_fetch_query[0]['product_image'], 'collection_prod_image3' => $prod_fetch_query[0]['product_image']), array('ID' => $coll_id));
					}
				}
			}
		}
		if ($allow_tracking != '2') {
			shopper_send_debug_info();
		}
	} catch (Error $e) {
		printf('<script>console.log("shopper_sync_all_data",%s);</script>', json_encode($e->getMessage()));
	}
}

function makeUniqueNameSlug($productName)
{
	global $wpdb;
	$collections_db = $wpdb->prefix . "shopper_dot_com_all_collections";
	$products_db = $wpdb->prefix . "shopper_dot_com_collection_products";

	// Replace any characters that are not letters, digits, or hyphens with an empty string
	$originalSlug = preg_replace('/[^a-zA-Z0-9-]/', '-', $productName);
	$originalSlug = strtolower(str_replace(' ', '-', $originalSlug));

	$count = 0;
	$existingProductNames = $wpdb->get_col('SELECT pdt_name_slug FROM ' . $products_db);
	$existingCollectionNames = $wpdb->get_col('SELECT colln_name_slug FROM ' . $collections_db);
	$existingNameSlugs = array_merge($existingProductNames, $existingCollectionNames);
	foreach ($existingNameSlugs as $existingProduct) {
		if ($existingProduct === $originalSlug) {
			$count++;
		}
	}

	if ($count === 0) {
		return $originalSlug;
	}

	$uniqueProductName = $originalSlug;
	$suffix = 1;

	while ($count > 0) {
		$uniqueProductName = $originalSlug . '-' . $suffix;

		$count = 0;

		foreach ($existingNameSlugs as $existingProduct) {
			if ($existingProduct === $uniqueProductName) {
				$count++;
			}
		}

		$suffix++;
	}

	return $uniqueProductName;
}

function shopper_get_collection_data($args, $shopper_connection_table, $api_id, $enable_referral_link, $page = 1)
{
	try {
		// Perform a GET request to the API
		global $wpdb;
		$colln_url = "http://api.shopper.com/v1/collections" . "?page=$page";
		$colln_response = wp_remote_get($colln_url, $args);
		$colln_body     = wp_remote_retrieve_body($colln_response);
		$colln_data = json_decode($colln_body, true);

		if (isset($colln_data['status']) && $colln_data['status'] == 200) {
			// Check if there is a next page
			if (!isset($colln_data['warning_code']) && $colln_data['current'] != $colln_data['end']) {
				// Get the next page
				$page = $page + 1;
				// Append the data from the next page
				$colln_data['collections'] = array_merge($colln_data['collections'], shopper_get_collection_data($args, $shopper_connection_table, $api_id, $enable_referral_link, $page));
			}
			$is_free_tier = $rem_coll_count = 0;
			if (isset($colln_data['warning_code']) && $colln_data['warning_code'] == 402) {
				$is_free_tier = $enable_referral_link = 1;
				$rem_coll_count = $colln_data['total'] - count($colln_data['collections']);
			}
			$sql = $wpdb->update($shopper_connection_table, array('is_free_plan' => $is_free_tier, 'enable_referral_link' => $enable_referral_link, 'rem_coll_count' => $rem_coll_count), array('ID' => $api_id));
			return $colln_data['collections'];
		} else {
			return false;
		}
	} catch (Error $e) {
		printf('<script>console.log("shopper_get_collection_data",%s);</script>', json_encode($e->getMessage()));
	}
}

function shopper_get_products_data($args, $shopper_connection_table, $api_id, $enable_referral_link, $page = 1)
{
	try {
		// Perform a GET request to the API
		global $wpdb;
		$prod_url = "http://api.shopper.com/v1/products" . "?page=$page";
		$prod_response = wp_remote_get($prod_url, $args);
		$prod_body     = wp_remote_retrieve_body($prod_response);
		$prod_data = json_decode($prod_body, true);

		if (isset($prod_data['status']) && $prod_data['status'] == 200) {
			// Check if there is a next page
			if (!isset($prod_data['warning_code']) && $prod_data['current'] != $prod_data['end']) {
				// Get the next page
				$page = $page + 1;
				// Append the data from the next page
				$prod_data['products'] = array_merge($prod_data['products'], shopper_get_products_data($args, $shopper_connection_table, $api_id, $enable_referral_link, $page));
			}
			$is_free_tier = $rem_prod_count = 0;
			if (isset($prod_data['warning_code']) && $prod_data['warning_code'] == 402) {
				$is_free_tier = $enable_referral_link = 1;
				$rem_prod_count = $prod_data['total'] - count($prod_data['products']);
			}
			$sql = $wpdb->update($shopper_connection_table, array('is_free_plan' => $is_free_tier, 'enable_referral_link' => $enable_referral_link, 'rem_prod_count' => $rem_prod_count), array('ID' => $api_id));
			return $prod_data['products'];
		} else {
			return false;
		}
	} catch (Error $e) {
		printf('<script>console.log("shopper_get_products_data",%s);</script>', json_encode($e->getMessage()));
	}
}

function shopper_get_user_data()
{
	try {
		// Perform a GET request to the API
		global $wpdb;
		$shopper_connection_table = $wpdb->prefix . "shopper_dot_com_auth";
		$query_select = "SELECT * FROM $shopper_connection_table";
		$select_result = $wpdb->get_row($query_select);
		$ConnectionArray = json_decode(json_encode($select_result), true);
		$profile_name = $user_name = $user_mail = "";
		if ($ConnectionArray && $ConnectionArray['api_token']) {
			$app_token = $ConnectionArray['api_token'];
			$row_id = $ConnectionArray['id'];
			$args = array(
				'headers'     => array(
					'X-Session-Token' => $app_token,
				),
			);
			$url = "http://api.shopper.com/v1/user";
			$response = wp_remote_get($url, $args);
			$response_code = wp_remote_retrieve_response_code($response);
			if ($response_code == 200) {
				$body     = wp_remote_retrieve_body($response);
				$user_array = json_decode($body, true);
				$profile_name = $user_array['profile_name'];
				$user_name = $user_array['user_name'];
				$user_mail = $user_array['email'];
				$sql = $wpdb->update($shopper_connection_table, array('profile_name' => $profile_name, 'user_name' => $user_name, 'user_mail' => $user_mail), array('ID' => $row_id));
				return true;
			} else {
				return false;
			}
		}
	} catch (Error $e) {
		printf('<script>console.log("shopper_get_user_data",%s);</script>', json_encode($e->getMessage()));
	}
}

function shopper_send_debug_info()
{
	try {
		global $wpdb, $wp_version;
		$shopper_connection_table = $wpdb->prefix . "shopper_dot_com_auth";
		$query_select = "SELECT * FROM $shopper_connection_table";
		$select_result = $wpdb->get_row($query_select);
		$ConnectionArray = json_decode(json_encode($select_result), true);
		$profile_name = $user_name = $user_mail = "";
		if ($ConnectionArray) {
			$profile_name = $ConnectionArray['profile_name'];
			$user_name = $ConnectionArray['user_name'];
			$user_mail = $ConnectionArray['user_mail'];
		}

		$shopper_store = $wpdb->prefix . "shopper_dot_com_store";
		$query_setting = "SELECT * FROM $shopper_store ";
		$setting_result = $wpdb->get_row($query_setting);
		$setttings_Array = json_decode(json_encode($setting_result), true);
		$site_url = get_site_url();
		$cur_theme = wp_get_theme();
		$all_plugins = get_plugins();
		$plugins_list = "";
		foreach ($all_plugins as $plugins) {
			$plugins_list = $plugins_list . $plugins['Name'] . ", ";
		}
		$wp_cur_timezone = wp_timezone_string();
		$mysql_cur_version = json_decode(json_encode($wpdb->get_row("SELECT @@VERSION")), true)["@@VERSION"];

		$args = array(
			'headers'     => array('Content-Type' => 'application/json; charset=utf-8'),
			'body'  => json_encode(array(
				'name' => $profile_name,
				'user_name' => $user_name,
				'user_email' => $user_mail,
				'store_slug' => $setttings_Array['store_name'],
				'home_page' =>  $setttings_Array['cars'],
				'wp_host_url' => $site_url,
				'plugin_version' => SHOPPER_MY_PLUGIN_VER,
				'wp_version' => $wp_version,
				'php_version' => PHP_VERSION,
				'mysql_version' => $mysql_cur_version,
				'wp_theme' => $cur_theme->get('Name'),
				'wp_theme_version' => $cur_theme->get('Version'),
				'wp_server_timezone' => $wp_cur_timezone,
				'installed_plugins' => $plugins_list,
			)),
			'method'      => 'POST',
			'data_format' => 'body',
		);
		$url = "https://www.shopper.com/wp_debug_info/";
		$response = wp_remote_post($url, $args);
	} catch (Error $e) {
		printf('<script>console.log("shopper_send_debug_info",%s);</script>', json_encode($e->getMessage()));
	}
}

function shopper_force_refresh_page()
{
?>
	<script type="text/javascript">
		window.location.reload();
	</script>
<?php
}
