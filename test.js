import 'cutaway'
import { report, assert } from 'tapeless/browser'
import fullscream from './index.mjs'

const { ok, equal } = assert

// Add styles
const whenFull = 'color: #fff; width: 50vw; height: 50vh; background: transparent;'
const styleTag = document.createElement('style')
const css = document.createTextNode(`
  html {
    cursor: pointer;
  }

  body, pre {
    margin: 0;
  }

  pre {
    padding: 0.5rem;
    box-sizing: border-box;
  }

  ${'-webkit-full-screen,-moz-full-screen,-ms-fullscreen,fullscreen'
    .split(',')
    .map(a => `:${a} { ${whenFull} }`)
    .join('\n  ')}
`)

styleTag.appendChild(css)
document.head.appendChild(styleTag)

equal
  .describe('is ready', 'will default')
  .test(typeof fullscream, 'function')

ok
  .describe('methods in place')
  .test(fullscream.state)
  .test(fullscream.enter)
  .test(fullscream.leave)

equal
  .test(typeof fullscream.state, 'function')
  .test(typeof fullscream.enter, 'function')
  .test(typeof fullscream.leave, 'function')

const handleClick = () => {
  fullscream(document.querySelector('pre'))

  document.removeEventListener('click', handleClick)
}

document.addEventListener('click', handleClick, false)

const handleFullscreenChange = () => {
  ok
    .describe('is full', 'will switch on click')
    .test(fullscream.state())

  report()

  document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
}

document.addEventListener('webkitfullscreenchange', handleFullscreenChange, false)
