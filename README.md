# Vanilla Carousel 🎠

A simple, small (535B) and easy to use function to detect clicks outside an element.
See the [Demo](https://muuvmuuv.github.io//) or a live example on
[www.additive-net.de](https://www.additive.lcl/de/messtechnik-sensorik) or
[www.m8finder.net](https://www.m8finder.net/).

## How to use

Have a look at our [documentation](./docs) files, e.g. [demo.js](./docs/demo.js).

### JavaScript

include the one you need (all minified and compressed):

- CommonJS:
  [`vanilla-carousel/dist/vanilla-carousel.common.js`](./dist/vanilla-carousel.common.js)
- ESM:
  [`vanilla-carousel/dist/vanilla-carousel.esm.js`](./dist/vanilla-carousel.esm.js)
- ES6: [`vanilla-carousel/dist/vanilla-carousel.js`](./dist/vanilla-carousel.js)

```js
import VanillaCarousel from 'vanilla-carousel'

const ele = document.getElementsByClassName('carousel')[0]
new VanillaCarousel(ele, {
  autoplay: false,
  prev: true,
  next: true,
  progress: true,
  loop: false,
})
```

### HTML

```html
<div class="carousel">
  <div class="carousel__items">
    <div class="item">ITEM1</div>
    <div class="item">ITEM2</div>
  </div>
  <div class="carousel__controller"></div>
</div>
```

This is the minimal setup, if you want to customize the controlls, e.g. wrap them
into a div, you can by creating them _inside_ `carousel__controller`. The following
controllers are provided:

- `<div class="progress"></div>`: the progress childs will be generated inside
- `<div class="prev"></div>`: place some custom input it prev controller (you can do
  this in options as well)
- `<div class="next"></div>`: place some custom input it next controller (you can do
  this in options as well)
- `<div class="play"></div>`: the play button
- `<div class="pause"></div>`: the pause button
- `<div class="stop"></div>`: the stop button

### Options

| Option         | Default | Type              | Description                                                                                                   |
| -------------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------- |
| `autoplay`     | `false` | boolean \| number | Wanna autoplay your carousel? Set it to true or a number for milliseconds it should take to fade to the next! |
| `prev`         | `false` | boolean           | Give the user an option to go back in your carousel! Give it a string to personalize it.                      |
| `next`         | `false` | boolean           | Give the user an option to go to the next in your carousel! Give it a string to personalize it.               |
| `progress`     | `false` | boolean           | Set this to true if you want to have progress bars below the carousel.                                        |
| `loop`         | `false` | boolean           | Do you want to loop the carousel so it's started from the beginning at the end? Set it to true!               |
| `pauseOnHover` | `false` | boolean           | Whenever someone hovers over the carousel, it pauses. (WIP)                                                   |
| `keyboardNav`  | `false` | boolean           | Let the user navigate through your carousel via the keyboard <kbd>→</kbd> <kbd>←</kbd>.                       |
