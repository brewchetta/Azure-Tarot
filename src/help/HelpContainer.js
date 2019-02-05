// React
import React from 'react'
// Components
import HelpText from './HelpText'

class HelpContainer extends React.Component {

  state = {
    tab: 'welcome'
  }

  switchTab = (tabName) => {
    this.setState({ tab: tabName })
  }

  render() {
    const {tab} = this.state
    const switchTab = this.switchTab

    return (
      <div className='help-container'>

        <button
        style={tab === 'welcome' ? {background:'grey'} : null}
        onClick={() => switchTab('welcome')}
        >Welcome</button>

        <button
        style={tab === 'unlock-cards' ? {background:'grey'} : null}
        onClick={() => switchTab('unlock-cards')}
        >Unlocking Cards</button>

        <button
        style={tab === 'use-cards' ? {background:'grey'} : null}
        onClick={() => switchTab('use-cards')}
        >Using Cards</button>

        <button
        style={tab === 'reading-types' ? {background:'grey'} : null}
        onClick={() => switchTab('reading-types')}
        >Types of Readings</button>

        <button
        style={tab === 'perform-readings' ? {background:'grey'} : null}
        onClick={() => switchTab('perform-readings')}
        >Performing Readings</button>

        <HelpText tab={this.state.tab} />

      </div>
    )
  }
}

export default HelpContainer
