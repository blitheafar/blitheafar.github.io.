var s = document.createElement('script');
document.querySelector('head').appendChild(s);
s.onload= function(e) {
  function n(n,i,t,e){if(o)return o[n];for(i=document.cookie.split("; "),o={},e=i.length-1;e>=0;e--)t=i[e].split("="),o[t[0]]=t[1];return o[n]}var o;
  var _ajaxGet=function(t,e){var s=new XMLHttpRequest;s.open("GET",t,!0),s.onreadystatechange=function(){4===s.readyState&&s.status>=200&&s.status<400&&e(s.responseText)},s.send()};
  var loc = window.location.toString();
  function quoteProduct(url) {
    _ajaxGet(url.split(/[\?#]/, 2)[0] +'.json',function(p){
      var p = JSON.parse(p);
      var variant;
      if (window.location.search.indexOf('variant=') !== -1) {
        var params = window.location.search.substring(1).split("&").reduce(function(m,i){ var j=i.split('=',2); m[j[0]]=j[1]; return m}, {})
        variant = p.product.variants.filter(function(v){ return v.id===params.variant})[0];
      }
      if(!variant) {
        variant = p.product.variants[0];
      }
      var item = {
        price: variant.price,
        name: p.product.title,
        url: url,
        image: p.product.image && p.product.image.src,
        sku: variant.barcode || variant.sku,
        brand: p.product.vendor,
        category: p.product.tags,
      };
      zonos.config({items: [ item ]});
    });
  }
  function quoteCart() {
    _ajaxGet('/cart.json', function (r) {
      var c = JSON.parse(r);
      var items = c.items.map(function(i) {
        return {
          price: i.price/100,
          name: i.title,
          url: "https://"+window.location.hostname + i.url,
          image: i.img,
          sku: i.sku,
          quantity: i.quantity
        }
      });
      zonos.config({items:  items});
    });
  }
  if (loc.indexOf('/products/') !== -1) {
    
  } else if (window.location.toString().indexOf('/cart')) {
    
  }
  try{
    zonos.config({currencySelectors: ""});
  } catch(e) {
  }
 
  var css = '#zonos { display: none; } .z-intl #zonos { display: block; }'; 
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
      style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
};

s.src="https://hello.zonos.com/hello.js?siteKey=12V11CE0804QO";