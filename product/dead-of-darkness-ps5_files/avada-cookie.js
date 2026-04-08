(function() {
  const BASE_URL = `https://cdn-cookie.avada.io/scripttag`;
  // const BASE_URL = `https://avada-cookie-bar-staging.web.app/scripttag`;
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.async = !0;
  scriptElement.src = BASE_URL + `/avada-cookies-bar-main.min.js?v=${new Date().getTime()}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
})();
