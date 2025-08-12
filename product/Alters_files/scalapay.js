// Immediately Invoked Function Expression (IIFE) to encapsulate everything
(function () {
    // Skip initialization if the script is already loaded
    if (window.scalapayShopifyLoaded) return;

    // Mark as loaded
    window.scalapayShopifyLoaded = true;

    class ScalapayShopify {
        constructor(config, positions) {
            this.config = config;
            this.positions = Array.isArray(positions) ? positions : [positions];
        }

        create() {
            if (!this.positions || this.positions.length === 0) {
                return 0;
            }

            this._create();
            new MutationObserver(() => this._create())
                .observe(document.querySelector("body"), {
                    childList: true,
                    subtree: true,
                    attributes: false,
                    characterData: false,
                });

            return this.positions.length;
        }

        _create() {
            this.positions?.map(s => typeof s === 'string' ? Array.from(document.querySelectorAll(s)) : s)
                .flat()
                .forEach(node => {
                    if (!document.body.querySelector(`scalapay-widget[type="${this.config.type}"]`)) {
                        const widget = document.createElement('scalapay-widget');
                        Object.keys(this.config).forEach(key => {
                            if (key === "merchant-token") {
                                let merchantToken = this.config[key].split(":");
                                widget.setAttribute(key, merchantToken[0]);
                                if (merchantToken.length > 1) {
                                    widget.setAttribute("environment", merchantToken[1]);
                                }
                                return;
                            }
                            widget.setAttribute(key, this.config[key]);
                        });
                        node?.after(widget);
                    }
                });
        }
    }

    // Handle Weglot language changes if present
    if (typeof Weglot !== 'undefined') {
        Weglot.on("languageChanged", newLang =>
            document.querySelectorAll('scalapay-widget').forEach(e =>
                e.setAttribute('locale', newLang)
            )
        );
    }

    // Load the Scalapay widget script only once
    if (!document.querySelector('script[src*="scalapay-widget-loader.js"]')) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://cdn.scalapay.com/widget/scalapay-widget-loader.js?version=v5';
        scriptElement.type = 'module';
        scriptElement.dataset.cfasync = 'false';
        document.getElementsByTagName('head')[0].appendChild(scriptElement);
    }

    // Initialize global config
    window.scalapayConfig = window.scalapayConfig || [];

    // Process any existing configurations
    const existingConfig = [...window.scalapayConfig];
    existingConfig.forEach(config => {
        new ScalapayShopify(config[1], config[0]).create();
    });

    // Override push method to handle new configurations
    window.scalapayConfig.push = function (config) {
        Array.prototype.push.call(this, config);
        new ScalapayShopify(config[1], config[0]).create();
    };
})();
