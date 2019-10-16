export function isNodeList(target: any): boolean {
  return NodeList.prototype.isPrototypeOf(target)
}

export function isHTMLCollection(target: any): boolean {
  return HTMLCollection.prototype.isPrototypeOf(target)
}

export function isHTMLElement(target: any): boolean {
  return HTMLElement.prototype.isPrototypeOf(target)
}

export function isElement(target: any): boolean {
  return Element.prototype.isPrototypeOf(target)
}
