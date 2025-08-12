(function() {
  const BASE_URL = `https://cdn.shopify.com/extensions/5e2b8eb3-5720-4075-8ce3-fe9c434c4cf2/0.0.0/assets`;

  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.async = !0;
  scriptElement.src = `${BASE_URL}/avada-joy-points-calculator.min.js?v=${new Date().getTime()}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
})();
