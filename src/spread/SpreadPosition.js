import React from 'react'
import CardComponent from '../card/CardComponent'

const SpreadPosition = (props) => {


  return (
    <div>
      <p>{props.position}</p>

      <CardComponent card={props.card} indexState={props.indexState} />

    </div>
  )
}

export default SpreadPosition
