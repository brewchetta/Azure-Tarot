import React from 'react'
import CardComponent from '../card/CardComponent'

const SpreadPosition = (props) => {


  return (
    <div className='position-container-threecard'>
      <p>{props.position}</p>

      <CardComponent card={props.card} indexState={props.indexState} currentUser={props.currentUser} />

    </div>
  )
}

export default SpreadPosition
