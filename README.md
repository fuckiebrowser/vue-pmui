# vue-pmui

> Mobile UI elements for **Vue 2.0**

- [Demo](https://fuckiebrowser.github.io/vue-pmui)

- [Document](https://fuckiebrowser.gitbooks.io/vue-pmui/)

## Installation
```bash
npm i vue-pmui -S
```

## Usage

Import all components.

```javascript
import Vue from 'vue';
import PmUI from 'vue-pmui';
Vue.use(PmUI);
```
Import styles
``` html
<style lang="scss">
  @import '~vue-pmui/dist/vue-pmui.min.css';
  // or
  @import '~vue-pmui/src/styles/build.scss';
  /* edit variables */
</style>
```

## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/vue-pmui/dist/vue-pmui.min.css">
<script src="https://unpkg.com/vue-pmui/dist/vue-pmui.min.js">
```


## Development

```bash
npm run dev
```

## Plan
1. TimePicker
2. DatetimePicker
3. PullRefresh
4. InfiniteScroll
5. Range
6. Progress
7. Stepper
8. ...


## License
MIT
