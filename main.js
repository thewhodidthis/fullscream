// # Fullscream
// Just another Fullscreen API wrapper.

// Helps decide which vendor prefixed method or property to use.
const patch = (source = {}, ...keys) =>
  keys.reduce((memo, k) => {
    const next = source[k]

    return next === undefined ? memo : next
  }, () => {})

const state = (node = document) =>
  patch(node, "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement", "fullscreenElement")

const enter = (node = document.body) =>
  patch(node, "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen", "requestFullscreen").call(node)

const leave = (node = document) =>
  patch(node, "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen", "exitFullscreen").call(node)

// Helps toggle fullscreen mode.
const fullscream = node => (state() !== null ? leave() : enter(node))

fullscream.state = state
fullscream.enter = enter
fullscream.leave = leave

export default fullscream
