// # Fullscream
// Just another fullscren api wrapper

// Helps decide which vendor prefixed method or property to use
const patch = (arr, obj) => {
  const fallback = (() => {});
  const o = obj || document;

  return arr.reduce((a, b) => {
    const c = o[b];

    if (c !== undefined) {
      return c;
    }

    return a;
  }, fallback);
};

// Helps toggle fullscreen mode
const Fullscream = () => {
  // Check current status
  const state = () => {
    const props = [
      'webkitFullscreenElement',
      'mozFullScreenElement',
      'msFullscreenElement',
      'fullscreenElement',
    ];

    return patch(props) !== null;
  };

  // Ask for
  const enter = (target) => {
    const element = target || document.body;
    const methods = [
      'webkitRequestFullScreen',
      'mozRequestFullScreen',
      'msRequestFullscreen',
      'requestFullscreen',
    ];

    patch(methods, element).call(element);

    return state();
  };

  // Drop out of
  const leave = () => {
    const methods = [
      'webkitExitFullscreen',
      'mozCancelFullScreen',
      'msExitFullscreen',
      'exitFullscreen',
    ];

    patch(methods).call(document);

    return state();
  };

  // Switch for
  return (element) => {
    if (state()) {
      return leave();
    }

    return enter(element);
  };
};

export default Fullscream;

