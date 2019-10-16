import { isNodeList, isHTMLCollection, isHTMLElement } from './utils'

export type VanillaClickOutsideSelector =
  | HTMLElement
  | HTMLCollection
  | NodeList
export type VanillaClickOutsideOptions = {
  removeListener: boolean
}
export type VanillaClickOutsideCallback = (state: boolean | null) => {}

const defaultOptions: VanillaClickOutsideOptions = {
  removeListener: true,
}

export default function vanillaClickOutside(
  selector: VanillaClickOutsideSelector,
  callback: VanillaClickOutsideCallback,
  options?: VanillaClickOutsideOptions
): EventListener {
  const theOptions = { ...defaultOptions, ...options }

  const listener = (event: Event) => {
    if (isNodeList(selector) || isHTMLCollection(selector)) {
      if (
        Array.from(<HTMLCollection | NodeList>selector).some((selection) =>
          selection.contains(<Node>event.target)
        )
      ) {
        return callback(false)
      }
    } else if (isHTMLElement(selector)) {
      if ((selector as HTMLElement).contains(<Node>event.target)) {
        return callback(false)
      }
    } else {
      console.warn('Undefined type of', selector)
      return callback(null)
    }

    if (theOptions.removeListener) {
      document.removeEventListener('click', listener)
    }

    return callback(true)
  }

  document.addEventListener('click', listener)

  return listener
}
