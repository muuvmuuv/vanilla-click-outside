/*!
 * OnClickOutside v1.0.0
 * https://marvin.digital/
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 2019-05-07T13:46:27.280Z
 */
"use strict";function isNodeList(e){return NodeList.prototype.isPrototypeOf(e)}function isHTMLCollection(e){return HTMLCollection.prototype.isPrototypeOf(e)}function isHTMLElement(e){return HTMLElement.prototype.isPrototypeOf(e)}const defaultOptions={removeListener:!0};function OnClickOutside(e,t,n){const o=Object.assign({},defaultOptions,t),i=t=>{if(isNodeList(e)||isHTMLCollection(e)){if(Array.from(e).some(e=>e.contains(t.target)))return n(1)}else{if(!isHTMLElement(e))return console.warn("Undefined type of",e),n(3);if(e.contains(t.target))return n(2)}return o.removeListener&&document.removeEventListener("click",i),n(t.target||0)};return document.addEventListener("click",i),i}module.exports=OnClickOutside;
//# sourceMappingURL=on-click-outside.common.js.map
