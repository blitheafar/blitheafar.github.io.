
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.Bvnj2aN0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DYAYGWKI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.CtMBWc1h.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.0uCvD2cG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.BAMCSJtJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/AmazonPayPCIButton.Crw8xXxz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayCaptcha.D3hCSjva.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/CheckoutAsGuest.974O-H0t.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useRefEffect.C9Iilgxh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.D379xBfc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.D19LZLj7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.DPZSyF_P.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.B2hiuVij.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.CIS1N0Fk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShopPayRequiresVerification.CpKEnI4u.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.KH3FVqzO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/GooglePayPCIButton.D-B7ROog.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.C1cgdf1O.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.CKI8_Vwk.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useInstallmentsErrorHandler.5C6DIOyR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.J9hZriS2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.Bi6iPp1z.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.BPBg116d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.BvT3fezU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.DHTsNL-G.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGetBuyWithPrimeCheckoutSessionId.pMVRv3OY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.Bf5K4BsW.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.BtDbFeTa.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LegacyVaultedShippingMethods.Bp61D3vS.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DcFEH8PJ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayCaptcha.CUoq2pCx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/CheckoutAsGuest.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.mj3hAev9.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useGetBuyWithPrimeCheckoutSessionId.DVQdwG9J.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0557/5868/4333/files/VGP30_01_x320.png?v=1672850922"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  