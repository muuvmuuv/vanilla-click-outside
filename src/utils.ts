export function isNodeList(s: any): boolean {
  return NodeList.prototype.isPrototypeOf(s)
}

export function isHTMLCollection(s: any): boolean {
  return HTMLCollection.prototype.isPrototypeOf(s)
}

export function isHTMLElement(s: any): boolean {
  return HTMLElement.prototype.isPrototypeOf(s)
}
