
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CnHNkDd7.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor.Dp8SJHSw.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.DIyAFe7O.js","/cdn/shopifycloud/checkout-web/assets/c1/approval-scopes-FullScreenBackground.BYMfpgD9.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors.DLRt5stL.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer.AnIOj8Me.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency.DR0TZOJE.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-proposal.CvqvZg-o.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-ButtonWithRegisterWebPixel.BPRZi-Gd.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-fr.yNDUCDfD.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.vXEEIktb.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-PaymentButtons.CVmn2zXT.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-LocalPickup.CIMrnYrD.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-NoAddressLocation.CJ4EOvCw.js","/cdn/shopifycloud/checkout-web/assets/c1/shopPaySessionTokenStorage-Page.DDdV1lOg.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MarketsProDisclaimer.DfHqZIS0.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-OffsitePaymentFailed.s1GIfWT1.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-ShopPayLogo.DcbfIG_v.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment.Bmrrr3uH.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine.IFFxJ_Q9.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview.cG8A1s6f.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo.CzOa9V3U.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.D5CANrDJ.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-AddDiscountButton.Buviosfj.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-RememberMeDescriptionText.D8tk2LTE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-ShopPayOptInDisclaimer.DA1hN33Q.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary.B-L5BRGQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery.Cirwxw9s.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice.CDlMAheD.js","/cdn/shopifycloud/checkout-web/assets/c1/types-useHasOrdersFromMultipleShops.BvNEsksj.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.D4egufPC.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility.B6rD4P7w.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown.CjYR61xX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal.BHRc_-ou.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options.BCVzonZL.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions.DgGjJu7p.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector.Qv3lnWoF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown.DQGOU-bj.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.DDK8W8sQ.js","/cdn/shopifycloud/checkout-web/assets/c1/DatePicker-AnnouncementRuntimeExtensions.CjxnoIam.js","/cdn/shopifycloud/checkout-web/assets/c1/standard-rendering-extension-targets.8brjp636.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.DBzZLTip.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-useShopPayNewSignupLoginExperiment.3SI8EMf-.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.fH9d1Lew.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.-XSmsMDv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.BIghpenh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Di1yeo0T.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.DmhmOh0D.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.oEoBAbtG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.Cko1fUoG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OrderEditVaultedDelivery.CSQKPDv7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocation.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.cbVP6Hp_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.D14orovx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0753/9458/0813/files/Logo_Just_For_Games_noir_CARRE_x320.png?v=1713532489"];

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
  