
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/polyfills.CG3oGVWg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/app.CEAlHBvm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/OnePage.DnR5avxy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/DeliveryMethodSelectorSection.DuLMEXIW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useUnauthenticatedErrorModal.Dv096x4A.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/LegacyVaultedShippingMethods.DG1CVDgD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/Rollup.BpNfeSG5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/SubscriptionPriceBreakdown.l5buA-Tu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/MarketsProDisclaimer.De-2A3An.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/ShopPayLogo.L5ysjXRy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/index.Ds-OmzFS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/PickupPointCarrierLogo.CdiOWyBp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/hooks.CXhlPqUR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/VaultedPayment.CEJunitb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useShowShopPayOptin.D4Vonyb3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useShopPayRequiresVerification.DqK8mEFD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/Section.AEAKfVGg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useGooglePaySdk.D3QnyeaP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/ShopPayLoginLoader.BbImrdET.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/publishMessage.EiOW-Dyc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/PayButtonSection.C0v1lIEL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/RageClickCapture.DoEfq375.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/context.D40JItCm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/DutyOptions.CO6AjwIx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useAmazonContact.D8dZbbE2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/StockProblemsLineItemList.Blo9vdIf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/component-ShopPayVerificationSwitch.EHI5IDW8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/index.B3RPoOYe.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/app.DJ00hPqQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/OnePage.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/VaultedPayment.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/Section.BzDw6wmZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
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
  