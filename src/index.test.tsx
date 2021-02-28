import * as React from 'react'
import diff from 'jest-diff'

import { renderToStaticMarkup } from 'react-dom/server'
import { parseHTML } from '.'

expect.extend({
  toMatchJSX(actual, expected) {
    const options = {
      comment: 'rendered string equality',
      isNot: this.isNot,
      promise: this.promise
    }

    const actualString = renderToStaticMarkup(<>{actual}</>)
    const expectedString = renderToStaticMarkup(<>{expected}</>)

    const pass = expectedString === actualString

    const message = pass
      ? () =>
          `${this.utils.matcherHint(
            'toMatchJSX',
            undefined,
            undefined,
            options
          )}\n\nExpected: not ${this.utils.printExpected(
            expectedString
          )}\n\nReceived: ${this.utils.printReceived(actualString)}`
      : () => {
          const diffString = diff(expectedString, actualString, {
            expand: this.expand
          })
          return `${this.utils.matcherHint(
            'toMatchJSX',
            undefined,
            undefined,
            options
          )}\n\n${
            diffString && diffString.includes('- Expect')
              ? `Difference\n\n${diffString}`
              : `Expected: ${this.utils.printExpected(
                  expectedString
                )}\nReceived: ${this.utils.printReceived(actualString)}`
          }`
        }

    return {
      actual,
      pass,
      message
    }
  }
})

describe('The `react-html-parser` package', () => {
  describe('parseHtml() function', () => {
    it('parses single elements', () => {
      expect(parseHTML('<h1>Foo</h1>')).toMatchJSX(<h1>Foo</h1>)
    })

    it('condenses extra whitespace', () => {
      const html = `
        <h1>
          Foo
        </h1>
      `
      expect(parseHTML(html)).toMatchJSX(<h1> Foo </h1>)
    })

    it('handles nested elements', () => {
      const html = `
        <article>
          <h1>Foo</h1>
        </article>
      `
      expect(parseHTML(html)).toMatchJSX(
        <article>
          <h1>Foo</h1>
        </article>
      )
    })

    it('converts attributes to props using expected React prop names', () => {
      const html = '<p class="foo" id="foo">Foo</p>'
      expect(parseHTML(html)).toMatchJSX(
        <p className='foo' id='foo'>
          Foo
        </p>
      )
    })

    it('properly handles boolean attributes', () => {
      const html = `<button disabled>Foo</button>`
      expect(parseHTML(html)).toMatchJSX(<button disabled>Foo</button>)
    })

    // TODO: Figure out a better way to handle style attributes so that this passes
    it.skip('properly handles style attributes', () => {
      const html = `<p style="color: red; background-color:blue; font-size: 32px">`
      expect(parseHTML(html)).toMatchJSX(
        <p style={{ color: 'red', backgroundColor: 'blue', fontSize: 32 }}>
          Foo
        </p>
      )
    })

    it('can change nodes on the fly with the `replace` function', () => {
      const html = `
        <div>
          <h1>Foo</h1>
          <p>Bar</p>
        </div>
      `
      const replacer = (element: HTMLElement) => {
        if (element.nodeName.toLowerCase() === 'p') {
          return <p>{element.textContent?.toUpperCase()}</p>
        }

        return null
      }

      expect(parseHTML(html, replacer)).toMatchJSX(
        <div>
          <h1>Foo</h1>
          <p>BAR</p>
        </div>
      )
    })

    it('throws and error if the HTML cannot be parsed', () => {
      expect(() => {
        parseHTML('<123 />')
      }).toThrowError()
    })
  })
})
