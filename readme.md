## Fullscream
> Just another fullscreen api wrapper

### Setup
```sh
npm install fullscream --save
```

### Usage
```js
var fullscream = require('fullscream');
var screamer = fullscream(document.getElementById('host'));

document.getElementById('button').addEventListener('click', function () {
  screamer.toggle();
}, false);
```
