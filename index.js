'use strict';

// # Fullscream
// Just another fullscren api wrapper

// Helps decide which vendor prefixed method or property to use
var patch = function (arr, obj) {
  var lookup = obj || document;

  return arr.reduce(function (acc, val) {
    var result = lookup[val];

    return result !== undefined ? result : acc
  }, function () {})
};

// Helps toggle fullscreen mode
var fullscream = (function () {
  // Check current status
  var state = function () {
    var props = [
      'webkitFullscreenElement',
      'mozFullScreenElement',
      'msFullscreenElement',
      'fullscreenElement'
    ];

    return patch(props) !== null
  };

  // Ask for
  var enter = function (target) {
    var element = target || document.body;
    var methods = [
      'webkitRequestFullScreen',
      'mozRequestFullScreen',
      'msRequestFullscreen',
      'requestFullscreen'
    ];

    patch(methods, element).call(element);

    return state()
  };

  // Drop out of
  var leave = function () {
    var methods = [
      'webkitExitFullscreen',
      'mozCancelFullScreen',
      'msExitFullscreen',
      'exitFullscreen'
    ];

    patch(methods).call(document);

    return state()
  };

  // Switch for
  return function (element) { return (state() ? leave() : enter(element)); }
})();

module.exports = fullscream;

