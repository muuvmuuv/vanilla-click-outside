/*!
 * VanillaClickOutside v1.2.0
 * https://github.com/muuvmuuv/vanilla-click-outside
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 08.05.2019
 */
"use strict";function isNodeList(e){return NodeList.prototype.isPrototypeOf(e)}function isHTMLCollection(e){return HTMLCollection.prototype.isPrototypeOf(e)}function isHTMLElement(e){return HTMLElement.prototype.isPrototypeOf(e)}const defaultOptions={removeListener:!0,verbose:!1};function VanillaClickOutside(e,t,o){const n=Object.assign({},defaultOptions,t),i=t=>{if(isNodeList(e)||isHTMLCollection(e)){if(Array.from(e).some(e=>e.contains(t.target)))return n.verbose?o("HTMLCollection | NodeList"):void 0}else{if(!isHTMLElement(e))return console.warn("Undefined type of",e),n.verbose?o(null):void 0;if(e.contains(t.target))return n.verbose?o("HTMLElement"):void 0}return n.removeListener&&document.removeEventListener("click",i),n.verbose?o(t.target):o(!0)};return document.addEventListener("click",i),i}module.exports=VanillaClickOutside;
//# sourceMappingURL=vanilla-click-outside.common.js.map
