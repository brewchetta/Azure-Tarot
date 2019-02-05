import React from 'react'

class HelpContainer extends React.Component {

  state = {
    tab: 'welcome'
  }

  render() {
    return (
      <div className='help-container'>
        <p>I am the help container</p>
      </div>
    )
  }
}

export default HelpContainer
