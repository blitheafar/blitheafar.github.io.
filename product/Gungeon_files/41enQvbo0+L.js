(function(v){var w=window.AmazonUIPageJS||window.P,q=w._namespace||w.attributeErrors,r=q?q("AmazonLightsaberPageAssets",""):w;r.guardFatal?r.guardFatal(v)(r,window):r.execute(function(){v(r,window)})})(function(v,w,q){(function(){var r;(function(e){e.deep=function(b){return JSON.parse(JSON.stringify(b))}})(r||(r={}));var x;(function(e){e.log=function(b){for(var a=1;a<arguments.length;a++);}})(x||(x={}));var J=this&&this.__awaiter||function(e,b,a,g){function c(b){return b instanceof a?b:new a(function(a){a(b)})}
return new (a||(a=Promise))(function(a,f){function d(b){try{l(g.next(b))}catch(m){f(m)}}function h(b){try{l(g["throw"](b))}catch(m){f(m)}}function l(b){b.done?a(b.value):c(b.value).then(d,h)}l((g=g.apply(e,b||[])).next())})},K=this&&this.__generator||function(e,b){function a(b){return function(a){return g([b,a])}}function g(a){if(h)throw new TypeError("Generator is already executing.");for(;c;)try{if(h=1,f&&(d=a[0]&2?f["return"]:a[0]?f["throw"]||((d=f["return"])&&d.call(f),0):f.next)&&!(d=d.call(f,
a[1])).done)return d;if(f=0,d)a=[a[0]&2,d.value];switch(a[0]){case 0:case 1:d=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++;f=a[1];a=[0];continue;case 7:a=c.ops.pop();c.trys.pop();continue;default:if(!(d=c.trys,d=0<d.length&&d[d.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!d||a[1]>d[0]&&a[1]<d[3]))c.label=a[1];else if(6===a[0]&&c.label<d[1])c.label=d[1],d=a;else if(d&&c.label<d[2])c.label=d[2],c.ops.push(a);else{d[2]&&c.ops.pop();c.trys.pop();continue}}a=b.call(e,
c)}catch(n){a=[6,n],f=0}finally{h=d=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var c={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},h,f,d,k;return k={next:a(0),"throw":a(1),"return":a(2)},"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k},z;(function(e){var b=this;e.getMatchingEntry=function(a){return J(b,void 0,void 0,function(){return K(this,function(b){return[2,new Promise(function(b,g){if("PerformanceObserver"in self&&-1<
PerformanceObserver.supportedEntryTypes.indexOf("largest-contentful-paint")){var c=new PerformanceObserver(function(c,g){c=c.getEntries();for(var d=0;d<c.length;d++){var e=c[d];if(a(e)){g.disconnect();b(e);break}}});try{c.observe({type:"largest-contentful-paint",buffered:!0})}catch(d){try{c.disconnect()}catch(k){}g(d)}}else g(Error("LCPUnsupported"))})]})})}})(z||(z={}));var p;(function(e){e.isObject=function(b){return!!b&&"object"===typeof b&&!Array.isArray(b)};e.isNonEmptyString=function(b){return"string"===
typeof b&&0<b.length};e.isPositiveInteger=function(b){return"number"===typeof b&&Math.floor(b)===b&&0<=b&&Infinity!==b};e.isFunction=function(b){return"function"===typeof b}})(p||(p={}));var E=this&&this.__awaiter||function(e,b,a,g){function c(b){return b instanceof a?b:new a(function(a){a(b)})}return new (a||(a=Promise))(function(a,f){function d(b){try{l(g.next(b))}catch(m){f(m)}}function h(b){try{l(g["throw"](b))}catch(m){f(m)}}function l(b){b.done?a(b.value):c(b.value).then(d,h)}l((g=g.apply(e,
b||[])).next())})},F=this&&this.__generator||function(e,b){function a(b){return function(a){return g([b,a])}}function g(a){if(h)throw new TypeError("Generator is already executing.");for(;c;)try{if(h=1,f&&(d=a[0]&2?f["return"]:a[0]?f["throw"]||((d=f["return"])&&d.call(f),0):f.next)&&!(d=d.call(f,a[1])).done)return d;if(f=0,d)a=[a[0]&2,d.value];switch(a[0]){case 0:case 1:d=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++;f=a[1];a=[0];continue;case 7:a=c.ops.pop();c.trys.pop();
continue;default:if(!(d=c.trys,d=0<d.length&&d[d.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!d||a[1]>d[0]&&a[1]<d[3]))c.label=a[1];else if(6===a[0]&&c.label<d[1])c.label=d[1],d=a;else if(d&&c.label<d[2])c.label=d[2],c.ops.push(a);else{d[2]&&c.ops.pop();c.trys.pop();continue}}a=b.call(e,c)}catch(n){a=[6,n],f=0}finally{h=d=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var c={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},h,f,d,k;return k=
{next:a(0),"throw":a(1),"return":a(2)},"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k},t;(function(e){var b=this;e.queueTask=function(a,b){return setTimeout(a,b||0)};e.queueTaskEvery=function(a,b){return setInterval(a,b)};e.wait=function(a){return E(b,void 0,void 0,function(){return F(this,function(b){return[2,new Promise(function(b){setTimeout(b,a)})]})})};e.queueMicrotask=function(a){Promise.resolve().then(function(){a()})};e.waitTillIdleOrTimeout=function(a){return E(b,
void 0,void 0,function(){return F(this,function(b){return[2,new Promise(function(b){self.requestIdleCallback?self.requestIdleCallback(function(a){b(a)},{timeout:a}):setTimeout(function(){b({didTimeout:!0,timeRemaining:function(){return 0}})},a)})]})})}})(t||(t={}));var L=function(){function e(b){this._global=b;var a=p.isFunction;this._unsupported=!b.ue||!a(b.ue.tag)||!a(b.ue.count)||!a(b.uet)||!a(b.uex)}e.prototype.tag=function(b){this._unsupported||(b=this._getMetricName(b),this._global.ue.tag(b),
this._global.ue.isl&&this._global.uex("at"),x.log("Lightsaber:Tag:",b))};e.prototype.count=function(b,a){void 0===a&&(a=1);this._unsupported||(b=this._getMetricName(b),this._global.ue.count(b,a),x.log("Lightsaber:Counter:",b,a))};e.prototype.widgetLatency=function(b,a,g){a=this._getMetricName(a);"ld"===b?this._global.uex(b,a,{wb:1},g):this._global.uet(b,a,{wb:1},g)};e.prototype._getMetricName=function(b){return(e._METRIC_PREFIX+":"+b).toLowerCase()};e._METRIC_PREFIX="Lightsaber:Page";return e}(),
M={"gateway-phone-apps":"HomePage","gateway-phone-web":"HomePage",Gateway:"HomePage",SearchAW:"Search",Search:"Search",DetailWebView:"Detail",WebflowDetailWebView:"Detail",DetailAW:"Detail",WebflowDetailAW:"Detail",Detail:"Detail",WebflowDetail:"Detail",ShoppingCartWebview:"Cart",ShoppingCartAW:"Cart",ShoppingCart:"Cart",CheckoutConfirmOrderWebview:"Checkout",CheckoutConfirmOrderAW:"Checkout",CheckoutConfirmOrder:"Checkout"},u;(function(e){e.getPageType=function(b){return b.ue_pty||"unknown"};e.getSubPageType=
function(b){return b.ue_spty||"unknown"};e.getRequestId=function(b){return b.ue_id};e.getPageTypeGroup=function(b){b=e.getPageType(b);return(b=M[b])?b:"Unknown"}})(u||(u={}));var y=function(){function e(b,a,g){this.global=b;this._csmLogger=g;this._workerMessaging=a}e.prototype.getAbsoluteUrl=function(b){return(new URL(b,this.global.location.href)).href};e.prototype.ready=function(){return this._workerMessaging.ready()};e.prototype.sendToWorker=function(b){this._workerMessaging.send(e._RENDERING_HINTS_COMMAND,
b)};e.prototype.logCount=function(b,a){this._csmLogger.count("RenderingHints:Collect:"+b,a)};e._RENDERING_HINTS_COMMAND="rendering_hints";return e}(),N=this&&this.__extends||function(){var e=function(b,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return e(b,a)};return function(b,a){function g(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),
O=this&&this.__awaiter||function(e,b,a,g){function c(b){return b instanceof a?b:new a(function(a){a(b)})}return new (a||(a=Promise))(function(a,f){function d(a){try{l(g.next(a))}catch(m){f(m)}}function h(a){try{l(g["throw"](a))}catch(m){f(m)}}function l(b){b.done?a(b.value):c(b.value).then(d,h)}l((g=g.apply(e,b||[])).next())})},P=this&&this.__generator||function(e,b){function a(a){return function(b){return g([a,b])}}function g(a){if(h)throw new TypeError("Generator is already executing.");for(;c;)try{if(h=
1,f&&(d=a[0]&2?f["return"]:a[0]?f["throw"]||((d=f["return"])&&d.call(f),0):f.next)&&!(d=d.call(f,a[1])).done)return d;if(f=0,d)a=[a[0]&2,d.value];switch(a[0]){case 0:case 1:d=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++;f=a[1];a=[0];continue;case 7:a=c.ops.pop();c.trys.pop();continue;default:if(!(d=c.trys,d=0<d.length&&d[d.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!d||a[1]>d[0]&&a[1]<d[3]))c.label=a[1];else if(6===a[0]&&c.label<d[1])c.label=d[1],d=a;else if(d&&
c.label<d[2])c.label=d[2],c.ops.push(a);else{d[2]&&c.ops.pop();c.trys.pop();continue}}a=b.call(e,c)}catch(n){a=[6,n],f=0}finally{h=d=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var c={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},h,f,d,k;return k={next:a(0),"throw":a(1),"return":a(2)},"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k},G=function(e){function b(a,b,c,h){b=e.call(this,a,b,c)||this;b._queryRoot=h||a.document;return b}
N(b,e);b.prototype.trigger=function(){var a=this;t.queueTask(function(){return O(a,void 0,void 0,function(){var a;return P(this,function(c){switch(c.label){case 0:return[4,t.waitTillIdleOrTimeout(b._IDLE_TIMEOUT)];case 1:c.sent();if(!this.ready())return this.logCount("NotReady"),[2];a=this.collect(this._queryRoot);this._send(a);return[2]}})})})};b.prototype._send=function(a){var g=this,c=Object.keys(a).map(function(c){return{nature:b._RENDERING_HINTS_NATURE,target:c,data:a[c],source:g._getSource()}});
this.logCount("Targets",c.length);1>c.length||this.sendToWorker(c)};b.prototype._getSource=function(){return{url:this.global.location.href,pty:u.getPageType(this.global),spty:u.getSubPageType(this.global),rid:u.getRequestId(this.global)}};b._IDLE_TIMEOUT=1E3;b._RENDERING_HINTS_NATURE="speculated_navigation_content";return b}(y),Q=this&&this.__extends||function(){var e=function(b,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c])};return e(b,a)};return function(b,a){function g(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),A=this&&this.__assign||function(){A=Object.assign||function(e){for(var b,a=1,g=arguments.length;a<g;a++){b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c])}return e};return A.apply(this,arguments)},B=function(e){function b(a,g,c,h,f,d){void 0===f&&(f=!1);void 0===d&&(d=b.POLLING_FREQUENCY);var k=e.call(this,
a,g,c,h)||this;a.addEventListener(b.UPDATE_NOTIFICATION_EVENT,function(){k.trigger()});f&&t.queueTaskEvery(function(){k.trigger()},d);k.trigger();return k}Q(b,e);b.update=function(a){var g=new CustomEvent(b.UPDATE_NOTIFICATION_EVENT,{bubbles:!1,cancelable:!1});a.dispatchEvent(g)};b.prototype.collect=function(a){var g=a.querySelectorAll(b.QUERY_SELECTOR),c={};a=function(a){a=g[a];var d=A({},a.dataset),l=d[b.ATTR_TARGET];a.classList.remove(b.RENDERING_HINTS_CLASS);if(!l)return"continue";var f=e.getAbsoluteUrl(l);
c[f]=c[f]||{};Object.keys(d).filter(function(a){return!!d[a]&&a!==b.ATTR_QUERY&&a!==b.ATTR_TARGET}).forEach(function(a){c[f][a]=d[a]})};for(var e=this,f=0;f<g.length;f++)a(f);return c};b.prototype.logCount=function(a,b){e.prototype.logCount.call(this,"DDHC:"+a,b)};b.RENDERING_HINTS_CLASS="lightsaber-rendering-hints";b.QUERY_SELECTOR='div[data-lightsaber\x3d"rendering-hints/speculated-navigation-content"].'+b.RENDERING_HINTS_CLASS;b.ATTR_QUERY="lightsaber";b.ATTR_TARGET="target";b.UPDATE_NOTIFICATION_EVENT=
"lightsaber:rendering-hints:declarative-dataset:update";b.POLLING_FREQUENCY=3E3;return b}(G),R=this&&this.__extends||function(){var e=function(b,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return e(b,a)};return function(b,a){function g(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),S=function(e){function b(a,b,c,h,f,d){var g=e.call(this,
a,b,c,d)||this;if(!f.capabilities.mobile)return g;h.when("Rush","s-web-application-controller").execute(function(b,c){b.on(c.ACTIONS.LOAD_SEARCH_PAGE_COMPLETE,function(){g.trigger();B.update(a)})});g._previouslySeenTargets={};g.trigger();return g}R(b,e);b.prototype.collect=function(a){a=a.querySelectorAll(b.FACEOUT_IMAGE_QUERY);for(var g={},c=0;c<a.length;c++){var e=a[c],f=e.closest("a");f&&(f=f.href,this._previouslySeenTargets[f]||(this._previouslySeenTargets[f]=!0,g[f]={faceoutImage:e.src,productTitle:e.alt}))}this.logCount("Query",
Object.keys(g).length);return g};b.prototype.logCount=function(a,b){e.prototype.logCount.call(this,"SPHC:"+a,b)};b.FACEOUT_IMAGE_QUERY='a.s-faceout-link img.s-image[data-image-latency\x3d"s-product-image"]';return b}(G),T=this&&this.__extends||function(){var e=function(b,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return e(b,a)};return function(b,a){function g(){this.constructor=b}e(b,a);b.prototype=
null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),U=this&&this.__awaiter||function(e,b,a,g){function c(b){return b instanceof a?b:new a(function(a){a(b)})}return new (a||(a=Promise))(function(a,f){function d(a){try{l(g.next(a))}catch(m){f(m)}}function h(a){try{l(g["throw"](a))}catch(m){f(m)}}function l(b){b.done?a(b.value):c(b.value).then(d,h)}l((g=g.apply(e,b||[])).next())})},V=this&&this.__generator||function(e,b){function a(a){return function(b){return g([a,b])}}function g(a){if(h)throw new TypeError("Generator is already executing.");
for(;c;)try{if(h=1,f&&(d=a[0]&2?f["return"]:a[0]?f["throw"]||((d=f["return"])&&d.call(f),0):f.next)&&!(d=d.call(f,a[1])).done)return d;if(f=0,d)a=[a[0]&2,d.value];switch(a[0]){case 0:case 1:d=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++;f=a[1];a=[0];continue;case 7:a=c.ops.pop();c.trys.pop();continue;default:if(!(d=c.trys,d=0<d.length&&d[d.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!d||a[1]>d[0]&&a[1]<d[3]))c.label=a[1];else if(6===a[0]&&c.label<d[1])c.label=
d[1],d=a;else if(d&&c.label<d[2])c.label=d[2],c.ops.push(a);else{d[2]&&c.ops.pop();c.trys.pop();continue}}a=b.call(e,c)}catch(n){a=[6,n],f=0}finally{h=d=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var c={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},h,f,d,k;return k={next:a(0),"throw":a(1),"return":a(2)},"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k};y=function(e){function b(a,b,c,h){a=e.call(this,a,b,c)||this;a._queryRoot=
h;return a}T(b,e);b.prototype.trigger=function(){var a=this;t.queueTask(function(){return U(a,void 0,void 0,function(){var a;return V(this,function(c){switch(c.label){case 0:return[4,t.waitTillIdleOrTimeout(b._IDLE_TIMEOUT)];case 1:return c.sent(),this.ready()?[4,this.collect(this._queryRoot)]:(this.logCount("NotReady"),[2]);case 2:return a=c.sent(),this._send(a),[2]}})})})};b.prototype.logCount=function(a,b){e.prototype.logCount.call(this,"PAHC:"+a,b)};b.prototype._send=function(a){a=[{nature:b._RENDERING_HINTS_NATURE,
data:a,source:this._getSource()}];this.logCount("Targets");this.sendToWorker(a)};b.prototype._getSource=function(){return{url:this.global.location.href,pty:u.getPageType(this.global),spty:u.getSubPageType(this.global),rid:u.getRequestId(this.global)}};b._IDLE_TIMEOUT=1E3;b._RENDERING_HINTS_NATURE="page_attributes";return b}(y);var W=this&&this.__extends||function(){var e=function(b,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c])};return e(b,a)};return function(b,a){function g(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),H=this&&this.__awaiter||function(e,b,a,g){function c(b){return b instanceof a?b:new a(function(a){a(b)})}return new (a||(a=Promise))(function(a,f){function d(a){try{l(g.next(a))}catch(m){f(m)}}function h(a){try{l(g["throw"](a))}catch(m){f(m)}}function l(b){b.done?a(b.value):c(b.value).then(d,h)}l((g=g.apply(e,b||[])).next())})},I=this&&this.__generator||
function(e,b){function a(a){return function(b){return g([a,b])}}function g(a){if(h)throw new TypeError("Generator is already executing.");for(;c;)try{if(h=1,f&&(d=a[0]&2?f["return"]:a[0]?f["throw"]||((d=f["return"])&&d.call(f),0):f.next)&&!(d=d.call(f,a[1])).done)return d;if(f=0,d)a=[a[0]&2,d.value];switch(a[0]){case 0:case 1:d=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++;f=a[1];a=[0];continue;case 7:a=c.ops.pop();c.trys.pop();continue;default:if(!(d=c.trys,d=0<d.length&&
d[d.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!d||a[1]>d[0]&&a[1]<d[3]))c.label=a[1];else if(6===a[0]&&c.label<d[1])c.label=d[1],d=a;else if(d&&c.label<d[2])c.label=d[2],c.ops.push(a);else{d[2]&&c.ops.pop();c.trys.pop();continue}}a=b.call(e,c)}catch(n){a=[6,n],f=0}finally{h=d=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var c={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},h,f,d,k;return k={next:a(0),"throw":a(1),"return":a(2)},"function"===
typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k},X=function(e){function b(a,b,c,h){a=e.call(this,a,b,c,a.document)||this;if(!h.capabilities.mobile)return a;a.trigger();return a}W(b,e);b.prototype.collect=function(a){return H(this,void 0,void 0,function(){var b,c,e;return I(this,function(g){switch(g.label){case 0:return b={},(c=this._getWDGFromUSS(a))||(c=this._getWDGFromAODScript(a)),c||(c=this._getWDGFromDPContainer(a)),c?b.wdg=c:this.logCount("WDG:NONE"),[4,this._getLCPImageUrl()];
case 1:return(e=g.sent())?b.lcpImage=e:this.logCount("LCP:NONE"),[2,b]}})})};b.prototype._getWDGFromUSS=function(a){if((a=a.querySelector(b._USS_SELECTOR))&&a.value)return this.logCount("WDG:USS"),a.value};b.prototype._getWDGFromAODScript=function(a){if((a=a.querySelector(b._AOD_SCRIPT_SELECTOR))&&(a=a.textContent)&&(a=a.match(b._AOD_SCRIPT_REGEXP))&&a[1])return this.logCount("WDG:AOD"),a[1]};b.prototype._getWDGFromDPContainer=function(a){if(a=a.querySelector(b._DP_CONTAINER_SELECTOR))if(a=a.className.trim().split(" ")[0])return this.logCount("WDG:CID"),
a.replace(b._WDG_CLASS_SUFFIX,b._WDG_SUFFIX)};b.prototype._getLCPImageUrl=function(){return H(this,void 0,void 0,function(){var a,e;return I(this,function(c){switch(c.label){case 0:a=function(a){var c=p.isObject,d=p.isNonEmptyString;return!(!c(a)||a.id!==b._IMAGE_BLOCK_MAIN_IMAGE_ID||!d(a.url))},c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.race([z.getMatchingEntry(a),t.wait(b._LCP_RESOLUTION_TIMEOUT).then(function(){return"timeout"})])];case 2:e=c.sent();if("timeout"===e)return this.logCount("LCPT"),
[2];this.logCount("LCPI");return[2,e?e.url:q];case 3:return c.sent(),this.logCount("LCPE"),[2];case 4:return[2]}})})};b._DP_CONTAINER_SELECTOR="#dp";b._USS_SELECTOR="input#uss-mraiCategory";b._AOD_SCRIPT_SELECTOR="#all-offers-display ~ script";b._AOD_SCRIPT_REGEXP=/AOD assets for WDG:\s*(\w+)/;b._IMAGE_BLOCK_MAIN_IMAGE_ID="main-image";b._LCP_RESOLUTION_TIMEOUT=1E3;b._WDG_CLASS_SUFFIX="_mobile";b._WDG_SUFFIX="_display_on_website";return b}(y);y=function(){function e(b,a,e,c){var g=this;this.global=
b;this.csmLogger=a;this.P=e;this.A=c;"complete"===b.document.readyState?this.survey():b.addEventListener("load",function(){g.survey()})}e.prototype.getResourceTimingRecords=function(b){var a=this.global.performance.getEntriesByType("resource");return"function"===typeof b?a.filter(b):a};e.prototype.getServerTimingRecords=function(){var b=this.global.performance.getEntriesByType("navigation")[0];return b&&b.serverTiming?b.serverTiming.filter(function(a){return a.name===e._SERVER_TIMING_NAME}).map(function(a){if(a.description)try{return JSON.parse(decodeURIComponent(a.description))}catch(g){}}).filter(function(a){return!!a}):
[]};e.prototype.getEpochForPerformanceTimeline=function(b){return Math.round(this.global.performance.timeOrigin+b)};e.prototype.logTag=function(b){this.csmLogger.tag(this._getMetricName(b))};e.prototype.logCount=function(b,a){this.csmLogger.count(this._getMetricName(b),a)};e.prototype.logWidgetLatency=function(b,a,e){a=this._getMetricName(a);this.csmLogger.widgetLatency(b,a,e)};e.prototype._getMetricName=function(b){return"RenderingHints:Survey:"+b};e._SERVER_TIMING_NAME="lightsaber";return e}();
var Y=this&&this.__extends||function(){var e=function(b,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return e(b,a)};return function(b,a){function g(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),C=this&&this.__awaiter||function(e,b,a,g){function c(b){return b instanceof a?b:new a(function(a){a(b)})}return new (a||(a=Promise))(function(a,
f){function d(a){try{l(g.next(a))}catch(m){f(m)}}function h(a){try{l(g["throw"](a))}catch(m){f(m)}}function l(b){b.done?a(b.value):c(b.value).then(d,h)}l((g=g.apply(e,b||[])).next())})},D=this&&this.__generator||function(e,b){function a(a){return function(b){return g([a,b])}}function g(a){if(h)throw new TypeError("Generator is already executing.");for(;c;)try{if(h=1,f&&(d=a[0]&2?f["return"]:a[0]?f["throw"]||((d=f["return"])&&d.call(f),0):f.next)&&!(d=d.call(f,a[1])).done)return d;if(f=0,d)a=[a[0]&
2,d.value];switch(a[0]){case 0:case 1:d=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++;f=a[1];a=[0];continue;case 7:a=c.ops.pop();c.trys.pop();continue;default:if(!(d=c.trys,d=0<d.length&&d[d.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!d||a[1]>d[0]&&a[1]<d[3]))c.label=a[1];else if(6===a[0]&&c.label<d[1])c.label=d[1],d=a;else if(d&&c.label<d[2])c.label=d[2],c.ops.push(a);else{d[2]&&c.ops.pop();c.trys.pop();continue}}a=b.call(e,c)}catch(n){a=[6,n],f=0}finally{h=
d=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var c={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},h,f,d,k;return k={next:a(0),"throw":a(1),"return":a(2)},"function"===typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k},Z=function(e){function b(){return null!==e&&e.apply(this,arguments)||this}Y(b,e);b.prototype.survey=function(){return C(this,void 0,void 0,function(){return D(this,function(a){switch(a.label){case 0:return this._surveyLQIPImagePreload(),
[4,this._surveyLCPImagePreload()];case 1:return a.sent(),[2]}})})};b.prototype._surveyLQIPImagePreload=function(){var a=this._getLQIPImageUrl();if(a){var e=this._getPreloadedUrlRecord(b._RECORD_PURPOSE_PREFIX+":LQIP");e?this._logMatch("LQIP",a,e.href,e.attribution):this._logCount("LQIP:HintNotFound",1)}else this._logCount("LQIP:ImageNotFound",1)};b.prototype._surveyLCPImagePreload=function(){return C(this,void 0,void 0,function(){var a,e;return D(this,function(c){switch(c.label){case 0:return[4,this._getLCPImageUrl()];
case 1:a=c.sent();if(!a)return this._logCount("LCP:ImageNotFound",1),[2];e=this._getPreloadedUrlRecord(b._RECORD_PURPOSE_PREFIX+":LCP");if(!e)return this._logCount("LCP:HintNotFound",1),[2];this._logMatch("LCP",a,e.href,e.attribution);return[2]}})})};b.prototype._getLQIPImageUrl=function(){var a=this.A.state(this.A.capabilities.mobile?b._MOBILE_PAGE_STATE:b._DESKTOP_PAGE_STATE);return a&&a.landingImageUrl?a.landingImageUrl:q};b.prototype._getLCPImageUrl=function(){return C(this,void 0,void 0,function(){var a,
e;return D(this,function(c){switch(c.label){case 0:a=function(a){var c=p.isObject,d=p.isNonEmptyString;return!(!c(a)||a.id!==b._IMAGE_BLOCK_MAIN_IMAGE_ID||!d(a.url))},c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.race([z.getMatchingEntry(a),t.wait(b._LCP_RESOLUTION_TIMEOUT).then(function(){return"timeout"})])];case 2:return e=c.sent(),"timeout"===e?(this._logCount("LCP:LCPTimeout",1),[2]):[2,e?e.url:q];case 3:return c.sent(),this._logCount("LCP:LCPError",1),[2];case 4:return[2]}})})};b.prototype._getPreloadedUrlRecord=
function(a){var e=this.getServerTimingRecords().filter(function(c){return c.role===b._RECORD_ROLE&&c.purpose===a.toLowerCase()&&c.as===b._RECORD_AS});return 0<e.length?e[0]:q};b.prototype._logMatch=function(a,b,c,e){b=this._hitOrMiss(c===b);this._logCount(a+":"+b,1);e&&this._logCount(a+":"+b+":"+e,1)};b.prototype._logCount=function(a,e){this.logCount(b._METRIC_PREFIX+":"+a,e)};b.prototype._hitOrMiss=function(a){return a?"Hit":"Miss"};b._RECORD_ROLE="rendering-hints/preload";b._RECORD_PURPOSE_PREFIX=
"detail-landing-image";b._RECORD_AS="image";b._METRIC_PREFIX="DetailLandingImagePreload";b._MOBILE_PAGE_STATE="mobile-landing-image-data";b._DESKTOP_PAGE_STATE="desktop-landing-image-data";b._IMAGE_BLOCK_MAIN_IMAGE_ID="main-image";b._LCP_RESOLUTION_TIMEOUT=1E3;return b}(y),aa=function(){function e(b,a,e,c,h){this._global=b;this._P=a;this._A=e;this._workerMessaging=c;this._csmLogger=h}e.prototype.start=function(){switch(u.getPageTypeGroup(this._global)){case "Search":var b=document.getElementById("search");
new B(this._global,this._workerMessaging,this._csmLogger,b);new S(this._global,this._workerMessaging,this._csmLogger,this._P,this._A,b);break;case "Detail":b=document.getElementById("dp"),new X(this._global,this._workerMessaging,this._csmLogger,this._A),new B(this._global,this._workerMessaging,this._csmLogger,b),new Z(this._global,this._csmLogger,this._P,this._A)}};return e}();(function(){function e(b){this._hit=!(!b.$Lightsaber||!b.$Lightsaber.hit);try{var a=b.$Lightsaber&&b.$Lightsaber.meta?r.deep(b.$Lightsaber.meta):
q;this._meta=this._isValid(a)?a:q}catch(g){this._meta=q}}e.prototype.isHit=function(){return this._hit};e.prototype.getMeta=function(){return this._meta};e.prototype._isValid=function(b){var a=p.isObject,e=p.isNonEmptyString,c=p.isPositiveInteger;return!!(b&&a(b)&&c(b.fetchEventTimeOrigin)&&e(b.navigationRule)&&a(b.responseStrategy)&&e(b.responseStrategy.name)&&a(b.clientLib)&&e(b.clientLib.version))};return e})();var ba=function(){function e(b){this._global=b}e.prototype.send=function(b,a){b={feature:e.FEATURE,
command:b,options:a};(a=this._getCurrentController())?(x.log("ServiceWorker:PostMessage:",b),a.postMessage(b)):x.log("ServiceWorker:Unavailable:",b)};e.prototype.ready=function(){return!!this._getCurrentController()};e.prototype._getCurrentController=function(){if(this._global&&this._global.navigator&&this._global.navigator.serviceWorker&&this._global.navigator.serviceWorker.controller&&p.isFunction(this._global.navigator.serviceWorker.controller.postMessage))return this._global.navigator.serviceWorker.controller};
e.FEATURE="lightsaber";return e}();(function(){v.when("A").execute("lightsaber:page",function(e){var b=new L(w),a=new ba(w);b.count("AssetLoaded");v.now().register("lightsaber:page:rendering-metrics",function(){});v.when("ready").register("lightsaber:page:rendering-hints",function(){(new aa(w,v,e,a,b)).start()})})})()})()});