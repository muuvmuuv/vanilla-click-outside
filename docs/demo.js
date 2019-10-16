const options = {
  removeListener: false,
}

function handleCallback(name, value) {
  const tableRow = document.getElementsByClassName(name)[0]
  tableRow.innerHTML = `<tr>
      <td>${name}</td>
      <td class="${value}">${value}</td>
    </tr>`
}

window.onload = () => {
  // -----------------------------------------
  // HTMLCollectionOf<Element>

  const rootGetElementsByClassName = document.getElementsByClassName('root')
  const innerGetElementsByClassName = document.getElementsByClassName('inner')

  console.log('>>> rootGetElementsByClassName')
  console.log(rootGetElementsByClassName)
  vanillaClickOutside(
    rootGetElementsByClassName,
    (state) => handleCallback('rootGetElementsByClassName', state),
    options
  )

  console.log('>>> innerGetElementsByClassName')
  console.log(innerGetElementsByClassName)
  vanillaClickOutside(
    innerGetElementsByClassName,
    (state) => handleCallback('innerGetElementsByClassName', state),
    options
  )

  // -----------------------------------------
  // NodeListOf<Element>

  const rootQuerySelectorAll = document.querySelectorAll('.root')
  const innerQuerySelectorAll = document.querySelectorAll('.inner')

  console.log('>>> rootQuerySelectorAll')
  console.log(rootQuerySelectorAll)
  vanillaClickOutside(
    rootQuerySelectorAll,
    (state) => handleCallback('rootQuerySelectorAll', state),
    options
  )

  console.log('>>> innerQuerySelectorAll')
  console.log(innerQuerySelectorAll)
  vanillaClickOutside(
    innerQuerySelectorAll,
    (state) => handleCallback('innerQuerySelectorAll', state),
    options
  )

  // -----------------------------------------
  // HTMLElement

  const rootGetElementById = document.getElementById('root')
  const innerGetElementById = document.getElementById('inner')

  console.log('>>> rootGetElementById')
  console.log(rootGetElementById)
  vanillaClickOutside(
    rootGetElementById,
    (state) => handleCallback('rootGetElementById', state),
    options
  )

  console.log('>>> innerGetElementById')
  console.log(innerGetElementById)
  vanillaClickOutside(
    innerGetElementById,
    (state) => handleCallback('innerGetElementById', state),
    options
  )

  // -----------------------------------------
  // Element

  const rootQuerySelector = document.querySelector('.root')
  const innerQuerySelector = document.querySelector('.inner')

  console.log('>>> rootQuerySelector')
  console.log(rootQuerySelector)
  vanillaClickOutside(
    rootQuerySelector,
    (state) => handleCallback('rootQuerySelector', state),
    options
  )

  console.log('>>> innerQuerySelector')
  console.log(innerQuerySelector)
  vanillaClickOutside(
    innerQuerySelector,
    (state) => handleCallback('innerQuerySelector', state),
    options
  )

  // -----------------------------------------
  // Undefined

  const undefinedTypeOf = document

  console.log('>>> undefinedTypeOf')
  console.log(undefinedTypeOf)
  vanillaClickOutside(
    undefinedTypeOf,
    (state) => handleCallback('undefinedTypeOf', state),
    options
  )

  // -----------------------------------------
}
