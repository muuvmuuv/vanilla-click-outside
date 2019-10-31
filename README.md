# VanillaClickOutside 🍦

[Demo](https://muuvmuuv.github.io/vanilla-click-outside/)

A simple, small (565 bytes) and easy to use function to detect if the user clicks outside
an element.

- [Installation](#installation)
- [How to use](#how-to-use)
  - [UMD](#umd)
  - [CommonJS](#commonjs)
  - [Options](#options)

## Installation

```bash
npm install vanilla-click-outside
```

## How to use

### UMD

```html
<head>
  <link rel="stylesheet" href="./path/to/vanilla-click-outside.umd.css" />
  <script defer src="./path/to/vanilla-click-outside.umd.js"></script>
</head>
<body>
  <div id="target">
    <section></section>
  </div>
</body>
```

JavaScript:

```js
const target = document.getElementById('target')
vanillaClickOutside(target, (type) => {
  console.log(type)
})
```

### CommonJS

```javascript
import { vanillaClickOutside } from 'vanilla-click-outside'

const target = document.getElementById('target')
vanillaClickOutside(target, (type) => {
  console.log(type)
})
```

### Options

| Option           | Default | Type    | Description                                              |
| ---------------- | ------- | ------- | -------------------------------------------------------- |
| `removeListener` | `true`  | boolean | If you want to handle `removeEventListener` by yourself. |
