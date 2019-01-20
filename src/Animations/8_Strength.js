import React from 'react'
import cat from '../Assets/8_Strength_Cat.png'
import lion from '../Assets/8_Strength_Lion.png'

export const Strength = props => {
  return (
    <div className='card-animation' style={{ backgroundColor: '#4d0f00' }}>

      <img alt='' src={cat} className='strength-cat' />

      <img alt='' src={lion} className='strength-lion' />

      <div className='strength-mirror'>
      </div>

    </div>
  )
}
