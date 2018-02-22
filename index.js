'use strict';

// # Fullscream
// Just another fullscren api wrapper

// Helps toggle fullscreen mode
const fullscream = ((page) => {
  // Helps decide which vendor prefixed method or property to use
  const patch = (source = {}, ...keys) => keys.reduce((memo, k) => {
    const next = source[k];

    return next === undefined ? memo : next
  }, () => {});

  // Check current status
  const state = () => patch(page,
    'webkitFullscreenElement',
    'mozFullScreenElement',
    'msFullscreenElement',
    'fullscreenElement'
  ) !== null;

  // Drop out of
  const leave = () => patch(page,
    'webkitExitFullscreen',
    'mozCancelFullScreen',
    'msExitFullscreen',
    'exitFullscreen'
  ).call(page);

  // Ask for
  const enter = (node = page.body) => patch(node,
    'webkitRequestFullScreen',
    'mozRequestFullScreen',
    'msRequestFullscreen',
    'requestFullscreen'
  ).call(node);

  // Toggle
  /* eslint no-sequences: 1 */
  return node => (state() ? leave() : enter(node), state())
})(document);

module.exports = fullscream;
