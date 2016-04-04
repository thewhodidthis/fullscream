## Fullscream
> Just another way to go fullscreen.

### Setup
```sh
npm install fullscream --save
# or
bower install fullscream
```

### Usage
```js
var fullscream = require('fullscream');

var $target = document.getElementById('target');
var $resize = document.getElementById('resize');

$resize.addEventListener('click', function() {
	fullscream.toggle($target);
}, false);
```
