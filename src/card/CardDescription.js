import React from 'react'

const CardDescription = props => {

  const card = props.card

  return (
    <div className='card-description'>
      <p>Suit: {card.card_suit}</p>
      <p>Description: {card.description}</p>
      <p>Keywords: {card.keywords.join(", ")}</p>
      <p>Reversal Description: {card.rev_description}</p>
      <p>Reversal Keywords: {card.rev_keywords.join(", ")}</p>
      <p>{card.major_arcana ? 'Part of the Major Arcana' : 'Not Major Arcana'}</p>
    </div>
  )
}

export default CardDescription
