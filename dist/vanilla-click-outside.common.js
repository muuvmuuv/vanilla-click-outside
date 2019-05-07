/*!
 * VanillaClickOutside v1.0.0
 * https://github.com/muuvmuuv/vanilla-click-outside
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 2019-05-07T14:08:43.629Z
 */
"use strict";function isNodeList(e){return NodeList.prototype.isPrototypeOf(e)}function isHTMLCollection(e){return HTMLCollection.prototype.isPrototypeOf(e)}function isHTMLElement(e){return HTMLElement.prototype.isPrototypeOf(e)}const defaultOptions={removeListener:!0};function VanillaClickOutside(e,t,n){const o=Object.assign({},defaultOptions,t),i=t=>{if(isNodeList(e)||isHTMLCollection(e)){if(Array.from(e).some(e=>e.contains(t.target)))return n(1)}else{if(!isHTMLElement(e))return console.warn("Undefined type of",e),n(3);if(e.contains(t.target))return n(2)}return o.removeListener&&document.removeEventListener("click",i),n(t.target||0)};return document.addEventListener("click",i),i}module.exports=VanillaClickOutside;
//# sourceMappingURL=vanilla-click-outside.common.js.map
