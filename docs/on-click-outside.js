/*!
 * OnClickOutside v1.0.0
 * https://marvin.digital/
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 2019-05-07T13:46:27.280Z
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).OnClickOutside=t()}(this,function(){"use strict";const e={removeListener:!0};return function(t,n,o){const r=Object.assign({},e,n),i=e=>{if(function(e){return NodeList.prototype.isPrototypeOf(e)}(t)||function(e){return HTMLCollection.prototype.isPrototypeOf(e)}(t)){if(Array.from(t).some(t=>t.contains(e.target)))return o(1)}else{if(!function(e){return HTMLElement.prototype.isPrototypeOf(e)}(t))return console.warn("Undefined type of",t),o(3);if(t.contains(e.target))return o(2)}return r.removeListener&&document.removeEventListener("click",i),o(e.target||0)};return document.addEventListener("click",i),i}});
//# sourceMappingURL=on-click-outside.js.map
