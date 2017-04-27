## Fullscream
> Just another fullscreen api wrapper

### Setup
```sh
npm install fullscream
```

### Usage
```js
import Fullscream from 'fullscream';

const goFull = Fullscream();

document.addEventListener('click', () => {
		// Feed with element of choice, will act on document body by default
		goFull();
});
```
