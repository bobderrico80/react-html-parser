import React from 'react'
import { parseHTML, parseElement } from '@bobderrico/react-html-parser'
import './App.css'
import Expander from './Expander'
import Code from './Code'
import RenderExample from './RenderExample'

const usageHtml = '<h1><strong>Hello</strong> world!</h1>'

const usage = `
import React from 'react'
import { parseHTML } from '@bobderrico/react-html-parser'

const html = '${usageHtml}'

const Component = () => {
  return <div>{parseHTML(html)}</div>
}

export default Component;
`

const simplestExample = `<p>Foobar</p>`

const nestedExample = `
<article>
  <h3>Heading</h2>
  <p>Paragraph</p>
  <p>Paragraph with some <strong>bold</strong> text</p>
</article>
`

const attributesExample = `
<p class="red">Text with class "red"</p>
<p>
  <a href="https://github.com/bobderrico80" target="_blank" rel="noreferrer">
    Link to <code>bobderrico80</code> on GitHub
  </a>
</p>
<div>
  <button disabled>Disabled Button</button>
</div>
`

const stylesExample = `
<p style="color: blue; font-size: 32px; background-color: pink">
  Large blue text with pink background, set with a <code>style</code> attribute
</p>
`

const simpleReplaceExample = `
<h3>headings are transformed to uppercase</h2>
<p>paragraphs are not</p>
`

const simpleReplaceReplacerExample = `
  if (element.nodeName.toLowerCase() === 'h3') {
    return <h3>{element.textContent?.toUpperCase()}</h3>
  }

  return null
`

const simpleReplacer = (element: HTMLElement) => {
  if (element.nodeName.toLowerCase() === 'h3') {
    return <h3>{element.textContent?.toUpperCase()}</h3>
  }

  return null
}

const childReplaceExample = `
<div data-expander="true">
  <h3>Header</h3>
  <p>Some text</p>
</div>
`

const childReplacer = (element: HTMLElement) => {
  if (element.dataset.expander) {
    return <Expander>{parseElement(element.childNodes)}</Expander>
  }

  return null
}

const childReplaceReplacerExample = `
  if (element.dataset.expander) {
    return <Expander>{parseElement(element.childNodes)}</Expander>
  }

  return null
`

const nestedReplaceExample = `
<section data-expander="true">
  <h3>Header</h3>
  <p>Some text</p>
  <section data-expander="true">
    <h4>Subheader</h4>
    <p>Some child text</p>
  </section>
</section>
`

const nestedReplacer = (element: HTMLElement) => {
  if (element.dataset.expander) {
    return (
      <Expander>{parseElement(element.childNodes, nestedReplacer)}</Expander>
    )
  }

  return null
}

const nestedReplaceReplacerExample = `
  if (element.dataset.expander) {
    return <Expander>{parseElement(element.childNodes, nestedReplacer)}</Expander>
  }

  return null
`

const App = () => {
  return (
    <div className='c-rhp-wrapper'>
      <header className='c-rhp-header'>
        <h1 className='c-rhp-masthead'>react-html-parser</h1>
      </header>
      <main className='c-rhp-main'>
        <section>
          <h2>Installation</h2>
          <p>Run the following to install:</p>
          <Code
            contents='npm install --save @bobderrico/react-html-parser'
            language='text'
          />
          <p>
            <strong>NOTE:</strong> This package currently only works in the
            browser.
          </p>
        </section>
        <section>
          <h2>Usage</h2>
          <Code contents={usage} />
          <p>
            The above <code>&lt;Component /&gt;</code> would render as so:
          </p>
          <div className='c-rhp-render-example__rendered'>
            {parseHTML(usageHtml)}
          </div>
        </section>
        <section>
          <h2>Examples</h2>
          <h3>Simplest example</h3>
          <RenderExample contents={simplestExample} />
          <h3>Nested example</h3>
          <RenderExample contents={nestedExample} />
          <h3>Attributes example</h3>
          <RenderExample contents={attributesExample} />
          <h3>Styles example</h3>
          <RenderExample contents={stylesExample} />
          <h3>Simple replacer example</h3>
          <RenderExample
            contents={simpleReplaceExample}
            replacer={simpleReplacer}
            replacerFunctionBody={simpleReplaceReplacerExample}
          />
          <h3>Child replacer example</h3>
          <RenderExample
            contents={childReplaceExample}
            replacer={childReplacer}
            replacerFunctionBody={childReplaceReplacerExample}
            showImportParseElement={true}
            className='c-rhp-render-example__rendered--child-replace'
          />
          <h3>Nested replacer example</h3>
          <RenderExample
            contents={nestedReplaceExample}
            replacer={nestedReplacer}
            replacerFunctionBody={nestedReplaceReplacerExample}
            showImportParseElement={true}
            className='c-rhp-render-example__rendered--nested-replace'
          />
        </section>
      </main>
      <footer className='c-rhp-footer'>
        Copyright &copy; Bob D'Errico |{' '}
        <a
          href='https://github.com/bobderrico80'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://github.com/bobderrico80
        </a>
      </footer>
    </div>
  )
}

export default App
