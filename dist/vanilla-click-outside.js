/*!
 * VanillaClickOutside v1.3.0
 * https://github.com/muuvmuuv/vanilla-click-outside
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 08.05.2019
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).VanillaClickOutside=t()}(this,function(){"use strict";const e={removeListener:!0,verbose:!1};return function(t,o,n){const r=Object.assign({},e,o),i=e=>{if(function(e){return NodeList.prototype.isPrototypeOf(e)}(t)||function(e){return HTMLCollection.prototype.isPrototypeOf(e)}(t)){if(Array.from(t).some(t=>t.contains(e.target)))return r.verbose?n("HTMLCollection | NodeList"):void 0}else{if(!function(e){return HTMLElement.prototype.isPrototypeOf(e)}(t))return console.warn("Undefined type of",t),r.verbose?n(null):void 0;if(t.contains(e.target))return r.verbose?n("HTMLElement"):void 0}return r.removeListener&&document.removeEventListener("click",i),r.verbose?n(e.target):n(!0)};return document.addEventListener("click",i),i}});
//# sourceMappingURL=vanilla-click-outside.js.map
