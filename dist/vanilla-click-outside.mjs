var e={removeListener:!0};export default function(t,r,n){var o=Object.assign({},e,n),i=function(e){if(NodeList.prototype.isPrototypeOf(t)||HTMLCollection.prototype.isPrototypeOf(t)){if(Array.from(t).some(function(t){return t.contains(e.target)}))return r(!1)}else{if(!HTMLElement.prototype.isPrototypeOf(t))return console.warn("Undefined type of",t),r(null);if(t.contains(e.target))return r(!1)}return o.removeListener&&document.removeEventListener("click",i),r(!0)};return document.addEventListener("click",i),i}
//# sourceMappingURL=vanilla-click-outside.mjs.map
