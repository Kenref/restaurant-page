(()=>{"use strict";var e={604:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,".contact-container {\n    background-color: rgb(169, 161, 61);\n    width: 65vw;\n    min-height: 100vw;\n    max-height: 150vh;\n    font-size: 3rem;\n    color: brown;\n    padding: 50px;\n    display: none;\n}\n\n.text-pic-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.image {\n    max-width: 50vw;\n    margin-bottom: 50px;\n}\n\n.contact-text {\n    max-width: 50vw;\n}",""]);const c=i},394:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(228),t.b),l=i()(r()),p=s()(d);l.push([e.id,`* {\n    margin: 0;\n    \n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #A08333;\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n\n}\n\n.header {\n    color: rgb(230, 220, 82);\n    background-color: brown;\n    width: 100%;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 80px;\n}\n\n.restaurant-name {\n    font-size: 3rem;\n}\n\n.menu-bar {\n    display: flex;\n    justify-content: space-around;\n    width: 20vw;\n}\n\n.menu-bar-item {\n    color: white;\n    margin: 10px;\n    background: none;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.main-text {\n    background-color: rgb(169, 161, 61);\n    width: 65vw;\n    height: 120vh;\n    font-size: 2rem;\n    color: brown;\n    padding: 50px;\n    padding-top: 50px;\n}\n\n.copy-with-picture {\n    display: flex;\n    margin-bottom: 100px;\n}\n\n.bartender-picture {\n    width: 20rem;\n}\n\n.section-1 {\n    margin-right: 80px;\n}\n\n.beer-picture {\n    width: 20rem;\n    margin-right: 80px;\n}\n\n.copy-with-picture-2 {\n    display: flex;\n    \n}\n`,""]);const u=l},412:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,".menu-container {\n    background-color: rgb(169, 161, 61);\n    width: 65vw;\n    max-height: 150vh;\n    font-size: 3rem;\n    color: brown;\n    padding: 50px;\n    display: none;\n}\n\n.title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 4vh;\n    border: solid brown 5px;\n    padding: 2vw;\n}\n\n.item-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10vh;\n}\n\n.menu-picture {\n    max-width: 25vw;\n}\n\n.menu-text {\n    font-size: 30px;\n    width: 30vw;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},228:(e,n,t)=>{e.exports=t.p+"89bb837aed4e099b954f.jpeg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"772f72a383a0d6bc1147.jpg",n=t.p+"ed413d43e904e5d84d8d.jpg";var a=t(379),r=t.n(a),o=t(795),i=t.n(o),c=t(569),s=t.n(c),d=t(565),l=t.n(d),p=t(216),u=t.n(p),m=t(589),h=t.n(m),f=t(394),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"images/orc-beer.webp",b=t.p+"images/dwarf-beer.webp",y=t.p+"images/hobbit-beer.webp";var x=t(412),w={};w.styleTagTransform=h(),w.setAttributes=l(),w.insert=s().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=u(),r()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals;var C=t(604),E={};E.styleTagTransform=h(),E.setAttributes=l(),E.insert=s().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=u(),r()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals;const L=t.p+"24ebbc9423b17aac9270.jpeg",T=document.getElementById("content");T.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurant-name"),n.textContent="Welcome to the Tantalising Tavern",e.appendChild(n),e}()).appendChild(function(){const e=document.createElement("nav");e.classList.add("menu-bar");const n=document.createElement("button");n.textContent="Home",n.classList.add("menu-bar-item"),e.appendChild(n);const t=document.createElement("button");t.textContent="Menu",t.classList.add("menu-bar-item"),e.appendChild(t);const a=document.createElement("button");return a.textContent="Contact",a.classList.add("menu-bar-item"),e.appendChild(a),e}());const k=T.appendChild(function(){const t=document.createElement("div");t.classList.add("main-text");const a=document.createElement("div");a.classList.add("copy-with-picture");const r=document.createElement("div");r.classList.add("copy-with-picture-2");const o=document.createElement("p");o.textContent="Welcome to The Tantalising Tavern, a haven for all lovers of fantasy and brews! Step into a realm where imagination flows as freely as the finest ale, and let us transport you to a world of enchantment and merriment. ",o.classList.add("section-1"),a.appendChild(o);const i=new Image;i.src=e,i.classList.add("bartender-picture"),a.classList.add("copy-with-picture"),a.appendChild(i),t.appendChild(a);const c=document.createElement("p");c.textContent="Within these virtual walls, you'll discover a gathering place like no other—a mythical beer tavern where the fantastical meets the flavorsome. Whether you're a seasoned adventurer or a curious wanderer, we invite you to embark on a journey through our virtual halls, where the ambiance is alive with the echoes of laughter and the clinking of tankards.",c.classList.add("section-2");const s=new Image;return s.src=n,s.classList.add("beer-picture"),r.classList.add("copy-with-picture-2"),r.appendChild(s),r.appendChild(c),t.appendChild(r),t}()),I=T.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-container");const n=document.createElement("h3");n.textContent="Discover our Beers",n.classList.add("title"),e.appendChild(n);const t=new Image,a=new Image,r=new Image,o=document.createElement("div");o.classList.add("item-container"),t.src=b,t.classList.add("menu-picture"),o.appendChild(t);const i=document.createElement("p");i.textContent="Our finest Dwarvern Beer",i.classList.add("menu-text"),o.appendChild(i);const c=document.createElement("div");c.classList.add("item-container"),a.src=g,a.classList.add("menu-picture"),c.appendChild(a);const s=document.createElement("p");s.textContent="Our finest Orcish Beer",s.classList.add("menu-text"),c.appendChild(s);const d=document.createElement("div");d.classList.add("item-container"),r.src=y,r.classList.add("menu-picture"),d.appendChild(r);const l=document.createElement("p");return l.textContent="Our finest Hobbish(??) Beer",l.classList.add("menu-text"),d.appendChild(l),e.appendChild(o),e.appendChild(c),e.appendChild(d),e}()),j=T.appendChild(function(){const e=document.createElement("div");e.classList.add("contact-container");const n=document.createElement("div");n.classList.add("text-pic-container");const t=document.createElement("h3");t.textContent="Where to find us",t.classList.add("title"),e.appendChild(t);let a=new Image;a.src=L,a.classList.add("image"),n.appendChild(a);const r=document.createElement("p");return r.classList.add("contact-text"),r.textContent="We are located in the middle of some forest",n.appendChild(r),e.appendChild(n),e}());document.querySelectorAll(".menu-bar-item").forEach((e=>{e.addEventListener("click",(()=>{"Home"===e.textContent?(I.style.display="none",j.style.display="none",k.style.display="block"):"Menu"===e.textContent?(k.style.display="none",j.style.display="none",I.style.display="block"):"Contact"===e.textContent&&(k.style.display="none",I.style.display="none",j.style.display="block")}))}))})()})();