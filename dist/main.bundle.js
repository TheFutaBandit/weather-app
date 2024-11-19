(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>x});var r=t(601),i=t.n(r),o=t(314),a=t.n(o),c=t(417),s=t.n(c),l=new URL(t(587),t.b),d=new URL(t(147),t.b),p=new URL(t(55),t.b),u=a()(i()),f=s()(l),m=s()(d),h=s()(p);u.push([n.id,`*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  \n  * {\n    margin: 0;\n  }\n  \n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  \n  input, button, textarea, select {\n    font: inherit;\n  }\n  \n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  \n  p {\n    text-wrap: pretty;\n    padding: 0px;\n    margin: 0px;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    text-wrap: balance;\n  }\n  \n  #root, #__next {\n    isolation: isolate;\n  }\n\n  @font-face {\n    font-family: 'EinaRegular';\n    src: url(${f});\n  }\n\n  @font-face {\n    font-family: 'EinaThin';\n    src: url(${m});\n  }\n\n  @font-face {\n    font-family: 'Eina02-SemiBold';\n    src: url(${h});\n  }\n\n  :root {\n    --square-dimension: 450px;\n    font-family: 'EinaRegular';\n  }\n\n  html {\n    height: 100vh;\n  }\n\n  body {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 2px;\n  }\n\n  .container {\n    border: 2px solid white;\n    box-shadow: 0px 0px 28px -1px #EAEAEA;\n    border-radius: 10px;\n    min-height: 250px;\n    min-width: var(--square-dimension);\n    display: grid;\n    grid-template-rows: 1fr 95px;\n    padding: 8px;\n    gap: 8px;\n  }\n\n  .header-body {\n    /* border: 1px solid blue; */\n    display: grid;\n    grid-template-columns: 1fr 1.6fr 1fr;\n    grid-auto-flow: column;\n    gap: 4px;\n    /* padding: 4px; */\n  }\n\n  .header-body > * {\n    /* border: 1px solid red; */\n  }\n\n  .icon-tile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .icon-tile img{\n    /* border: 1px solid salmon; */\n    max-height: 110px;\n    max-width: 110px;\n  }\n\n  .description-tile {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      font-family: 'Eina02-SemiBold';\n      padding-left: 10px;\n      cursor: pointer;\n      /* align-items: center; */\n  }\n\n  .description-tile > p {\n    line-height: 1.2;\n    /* border: 1px solid green; */\n  }\n\n  .description-tile .location {\n    font-family: 'Eina02-SemiBold';\n    font-size: 25px;\n  }\n\n  .description-tile .status {\n    font-size: 18px;\n    color: grey;\n  }\n\n  .description-tile .time {\n    font-size: 20px;\n  }\n\n  .temperature-tile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .temperature-tile .temperature {\n    font-family: 'EinaThin';\n    /* font-family: 'Roboto'; */\n    font-size: 45px;\n  }\n\n  .temperature:after {\n    content: "\\00b0";\n    /* font-size: 40px;; */\n  }\n\n  .tile-body {\n    /* border: 1px solid blue; */\n    display: grid;\n    /* grid-auto-columns: 50px; */\n    grid-auto-flow: column;\n    gap: 5px;\n    /* grid-template-columns: repeat(6,60px); */\n    /* grid-auto-columns: 50px; */\n    grid-auto-columns: repeat(auto-fit, minmax(50px, 100px));\n    \n  }\n\n  .tile-body > * {\n    /* border: 1px solid green; */\n  }\n\n  .tile-body .weather-tile {\n    display: flex;\n    flex-direction: column;\n    padding: 1px;\n    justify-content: center;\n  }\n\n  .weather-tile > * {\n    /* border: 1px solid red; */\n  }\n\n  .weather-tile .tile {\n    font-family: 'Eina02-SemiBold';\n    font-size: 14px;\n    display: flex;\n    justify-content: center;\n    max-height: inherit;\n  }\n\n  .tile.icon {\n    /* max-height: 50px; */\n    /* max-width: 50px; */\n    display: flex;\n    /* justify-self: center; */\n  }\n\n  .tile.icon img {\n    /* justify-self: center; */\n    max-height: 50px;\n    max-width: 50px;\n  }\n\n  .weather-tile .tile.temp:after {\n    content: "\\00b0";\n  }\n\n  #loading {\n    width: 50px;\n    height: 50px;\n    border: 5px solid #f3f3f3;\n    border-top: 6px solid #9c41f2;\n    border-radius: 100%;\n    margin: 0;\n    visibility: hidden;\n    animation: spin 1s infinite linear;\n  }\n\n  #loading.display {\n    visibility: visible;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }`,""]);const x=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},55:(n,e,t)=>{n.exports=t.p+"d5d9ec80f34bc41228ae.ttf"},147:(n,e,t)=>{n.exports=t.p+"96235290056bc82dd24a.ttf"},587:(n,e,t)=>{n.exports=t.p+"2e682693e13b16cacbf5.ttf"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),i=t.n(r),o=t(825),a=t.n(o),c=t(659),s=t.n(c),l=t(56),d=t.n(l),p=t(540),u=t.n(p),f=t(113),m=t.n(f),h=t(365),x={};x.styleTagTransform=m(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=u(),i()(h.A,x),h.A&&h.A.locals&&h.A.locals;const g=t.p+"49a92278086475c7c840.png",y=async n=>{let e=await(async n=>{document.querySelector("#loading").classList.add("display"),console.log("loading starts");let e=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=DCZD5EQRWC7NRZQN93UXQFWFA`);document.querySelector("#loading").classList.remove("display"),console.log("loading stops");let t=await e.json(),r=t.currentConditions;return{weather_current:()=>r,temperature_current:()=>r.temp,data_current:()=>{console.log(t)},address_current:()=>t.address,condition_current:()=>r.conditions,time_current:()=>r.datetime,icon_current:()=>r.icon,day_array:()=>t.days}})(n);console.log(e);let t=n=>(5*(n-32)/9).toFixed(1);const r=(n,e,t)=>{const r=document.createElement("div");r.classList.add("weather-tile");const i=document.createElement("div");i.className="tile icon";const o=document.createElement("img");o.src=g,i.appendChild(o);const a=document.createElement("div");a.className="tile temp",a.textContent=e;const c=document.createElement("div");c.className="tile time",c.textContent=t,r.appendChild(i),r.appendChild(a),r.appendChild(c),document.querySelector(".tile-body").appendChild(r)};(()=>{document.querySelector(".tile-body").innerHTML="";let n=(n=>{let t=n[0],r=n[1],i=t.hours.concat(...r.hours),o=e.time_current().slice(0,2),a=i.map((n=>n.datetime.slice(0,2))).indexOf(o);return[...i.splice(a+1,6)]})(e.day_array());for(let e=0;e<6;e++){let i=n[e];r(i.icon,t(i.temp),i.datetime.slice(0,5))}})(),document.querySelector(".temperature").textContent=t(e.temperature_current()),document.querySelector(".location").textContent=e.address_current(),document.querySelector(".status").textContent=e.condition_current(),document.querySelector(".time").textContent=e.time_current()};y("New Delhi"),document.querySelector(".description-tile").addEventListener("click",(()=>{let n=prompt("Please Enter new Location");y(n)}))})();