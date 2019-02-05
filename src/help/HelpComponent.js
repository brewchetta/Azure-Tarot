// React
import React from 'react'
// Components
import HelpBackground from './HelpBackground'

class HelpComponent extends React.Component {

  render() {
    return (
      <>
        <HelpBackground toggleHelp={this.props.toggleHelp} />

        <div>
          <p>This will be the actual help container itself. Would love to add a sun in it</p>
        </div>
      </>
    )
  }

}

export default HelpComponent
