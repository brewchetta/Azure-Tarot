import React from 'react'

const CardDescriptionReversal = props => {

  return (
    <div className='card-description-reversal'>
    <h4>{props.card.card_name}</h4>
    <p>{props.user_description}</p>
    </div>
  )

}

export default CardDescriptionReversal
