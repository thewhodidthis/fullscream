const fullscream = (host = document.body) => {
  // Flag
  let isFull = false;

  // Ask for
  const request = (element) => {
    const target = element || host;

    if (target.requestFullscreen) {
      target.requestFullscreen();
    } else if (target.webkitRequestFullScreen) {
      target.webkitRequestFullScreen();
    } else if (target.mozRequestFullScreen) {
      target.mozRequestFullScreen();
    }
  };

  // Drop out of
  const exit = () => {
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
  const toggle = (element) => {
    if (isFull) {
      exit();
    } else {
      request(element);
    }
  };

  document.addEventListener('fullscreenchange', () => {
    isFull = !!document.fullScreen;
  }, false);

  document.addEventListener('msfullscreenchange', () => {
    isFull = !!document.msFullscreenElement;
  }, false);

  document.addEventListener('mozfullscreenchange', () => {
    isFull = !!document.mozFullScreen;
  }, false);

  document.addEventListener('webkitfullscreenchange', () => {
    isFull = !!document.webkitIsFullScreen;
  }, false);

  return { toggle };
};

export default fullscream;

