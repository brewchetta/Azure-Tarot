// Chrysalis slowly changes hue, taking a slow lap around the color wheel

import React from 'react'
import chrysalis from '../Assets/12_HangedMan_Chrysalis.png'
import fern from '../Assets/12_HangedMan_Fern.png'

export const HangedMan = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={fern}
      className='card-fit-height'
      style={{ filter: 'grayscale(0.5)' }} />

      <img alt='' src={chrysalis}
      className='card-fit-height rainbow-shift'
      style={{ position: 'absolute', top: '-10%', left: '10%' }}
       />

    </div>
  )
}
