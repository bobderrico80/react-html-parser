# @bobderrico/react-html-parser

> A lightweight parser to convert an HTML string into React elements

[![NPM](https://img.shields.io/npm/v/@bobderrico/react-html-parser.svg)](https://www.npmjs.com/package/@bobderrico/react-html-parser) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bobderrico/react-html-parser
```

## Usage

```tsx
import React from 'react'
import { parseHTML } from '@bobderrico/react-html-parser'

const html = '<h1><strong>Hello</strong> world!</h1>'

const Component = () => {
  return <div>{parseHTML(html)}</div>
}
```

The above `<Component />` would render as so:

```html
<div>
  <h1><strong>Hello</strong> world!</h1>
</div>
```

For more examples, see https://bobderrico80.github.io/react-html-parser/

## Inspiration

There are several other solutions out there that solve a similar problem, [`html-react-parser`](https://www.npmjs.com/package/html-react-parser), [`react-html-parser`](https://www.npmjs.com/package/react-html-parser), and [`html-to-react`](https://www.npmjs.com/package/html-to-react) to name a few. I wanted to challenge myself to build one of my own with a more familiar API, especially in regards to the `replacer` function, as that function is called with an `HTMLElement`.

This package relies on `DOMParser` and therefore currently only works in the browser.

## License

MIT © [bobderrico80](https://github.com/bobderrico80)
