// React
import React from 'react'
// Components
import HelpBackground from './HelpBackground'
import HelpContainer from './HelpContainer'

class HelpComponent extends React.Component {

  render() {
    return (
      <div style={{ zIndex: '1000' }}>
        <HelpBackground toggleHelp={this.props.toggleHelp} />

        <HelpContainer />
      </div>
    )
  }

}

export default HelpComponent
