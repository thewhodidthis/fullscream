## Fullscream
> Just another fullscreen api wrapper

### Setup
```sh
npm install fullscream --save
```

### Usage
```js
var fullscream = require('fullscream')();

var $target = document.getElementById('target');
var $button = document.getElementById('button');

$button.addEventListener('click', function() {
	fullscream.toggle($target);
}, false);
```
