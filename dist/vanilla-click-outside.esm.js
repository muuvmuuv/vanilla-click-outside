/*!
 * VanillaClickOutside v1.2.0
 * https://github.com/muuvmuuv/vanilla-click-outside
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 08.05.2019
 */
const e={removeListener:!0,verbose:!1};export default function(t,o,r){const n=Object.assign({},e,o),i=e=>{if(function(e){return NodeList.prototype.isPrototypeOf(e)}(t)||function(e){return HTMLCollection.prototype.isPrototypeOf(e)}(t)){if(Array.from(t).some(t=>t.contains(e.target)))return n.verbose?r("HTMLCollection | NodeList"):void 0}else{if(!function(e){return HTMLElement.prototype.isPrototypeOf(e)}(t))return console.warn("Undefined type of",t),n.verbose?r(null):void 0;if(t.contains(e.target))return n.verbose?r("HTMLElement"):void 0}return n.removeListener&&document.removeEventListener("click",i),n.verbose?r(e.target):r(!0)};return document.addEventListener("click",i),i}
//# sourceMappingURL=vanilla-click-outside.esm.js.map
