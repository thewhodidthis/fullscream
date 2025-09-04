## about

Yet another [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) wrapper.

## setup

Load via HTML script tag:

```html
<!-- Just an IIFE namespaced `fullscream` -->
<script src="https://thewhodidthis.github.io/fullscream/fullscream.js"></script>
```

Source from an import map:

```json
{
  "imports": {
    "fullscream": "https://thewhodidthis.github.io/fullscream/main.js"
  }
}
```

Download from GitHub directly, using _npm_ for example:

```sh
# Add to package.json
npm install thewhodidthis/fullscream
```

## usage

Expect a toggle style function by default when importing with _state_, _enter_, and _leave_ methods attached.

```js
import fullscream from "fullscream"

document.addEventListener("click", () => {
  // Acts on `document.body` by default.
  fullscream()
})
```
