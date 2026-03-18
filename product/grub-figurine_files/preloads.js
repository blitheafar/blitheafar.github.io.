
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BGEdQoKJ.js","/cdn/shopifycloud/checkout-web/assets/c1/app.EAywygRl.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.DSCaVdSt.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.BMzK0tEh.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.BjDQ7FVD.js","/cdn/shopifycloud/checkout-web/assets/c1/useReplaceShopPayInHistory.IxoahODy.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.D-6aXgIe.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.B0DFkNMz.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.DXbZvKVA.js","/cdn/shopifycloud/checkout-web/assets/c1/ButtonWithRegisterWebPixel.BdmKR6_R.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-ja.DyMB46_k.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.DQUFOOh0.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.C0Nt6TSx.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers.CYHejNBc.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.DYh5MTwq.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.U1AaZkaj.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.CroVkgBA.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.DClRlTPe.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummary.C-p9QxZi.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.BXjQ1Qwn.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.MA_kMrQP.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.CD0rrWwW.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.DgbjXKkj.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.DcOVGpwr.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.ZpzXFgS_.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.Dhow_dZO.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.-_AV2Bit.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.D_qOubQj.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.DBIStVZu.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.QEBAsYKP.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.DuOOtr-u.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.Dv3TsR0r.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.DNhsGnS4.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.Bm1rvEVI.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.BwN44OnU.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.B2qJGb6c.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.CXPe5qt_.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.BVPNRwMP.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.CSn0BLKS.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.DEE_8uhu.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.CFPrXF2u.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets.Cc1TchkW.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.DyqwIP5t.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.D7EkV1ZR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.DC7tIbek.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.n2SZt2v_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.zNp2FigI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.CpFaJIpx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
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
  