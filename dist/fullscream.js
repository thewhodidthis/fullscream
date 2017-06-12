var fullscream = (function () {
  'use strict';

  // # Fullscream
  // Just another fullscren api wrapper

  // Helps decide which vendor prefixed method or property to use
  var patch = function patch(arr, obj) {
    var fallback = function fallback() {};
    var target = obj || document;

    return arr.reduce(function (acc, val) {
      var result = target[val];

      if (result !== undefined) {
        return result;
      }

      return acc;
    }, fallback);
  };

  // Helps toggle fullscreen mode
  var fullscream = function () {
    // Check current status
    var state = function state() {
      var props = ['webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement', 'fullscreenElement'];

      return patch(props) !== null;
    };

    // Ask for
    var enter = function enter(target) {
      var element = target || document.body;
      var methods = ['webkitRequestFullScreen', 'mozRequestFullScreen', 'msRequestFullscreen', 'requestFullscreen'];

      patch(methods, element).call(element);

      return state();
    };

    // Drop out of
    var leave = function leave() {
      var methods = ['webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen', 'exitFullscreen'];

      patch(methods).call(document);

      return state();
    };

    // Switch for
    return function (element) {
      if (state()) {
        return leave();
      }

      return enter(element);
    };
  }();

  return fullscream;

}());
//# sourceMappingURL=fullscream.js.map
