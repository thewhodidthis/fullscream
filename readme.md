## about

Just another [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) wrapper.

## setup

Fetch the latest version from GitHub directly:

```sh
# Add to 'package.json' dependencies
npm install thewhodidthis/fullscream
```

## usage

Expect a toggle style function by default when importing with _state_, _enter_, and _leave_ methods attached.

```js
import fullscream from 'fullscream'

document.addEventListener('click', () => {
  // Acts on document body by default
  fullscream()
})
```
