(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(645),s=n.n(a),d=n(667),i=n.n(d),o=new URL(n(408),n.b),c=s()((function(e){return e[1]})),r=i()(o);c.push([e.id,"body {\n  background:\n    linear-gradient(to bottom, rgba(15, 15, 19, 0.7), rgba(15, 15, 19, 0.7)),\n    url("+r+");\n  background-position: center;\n  background-attachment: fixed;\n  width: 100%;\n  height: 100vh;\n  overflow-x: hidden;\n}\n\n.black-back {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.grey-back {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.font-style {\n  font-family: 'Dancing Script', cursive;\n  font-size: 60px;\n}\n\n.font {\n  font-family: 'Crimson Text', serif;\n}\n\n.main-font {\n  font-family: 'Inconsolata', monospace;\n}\n\n.img-size {\n  width: 600px;\n}\n\n.menu-size-1, .menu-size-2 {\n  width: 250px;\n}\n\n.button-nav {\n  padding: 10px;\n  font-size: 16px;\n  background-color: transparent;\n  color: white;\n  border: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.button-nav:hover {\n  transform: scale(1.5, 1.5);\n}\n\n.float-lg-start:hover,\n.float-lg-end:hover,\n.p-3:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.button-nav.active {\n  border-bottom: 2px solid #eee;\n}\n\n@media screen and (max-width: 425px) {\n  .img-size {\n    width: 320px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .img-size {\n    width: 500px;\n  }\n\n  .menu-size-1 {\n    width: 280px;\n    float: right;\n    top: 0px;\n    right: 0px;\n  }\n\n  .menu-size-2 {\n    width: 280px;\n    float: left;\n    top: 0px;\n    right: 0px;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .img-size {\n    width: 600px;\n  }\n\n}",""]);const l=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(a)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(s[i]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);a&&s[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var d={},i=[],o=0;o<e.length;o++){var c=e[o],r=a.base?c[0]+a.base:c[0],l=d[r]||0,p="".concat(r," ").concat(l);d[r]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(t[m].references++,t[m].updater(u)):t.push({identifier:p,updater:s(u,a),references:1}),i.push(p)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var d=a(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<d.length;i++){var o=n(d[i]);t[o].references--}for(var c=a(e,s),r=0;r<d.length;r++){var l=n(d[r]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}d=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a=n.css,s=n.media,d=n.sourceMap;s?e.setAttribute("media",s):e.removeAttribute("media"),d&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(a,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},408:(e,t,n)=>{e.exports=n.p+"d970c23d237240d66ce8.jpg"},745:(e,t,n)=>{e.exports=n.p+"d3ccf271a2b841863570.png"},361:(e,t,n)=>{e.exports=n.p+"d9bbb3e2bd60a5069f9c.jpg"},99:(e,t,n)=>{e.exports=n.p+"b705fafec2da50300c2d.jpg"},587:(e,t,n)=>{e.exports=n.p+"d305d6844d69e99f1d2b.jpg"},25:(e,t,n)=>{e.exports=n.p+"705e89b81cb6453c1e13.jpg"},360:(e,t,n)=>{e.exports=n.p+"a73b33cdad5ef2ac70ae.jpg"}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var d=t[a]={id:a,exports:{}};return e[a](d,d.exports,n),d.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),a=n(795),s=n.n(a),d=n(569),i=n.n(d),o=n(565),c=n.n(o),r=n(216),l=n.n(r),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var f=n(745),L=n(587);const b=()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{document.createElement("div").classList.add("row");const e=document.createElement("div");e.classList.add("m-5"),e.classList.add("grey-back"),e.classList.add("text-center"),e.classList.add("text-white"),e.classList.add("col-12"),e.classList.add("col-lg-6"),e.classList.add("mx-auto");const t=document.createElement("h4");t.classList.add("font"),t.classList.add("lh-base"),t.classList.add("py-4"),t.innerText="Welocome to Tashkent City\n NestOne offers thirty three different services to its customers in order to make their life more shining and comfortable\n This restaurant is only for you to feel the delicious tastes of life";const n=new Image;n.src=L,n.classList.add("img-size");const a=document.createElement("h5");return a.classList.add("font"),a.innerText="Book place and order Uzbek traditional foods beforehand",a.classList.add("py-4"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e})())};var v=n(99),g=n(361),x=n(360),y=n(25);const C=(e,t,n,a)=>{const s=document.createElement("div");s.classList.add("menu-item"),s.classList.add("black-back"),s.classList.add("col-11"),s.classList.add("mx-auto"),s.classList.add("float-lg-start"),s.classList.add("my-3");const d=document.createElement("div");d.classList.add("p-2"),d.classList.add("text-div");const i=document.createElement("h4");i.classList.add("font"),i.classList.add("text-center"),i.innerText=e,d.appendChild(i);const o=document.createElement("p");o.classList.add("main-font"),o.innerText=t,d.appendChild(o);const c=document.createElement("h4");c.classList.add("main-font"),c.innerText=n,d.appendChild(c);const r=document.createElement("div"),l=new Image;return l.src=a,l.classList.add("m-2"),l.classList.add("menu-size-1"),r.appendChild(l),s.appendChild(r),s.appendChild(d),s},w=(e,t,n,a)=>{const s=document.createElement("div");s.classList.add("menu-item"),s.classList.add("black-back"),s.classList.add("col-11"),s.classList.add("mx-auto"),s.classList.add("float-lg-end"),s.classList.add("my-3");const d=document.createElement("div");d.classList.add("p-2");const i=document.createElement("h4");i.classList.add("font"),i.classList.add("text-center"),i.innerText=e,d.appendChild(i);const o=document.createElement("p");o.classList.add("main-font"),o.innerText=t,d.appendChild(o);const c=document.createElement("h4");c.classList.add("main-font"),c.innerText=n,d.appendChild(c);const r=document.createElement("div"),l=new Image;return l.src=a,l.classList.add("m-2"),l.classList.add("menu-size-2"),r.appendChild(l),s.appendChild(r),s.appendChild(d),s},E=document.querySelector("#container1"),k=e=>{document.querySelectorAll(".button-nav").forEach((e=>{void 0!==e&&e.classList.remove("active")})),e.classList.add("active")},T=e=>{e.classList.add("button-nav"),e.classList.add("mx-3"),e.classList.add("main-font")};E.appendChild((()=>{const e=document.createElement("header");e.classList.add("text-center"),e.classList.add("black-back"),e.classList.add("col-12"),e.classList.add("m-0"),e.innerHTML='<h1 class="text-white py-4 font-style">NestOne Restaurant</h1>';const t=document.createElement("h4");return t.innerText="Reastaurant is one of the thirty three services of Nest Zone",t.classList.add("text-white"),t.classList.add("font"),e.appendChild(t),e.appendChild((()=>{const e=document.createElement("nav");e.classList.add("py-3");const t=document.createElement("button");T(t),t.innerHTML="<h5>Home</h5>",t.addEventListener("click",(e=>{e.target.classList.contains("active")||(k(t),b())}));const n=document.createElement("button");T(n),n.innerHTML="<h5>Menu</h5>",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(k(n),(()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("row"),e.classList.add("m-0");const t=document.createElement("div");return t.classList.add("my-5"),t.classList.add("grey-back"),t.classList.add("mx-0"),t.classList.add("text-white"),t.classList.add("col-12"),t.classList.add("col-lg-6"),t.classList.add("mx-lg-auto"),t.appendChild(C("Plov",'Plov is Uzbek traditional food that is cooked with tons of rice sometimes, beacouse it is extremely delicious, every foreign guest says that "Words really fail to describe its taste." \n Required products: Rice, Carrot, Onion, Meat, Oil, Peas, Raisins, Solt, etc...',"35$",v)),t.appendChild(w("Somsa","Somsa is ver nutritious type of food that is cooked in Tandir. Also this foot is prepared in every regioun of Uzbekistan \n Required products: Flour, fat, Meat, Oinion, Egg, Solt, etc...","20$",x)),t.appendChild(C("Manti","Manti is also a type of doughy foos, very delicious and yummy food, there are different types of this food in Our Country, without doubt you should try it \n Required products: Flour, Egg, Solt, Meat, Fat, Onion, etc...","30$",g)),t.appendChild(w("Kebab","Kebab, especially prepared at southern regions of Uzbekistan frequently, it is almost fully meaty food, and cooke with skewereds \n Required products: Meat, Marinade, Onions, etc...","20$",y)),e.appendChild(t),e})())})())}));const a=document.createElement("button");return T(a),a.innerHTML="<h5>Contact</h5>",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(k(a),(()=>{const e=document.getElementById("main");e.textContent="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("row"),e.classList.add("m-1");const t=document.createElement("div");t.classList.add("m-5"),t.classList.add("grey-back"),t.classList.add("text-white"),t.classList.add("col-12"),t.classList.add("col-lg-6"),t.classList.add("mx-auto");const n=document.createElement("div");n.classList.add("black-back"),n.classList.add("text-center"),n.classList.add("m-3"),n.classList.add("p-3");const a=document.createElement("div");a.classList.add("black-back"),a.classList.add("text-center"),a.classList.add("m-3"),a.classList.add("p-3");const s=document.createElement("div"),d=document.createElement("h3");d.innerHTML="<h3>NestOne Location:</h3>",a.classList.add("font"),a.appendChild(d),s.innerHTML='<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Uzbekistan Tashkent NestOne&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">FNF Mods</a></div><style>.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}</style></div>',a.appendChild(s);const i=document.createElement("h3");i.textContent="Phone:",i.classList.add("font");const o=document.createElement("h4");o.innerText="71 200-22-88",o.classList.add("main-font");const c=document.createElement("h3");c.textContent="Offical Website:",c.classList.add("font");const r=document.createElement("h4"),l=document.createElement("a");return l.setAttribute("href","https://nestone.uz/apartments/ru.html"),l.innerText="Company NestOne",l.classList.add("main-font"),l.classList.add("nav-link"),r.appendChild(l),n.appendChild(i),n.appendChild(o),n.appendChild(c),n.appendChild(r),t.appendChild(n),t.appendChild(a),e.appendChild(t),e})())})())})),e.appendChild(t),e.appendChild(n),e.appendChild(a),e})()),e})()),E.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e})()),E.appendChild((()=>{const e=document.createElement("footer");e.classList.add("black-back"),e.classList.add("mt-5");const t=document.createElement("div");t.classList.add("px-4"),t.classList.add("py-3"),t.classList.add("d-flex"),t.classList.add("flex-row"),t.classList.add("justify-content-between");const n=document.createElement("div"),a=new Image;a.src=f,n.appendChild(a);const s=document.createElement("small");s.classList.add("d-block"),s.classList.add("text-white"),s.classList.add("main-font"),s.innerText="© 2021 | Zulfizar Abdumurodova",n.appendChild(s);const d=document.createElement("div");d.classList.add("d-flex"),d.classList.add("flex-row"),d.classList.add("pt-3");const i=document.createElement("div"),o=document.createElement("a");o.setAttribute("href","https://www.linkedin.com/in/zulfizarabdumurodova/"),o.classList.add("text-white"),o.innerHTML='<i class="fab fa-linkedin fa-2x px-3"></i>';const c=document.createElement("div"),r=document.createElement("a");return r.setAttribute("href","https://github.com/AbdumurodovaZulfizar"),r.classList.add("text-white"),r.innerHTML='<i class="fab fa-github fa-2x"></i>',i.appendChild(o),c.appendChild(r),d.appendChild(i),d.appendChild(c),t.appendChild(n),t.appendChild(d),e.appendChild(t),e})()),k(document.querySelector(".button-nav")),b()})()})();