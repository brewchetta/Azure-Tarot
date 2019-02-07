// React
import React from 'react'
// Redux
import mappedConnect from '../redux/mappers'
// Components
import HelpWelcome from './HelpWelcome'
import HelpReadingTypes from './HelpReadingTypes'
import HelpUnlockCards from './HelpUnlockCards'
import HelpUseCards from './HelpUseCards'
import HelpPerformReadings from './HelpPerformReadings'
// Assets
import seeds from '../Assets/19_Sun_Seeds.png'

class HelpContainer extends React.Component {

  state = {
    tab: 'welcome'
  }

  switchTab = (tabName) => {
    this.setState({ tab: tabName })
  }

  renderTab = () => {
    switch (this.state.tab) {
      case 'welcome':
        return (<HelpWelcome />)
      case 'unlock-cards':
        return (<HelpUnlockCards />)
      case 'use-cards':
        return (<HelpUseCards />)
      case 'reading-types':
        return (<HelpReadingTypes />)
      case 'perform-reading':
        return (<HelpPerformReadings />)
      default:
        return null
    }
  }

  render() {
    const {tab} = this.state
    const switchTab = this.switchTab
    const {toggleHelp} = this.props

    return (
      <div className='help-container'>

        <button
        style={tab === 'welcome' ? {background:'#00b386', color: 'white'} : null}
        onClick={() => switchTab('welcome')}
        >Welcome</button>

        <button
        style={tab === 'unlock-cards' ? {background:'#00b386', color: 'white'} : null}
        onClick={() => switchTab('unlock-cards')}
        >Unlocking Cards</button>

        <button
        style={tab === 'use-cards' ? {background:'#00b386', color: 'white'} : null}
        onClick={() => switchTab('use-cards')}
        >Using Cards</button>

        <button
        style={tab === 'reading-types' ? {background:'#00b386', color: 'white'} : null}
        onClick={() => switchTab('reading-types')}
        >Types of Readings</button>

        <button
        style={tab === 'perform-reading' ? {background:'#00b386', color: 'white'} : null}
        onClick={() => switchTab('perform-reading')}
        >Performing Readings</button>

        <button onClick={toggleHelp}
        style={{ fontSize: '1em',borderRadius: '100%', height: '30px', width: '30px', position: 'absolute', right: '2px', top: '2px' }}
        >X</button>

        {this.renderTab()}

        <img alt='' src={seeds} style={{bottom: '2%'}} className='onboard-background' />

      </div>
    )
  }
}

export default mappedConnect(HelpContainer)
