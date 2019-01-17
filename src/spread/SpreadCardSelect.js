import React from 'react'

export default class SpreadCardSelect extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.selectCard}>Draw a Card</button>
      </div>
    )
  }
}
