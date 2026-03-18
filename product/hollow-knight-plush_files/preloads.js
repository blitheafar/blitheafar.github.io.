
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CxFR7xNG.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.bdI-yeR3.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.9XiFPyYl.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.1I6F916q.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.KdvmzCuP.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.RdXX73Qh.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.Cgt7Jcu6.js","/cdn/shopifycloud/checkout-web/assets/c1/ButtonWithRegisterWebPixel.mVPf3fYE.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-ja.Cme3shJS.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CHFVvOs_.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.vcrdxJut.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.DnQJ_ebu.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour.KU4NtlEB.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.3uJ4lG4V.js","/cdn/shopifycloud/checkout-web/assets/c1/useForceShopPayUrl.CCm7fuMh.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.COQJwSYM.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.DTAEJWJD.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.CcTKDb-7.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummary.ai3llVp9.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.CV1DZsDW.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.BRokUc9b.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.CZfWSP22.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.BXhuy7pC.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.BcbQqZSB.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.B5wGlxuG.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.BnO2OCVJ.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.B1oYYUDA.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.CDzBqzFm.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.BDWVar67.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.INoA_l0P.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.DaQzFrGP.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DOxzOkOD.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CwLNbUZ_.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.CIoGluWb.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.JtYHS8Dx.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.CDUkGvVw.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.CQoj0ZKe.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.DPUE-zhy.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.CWVizfvp.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets.Dop1oQxE.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.CUVZUObS.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.D7EkV1ZR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.C255G1T7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.CZ33y7Va.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.7lB-c-sA.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocationFullDetour.D14orovx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
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
  