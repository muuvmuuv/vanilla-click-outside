# VanillaClickOutside 🍦

[Demo](https://muuvmuuv.github.io/vanilla-click-outside/)

A simple, small (790 bytes) and easy to use function to detect if the user clicks outside
an element.

- [Installation](#installation)
- [How to use](#how-to-use)
  - [Browser (IIFE)](#browser-iife)
  - [JavaScript (ESM)](#javascript-esm)
  - [Browser (ESM)](#browser-esm)
- [Options](#options)

## Installation

```bash
npm install vanilla-click-outside
```

> You can also use the new ESM import syntax to directly use this lib in your browser
> without installing it via a package manager.

## How to use

You can follow the below instructions or look into [./docs/index.html](./docs/index.html).

**HTML**

```html
<head>
  <script defer src="./path/to/vanilla-click-outside.umd.js"></script>
  <!-- OR -->
  <script
    defer
    src="https://unpkg.com/vanilla-click-outside/dist/vanilla-click-outside.umd.js"
  ></script>
</head>
<body>
  <div id="target">
    <section></section>
  </div>
</body>
```

### Browser (IIFE)

```js
const target = document.getElementById('target')
vanillaClickOutside(target, (type, event) => {
  console.log(type, event)
})
```

### JavaScript (ESM)

```js
import vanillaClickOutside from 'vanilla-click-outside'

const target = document.getElementById('target')
vanillaClickOutside(target, (type, event) => {
  console.log(type, event)
})
```

### Browser (ESM)

```html
<script type="module">
  import vanillaClickOutside from './path/to/vanilla-click-outside.modern.js'
  // OR
  import vanillaClickOutside from 'https://unpkg.com/vanilla-click-outside/dist/vanilla-click-outside.modern.js'

  vanillaClickOutside(target, (type, event) => {
    console.log(type, event)
  })
</script>
```

## Options

| Option           | Default | Type    | Description                                              |
| ---------------- | ------- | ------- | -------------------------------------------------------- |
| `removeListener` | `true`  | boolean | If you want to handle `removeEventListener` by yourself. |
