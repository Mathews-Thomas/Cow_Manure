import { useEffect } from 'react';

const Product = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;

    script.onload = () => {
      if (window.ShopifyBuy) {
        const client = window.ShopifyBuy.buildClient({
          domain: 'YOUR_SHOPIFY_STORE.myshopify.com',
          storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN',
        });

        window.ShopifyBuy.UI.onReady(client).then((ui) => {
          ui.createComponent('product', {
            id: 'YOUR_PRODUCT_ID',
            node: document.getElementById('product-component'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              product: {
                iframe: false,
                text: {
                  button: 'Buy Now',
                },
                buttonDestination: 'checkout',
              },
              cart: {
                startOpen: false,
              },
            },
          });
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div id="product-component"></div>
    </div>
  );
}

export default Product;
