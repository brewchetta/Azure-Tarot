import React from 'react'
import * as Animations from '../Animations'

const CardIllustration = (props) => {
  const card = props.card
  let ComponentName

  if (card) {
    ComponentName = Animations[card.card_name]
  }

  if (card) {
    return (
      <div className='card-illustration'>
      <ComponentName />
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default CardIllustration
