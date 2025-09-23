
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/polyfills.i4n1wfLs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/app.DhIixLTY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/en.tMEW6v7f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/page-OnePage.CdSI1l99.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection.BVCX7b9y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation.D9RyIbR4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/VaultedPayment.Boq30pMe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.CRlIdriR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.BIFg6kPs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.MLTTpIlZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DvEsg11p.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.ffofjZ5N.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/PayButtonSection.C49WJhCP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.CEMsXgSy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.BsLL_hOv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/index.CTP8lx3t.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/app.7ytTcoft.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/useEditorShopPayNavigation.Dvkv4byz.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
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
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
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
  