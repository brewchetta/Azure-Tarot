import React from 'react'

export default class SpreadCardSelect extends React.Component {

  render() {
    return (
      <div>

        <img alt=''
        src='../Assets/Card_Back'
        className='card-locked'
        onClick={this.props.selectCard}/>

      </div>
    )
  }
}
