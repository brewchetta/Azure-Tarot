import React from 'react'
import mappedConnect from '../redux/mappers'

const HelpBackground = props => {
  return (
    <div className='help-background-screen'
    onClick={props.toggleHelp}></div>
  )
}

export default mappedConnect(HelpBackground)
