(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,e){},QAVw:function(n,t,e){var l=e("mp5j");n.exports=(l.default||l).template({1:function(n,t,e,l,r){var o,u=n.lambda,a=n.escapeExpression,i=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'<article class="country js-country">\n    <h1 class="country-title">'+a(u(null!=t?i(t,"name"):t,t))+'</h1>\n    <div class="country-box">\n        <ul class="list country-list-info">\n            <li class="country-list-item"><span class="country-text">Capital:</span> '+a(u(null!=t?i(t,"capital"):t,t))+'</li>\n            <li class="country-list-item"><span class="country-text">Population:</span> '+a(u(null!=t?i(t,"population"):t,t))+'</li>\n            <li class="country-list-item"><span class="country-text">Languages:</span>\n                <ul class="country-sublist">\n'+(null!=(o=i(e,"each").call(null!=t?t:n.nullContext||{},null!=t?i(t,"languages"):t,{name:"each",hash:{},fn:n.program(2,r,0),inverse:n.noop,data:r,loc:{start:{line:10,column:20},end:{line:12,column:29}}}))?o:"")+'                </ul>\n            </li>\n        </ul>\n        <img class="flag-image" src="'+a(u(null!=t?i(t,"flag"):t,t))+"\" alt='Flag of "+a(u(null!=t?i(t,"name"):t,t))+'\' width="250px" height="auto">\n    </div>\n</article>\n'},2:function(n,t,e,l,r){var o=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'                    <li class="sublist-item">'+n.escapeExpression(n.lambda(null!=t?o(t,"name"):t,t))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,t,e,l,r){var o;return null!=(o=(n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]})(e,"each").call(null!=t?t:n.nullContext||{},t,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:1,column:0},end:{line:19,column:9}}}))?o:""},useData:!0})},QfWi:function(n,t,e){"use strict";e.r(t);e("SgDD");var l=e("jffb"),r=e.n(l),o=e("vA2Q"),u=e.n(o),a=e("QAVw"),i=e.n(a),s=(e("JBxO"),e("FdtR"),function(n){return fetch("https://restcountries.eu/rest/v2/name/"+n)}),c=e("QJ3N"),p=e("WSJ9");e("bzha"),e("mFSj"),e("zrP5");c.defaultModules.set(p,{}),c.defaults.delay=3500,c.defaults.width="380px";var f=new c.Stack({modal:!1,dir1:"down",firstpos1:0,spacing1:0,push:"top",maxOpen:1/0}),m=function(){Object(c.error)({title:"Error 404",text:"Country with this name was not found. Please try again.",sticker:!1,stack:f})},y=(e("L1EO"),{mainBox:document.querySelector(".js-container"),input:document.querySelector(".js-input"),listCountries:null,country:null});y.input.addEventListener("input",r()((function(){if(""===this.value)return;s(this.value.trim()).then((function(n){return n.json()})).then((function(n){return function(n){if(!function(n){if(Array.isArray(n))return!0;return!1}(n))return void m();var t=n.length;t>10?Object(c.error)({title:"Too many matches found. Please enter a more specific query!",sticker:!1,stack:f}):t>=2&&t<=10?function(n){var t=u()(n);null!==y.listCountries?(y.listCountries.remove(),y.listCountries=null):null!==y.country&&(y.country.remove(),y.country=null);y.mainBox.insertAdjacentHTML("beforeend",t),y.listCountries=document.querySelector(".container .js-list")}(n):1===t&&function(n){var t=i()(n);null!==y.country?(y.country.remove(),y.country=null):null!==y.listCountries&&(y.listCountries.remove(),y.listCountries=null);y.mainBox.insertAdjacentHTML("beforeend",t),y.country=document.querySelector(".container .js-country")}(n)}(n)})).catch((function(){return m()}))}),500))},vA2Q:function(n,t,e){var l=e("mp5j");n.exports=(l.default||l).template({1:function(n,t,e,l,r){var o=n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]};return'        <li class="list-countries-item">'+n.escapeExpression(n.lambda(null!=t?o(t,"name"):t,t))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,t,e,l,r){var o;return'<div class="country-box">\n    <ul class="list-countries js-list">\n'+(null!=(o=(n.lookupProperty||function(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]})(e,"each").call(null!=t?t:n.nullContext||{},t,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:3,column:8},end:{line:5,column:17}}}))?o:"")+"    </ul>\n</div>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.2543fcc87a17cddd6c68.js.map