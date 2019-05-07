console.heading = str => {
  const style = `
    color: #FFFFFF;
    background-color: #036ff6;
    font-size: 12px;
    padding: 2px 20px;
  `
  console.log(`%c${str}`, style)
}

var options = {
  removeListener: false,
}

window.onload = () => {
  // ------------------------------------------------------------------------

  var rootGetElementById = document.getElementById('root')
  var innerGetElementById = document.getElementById('inner')

  console.log('\n')
  console.heading('rootGetElementById')
  console.log(rootGetElementById)
  console.log('contructor', rootGetElementById.constructor.name)
  console.log('isNodeList', isNodeList(rootGetElementById))
  console.log('isHTMLCollection', isHTMLCollection(rootGetElementById))
  console.log('isHTMLElement', isHTMLElement(rootGetElementById))
  OnClickOutside(rootGetElementById, options, t =>
    handleCallback('rootGetElementById', t)
  )

  console.log('\n')
  console.heading('innerGetElementById')
  console.log(innerGetElementById)
  console.log('contructor', innerGetElementById.constructor.name)
  console.log('isNodeList', isNodeList(innerGetElementById))
  console.log('isHTMLCollection', isHTMLCollection(innerGetElementById))
  console.log('isHTMLElement', isHTMLElement(innerGetElementById))
  OnClickOutside(innerGetElementById, options, t =>
    handleCallback('innerGetElementById', t)
  )

  console.log('\n')
  console.log('-'.repeat(60))

  // ------------------------------------------------------------------------

  var rootGetElementsByClassName = document.getElementsByClassName('root')
  var innerGetElementsByClassName = document.getElementsByClassName('inner')

  console.log('\n')
  console.heading('rootGetElementsByClassName')
  console.log(rootGetElementsByClassName)
  console.log('contructor', rootGetElementsByClassName.constructor.name)
  console.log('isNodeList', isNodeList(rootGetElementsByClassName))
  console.log('isHTMLCollection', isHTMLCollection(rootGetElementsByClassName))
  console.log('isHTMLElement', isHTMLElement(rootGetElementsByClassName))
  OnClickOutside(rootGetElementsByClassName, options, t =>
    handleCallback('rootGetElementsByClassName', t)
  )

  console.log('\n')
  console.heading('innerGetElementsByClassName')
  console.log(innerGetElementsByClassName)
  console.log('contructor', innerGetElementsByClassName.constructor.name)
  console.log('isNodeList', isNodeList(innerGetElementsByClassName))
  console.log('isHTMLCollection', isHTMLCollection(innerGetElementsByClassName))
  console.log('isHTMLElement', isHTMLElement(innerGetElementsByClassName))
  OnClickOutside(innerGetElementsByClassName, options, t =>
    handleCallback('innerGetElementsByClassName', t)
  )

  console.log('\n')
  console.log('-'.repeat(60))

  // ------------------------------------------------------------------------

  var rootQuerySelector = document.querySelector('.root')
  var innerQuerySelector = document.querySelector('.inner')

  console.log('\n')
  console.heading('rootQuerySelector')
  console.log(rootQuerySelector)
  console.log('contructor', rootQuerySelector.constructor.name)
  console.log('isNodeList', isNodeList(rootQuerySelector))
  console.log('isHTMLCollection', isHTMLCollection(rootQuerySelector))
  console.log('isHTMLElement', isHTMLElement(rootQuerySelector))
  OnClickOutside(rootQuerySelector, options, t =>
    handleCallback('rootQuerySelector', t)
  )

  console.log('\n')
  console.heading('innerQuerySelector')
  console.log(innerQuerySelector)
  console.log('contructor', innerQuerySelector.constructor.name)
  console.log('isNodeList', isNodeList(innerQuerySelector))
  console.log('isHTMLCollection', isHTMLCollection(innerQuerySelector))
  console.log('isHTMLElement', isHTMLElement(innerQuerySelector))
  OnClickOutside(innerQuerySelector, options, t =>
    handleCallback('innerQuerySelector', t)
  )

  console.log('\n')
  console.log('-'.repeat(60))

  // ------------------------------------------------------------------------

  var rootQuerySelectorAll = document.querySelectorAll('.root')
  var innerQuerySelectorAll = document.querySelectorAll('.inner')

  console.log('\n')
  console.heading('rootQuerySelectorAll')
  console.log(rootQuerySelectorAll)
  console.log('contructor', rootQuerySelectorAll.constructor.name)
  console.log('isNodeList', isNodeList(rootQuerySelectorAll))
  console.log('isHTMLCollection', isHTMLCollection(rootQuerySelectorAll))
  console.log('isHTMLElement', isHTMLElement(rootQuerySelectorAll))
  OnClickOutside(rootQuerySelectorAll, options, t =>
    handleCallback('rootQuerySelectorAll', t)
  )

  console.log('\n')
  console.heading('innerQuerySelectorAll')
  console.log(innerQuerySelectorAll)
  console.log('contructor', innerQuerySelectorAll.constructor.name)
  console.log('isNodeList', isNodeList(innerQuerySelectorAll))
  console.log('isHTMLCollection', isHTMLCollection(innerQuerySelectorAll))
  console.log('isHTMLElement', isHTMLElement(innerQuerySelectorAll))
  OnClickOutside(innerQuerySelectorAll, options, t =>
    handleCallback('innerQuerySelectorAll', t)
  )

  console.log('\n')
  console.log('-'.repeat(60))

  // ------------------------------------------------------------------------

  console.log('-'.repeat(60))
}

function contextLog(name, value, str) {
  const log = document.querySelector('.log tbody')
  log.innerHTML =
    `<tr>
      <td>${name}</td>
      <td class="${value ? 'yes' : 'no'}">${value}</td>
      <td class="ele">${str}</td>
    </tr>` + log.innerHTML
}

function handleCallback(name, t) {
  switch (t) {
    case 1:
      contextLog(name, false, 'HTMLCollection | NodeList')
      break
    case 2:
      contextLog(name, false, 'HTMLElement')
      break
    case 3:
      contextLog(name, false, 'Undefined')
      break
    case 0:
    default:
      contextLog(name, true, t)
      break
  }
}

function isNodeList(s) {
  return NodeList.prototype.isPrototypeOf(s)
}

function isHTMLCollection(s) {
  return HTMLCollection.prototype.isPrototypeOf(s)
}

function isHTMLElement(s) {
  return HTMLElement.prototype.isPrototypeOf(s)
}
