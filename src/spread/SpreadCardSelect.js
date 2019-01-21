import React from 'react'

export default class SpreadCardSelect extends React.Component {

  render() {
    return (
      <div style={{ display: 'inline-block', float: 'left' }}>

        <img alt=''
          src='../Assets/Card_Back'
          className='card-locked'
          onClick={this.props.selectCard}
          style={ this.props.fullCards ? { left: '-200%', animation: 'card-locked-remove-deck 2s' } : null } />


      </div>
    )
  }
}
