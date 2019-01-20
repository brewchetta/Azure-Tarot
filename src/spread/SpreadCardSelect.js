import React from 'react'

export default class SpreadCardSelect extends React.Component {

  render() {
    return (
      <div style={{ display: 'inline-block', float: 'left' }}>

        { !this.props.fullCards ?
          (<img alt=''
          src='../Assets/Card_Back'
          className='card-locked'
          onClick={this.props.selectCard}/>)
          :null
        }


      </div>
    )
  }
}
