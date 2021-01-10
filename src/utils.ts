/* eslint-disable no-prototype-builtins */

import { Selector } from 'src'

export function isNodeList(target: Selector): target is NodeList {
  return NodeList.prototype.isPrototypeOf(target)
}

export function isHTMLCollection(target: Selector): target is HTMLCollection {
  return HTMLCollection.prototype.isPrototypeOf(target)
}

export function isHTMLElement(target: Selector): target is HTMLElement {
  return HTMLElement.prototype.isPrototypeOf(target)
}

export function isElement(target: Selector): target is Element {
  return Element.prototype.isPrototypeOf(target)
}
