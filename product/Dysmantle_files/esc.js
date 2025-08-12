console.log("loaded esc.js");

// IIFE for encapsulation
(function () {

  var trustBadgeInserted = false;
  var url = getScriptUrl();
  var instanceId = atob(getDynamicParameter("instanceId"));
  var locale = getShopifyLocale();
  var isDawnTheme;
  var trustbadgeHtml;
  var widgetsHTML;
  var apiBaseUrl = atob(getDynamicParameter("apiBaseUrl"));

    getEscConfig(function callback() {
        try {
            subscribeToEvents();
        } catch (e) {
            console.info(e);
        }
    });

    function getDynamicParameter(param) {
        return url.searchParams.get(param);
    }

    function getShopifyLocale() {
        const locale = Shopify.locale.toLowerCase();
        const fallback_locale = "en";

        if (locale) {
            return locale;
        } else {
            return fallback_locale;
        }
    }

    function subscribeToEvents() {
        // remove trustcode if users navigation to another page, because else TrustBadge will stay in Purchase-Mode (reInitializing comes too early)
        removeTrustCode();
        showTrustBadge();
        doWidgets();
        onProductsCheckout();
    }

    function onProductsCheckout() {
        if (Shopify && Shopify.Checkout && Shopify.Checkout.OrderStatus) {
            if (
                !(
                    !Shopify.checkout ||
                    (Shopify && Shopify.Checkout && Shopify.Checkout.step != "thank_you")
                )
            ) {
                const ShopifySmallCheckout = Shopify.checkout;
                generateTrustCode(
                    apiBaseUrl,
                    instanceId,
                    ShopifySmallCheckout.order_id,
                    locale
                );
            }
        }
    }

    function doWidgets() {
        setTimeout(() => {
            const placeholders = getPlaceholders();
            insertWidgets(
                placeholders.homepage,
                placeholders.productListing,
                placeholders.productDescription,
                placeholders.productPage
            );

            // Product_page selector is only active on specific product pages not on Catalog page (that would be /products/all)
            if (placeholders.productPage || placeholders.productDescription) {
                getProductInfo().then((variant) => {
                    setWidgetProductIdentifier(variant);
                });
            }
        });
    }

    function getPlaceholders() {
        return {
            homepage: document.getElementsByClassName("main-content")[0],
            productListing: document.getElementById("CollectionSection"),
            productDescription: document.querySelector('[itemprop="name"]'),
            productPage: document.getElementById("ProductSection"),
        };
    }

    function getProductInfo() {
        return new Promise((resolve, reject) => {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        let product = JSON.parse(this.responseText);
                        resolve(product.variants);
                    }
                }
            };
            let productUrlSuffix = window.location.pathname
                .replace(window.Shopify.routes.root, '/')
                .split("/")[2];

            xmlhttp.open(
                "GET",
                window.Shopify.routes.root + "products/" + productUrlSuffix + ".js",
                true
            );
            xmlhttp.send();
        });
    }

    function setWidgetProductIdentifier(variants) {
        variants &&
        document
            .querySelectorAll("etrusted-widget")
            .forEach((widget) => {
                widget.hasAttribute("data-sku") && widget.setAttribute("data-sku", variants.map(it => it.sku ? it.sku : it.id).join(","));
                widget.hasAttribute("data-gtin") && widget.setAttribute("data-gtin", variants.map(it => it.barcode).join(","));
            });
    }

    function getEscConfig(callback) {
        var httpXML = new XMLHttpRequest();

        httpXML.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var userSettings = JSON.parse(this.responseText);

                    trustbadgeHtml = userSettings.trustBadgeHtml;
                    widgetsHTML = userSettings.widgetsHTML;
                    isDawnTheme = userSettings.isDawnTheme;

                    callback();
                }
            }
        };
        httpXML.open(
            "GET",
            apiBaseUrl + "/api/esc-config/" + instanceId + "/" + locale + "/" + Shopify.country,
            true
        );
        httpXML.send();
    }

    function getScriptUrl() {
        var path = null;
        if (document.currentScript) {
            path = document.currentScript.src;
        }
        return new URL(path);
    }

    function insertWidgets(
        homepage,
        productListing,
        productDescription,
        productPage
    ) {
        if (!(widgetsHTML && widgetsHTML.bootstrapTag && widgetsHTML.widgetTags)) {
            return;
        }

        // bootstrapTag
        insertHTML(document.head, widgetsHTML.bootstrapTag);

        // extensionTag
        if (widgetsHTML.extensionTags && widgetsHTML.extensionTags.length > 0) {
            widgetsHTML.extensionTags.forEach((extension) =>
                appendHTML(productDescription, extension)
            );
        }

        if (!isDawnTheme) {
            // widgetTags
            // const parser = new DOMParser();
            widgetsHTML.widgetTags.forEach((widget) => {
                const html = widget.html;
                const location = widget.location;

                switch (location) {
                    case "wdg-loc-hp":
                        //Only display Homepage Widgets when the user is on the homepage (not on the product page)
                        //Otherwise two widgets will be displayed directly underneath
                        if (!productPage && !productListing) {
                            insertHTML(homepage, html);
                        }
                        break;
                    // case "wdg-loc-pl":
                    //     insertHTML(productListing, html);
                    //     break;
                    case "wdg-loc-pn":
                        appendHTML(productDescription, html);
                        break;
                    case "wdg-loc-pd":
                        insertHTML(productPage, html);
                        break;
                    default:
                        console.error("Loaded widget specified an unknown location");
                }
            });
        }
    }

    function generateTrustCode(appUrl, instanceId, orderId, locale) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    const data = JSON.parse(this.responseText);
                    insertTrustCode(data);
                } else {
                    insertTrustCode(null);
                }
            }
        };
        xmlhttp.open(
            "GET",
            appUrl + "/api/order/" + instanceId + "/" + orderId + "/" + locale + "/" + Shopify.country,
            true
        );
        xmlhttp.send();
    }

    function insertTrustCode(data) {
        if (data && data.trustCode) {
            insertHTML(document.body, data.trustCode);
        }
        // No Trustcode means there is no MappedChannel, therefore no Trustbadge should be displayed
        (data && data.trustCode) && showTrustBadge();
    }

    function removeTrustCode() {
        var trustCode = document.getElementById("trustedShopsCheckout");

        if (trustCode) {
            trustCode.remove();
        }
    }

    /*
      insert trustBadge-script into DOM or reinitialize if it already exists (to rescan DOM for trustcode)
      */
    function showTrustBadge() {
        if (window.trustbadge) {
            // console.log("reinitialize trustbadge");
            window.trustbadge.reInitialize();
        } else if (trustBadgeInserted) {
            // console.log("already inserted");
        } else {
            // console.log("insert trustbadge");
            insertHTML(document.head, trustbadgeHtml);
            trustBadgeInserted = true;
        }
    }

    function insertHTML(targetElem, scriptTagHtml) {
        if (targetElem) {
            // https://caniuse.com/?search=contextual
            // https://stackoverflow.com/a/62641523
            const scriptEl = document
                .createRange()
                .createContextualFragment(scriptTagHtml);
            try {
                targetElem.appendChild(scriptEl);
            } catch (e) {
                console.error(`insertHTML(${targetElem}, ${scriptTagHtml})`, e);
            }
        }
    }

    function appendHTML(targetElem, scriptTagHtml) {
        if (targetElem) {
            // https://caniuse.com/?search=contextual
            // https://stackoverflow.com/a/62641523
            const scriptEl = document
                .createRange()
                .createContextualFragment(scriptTagHtml);
            try {
                targetElem.parentNode.insertBefore(scriptEl, targetElem.nextSibling)
            } catch (e) {
                console.error(`appendHTML(${targetElem}, ${scriptTagHtml})`, e);
            }
        }
    }
})();
