
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/polyfills.tJpytseg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/app.C5hq_bIv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/VaultedContact.wEl5ob8S.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/DeliveryMethodSelectorSection.DI8q263s.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useAmazonContact.CCDNBmiS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useUnauthenticatedErrorModal.39SfVaVH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/VaultedDeliveryAddress.CgoCnA8p.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/Rollup.CnAtW4zs.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/MarketsProDisclaimer.B0YJsfVm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/ShopPayLogo.B7M8Ie9l.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/index.DaNiiLbL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/PickupPointCarrierLogo.DFuYPt22.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/hooks.J7GQiooJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/LocalizationExtensionField.BEP07YRE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useShowShopPayOptin.DOLqMQCt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useShopPayRequiresVerification.DQS3JnY6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/Section.jObh8OiD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useGooglePaySdk.DkHmyQn8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/PayButtonSection.DxRBuHhP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/RageClickCapture.DsaQDtTz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/LegacyVaultedShippingMethods.DeiIYeRJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/index.CtBxBCqK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/DutyOptions.BE_djBhO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/SubscriptionPriceBreakdown.Dh7_2Br1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/StockProblemsLineItemList.Cox3zAeW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/component-ShopPayVerificationSwitch.CMJpkmTg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/index.IUJtbyU2.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/app.Li7g7W1D.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/VaultedContact.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/LocalizationExtensionField.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/lato/lato_n4.c86cddcf8b15d564761aaa71b6201ea326f3648b.woff2?h1=ZmFuZ2FtZXIuanA&hmac=48a5389e0dc47ae1d0c253031138dc03136f90cd751817b0d046dd3e7edad6d8","https://fonts.shopifycdn.com/lato/lato_n7.f0037142450bd729bdf6ba826f5fdcd80f2787ba.woff2?h1=ZmFuZ2FtZXIuanA&hmac=b95821a038c742e6a4c155f7124228f52b7ef26f372d9986a167a1bf9cf6cf93"];
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
  