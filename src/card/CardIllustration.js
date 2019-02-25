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

  console.log(parseCardName(card))

  if (card) {
    console.log(Animations)
    ComponentName = Animations[parseCardName(card)]
    console.log(ComponentName)
  }

  if (card) {
    debugger
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
