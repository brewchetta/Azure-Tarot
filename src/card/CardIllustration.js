import React from 'react'
import * as Animations from '../Animations'

const CardIllustration = (props) => {
  console.log(props.card)

  const card = props.card
  const ComponentName = Animations[card.card_name]


  return (
    <div className='card-illustration'>
    <ComponentName />
    </div>
  )
}

export default CardIllustration
