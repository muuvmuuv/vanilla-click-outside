import { isNodeList, isHTMLCollection, isHTMLElement } from './utils'

export type Selector = HTMLElement | HTMLCollection | NodeList | Element
export type Callback = (state: boolean | undefined, event: Event) => void

export type Options = {
  removeListener: boolean
}

const defaultOptions: Options = {
  removeListener: true,
}

function vanillaClickOutside(
  selector: Selector,
  callback: Callback,
  options?: Options
): EventListener {
  const theOptions = { ...defaultOptions, ...options }

  const listener = (event: Event) => {
    if (isNodeList(selector) || isHTMLCollection(selector)) {
      // Not working with spread: https://github.com/developit/microbundle/issues/693
      // eslint-disable-next-line unicorn/prefer-spread
      if (Array.from(selector).some((s) => s.contains(<Node>event.target))) {
        return callback(false, event)
      }
    } else if (isHTMLElement(selector)) {
      if (selector.contains(<Node>event.target)) {
        return callback(false, event)
      }
    } else {
      console.warn('Undefined type of', typeof selector, selector)
      return callback(undefined, event)
    }

    if (theOptions.removeListener) {
      document.removeEventListener('click', listener)
    }

    return callback(true, event)
  }

  document.addEventListener('click', listener)

  return listener
}

export default vanillaClickOutside
