# VanillaClickOutside 🌫

A simple, small (578B) and easy to use function to detect clicks outside an element. Here is a [demo](https://muuvmuuv.github.io/vanilla-click-outside/).

## How to use

Have a look at the [documentation](./docs) files; [demo.js](./docs/demo.js).

### JavaScript

Include the one you need (all minified and compressed):

- MJS:
  [vanilla-click-outside/dist/vanilla-click-outside.mjs](./dist/vanilla-click-outside.mjs)
- UMD:
  [vanilla-click-outside/dist/vanilla-click-outside.umd.js](./dist/vanilla-click-outside.umd.js)
- ESNext:
  [vanilla-click-outside/dist/vanilla-click-outside.js](./dist/vanilla-click-outside.js)
- CDN (via [UNPKG](https://unpkg.com/)):
  [https://unpkg.com/vanilla-click-outside](https://unpkg.com/vanilla-click-outside)

```js
import vanillaClickOutside from 'vanilla-click-outside'

const ele = document.getElementById('root')
vanillaClickOutside(ele, (type) => {
  console.log(type)
})
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
