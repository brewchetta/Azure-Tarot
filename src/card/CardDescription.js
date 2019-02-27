import React from 'react'

const CardDescription = props => {

  const card = props.card

  return (
    <div className='card-description'>
      <h4>{card.name}</h4>
      <p>{card.suit}</p>
      <p>{card.description}</p>
      <p>{card.keywords.join(", ")}</p>
      <p>{card.rev_description}</p>
    </div>
  )
}

export default CardDescription
