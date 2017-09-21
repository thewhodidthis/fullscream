'use strict'

require('kpow')()

const test = require('tape')
const fullscream = require('./')

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

test('will default', (t) => {
  t.equals(typeof fullscream, 'function', 'is ready')
  t.end()
})

test('will switch on click', (t) => {
  document.addEventListener('click', () => {
    const state = fullscream(document.querySelector('pre'))

    t.ok(state, 'is full')
    t.end()
  }, false)
})
