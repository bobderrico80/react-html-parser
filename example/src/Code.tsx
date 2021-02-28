import React from 'react'
import { CodeBlock, a11yDark } from 'react-code-blocks'

export interface CodeProps {
  contents: string
  language?: string
}

const Code = ({ contents, language = 'jsx' }: CodeProps) => {
  return (
    <div className='c-rhp-code'>
      <CodeBlock
        text={contents.trim()}
        language={language}
        showLineNumbers={false}
        theme={a11yDark}
      />
    </div>
  )
}

export default Code
