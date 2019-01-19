import React from 'react'

const CardDescription = props => {

  const card = props.card

  return (
    <div className='card-description'>
      <h4>The {card.card_name}</h4>
      <p>{card.major_arcana ? 'Part of the Major Arcana' : null }</p>
      <p>{card.description}</p>
      <p>{card.keywords.join(", ")}</p>
      <p>{card.rev_description}</p>
    </div>
  )
}

export default CardDescription
