import 'cutaway'
import { report, assert } from 'tapeless'
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

equal(typeof fullscream, 'function', 'is ready', 'will default')

const handleClick = () => {
  const state = fullscream(document.querySelector('pre'))

  ok(state, 'is full', 'will switch on click')
  report()

  document.removeEventListener('click', handleClick)
}

document.addEventListener('click', handleClick, false)
