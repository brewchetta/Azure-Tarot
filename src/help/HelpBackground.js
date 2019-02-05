import React from 'react'

const HelpBackground = props => {
  return (
    <div className='click-to-exit-background'
    onClick={props.toggleHelp}></div>
  )
}

export default HelpBackground
