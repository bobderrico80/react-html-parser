import React, { useState } from 'react'

export interface ExpanderProps {
  children: React.ReactNode
}

const Expander = ({ children }: ExpanderProps) => {
  const [expanded, setExpanded] = useState(false)

  const handleButtonClick = () => {
    setExpanded((e) => !e)
  }

  const button = (
    <button type='button' onClick={handleButtonClick}>
      {expanded ? 'Collapse' : 'Expand'}
    </button>
  )

  return (
    <>
      {button}
      <div>{expanded ? children : null}</div>
    </>
  )
}

export default Expander
