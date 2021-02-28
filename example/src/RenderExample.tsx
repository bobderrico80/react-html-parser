import React from 'react'
import classnames from 'classnames'
import { Replacer, parseHTML } from '@bobderrico/react-html-parser'
import Code from './Code'

interface RenderExampleProps {
  contents: string
  replacer?: Replacer
  replacerFunctionBody?: string
  showImportParseElement?: boolean
  className?: string
}

const getHtmlExample = (
  contents: string,
  replacerFunctionBody?: string,
  showImportParseElement?: boolean
) => {
  return `
${
  showImportParseElement
    ? "import { parseHTML, parseElement } from '@bobderrico/react-html-parser'"
    : "import { parseHTML } from '@bobderrico/react-html-parser'"
}

const html = \`
${contents.trim()}
\`
${
  replacerFunctionBody
    ? `
const replacer = () => {${replacerFunctionBody}}
`
    : ''
}
parseHTML(html${replacerFunctionBody ? ', replacer' : ''})
`
}

const RenderExample = ({
  contents,
  replacer,
  replacerFunctionBody,
  showImportParseElement,
  className
}: RenderExampleProps) => {
  return (
    <div className='c-rhp-render-example'>
      <Code
        contents={getHtmlExample(
          contents,
          replacerFunctionBody,
          showImportParseElement
        )}
        language='jsx'
      />
      <p>renders:</p>
      <div className={classnames('c-rhp-render-example__rendered', className)}>
        {parseHTML(contents, replacer)}
      </div>
    </div>
  )
}

export default RenderExample
