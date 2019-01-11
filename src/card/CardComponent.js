import React from 'react'

const CardComponent = props => {

  const card = props.card

  return(
    <div className='card-component'>
      <p>{card.card_rank}. The {card.card_name}</p>
      <p>Suit: {card.card_suit}</p>
      <p>Description: {card.description}</p>
      <p>Keywords: {card.keywords.join(", ")}</p>
      <p>Reversal Description: {card.rev_description}</p>
      <p>Reversal Keywords: {card.rev_keywords.join(", ")}</p>
      <p>{card.major_arcana ? 'Part of the Major Arcana' : 'Not Major Arcana'}</p>
    </div>
  )
}

export default CardComponent
