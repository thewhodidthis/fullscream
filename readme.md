## Fullscream
> Just another fullscreen api wrapper

### Setup
```sh
npm install fullscream
```

### Usage
```js
import Fullscream from 'fullscream';

// Feed this pseudo constructor with a target element of choice,
// Will act on document body by default
const fullscreen = Fullscream(document.body);

document.addEventListener('click', () => {
  fullscreen.toggle();
});
```
