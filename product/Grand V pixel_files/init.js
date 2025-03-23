
(() => {
  window.PurpleDotConfig = {
    ...(window.PurpleDotConfig || {}),
    apiKey: 'b633f815-5463-4b9a-ae4f-8284bb57e917',
    checkoutMethod: 'COMBINED_CART',
    flags: [{"flag":"NATIVE_CHECKOUT","variations":[{"variation":"native","weight":0.2},{"variation":"purple_dot","weight":0.8}]}],
  };

  try {
    const trackingSettings = {"facebookPixel":true,"googleAdsTag":{"sendTo":"G-ZLL4CT3BZZ"},"googleTag":{"sendTo":"G-ZLL4CT3BZZ"},"tikTokPixel":true,"yotpo":false,"northbeamPixel":false,"gtmDataLayer":false};
    window.PurpleDotConfig.tracking = {
      ...(window.PurpleDotConfig.tracking || {}),
      ...trackingSettings,
    };
  } catch (e) {
    console.error('Failed to parse tracking settings', e);
  }

  const styleId = 'pd-preload-style';
  
  if (!document.getElementById(styleId)) {
    const preLoadStyle = document.createElement('style');
    preLoadStyle.id = styleId;
    preLoadStyle.innerHTML = `
      form[action*='/cart'] *[type='submit'],
      *[type='submit'][name='checkout'],
      a[href='/checkout'],
      form iframe,
      .shopify-cleanslate {
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(preLoadStyle);
    setTimeout(() => preLoadStyle.remove(), 10000);
  }

  const preloadStyle = document.getElementById('pd-preload-style');
  if (preloadStyle) {
    preloadStyle.innerHTML += `
      a.btn--atc-pdp, button.js-qty {
        pointer-events: none !important;
      }
    `;
  }

  if (window.PurpleDotConfig?.checkoutMethod === 'COMBINED_CART') {
    if (window.location.pathname.endsWith('/cart') || window.location.pathname.endsWith('/cart/')) {
        const shopifyCart = window.PurpleDotConfig.shopifyCart;
        const items = shopifyCart?.items || [];
  
        const hasPreorderItem = items.some((item) => item.properties && item.properties['__releaseId']);
  
        if (hasPreorderItem) {
          const preloadStyle = document.querySelector('#pd-preload-style');
          preloadStyle.innerHTML += `body { display: none !important; }`;
        }
    }
  }

  const currentScript = document.currentScript
  
  const scriptURL = new URL(currentScript.src);
  scriptURL.pathname = scriptURL.pathname.match(/.*\//)[0];
  scriptURL.pathname += 'shopify-script.js';
  
  const versionOverride = new URLSearchParams(window.location.search).get('PD_VERSION');
  if (versionOverride) {
    scriptURL.searchParams.set('version', versionOverride);
  }
  
  const pdScript = document.createElement('script');
  pdScript.src = scriptURL.toString();
  pdScript.onerror = () => preloadStyle && preLoadStyle.remove();
  document.head.appendChild(pdScript);
})();
