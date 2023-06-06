(()=>{"use strict";var e={394:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),u=new URL(n(228),n.b),d=i()(o()),l=s()(u);d.push([e.id,`* {\n    margin: 0;\n    \n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #A08333;\n    background-image: url(${l});\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n}\n\n.header {\n    margin-top: 30px;\n    color: white;\n    background-color: brown;\n    width: 100%;\n    padding: 30px;\n    margin-top: 0px;\n    display: flex;\n    justify-content: center;\n}\n\n.menu-bar {\n    display: flex;\n    justify-content: space-around;\n    width: 20rem;\n}\n\n.menu-bar-item {\n    color: white;\n    /* background-color: white; */\n    margin: 10px;\n}\n\n.main-text {\n    background-color: white;\n}`,""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},228:(e,t,n)=>{e.exports=n.p+"89bb837aed4e099b954f.jpeg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{n.p;var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),d=n.n(u),l=n(589),p=n.n(l),m=n(394),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.getElementById("content");h.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");return t.textContent="Welcome to the Tantalising Tavern",e.appendChild(t),e}()),h.appendChild(function(){const e=document.createElement("nav");e.classList.add("menu-bar");const t=document.createElement("a");t.textContent="Home",t.classList.add("menu-bar-item"),e.appendChild(t);const n=document.createElement("a");n.textContent="Menu",n.classList.add("menu-bar-item"),e.appendChild(n);const r=document.createElement("a");return r.textContent="Contact",r.classList.add("menu-bar-item"),e.appendChild(r),e}()),h.appendChild(function(){const e=document.createElement("div");e.classList.add("main-text");const t=document.createElement("p");t.textContent="Esse cillum officia amet sunt anim aute veniam in veniam fugiat quis et nisi fugiat voluptate. Culpa tempor esse eu incididunt exercitation esse ex. Laboris dolore id fugiat commodo dolore dolor aute irure culpa. Proident consectetur est ullamco commodo ut esse ad irure sint eiusmod culpa anim ex excepteur. Culpa ullamco incididunt non nostrud deserunt labore non ipsum culpa nostrud magna veniam adipisicing. Lorem nulla sit aliqua cupidatat ipsum proident occaecat consequat. Officia voluptate cupidatat eu esse ipsum irure id duis sint dolor.",e.appendChild(t);const n=document.createElement("p");return n.textContent="Commodo consectetur Lorem pariatur cillum elit officia occaecat sit nisi dolore. Id et culpa in ex anim aute non adipisicing cillum aliquip aliquip dolore non mollit et. Nostrud do enim cupidatat adipisicing ipsum. Magna do adipisicing aute ea labore.",e.appendChild(n),e}())})()})();