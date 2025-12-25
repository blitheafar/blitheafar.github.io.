
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BVYsYAdG.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CATVnQY0.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-ja.DDwhgzof.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CgEyYNQi.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.C5KczGhI.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.Bye0HRdL.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.Btn_bh9F.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DcjElSm_.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.BT361tuw.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.DNaisRKM.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.Yfrmb-Fp.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.bNPic0_d.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.CMiDZKA3.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager.DT14nMp8.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod.6aAgDEk1.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.E-ccD7fk.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.Mna-WNRL.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DfeXODc9.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.kBUXRgsm.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.B9Rj2BF5.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.CeesvjkE.js","/cdn/shopifycloud/checkout-web/assets/c1/index.DIb0XW0y.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CjGn_Lz5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BE3bhd3W.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.Ca9titpM.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.Cuz4ryjJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CBpWLJzT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/lato/lato_n4.c3b93d431f0091c8be23185e15c9d1fee1e971c5.woff2?h1=ZmFuZ2FtZXIuanA&hmac=449472ef6dc37047e34b4e742082adc7375605f450bad57e51dd4d955b7239ec","https://fonts.shopifycdn.com/lato/lato_n7.900f219bc7337bc57a7a2151983f0a4a4d9d5dcf.woff2?h1=ZmFuZ2FtZXIuanA&hmac=7d232291d39c5963fe999f6966ca8c22235aeeb6020c6fb260583acfb84dea55"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/2000/0993/files/logo-jp-white-fs8_x320.png?v=1722454361","https://cdn.shopify.com/s/files/1/2000/0993/files/bg-galactamari-w-border-fs8_2000x.png?v=1722454769"];

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
  