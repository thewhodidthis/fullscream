var fullscream = (function () {
  'use strict';

  var fullscream = function fullscream() {
    var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

    // Flag
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
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
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

    document.addEventListener('fullscreenchange', function () {
      isFull = !!document.fullScreen;
    }, false);

    document.addEventListener('msfullscreenchange', function () {
      isFull = !!document.msFullscreenElement;
    }, false);

    document.addEventListener('mozfullscreenchange', function () {
      isFull = !!document.mozFullScreen;
    }, false);

    document.addEventListener('webkitfullscreenchange', function () {
      isFull = !!document.webkitIsFullScreen;
    }, false);

    return { toggle: toggle };
  };

  return fullscream;

}());
//# sourceMappingURL=fullscream.js.map
