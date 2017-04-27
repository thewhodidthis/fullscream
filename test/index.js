const test = require('tape');
const Fullscream = require('../');

// Add favicon
const linkTag = document.createElement('link');

linkTag.href = 'data:;base64,iVBORw0KGgo=';
linkTag.rel = 'icon';

document.head.appendChild(linkTag);

// Add styles
const styleTag = document.createElement('style');
const whenFull = `color: #fff; width: 50vw; height: 50vh; background: transparent;`;
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
    .map((a) => `:${a} { ${whenFull} }`)
    .join('\n  ')}
`);

styleTag.appendChild(css);

document.head.appendChild(styleTag);

test('will default', (t) => {
  const goFull = Fullscream();

  t.equals(typeof goFull, 'function', 'is callable');
  t.end();
});

test('will switch on click', (t) => {
  const goFull = Fullscream();

  document.addEventListener('click', () => {
    const state = goFull(document.querySelector('pre'));

    t.ok(state, 'has switched');
    t.end();
  }, false);
});

