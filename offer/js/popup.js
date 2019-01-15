
async function check_account() {
  let product = await get_dropified_bundle(email);

}


// go to ep app to check account
async function get_account(dropified_products_id) {
  return new Promise (
    (resolve, reject) => {
      $.ajax({
        url: "https://app.dropified.com/product/mapping/bundle/"+dropified_products_id,
        type: "GET"
      }).then ( (response) => { //success ajax
        let variants = [];
        let pattern = new RegExp("var shopify_product =([^\n]+);\s*\n");
        let match = pattern.exec(response);
        // get shopify_product from regex
        eval(match[0]);

        for (let variant_index in shopify_product.variants){
            let bundle_item = shopify_product.variants[variant_index].products;
            let bundles = [];
            // include itself as first bundle
            let self_variant_id = shopify_product.variants[variant_index].id;
            let self_data = DROPIFIEDMAP.get(self_variant_id.toString());
            let bundle_self_item = {
              data: self_data,
              quantity: 1
            }
            // put self in bundle if bundle is empty
            if (bundle_item.length==0) {
              bundles.push(bundle_self_item);
            }
            // pack each bundle
            for (let bundle_index in bundle_item) {
                let quantity = bundle_item[bundle_index].quantity;
                variant_id = bundle_item[bundle_index].variant_id;
                let data = DROPIFIEDMAP.get(variant_id);
                if (!data) {
                  continue;
                }
                let bundle_item_data = {
                    data: data,
                    quantity: quantity
                }
                bundles.push(bundle_item_data);
            }
            let variant = {
                shopify_variant_id: shopify_product.variants[variant_index].id,
                bundles: bundles
            }
            variants.push(variant);
        }

        product = {
          shopify_product_id: shopify_product_id,
          variants: variants
        }
        resolve(product);
      },
      (response) => { // fail ajax
        reject(response);
      })
  })
}