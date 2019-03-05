// React
import React from 'react'
// Components
import HelpBackground from './HelpBackground'
import HelpContainer from './HelpContainer'
// CSS
import '../css/Help.css'
import '../css/Onboard.css'

class HelpComponent extends React.Component {

  render() {
    return (
      <div style={{ zIndex: '1000' }}>
        <HelpBackground />

        <HelpContainer />
      </div>
    )
  }

}

export default HelpComponent
