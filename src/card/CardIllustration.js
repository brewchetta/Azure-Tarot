import React from 'react'
import * as Animations from '../Animations'

const parseCardName = card => {
  if (card.name.match(/The/)) {
    return card.name.split(' ').slice(1).join('')
  } else {
    return card.name.split(' ').join('')
  }
}

const CardIllustration = (props) => {
  const card = props.card
  let ComponentName

  if (card && Animations[parseCardName(card)]) {
    ComponentName = Animations[parseCardName(card)]
  } else if (card) {
    ComponentName = Animations['DefaultAnimation']
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
