// # Fullscream
// Just another fullscren api wrapper

// Shortcut to help with minification
const doc = document;

// Helps toggle fullscreen on host element
const Fullscream = (host = doc.body) => {
  // Current status
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
  const toggle = (element) => {
    if (isFull) {
      exit();
    } else {
      request(element);
    }
  };

  // Listen for
  doc.addEventListener('fullscreenchange', () => {
    isFull = !!doc.fullScreen;
  }, false);

  doc.addEventListener('msfullscreenchange', () => {
    isFull = !!doc.msFullscreenElement;
  }, false);

  doc.addEventListener('mozfullscreenchange', () => {
    isFull = !!doc.mozFullScreen;
  }, false);

  doc.addEventListener('webkitfullscreenchange', () => {
    isFull = !!doc.webkitIsFullScreen;
  }, false);

  return { toggle };
};

export default Fullscream;

