import React from 'react'
import * as Animations from '../Animations'

const CardIllustration = (props) => {

  const card = props.card

  console.log(Animations[card.card_name])

  // Possibly a large switch statement here or imported from nearby to determine the card's illustration

  return (
    <div className='card-illustration'>
    </div>
  )
}

export default CardIllustration
