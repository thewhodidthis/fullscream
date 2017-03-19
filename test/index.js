const test = require('tape');
const Fullscream = require('../');

// Add favicon
const linkTag = document.createElement('link');

linkTag.rel = 'shortcut icon';
linkTag.href = 'data:;base64,iVBORw0KGgo=';

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

test('will fake new', (t) => {
  const fullscreen = new Fullscream();

  t.ok(fullscreen);
  t.end();
});

test('will default', (t) => {
  const fullscreen = Fullscream();

  t.ok(fullscreen, 'act on document body if target missing');
  t.end();
});

test('will switch on click', (t) => {
  const fullscreen = Fullscream(document.querySelector('pre'));

  document.addEventListener('click', () => {
    fullscreen.toggle();

    t.pass('switch');
    t.end();
  });
});

