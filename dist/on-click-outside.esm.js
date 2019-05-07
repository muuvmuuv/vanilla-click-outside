/*!
 * OnClickOutside v1.0.0
 * https://marvin.digital/
 *
 * Copyright 2019 Marvin Heilemann
 * Released under the MIT license
 *
 * Date: 2019-05-07T13:46:27.280Z
 */
const e={removeListener:!0};export default function(t,n,r){const o=Object.assign({},e,n),i=e=>{if(function(e){return NodeList.prototype.isPrototypeOf(e)}(t)||function(e){return HTMLCollection.prototype.isPrototypeOf(e)}(t)){if(Array.from(t).some(t=>t.contains(e.target)))return r(1)}else{if(!function(e){return HTMLElement.prototype.isPrototypeOf(e)}(t))return console.warn("Undefined type of",t),r(3);if(t.contains(e.target))return r(2)}return o.removeListener&&document.removeEventListener("click",i),r(e.target||0)};return document.addEventListener("click",i),i}
//# sourceMappingURL=on-click-outside.esm.js.map
