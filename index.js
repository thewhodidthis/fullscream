function Fullscream() {
  'use strict';

  var isFull = false;

  var _request = function _request(target) {
    if (!target) {
      return;
    }

    if (target.requestFullscreen) {
      target.requestFullscreen();
    } else if (target.webkitRequestFullScreen) {
      target.webkitRequestFullScreen();
    } else if (target.mozRequestFullScreen) {
      target.mozRequestFullScreen();
    }
  };

  var _exit = function _exit() {
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

  var toggle = function _toggle(target) {
    if (isFull) {
      _exit();
    } else {
      _request(target);
    }
  };

  document.addEventListener('fullscreenchange', function _onFullscreenChange() {
    isFull = !!document.fullScreen;
  }, false);

  document.addEventListener('msfullscreenchange', function _onFullscreenChange() {
    isFull = !!document.msFullscreenElement;
  }, false);

  document.addEventListener('mozfullscreenchange', function _onFullscreenChange() {
    isFull = !!document.mozFullScreen;
  }, false);

  document.addEventListener('webkitfullscreenchange', function _onFullscreenChange() {
    isFull = !!document.webkitIsFullScreen;
  }, false);

  return {
    toggle: toggle
  };
}

module.exports = Fullscream;
