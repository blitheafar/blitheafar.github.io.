(function() {
  const BASE_URL = `https://cdn.shopify.com/extensions/5849a8e5-5b6c-468e-ad60-dd2d15e7ef7f/0.0.0/assets`;
  // const BASE_URL = `https://avada-cookie-bar-staging.web.app/scripttag`;
  // const BASE_URL = `https://avada-cookie-bar-staging-2.web.app/scripttag`;
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.async = !0;
  scriptElement.src = BASE_URL + `/avada-cookies-bar-main.min.js?v=${new Date().getTime()}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
})();
