
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/polyfills.CG3oGVWg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/app.BQR3HAoY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/OnePage.SUEZsp9J.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/DeliveryMethodSelectorSection.rk4T3XSL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useUnauthenticatedErrorModal.CaWLtvdv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/LegacyVaultedShippingMethods.Ccjbu4kt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/Rollup.Dh6HwhVN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/SubscriptionPriceBreakdown.DHuvXoG8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/MarketsProDisclaimer.DhwzagcB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/ShopPayLogo.CV-HgV04.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/index.BOa9lAbq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/PickupPointCarrierLogo.L_NxMPrI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/hooks.B8gywJlV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/VaultedPayment.0ePGmNv6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useShowShopPayOptin.BoRTKYyv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useShopPayRequiresVerification.Wi8vBvjc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/Section.DFYXsgZz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useGooglePaySdk.CSwQJMC4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/ShopPayLoginLoader.BrXSbbiT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/publishMessage.CMlxlPhF.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/PayButtonSection.ugM5xH2I.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/RageClickCapture.DQqrl4Ju.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/context.ZdiR0b_A.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/DutyOptions.oG3FKKfp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/useAmazonContact.CuI07lLj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/StockProblemsLineItemList.Dqc4sirO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/component-ShopPayVerificationSwitch.CGQ7_Lo9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/index.Dhupdzw3.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/app.CwZNG6Hb.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/OnePage.BsDM6oHQ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/VaultedPayment.BO3829nT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/Section.kUTT-9EZ.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ja/assets/ShopPayVerificationSwitch.DVQdwG9J.css"];
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
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  