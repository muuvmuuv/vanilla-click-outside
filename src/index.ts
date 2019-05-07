import { isNodeList, isHTMLCollection, isHTMLElement } from './utils'

export type OCOSelector = HTMLElement | HTMLCollection | NodeList
export type OCOOptions = {
  removeListener: boolean
  verbose: boolean
}
export type OCOCallback = (t: EventTarget | boolean | string | null) => {}

const defaultOptions: OCOOptions = {
  removeListener: true,
  verbose: false,
}

/**
 * A simple easy to script to determine whenever the user clicks outside a selected element.
 *
 * @param {OCOSelector} selector Element to exclude
 * @param {OCOCallback} callback Do something on click outside
 */
export default function VanillaClickOutside(
  selector: OCOSelector,
  options: OCOOptions,
  callback: OCOCallback
): EventListener {
  const newOptions = { ...defaultOptions, ...options }

  const listener = (event: Event) => {
    if (isNodeList(selector) || isHTMLCollection(selector)) {
      if (
        Array.from(<HTMLCollection | NodeList>selector) // prettier-ignore
          .some(s => s.contains(<Node>event.target))
      ) {
        if (newOptions.verbose) {
          return callback('HTMLCollection | NodeList')
        }
        return
      }
    } else if (isHTMLElement(selector)) {
      if ((selector as HTMLElement).contains(<Node>event.target)) {
        if (newOptions.verbose) {
          return callback('HTMLElement')
        }
        return
      }
    } else {
      console.warn('Undefined type of', selector)
      if (newOptions.verbose) {
        return callback(null)
      }
      return
    }

    if (newOptions.removeListener) {
      document.removeEventListener('click', listener)
    }
    if (newOptions.verbose) {
      return callback(event.target)
    }
    return callback(true)
  }

  document.addEventListener('click', listener)
  return listener // allow deleting from outside
}
