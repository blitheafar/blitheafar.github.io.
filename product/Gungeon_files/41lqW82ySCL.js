'use strict';mix_d("SBXGwentPHDCards__lifestyle-image-v4-creative-desktop-dp:lifestyle-image-v4-creative-desktop-dp__RbpJ_H_W","exports tslib @c/pagemarker @c/dom @c/logger @c/aui-utils @c/metrics @c/aui-feature-detect @c/browser-operations @p/a-ajax @c/aui-modal @p/A @c/scoped-dom @c/aui-untrusted-ajax".split(" "),function(na,x,Qa,Ra,Sa,oa,C,Ta,pa,Ua,Va,Wa,Xa,Ya){function D(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}function E(a,b){return function(c){c=u(a,c);return b?b(c):c}}
function qa(a,b,c,d){b?(y("Send"+a+"Success"),c&&y("Send"+a+"Success_"+c),d&&y("Send"+a+"Success_"+d)):(y("Send"+a+"Failure"),c&&y("Send"+a+"Failure_"+c),d&&y("Send"+a+"Failure_"+d))}function ra(a){return Array.isArray(a)?a.map(function(b){return x.__assign(x.__assign({},b),{width:0,height:0})}):{url:a.url,width:0,height:0}}var Za=D(Qa),A=D(Ra),N=D(Sa),$a=D(oa),sa=D(C),ab=D(Ta),aa=D(pa),bb=D(Ua),ta=D(Va),O=D(Wa),cb=D(Xa),db=D(Ya),H,U;(function(a){a.Cornerstone="CSTONE";a.Axiom="AXIOM"})(U||(U={}));
var eb=(H={},H.e="basebe.ClientErrors.4",H.i="basebe.Impressions.8",H.c="basebe.Clicks.5",H.s="basebe.Swipes.5",H.v="basebe.Viewabilities.6",H.vc="basebe.VisualCompleteness.7",H.ss="basebe.slideshow.1",H.ia="basebe.ImpressionsV2.4",H.iv2="basebe.ImpressionsV3.2",H),ua=function(a,b){return"matches"in a?a.matches(b):"msMatchesSelector"in a?a.msMatchesSelector(b):"webkitMatchesSelector"in a?a.webkitMatchesSelector(b):0<=z(b,v().ownerDocument.body).indexOf(a)},v=function(a,b){b=b||A["default"].cardRoot;
return!a||ua(b,a)?b:b.querySelector(a)},z=function(a,b){return Array.prototype.slice.call((b||A["default"].cardRoot).querySelectorAll(a))},u=function(a,b){return(b=v("["+a+"]",b))?b.getAttribute(a):null},va=function(a,b){a:{for(var c="["+a+"]";b&&b!==A["default"].cardRoot;){if(ua(b,c))break a;b=b.parentElement}b=null}return b?b.getAttribute(a):null},wa=function(a){if(a)return a=a.getBoundingClientRect(),{left:a.left,right:a.right,top:a.top,bottom:a.bottom};a=J();return{left:0,top:0,right:a.innerWidth,
bottom:a.innerHeight}},J=function(){return v().ownerDocument.defaultView},M=function(a,b){N["default"].log(a,"ERROR",b||"SBX_GWENT")},xa=function(a){var b;a=/\?([^#]+)/.exec(a);if(!a)return[];a=a[1].split("&");var c=null;try{for(var d=x.__values(a),e=d.next();!e.done;e=d.next()){var f=e.value;if(0===f.indexOf("ref_=")){c=f;break}}}catch(h){var g={error:h}}finally{try{e&&!e.done&&(b=d.return)&&b.call(d)}finally{if(g)throw g.error;}}return c?(g=c.split("=").pop()||"")?g.split("_"):[]:[]},ya=function(a,
b,c){var d={};if(5<c.length){d.el=c.pop()||null;a:{var e;try{for(var f=x.__values(c),g=f.next();!g.done;g=f.next()){var h=g.value;if(/^\d+$/.test(h)){var k=h;break a}}}catch(l){var n={error:l}}finally{try{g&&!g.done&&(e=f.return)&&e.call(f)}finally{if(n)throw n.error;}}k=null}d.index=k;d.asin=va("data-asin",b);d.type=va("data-avar",b)}a.c(d,b)},fb=function(a,b){var c=xa(b.href);ya(a,b,c)},gb=function(a,b){var c=J(),d=function(e){2!==e.button&&(fb(a,b),e.metaKey||e.altKey||e.shiftKey||e.ctrlKey||1===
e.button||"_blank"===b.target||(e.preventDefault(),c.setTimeout(function(){c.open(b.href,b.target||"_top")},50)))};b.addEventListener("click",d);b.addEventListener("auxclick",d)},za=function(a,b,c){var d=v("[data-active]"),e=(null===d||void 0===d?void 0:d.dataset)||{};d=e.paginationId;e=e.index;b.c({el:"sb-slideshow-arrow",type:a,asin:void 0===d?null:d,index:void 0===e?null:e},c)},ib=function(a,b){z("[href]",b).filter(function(c){return!c.classList.contains("a-carousel-button")}).forEach(function(c){gb(a,
c)});z(".amazon-follow",b).forEach(function(c){c.addEventListener("click",function(){var d=xa("?&ref_="+c.getAttribute("data-ref"));ya(a,c,d)})});z('[data-mix-operations="handleNext"]').forEach(function(c){c.addEventListener("click",function(){za("next",a,b)})});z('[data-mix-operations="handlePrev"]').forEach(function(c){c.addEventListener("click",function(){za("prev",a,b)})});z('[data-mix-operations="handlePaginationClick"]').forEach(function(c){c.addEventListener("click",function(){var d=c.dataset||
{},e=d.paginationId;d=d.index;a.c({el:"sb-slideshow-pagination",type:"pagination",index:void 0===d?null:d,asin:void 0===e?null:e},b)})});z('[data-mix-operations="hotSpotClick"]').forEach(function(c){c.addEventListener("click",function(){var d,e=(c.dataset||{}).asinid;e=void 0===e?null:e;var f=c.style,g=f.left;f=f.top;var h=v('[data-asin="'+e+'"]')||void 0;h=((null===(d=v("[data-asinindex]",h))||void 0===d?void 0:d.dataset)||{}).asinindex;d=void 0===h?null:h;g={x:parseFloat(g),y:parseFloat(f)};g=JSON.stringify(g);
e=x.__assign({type:g},{asin:e,el:"hotspot",index:d});a.c(e,c)})});hb(a)},hb=function(a){var b=v('[class*="seeProducts"]'),c=v('[data-mix-operations="expandHandler"]'),d=z('[class*="sidebarButton"]'),e=[b,c].concat(d);if(e.length){var f=[];e.forEach(function(h){if(h){var k=h instanceof HTMLButtonElement&&!u("data-index",h)?"seeProducts":h instanceof HTMLButtonElement?"asinSidebar":"shoppableImageCollapsed",n={asin:h.dataset.asinid||null,index:h.dataset.index||null,el:k};k=function(){if(h){var l=x.__assign({type:"collapsed"},
n);a.c(l,h);g(e,f)}};f.push(k);h.addEventListener("click",k)}});var g=function(h,k){h.forEach(function(n,l){n&&n.removeEventListener("click",k[l])})}}},ba=E("data-card-metrics-id",function(a){return(a||"").split("_")[0]}),ca=E("data-var"),jb=E("data-rid"),kb=E("data-cid"),lb=E("data-iid"),Aa=E("data-aid"),Ba=E("data-aidx"),mb=E("data-idt",function(a){switch(a){case U.Axiom:return U.Axiom;default:return U.Cornerstone}}),Y=E("data-rctx",function(a){return a?JSON.parse(a):{sid:"",cid:"",mid:"",aigen:null}}),
da=E("data-wl",function(a){return a?a.split(","):[]}),nb=E("data-slot"),ea=E("data-ts"),fa=function(){var a=J();return a.innerWidth+"x"+a.innerHeight},ha=function(a){return(a=a||A["default"].cardRoot)?(a=a.getBoundingClientRect(),{width:a.width,height:a.height}):{width:0,height:0}},R=function(a,b){var c;b=b||A["default"].cardRoot;return(a=null===(c=b.querySelector('[class*="'+a+'"]'))||void 0===c?void 0:c.getAttribute("src"))?a:null},ia=function(a){return{id:u("data-asin",a),prime:!!v(".a-icon-prime",
a),price:!!v(".a-price",a),savings:!!v('.a-price[data-a-strike="true"]',a),rating:u("data-rt",a),badge:u("data-deal",a)}},Ca=function(a,b){var c=J(),d,e=function(){d||(d=c.setTimeout(a,b))};e.cancel=function(){c.clearTimeout(d);d=0};return e},ja=function(a,b,c){var d=(c||{}).ms||25,e=(c||{}).el||J(),f=$a["default"].throttle(b,d);e.addEventListener(a,f);return function(){e.removeEventListener(a,f)}},S={},Ea=function(a,b,c){void 0===c&&(c=!1);var d=a.getBoundingClientRect(),e=d.width*d.height;a=u("data-view-pixel",
a);if(e){var f=d.top,g=d.bottom,h=d.left,k=d.right,n=J();d=n.innerHeight;h=Da(h,k,n.innerWidth);f=Da(f,g,d);e=h*f/e;if(c)if(.5<=e)if(b)b();else return!0;else if(b)b.cancel();else return!0;else if(a)if(S[a]||(S[a]={percentageViewed:.5,startTimeInView:0}),c=S[a],c.percentageViewed=e,.5<=e){if(0===c.startTimeInView||1E3<Date.now()-c.startTimeInView)c.startTimeInView=Date.now();if(b)b();else return!0}else if(c.startTimeInView=0,b)b.cancel();else return!0}},Da=function(a,b,c){return 0<=a?Math.max(Math.min(c-
a,b-a),0):0<b?Math.max(Math.min(Math.min(b,c),b-a),0):0},Fa=function(a){var b,c,d=Date.now()-(null===(b=S[a])||void 0===b?NaN:b.startTimeInView);b=null===(c=S[a])||void 0===c?void 0:c.percentageViewed;if(d&&b)if(c="/"===a.substr(-1)?a+"v/":a+"/v/",a=JSON.stringify({v:{def:"iab",event:"VIEWED",p:Math.round(100*S[a].percentageViewed),t:parseFloat((d/1E3).toFixed(3))},programType:"SBC"}),"function"===typeof window.fetch)fetch(c+encodeURI(a),{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},
body:a}).then(function(f){f.ok||0===f.status||N["default"].log(f.status+" "+f.statusText,"ERROR","sbx-ce-vcpm-fetch");y("PixelClientCallSuccess")}).catch(function(f){y("PixelClientCallFailure");N["default"].log(f,"ERROR","sbx-ce-vcpm-fetch")});else{var e=new XMLHttpRequest;e.open("POST",c+encodeURI(a));e.setRequestHeader("Content-Type","application/json");e.onreadystatechange=function(){4===e.readyState&&(200!==e.status?N["default"].log(e.status+" "+e.statusText,"ERROR","sbx-ce-vcpm-fetch"):y("PixelClientCallSuccess"))};
e.onerror=function(){y("PixelClientCallFailure");N["default"].log("XMLHttpRequest error from old browser","ERROR","sbx-ce-vcpm-fetch")};e.send(a)}else d||y("PixelClientCallMissingTimeInView"),b||y("PixelClientCallMissingPercentageInView")},ob=function(a,b){var c=function(){Ea(b?b:v(),d)},d=Ca(function(){var g=u("data-view-pixel",b?b:v());g&&(Fa(g),g=v("[data-view-pixel]"),null===g||void 0===g?void 0:g.removeAttribute("data-view-pixel"));e();f();a.v(null,b)},1E3),e=ja("scroll",c,void 0),f=ja("resize",
c,void 0);c()},pb=function(a){a&&a.forEach(function(b){var c=Ca(function(){var d=u("data-view-pixel",b);d&&(Fa(d),null===b||void 0===b?void 0:b.removeAttribute("data-view-pixel"))},1E3);Ea(b,c)})},Ga=function(a,b){var c=null,d=null;a.addEventListener("touchstart",function(e){c=e.touches[0].pageX});a.addEventListener("touchmove",function(e){null===c&&(c=e.touches[0].pageX);d=e.touches[0].pageX});a.addEventListener("touchend",function(){null!==c&&null!==d&&b(d-c);c=d=null})},qb=function(a){if(ab["default"].isSupported("touch")){var b=
v("[data-track-swipe]"),c=v("[data-trackswipe]"),d=function(e){var f=Math.abs(e);if(30<f){var g=z("[data-view-pixel]");pb(g);a.s({direction:0>e?"left":"right",length:f})}};b?Ga(b,d):c&&Ga(c,d)}},rb=function(a,b){var c=Date.now();b=z("img",b);var d=b.length,e=0,f=function(){++e===d&&a.vc({delay:Date.now()-c})};b.forEach(function(g){null!==u("data-lazy",g)&&null!==u("data-src",g)?g.addEventListener("load",function(){g.src===g.dataset.src&&f()}):g.complete?f():g.addEventListener("load",f)})},sb=function(a){var b=
a.campaignId,c=a.idType,d=a.slotName,e=a.market,f={eventV1:{anonymizedRequestId:a.anonymizedRequestId,campaignId:b,slotName:d,idType:c,market:e,customerId:a.customerId,sessionId:a.sessionId,lob:a.lob},eventV2:{campaignId:b,slotName:d,idType:c,market:e,joinId:a.joinId}},g=function(h,k,n){try{var l=sa["default"],w=l.event,q=x.__assign({},f[k]);if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(q[r]=n[r]);w.call(l,q,"base-be",eb[h],{ssd:!0})}catch(p){M(p)}};return{i:g.bind(null,"i","eventV1"),
v:g.bind(null,"v","eventV1"),vc:g.bind(null,"vc","eventV1"),c:g.bind(null,"c","eventV1"),s:g.bind(null,"s","eventV1"),ss:g.bind(null,"ss","eventV1"),ia:g.bind(null,"ia","eventV1"),iv2:g.bind(null,"iv2","eventV2"),e:function(h){g("e","eventV1",h&&{name:h.name,message:h.message,stack:h.stack})}}},Ha=function(a){var b=kb(a);var c=Y(a).mid;b=sb({anonymizedRequestId:jb(),campaignId:b,idType:mb(a),slotName:nb(),market:c,customerId:null,sessionId:null,lob:"UNKNOWN",joinId:null});var d=J();c=d.innerWidth;
d=d.innerHeight;var e=ha(a),f=e.width;e=e.height;var g=Y(a).aigen;b.i({asins:[].map.call(z("[data-asin]",a),ia),creativeType:ba(),creativeVariation:ca(a),version:ea(a),viewport:fa(),weblabs:da(a),adWidth:f,adHeight:e,viewportWidth:c,viewportHeight:d,storeBannerUrl:R("storeBanner",a),customImageUrl:R("lifestyleImage",a),isAiGen:g});ib(b,a);rb(b,a);ob(b,a);qb(b);d=J();c=d.innerWidth;d=d.innerHeight;e=ha(a);f=e.width;e=e.height;g=Y(a).aigen;b.ia&&b.ia({asins:[].map.call(z("[data-asin]",a),ia),creativeType:ba(),
creativeVariation:ca(a),version:ea(a),viewport:fa(),weblabs:da(a),adIndex:Ba(a),adId:Aa(a),adWidth:f,adHeight:e,viewportWidth:c,viewportHeight:d,storeBannerUrl:R("storeBanner",a),customImageUrl:R("lifestyleImage",a),isAiGen:g});d=J();c=d.innerWidth;d=d.innerHeight;e=ha(a);f=e.width;e=e.height;g=Y(a).aigen;b.iv2&&b.iv2({asins:[].map.call(z("[data-asin]",a),ia),creativeType:ba(),creativeVariation:ca(a),version:ea(a),viewport:fa(),weblabs:da(a),adIndex:Ba(a),adId:Aa(a),adWidth:f,adHeight:e,viewportWidth:c,
viewportHeight:d,storeBannerUrl:R("storeBanner",a),customImageUrl:R("lifestyleImage",a),isAiGen:g})},y=function(a,b){void 0===b&&(b=1);sa["default"].count("sbxGwentClient"+a,b)},F={log:function(a){var b=J();var c=lb();(b=c&&b.sbxGwentClient&&"number"===typeof b.sbxGwentClient[c]?Date.now()-b.sbxGwentClient[c]:null)?y(a,b):y("NoPageTime")}},tb=function(a){var b=a.url,c=a.onSuccess,d=a.onError;b||d();bb["default"].get(b,{success:function(e){e&&"ok"===e.status?c(e):d()},error:d,abort:d})},ka;(ka||(ka=
{})).adFeedbackHandler="adFeedbackHandler";var ub=function(a,b,c,d,e){try{var f=JSON.parse(a),g=x.__read(f,6),h=g[0],k=g[1],n=g[2],l=g[3],w=g[4],q=g[5],r=[];Array.isArray(h)?h.forEach(function(t){return r.push({campaignId:c,creativeId:t})}):r.push({campaignId:c,creativeId:h});var p={adCreativeMetaData:{adCreativeId:Array.isArray(h)?h[0]:h,adId:b,adImpressionId:k,adNetwork:"aax",adProgramId:1010,adCreativeDetails:r},adPlacementMetaData:{adElementId:n,pageType:l,pageUrl:w,searchTerms:q,slotName:d,adProgramId:1010}};
return e+"?pl="+encodeURIComponent(JSON.stringify(p))}catch(t){return null}},Ia=function(a){var b=aa["default"].setup().define,c=!!u("data-ad-feedback-clicks"),d=!!u("data-ad-feedback-simulate"),e=a||"AdFeedbackSuccess",f="AdFeedbackPlaceholderClick",g=!1;c&&b(ka.adFeedbackHandler,"click",function(){F.log(f);"AdFeedbackPlaceholderClick"===f&&(g=!0)});a=u("data-ad-feedback");b=u("data-ad-feedback-url")||"/gp/aq-feedback/lazyLoad/handler/af-link-handler.html";if(a){c=u("data-slot");var h=u("data-aid"),
k=u("data-cid");a=ub(a,h,k,c,b);tb({url:a,onSuccess:function(n){var l=n.html;var w=v('[data-id="afb-content"]');w&&l?(w.innerHTML=l,l=w):l=null;if(n=n.script)w=v().ownerDocument.createElement("script"),w.type="text/javascript",w.innerHTML=n,v().appendChild(w);F.log(e);f="AdFeedbackLinkClick";l&&g&&d&&((n=v("a",l))?(n.click(),n=!0):n=!1,F.log(n?"AdFeedbackSimulateClickSuccess":"AdFeedbackSimulateClickFail"))},onError:function(){F.log("AdFeedbackFallback");g&&d&&F.log("AdFeedbackSimulateClickFail")}})}},
V=function(a,b){var c,d=[];try{for(var e=x.__values(a.split(/[-_]/)),f=e.next();!f.done;f=e.next()){var g=f.value;d.push(g.charAt(0).toUpperCase()+g.slice(1));if("creativeLevel"===b&&("desktop"===g||"mobile"===g))break}}catch(k){var h={error:k}}finally{try{f&&!f.done&&(c=e.return)&&c.call(e)}finally{if(h)throw h.error;}}return d.join("")},wb=function(a,b,c,d,e,f,g,h,k,n,l){return x.__awaiter(void 0,void 0,void 0,function(){var w,q,r;return x.__generator(this,function(p){switch(p.label){case 0:w=function(){return{adCreativeMetaData:{adCreativeDetails:vb(b,
h,k,n,l)},adFeedbackLabelId:a}},q=function(t){var m=t.baseMessage,B=t.deviceType,G=t.tabletEnv,K=t.slotName;K=x.__read([V(t.creativeId,"creativeLevel"),V(K,"slotLevel")],2);t=K[0];K=K[1];y(m);B&&(B=m+"_"+B,G&&(B+="_"+G),y(B));t&&y(m+"_"+t);K&&y(m+"_"+K)},p.label=1;case 1:return p.trys.push([1,3,,4]),[4,c(w)];case 2:return p.sent(),q({baseMessage:"EnableAdFeedbackSuccess",deviceType:d,tabletEnv:e,creativeId:f,slotName:g}),[3,4];case 3:return r=p.sent(),q({baseMessage:"EnableAdFeedbackFailure",deviceType:d,
tabletEnv:e,creativeId:f,slotName:g}),M(r),[3,4];case 4:return[2]}})})},xb=function(a){if(a){var b=a.split(" ");b.map(function(c,d){0<d&&(b[d]=c.substring(3,c.length))});b.pop();b.shift();return b}},vb=function(a,b,c,d,e){var f=[],g=u("data-card-metrics-id")||"",h=u("data-slot")||"";g=x.__read([V(g,"creativeLevel"),V(h,"slotLevel")],2);var k=g[0],n=g[1];e&&e()!==a.length&&(a=a.filter(function(l){return v('[data-aid="'+l.adId+'"]')}));a.forEach(function(l,w){var q='[data-aid="'+l.adId+'"]';for(var r=
v(q),p=b&&b()||document.body,t,m=0;(c?m<c.length:0>m)&&!(t=v(q+' div[class*="'+(null===c||void 0===c?void 0:c[m])+'"] img'));m++);t?y("AfImagePresent_"+k):y("AfImageMissing_"+k);q=(null===t||void 0===t?void 0:t.getAttribute("src"))||void 0;m=xb((null===t||void 0===t?void 0:t.getAttribute("srcset"))||void 0);var B=(null===m||void 0===m?void 0:m.length)||1;t=[];for(var G=0;G<B;G++)t.push({url:(null===m||void 0===m?void 0:m[G])||""});q={url:q?q:""};qa("SelectionSignals",l.selectionSignals,k,n);qa("AdvertiserIdNS",
l.advertiserIdNS,k,n);if(r){(m=1===a.length||d)||(r=wa(r),p?((m=v('div[data-index="'+w+'"]'))?m=0===m.offsetHeight&&0===m.offsetWidth?!0:!1:(N["default"].log("container Element for ad number "+w+" is not found","WARN","DSA/AdFeedback"),m=!0),m?m=!1:(p=wa(p),r.left===p.left||r.right===p.right?(m=r.left,(m=m>=p.left&&m<=p.right)||(r=r.right,m=r>=p.left&&r<=p.right),p=m):(m=r.left,(m=m>p.left&&m<p.right)||(r=r.right,m=r>p.left&&r<p.right),p=m),m=p)):m=void 0);if(m){p=f.push;r=l.campaignId;m=l.adId;B=
l.title;t={lowResolutionImage:ra(q),highResolutionImages:ra(t)};if(l.selectionSignals){q=l.selectionSignals;switch(q.pastActivity){case "STORE_ONLY":G=1;break;default:G=0}q=x.__assign(x.__assign({},q),{pastActivity:G})}else q=void 0;p.call(f,{campaignId:r,adId:m,adCreativeIndex:w,title:B,adCreativeImage:t,selectionSignals:q,advertiserIdNS:l.advertiserIdNS})}y("adElementPresent_"+k)}else y("adElementMissing"),N["default"].log("adElement is not found: "+JSON.stringify(l),"WARN","DSA/AdFeedback"),y("adElementMissing_"+
k)});return f},Ja=function(){z('[data-id="cta"]').forEach(function(a){if(a.parentElement){var b=v('[data-id*="cta-fallback"]',a.parentElement),c=v(".a-truncate",a),d=v(".a-truncate-full",a);c&&d&&(d.clientHeight>c.clientHeight&&b?(b.style.display="block",a.parentElement.removeChild(a)):(b=a.parentElement.getAttribute("aria-hidden"),b&&"false"!==b||(b=a.getAttribute("data-label")||d.innerHTML,a.parentElement.setAttribute("aria-label",b)),(c=v('[data-id*="cta-chevron"]',a))&&!d.hasAttribute("data-chevron")&&
(d.setAttribute("data-chevron","true"),a=d.innerHTML.split(" "),b=a.pop(),c=c.innerHTML,d.innerHTML="<span>"+a.join(" ")+" </span><span>"+b+"&nbsp;"+c+"</span>")))}})},yb=function(a){var b=u("data-src",a)||"",c=u("data-srcset",a)||"",d=a.cloneNode();d.removeAttribute("data-src");d.removeAttribute("data-srcset");d.removeAttribute("data-lazy");d.srcset=c;d.src=b;a.parentNode&&a.parentNode.insertBefore(d,a);d.onload=function(){a.style.opacity="0";F.log("LazyLoaded")}},zb=function(){var a=z('[class*="eelModalRoot"]');
a&&a.forEach(function(b,c){var d=u("data-modal-trigger",b),e=u("data-title",b),f=u("data-modal-settings",b);f=JSON.parse(f||"{}");if(d){c="eel-cards-modal-"+c;var g="."+b.className.split(" ")[0],h=ta["default"].create(c,g,{closeButton:(null===f||void 0===f?void 0:f.closeButton)||!1,a11yOpenMessage:e||"Energy Efficiency & Product Fiche",width:(null===f||void 0===f?void 0:f.width)||800});e=pa.setup();f=e.define;e=e.attach;h.once("beforeShow",function(){O["default"].loadDescendantImagesManually(b)});
f("modal-handler-"+d,["click"],function(){h.show()});f("modal-close-handler-"+d,["click"],function(){h.hide()});f=v('[data-mix-operations="modal-handler-'+d+'"]');d=v('[data-mix-operations="modal-close-handler-'+d+'"]');f&&d&&(e("modalHandler",f),e("modalClose",d))}})},Ab=function(a){var b=function(d,e){d={$event:{preventDefault:O["default"].$.noop,stopPropagation:O["default"].$.noop},$target:d.getContent().find('[data-a-tab-name="'+e+'"]'),data:{name:"energyEfficiencyTabSet"}};O["default"].trigger("a:declarative:a-tabs:click",
d)},c=function(d,e){var f=d&&d.$event,g=d&&d.data||{},h=g.name;f&&f.preventDefault&&f.preventDefault();f&&f.stopPropagation&&f.stopPropagation();d&&f&&g&&h&&e&&(f=e.get(h),f||(O["default"].on("a:popover:beforeShow:"+h,function(k){var n,l,w;k.popover&&k.popover.getContent&&(k=k.popover.getContent(),null===(l=null===(n=null===k||void 0===k?void 0:k.find(".a-manually-loaded"))||void 0===n?void 0:n.parent())||void 0===l?void 0:l.css("min-height",null!==(w=g.modalHeight)&&void 0!==w?w:800),O["default"].loadDescendantImagesManually(k))}),
f=e.create(d.$target,g)),f&&(f.show(),g.activeTabName&&b(f,g.activeTabName)))};a&&a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",function(d){O["default"].declarative("card-energy-efficiency-secondary-view","click",function(e){c(e,d)})})},Cb=function(){z("span[data-ad-deal-end-time]").forEach(function(a){var b=u("data-ad-deal-end-time",a);a&&null!==b&&Bb(a,b)})},Bb=function(a,b){var c=oa.interval(function(){var d=(new Date(b)).getTime(),e=Date.now();e=Math.floor((d-e)/1E3);
if(0>e)clearInterval(c);else{var f=Math.floor(e/60%60);d=Math.floor(e%60);e=("0"+Math.floor(e/3600%24)).slice(-2);f=("0"+f).slice(-2);d=("0"+d).slice(-2);a.innerText=e+":"+f+":"+d}},1E3)},T=function(a,b){return a.querySelector("[class*="+b+"]")},Db=function(a,b,c){a=JSON.parse(a);a.adCreativeMetaData=b.adCreativeMetaData;a.feedbackFormContainerId=c;return encodeURI(JSON.stringify(a))},Eb=function(a,b,c){return x.__awaiter(void 0,void 0,void 0,function(){var d,e,f,g,h,k,n;return x.__generator(this,
function(l){d="adFeedbackModal_"+a;l=(null===(n=T(b,"ad-feedback-modal-container"))||void 0===n?void 0:n.className)||"";e="."+b.className+" ."+l.replace(" ",".");g=(f=c().adCreativeMetaData.adCreativeDetails)?f.length:0;h={a11yOpenMessage:"",width:Math.max(560,125*g+130)};try{return k=ta["default"].create(d,e,h),[2,k]}catch(w){throw C.count("adfeedback:cards:clientDesktop:modalCreation:failure",1),Error("Modal Creation Failed : "+w);}})})},Hb=function(a,b,c,d,e,f,g){var h="rtl"===document.getElementsByTagName("html")[0].dir?
"ad-feedback-loading-spinnner-rtl":"ad-feedback-loading-spinnner";var k=T(A["default"].cardRoot,h);a.on("beforeShow",function(){return x.__awaiter(void 0,void 0,void 0,function(){var n,l;return x.__generator(this,function(w){switch(w.label){case 0:return n=Fb(a,b,c),[4,a.render(function(q){var r="250px",p=c().adCreativeMetaData.adCreativeDetails;p&&2>p.length&&(r="150px");k.style.marginTop=r;q.innerHTML="";r=q.appendChild;p=document.getElementsByTagName("html")[0].dir;var t=A["default"].createElement("div"),
m=A["default"].createElement("div");t.innerHTML=e;"rtl"===p?(t.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 28px; margin-right: 0px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 0px; padding-right: 25px; padding-top: 16px; text-align: right; text-rendering: optimizelegibility; visibility: visible;'),m.setAttribute("style",
'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to left, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: right; visibility: visible; z-index: 10;')):
(t.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 28px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 25px; padding-right: 0px; padding-top: 16px; text-align: left; text-rendering: optimizelegibility; visibility: visible;'),m.setAttribute("style",'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to right, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: left; visibility: visible; z-index: 10;'));
m.appendChild(t);r.call(q,m);r=document.getElementsByTagName("html")[0].dir;p=A["default"].createElement("div");"rtl"===r?p.setAttribute("style","padding-bottom: 16px; padding-right: 50px ; padding-top: 16px; justify-content: center; align-items: center;"):p.setAttribute("style","padding-bottom: 16px; padding-left: 50px ; padding-top: 16px; justify-content: center; align-items: center;");Gb(k,p,d,n,f);q.appendChild(p)})];case 1:return w.sent(),(l=document.querySelector(".a-button-close"))&&l.setAttribute("aria-label",
g),[2]}})})})},Fb=function(a,b,c){c=c();var d=c.adCreativeMetaData.adCreativeDetails;null===d||void 0===d?void 0:d.sort(function(e,f){return e.adCreativeIndex<f.adCreativeIndex?-1:1});return Db(b,c,a.id)},Gb=function(a,b,c,d,e){b.appendChild(a);"function"==typeof C.uet&&C.uet("bb","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});db["default"].post("/af/multi-creative/feedback-form",{accepts:"application/json",contentType:"application/json",additionalHeaders:{"Accept-Language":""===c?
"en-US":c}},{pl:d,deviceType:"desktop"}).then(function(f){return x.__awaiter(void 0,void 0,void 0,function(){var g,h,k;return x.__generator(this,function(n){"function"==typeof C.uet&&C.uet("be","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});C.count("adfeedback:cards:clientDesktop:fetchFormContent:success",1);g=A["default"].createElement("div");g.innerHTML=String(f.responseBody);for(h=0;h<g.children.length;++h)k=g.children[h],"SCRIPT"===k.tagName?la("script",k,b):"LINK"===k.tagName?
la("link",k,b):la("div",k,b);b.removeChild(a);return[2]})})}).catch(function(){"function"==typeof C.uet&&C.uet("be","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});C.count("adfeedback:cards:clientDesktop:fetchFormContent:failure",1);b.innerHTML=e});"function"==typeof C.uex&&C.uex("ld","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1})},la=function(a,b,c){var d=A["default"].createElement(a);d.innerHTML=b.innerHTML;b.getAttributeNames().forEach(function(e){d.setAttribute(e,
b.getAttribute(e)||"")});c.appendChild(d)},Ka={},Ib=function(a,b){return x.__awaiter(void 0,void 0,void 0,function(){var c,d,e,f,g,h,k,n,l;return x.__generator(this,function(w){c=T(a,"ad-feedback-primary-link");d=b().adFeedbackLabelId;e=aa["default"].setup();f="open-modal"+d;g=b().adCreativeMetaData.adCreativeDetails;h=a.dataset;k=h.isDsaEnabled;n=h.weblabTreatment;l=String(k);"undefined"===l&&(l=g&&0<g.length?g[0].selectionSignals?"true":"false":"false");"true"===l&&"T1"!==n&&(l="false");e.attach(f,
c);e.define(f,"click",function(){return x.__awaiter(void 0,void 0,void 0,function(){var q;return x.__generator(this,function(r){switch(r.label){case 0:return(q=Ka[d])?[3,2]:[4,Eb(d,a,b)];case 1:q=r.sent();var p=a.dataset,t=p.formHeaderText,m=p.dsaFormHeaderText;Hb(q,p.adFeedbackPayload,b,p.currentLocale,"true"===l?m:t,p.formLoadErrorText,p.closeButtonAriaText);Ka[d]=q;r.label=2;case 2:return q.show(),[2]}})})});try{c.addEventListener("keydown",function(q){if(" "===q.key||"Enter"===q.key)q.preventDefault(),
c.click()})}catch(q){console.log("Couldnt add keydown event listner")}return[2]})})},Jb=function(a,b){var c=aa["default"].setup(),d="mouse-enter"+b;b="mouse-leave"+b;var e=T(a,"ad-feedback-primary-link"),f=T(a,"ad-feedback-text-desktop"),g=T(a,"ad-feedback-sprite");c.attach(d,e);c.define(d,"mouseenter",function(){g.style.backgroundPosition="0px -12px";f.style.color="#111111"});c.attach(b,e);c.define(b,"mouseleave",function(){g.style.backgroundPosition="0px 0px";f.style.color="#555"})},Kb={T1:0,T2:1E3,
T3:2E3,T4:3E3,T5:4E3,T6:5E3,T7:6E3,T8:7E3,T9:8E3},Lb=function(a){"complete"===document.readyState||"interactive"===document.readyState?a():document.addEventListener("DOMContentLoaded",a)},Nb=function(a){return function(){return x.__awaiter(void 0,void 0,void 0,function(){var b,c,d,e,f,g,h,k,n,l,w,q,r,p,t,m,B,G,K;return x.__generator(this,function(Q){switch(Q.label){case 0:return F.log("Loaded"),b=a||{},c=b.loadAdFeedback,d=b.onLoad,e=b.onInit,f=b.isMobile,g=b.enableAdFeedback,h=b.creativeContainer,
k=b.creativeImageContainer,n=b.bypassAdFeedbackViewportCheck,l=b.renderedAdsCount,e&&e(),[4,Za["default"].pageReady];case 1:Q.sent();F.log("Ready");try{var W=v(".sbx-no-js",void 0);W&&W.classList.remove("sbx-no-js");try{var La=z("[data-cid]");La.length?La.forEach(Ha):Ha()}catch(I){M(I)}try{Ja(),ja("resize",Ja,void 0)}catch(I){M(I)}try{z('img[data-lazy="true"]').forEach(yb)}catch(I){M(I)}v('[class*="eelModalRoot"]')?zb():v('[data-action*="card-energy-efficiency-"]')&&Ab(window.P);var Ma,ma;if(!("-webkit-line-clamp"in
A["default"].cardRoot.ownerDocument.body.style||"lineClamp"in A["default"].cardRoot.ownerDocument.body.style)){var Na=z('[class*="_sbTruncatedTitle_"]');if(Na.length)try{for(var Z=x.__values(Na),X=Z.next();!X.done;X=Z.next()){var L=X.value,Mb=parseInt(L.getAttribute("data-totallines")||"1"),Oa=Math.ceil(parseFloat((null===(ma=A["default"].cardRoot.ownerDocument.defaultView)||void 0===ma?void 0:ma.getComputedStyle(L).lineHeight)||"1.3em"))*Mb;if(!(L.scrollHeight<=Oa)){for(;L.scrollHeight>Oa;)L.innerText=
L.innerText.slice(0,-1);L.innerText=L.innerText.slice(0,-3);L.innerText+="\u2026"}}}catch(I){var Pa={error:I}}finally{try{X&&!X.done&&(Ma=Z.return)&&Ma.call(Z)}finally{if(Pa)throw Pa.error;}}}d&&d();u("data-deal-badge-automated")&&u("data-ad-deal-end-time")&&Cb();W=f;if(void 0!==W&&!window.sbxGwentClientDPR)try{window.sbxGwentClientDPR=!0,y((W?"Mobile":"Desktop")+"DPR"+(4>=Math.round(2*window.devicePixelRatio)/2?Math.round(2*window.devicePixelRatio)/2:"4Plus"))}catch(I){M(I)}}catch(I){M(I)}w=u("data-ad-feedback-label-id");
q=u("data-ad-creative-list");r=u("data-device-type")||"";p=u("data-tablet-env")||"";t=u("data-card-metrics-id")||"";m=u("data-slot")||"";B=V(t,"creativeLevel");if(!w||!q)return[3,6];Q.label=2;case 2:return Q.trys.push([2,4,,5]),G=JSON.parse(q),[4,wb(w,G,g,r,p,t,m,h,k,n,l)];case 3:return Q.sent(),y("NewAdFeedbackImplementationEnabled_"+B),[3,5];case 4:return K=Q.sent(),c&&Ia(),M("Failed to generate adFeedback rendering payload: "+K,"DSA/AdFeedback"),y("FallbackToOldAdFeedbackImplementation_"+B),[3,
5];case 5:return[3,7];case 6:c&&Ia(),y("FallbackToOldAdFeedbackImplementation_"+B),M("Missing adFeedbackLabelId or adCreativeList","DSA/AdFeedback"),Q.label=7;case 7:return[2]}})})}}({enableAdFeedback:function(a){return x.__awaiter(void 0,void 0,void 0,function(){var b,c,d,e;return x.__generator(this,function(f){switch(f.label){case 0:return f.trys.push([0,3,,4]),b=a(),c=cb["default"].cardRoot.getElementsByClassName("adFeedbackMainComponent_"+b.adFeedbackLabelId)[0],d=c.dataset.isSponsoredLabelActive,
"false"===(d||"false").toLowerCase()?[2]:[4,Jb(c,b.adFeedbackLabelId)];case 1:return f.sent(),[4,Ib(c,a)];case 2:return f.sent(),[3,4];case 3:throw e=f.sent(),C.count("adfeedback:cards:clientDesktop:enableAdFeedback:failure",1),Error("Failed to call enableAdFeedback for desktop client : "+e);case 4:return[2]}})})},loadAdFeedback:!0,onLoad:function(){F.log("LifestyleOnLoad");var a=u("data-lazy-load");a&&Lb(function(){setTimeout(function(){var b=v("img[data-lifestyle-img]"),c=b&&b.getAttribute("src");
if(b&&c){c=c.replace("_QL50_","_QL70_");var d=c.replace,e=window.innerWidth,f=2<=window.devicePixelRatio?2:1,g=405*f;1470<=e?g=507*f:1400<=e?g=468*f:1250<=e&&(g=430*f);c=d.call(c,"_SX405_","_SX"+g+"_");b.setAttribute("src",c);F.log("LazyLoadLifestyle"+a)}},Kb[a]||0)})},onInit:function(){try{P.when("af").execute(function(){return F.log("LifestyleAF")})}catch(a){F.log("LifestyleAFError")}},creativeImageContainer:["container"],isMobile:!1});na._operationNames=[];na.card=Nb});