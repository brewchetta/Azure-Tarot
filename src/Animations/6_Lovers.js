import React from 'react'
import mothOne from '../Assets/6_Lovers_Moth_One.png'
import mothTwo from '../Assets/6_Lovers_Moth_Two.png'

export const Lovers = props => {
  return (
    <div className='card-animation'>
      <img alt='' src={mothOne}
      style={{ height: '50%', transform: 'rotate(190deg)' }} />

      <img alt='' src={mothTwo}
      style={{ height: '50%', position: 'relative', transform: 'rotate(-15deg)' }} />
    </div>
  )
}
