function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}const t={removeListener:!0};function r(r,o,n){const i=e({},t,n),s=e=>{if(NodeList.prototype.isPrototypeOf(r)||HTMLCollection.prototype.isPrototypeOf(r)){if(Array.from(r).some(t=>t.contains(e.target)))return o(!1,e)}else{if(!HTMLElement.prototype.isPrototypeOf(r))return console.warn("Undefined type of",typeof r,r),o(void 0,e);if(r.contains(e.target))return o(!1,e)}return i.removeListener&&document.removeEventListener("click",s),o(!0,e)};return document.addEventListener("click",s),s}export default r;
//# sourceMappingURL=vanilla-click-outside.modern.js.map