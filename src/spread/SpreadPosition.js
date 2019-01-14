import React from 'react'
import CardComponent from '../card/CardComponent'

const SpreadPosition = (props) => {


  return (
    <div>
      <p>{props.position}</p>

      <CardComponent card={props.card} />

    </div>
  )
}

export default SpreadPosition
