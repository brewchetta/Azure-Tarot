import React from 'react'

export default class SpreadCardSelect extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.selectCard}>Add Card to Spread</button>
      </div>
    )
  }
}
