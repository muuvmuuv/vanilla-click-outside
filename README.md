# VanillaClickOutside 🌫

A simple, small (579B) and easy to use function to detect clicks outside an element.
See the [Demo](https://muuvmuuv.github.io/vanilla-click-outside/) or a live example
on [www.additive-net.de](https://www.additive.lcl/de/messtechnik-sensorik) or
[www.m8finder.net](https://www.m8finder.net/).

## How to use

Have a look at our [documentation](./docs) files, e.g. [demo.js](./docs/demo.js).

### JavaScript

include the one you need (all minified and compressed):

- CommonJS:
  [`vanilla-click-outside/dist/vanilla-click-outside.common.js`](./dist/vanilla-click-outside.common.js)
- ESM:
  [`vanilla-click-outside/dist/vanilla-click-outside.esm.js`](./dist/vanilla-click-outside.esm.js)
- ES6:
  [`vanilla-click-outside/dist/vanilla-click-outside.js`](./dist/vanilla-click-outside.js)

```js
import VanillaClickOutside from 'vanilla-click-outside'

const options = {
  removeListener: false,
}

const ele = document.getElementById('root')
VanillaClickOutside(ele, options, type => console.log(type))
```

### HTML

```html
<div id="root">
  <section></section>
</div>
```

### Options

| Option           | Default | Type    | Description                                              |
| ---------------- | ------- | ------- | -------------------------------------------------------- |
| `removeListener` | `true`  | boolean | If you want to handle `removeEventListener` by yourself. |
