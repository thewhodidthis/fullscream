var Fullscream = (function () {
  'use strict';

  // # Fullscream
  // Just another fullscren api wrapper

  // Shortcut to help with minification
  var doc = document;

  // Helps toggle fullscreen on host element
  var Fullscream = function Fullscream() {
    var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc.body;

    // Current status
    var isFull = false;

    // Ask for
    var request = function request(element) {
      var target = element || host;

      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if (target.webkitRequestFullScreen) {
        target.webkitRequestFullScreen();
      } else if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen();
      }
    };

    // Drop out of
    var exit = function exit() {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    };

    // Switch for
    var toggle = function toggle(element) {
      if (isFull) {
        exit();
      } else {
        request(element);
      }
    };

    // Listen for
    doc.addEventListener('fullscreenchange', function () {
      isFull = !!doc.fullScreen;
    }, false);

    doc.addEventListener('msfullscreenchange', function () {
      isFull = !!doc.msFullscreenElement;
    }, false);

    doc.addEventListener('mozfullscreenchange', function () {
      isFull = !!doc.mozFullScreen;
    }, false);

    doc.addEventListener('webkitfullscreenchange', function () {
      isFull = !!doc.webkitIsFullScreen;
    }, false);

    return { toggle: toggle };
  };

  return Fullscream;

}());
//# sourceMappingURL=fullscream.js.map
