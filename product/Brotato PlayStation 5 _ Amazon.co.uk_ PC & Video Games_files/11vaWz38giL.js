'use strict';mix_d("LegalComplianceCards__legal-compliance-card:legal-compliance-card__ZlnG7bNb","require exports tslib @c/aui-feature-detect @c/browser-operations @c/logger @c/remote-operations @c/scoped-dom".split(" "),function(y,z,e,E,F,G,H,I){function q(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}function A(a){if(a&&a.__esModule)return a;var c=Object.create(null);a&&Object.keys(a).forEach(function(d){if("default"!==d){var b=Object.getOwnPropertyDescriptor(a,d);Object.defineProperty(c,
d,b.get?b:{enumerable:!0,get:function(){return a[d]}})}});c["default"]=a;return c}var J=q(E),B=q(F),v=q(G),C=q(H),m=q(I),D;(function(a){a.MOBILE="mobile";a.DESKTOP="desktop"})(D||(D={}));var n;(function(a){a.FATAL="FATAL";a.ERROR="ERROR";a.WARN="WARN"})(n||(n={}));var f;(function(a){a.SHOW="show";a.HIDE="hide";a.CLICK="click";a.BEFORE_SHOW="beforeShow";a.WEE_SHOW="weeShow";a.RSP_SHOW="rspShow"})(f||(f={}));var K=function(){return e.__awaiter(void 0,void 0,void 0,function(){var a,c,d,b,r,h,p,t,u,k;
return e.__generator(this,function(l){switch(l.label){case 0:return a="legal-comlpiance-modal",c="._legal-compliance-card_style_compliance-modal-root__2Fqz2.aok-hidden",d={a11yOpenMessage:"",width:900},b=m["default"].cardRoot.getElementsByClassName("asinValue")[0],b&&b.value?[4,new Promise(function(g,w){y(["@c/aui-modal"],function(x){g(A(x))},w)})]:(v["default"].log("ASIN is missing from the modal and second call to AAPI.",n.FATAL),[2]);case 1:return r=l.sent().default,h=r.create(a,c,d),p=B["default"].setup(),
t=C["default"].setup(["getContent"]),u=m["default"].cardRoot.querySelector("._legal-compliance-card_style_compliance-modal-trigger-show-rsp__3zZ3D"),k=function(){return e.__awaiter(void 0,void 0,void 0,function(){return e.__generator(this,function(g){switch(g.label){case 0:return[4,t.getContent({asin:b.value}).then(function(w){h.render(function(x){x.appendChild(w)})})];case 1:return g.sent(),[2]}})})},h.once(f.BEFORE_SHOW,k),p.define(f.RSP_SHOW,f.CLICK,function(){h.show()||v["default"].log("Couldn't show the modal",
n.ERROR)}),p.attach(f.RSP_SHOW,u),[2]}})})},L=function(){return e.__awaiter(void 0,void 0,void 0,function(){var a,c,d,b,r,h,p,t;return e.__generator(this,function(u){switch(u.label){case 0:a=m["default"].cardRoot.getElementsByClassName("asinValue")[0];if(!a||!a.value)return v["default"].log("ASIN is missing from the modal and second call to AAPI.",n.FATAL),[2];c=B["default"].setup();d=c.attach;b=c.define;return[4,new Promise(function(k,l){y(["@c/aui-bottom-sheet"],function(g){k(A(g))},l)})];case 1:return r=
u.sent().default,h=r.create("legal-compliance-bottom-sheet","._legal-compliance-card_style_compliance-bottom-sheet-root__1MgMu.aok-hidden",{height:1E3}),p=C["default"].setup(["getContent"]),h.once(f.BEFORE_SHOW,function(){return e.__awaiter(void 0,void 0,void 0,function(){var k;return e.__generator(this,function(l){switch(l.label){case 0:return[4,p.getContent({asin:a.value})];case 1:return k=l.sent(),h.render(function(g){null===g||void 0===g?void 0:g.replaceWith(k)}),[2]}})})}),t=m["default"].cardRoot.querySelector(".bottom-sheet-open-trigger"),
b(f.SHOW,f.CLICK,function(){h.show()||v["default"].log("Couldn't show the bottom sheet",n.ERROR)}),d(f.SHOW,t),[2]}})})};z._operationNames=[];z.card=function(){return e.__awaiter(void 0,void 0,void 0,function(){var a,c,d;return e.__generator(this,function(b){switch(b.label){case 0:return a=function(){return J["default"].isSupported("mobile")},c=m["default"].cardRoot.querySelector("._legal-compliance-card_style_compliance-modal-root__2Fqz2.aok-hidden"),d=m["default"].cardRoot.querySelector("._legal-compliance-card_style_compliance-bottom-sheet-root__1MgMu.aok-hidden"),
a()&&d?[4,L()]:[3,2];case 1:return b.sent(),[3,4];case 2:return a()||!c?[3,4]:[4,K()];case 3:b.sent(),b.label=4;case 4:return[2]}})})}});