import { isNodeList, isHTMLCollection, isHTMLElement } from './utils'

export type OCOSelector = HTMLElement | HTMLCollection | NodeList
export type OCOOptions = {
  removeListener: boolean
}
export type OCOCallback = (t: EventTarget | number) => {}

const defaultOptions: OCOOptions = {
  removeListener: true,
}

/**
 * A simple easy to script to determine whenever the user clicks outside a selected element.
 *
 * @param {OCOSelector} selector Element to exclude
 * @param {OCOCallback} callback Do something on click outside
 */
export default function OnClickOutside(
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
        return callback(1) // HTMLCollection | NodeList
      }
    } else if (isHTMLElement(selector)) {
      if ((selector as HTMLElement).contains(<Node>event.target)) {
        return callback(2) // HTMLElement
      }
    } else {
      console.warn('Undefined type of', selector)
      return callback(3) // Undefined
    }

    if (newOptions.removeListener) {
      document.removeEventListener('click', listener)
    }
    return callback(event.target || 0)
  }

  document.addEventListener('click', listener)
  return listener // allow deleting from outside
}
