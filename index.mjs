// # Fullscream
// Just another fullscren api wrapper

// Helps decide which vendor prefixed method or property to use
const patch = (arr, obj) => {
  const lookup = obj || document

  return arr.reduce((acc, val) => {
    const result = lookup[val]

    return result !== undefined ? result : acc
  }, () => {})
}

// Helps toggle fullscreen mode
const fullscream = (() => {
  // Check current status
  const state = () => {
    const props = [
      'webkitFullscreenElement',
      'mozFullScreenElement',
      'msFullscreenElement',
      'fullscreenElement'
    ]

    return patch(props) !== null
  }

  // Ask for
  const enter = (target) => {
    const element = target || document.body
    const methods = [
      'webkitRequestFullScreen',
      'mozRequestFullScreen',
      'msRequestFullscreen',
      'requestFullscreen'
    ]

    patch(methods, element).call(element)

    return state()
  }

  // Drop out of
  const leave = () => {
    const methods = [
      'webkitExitFullscreen',
      'mozCancelFullScreen',
      'msExitFullscreen',
      'exitFullscreen'
    ]

    patch(methods).call(document)

    return state()
  }

  // Switch for
  return element => (state() ? leave() : enter(element))
})()

export default fullscream
