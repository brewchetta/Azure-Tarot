// Face slowly fills up like an ink blot. Sparks or rain or something slowly move around it, giving a general idea of outline before it fills

import React from 'react'
import kitty from '../../Assets/2_High_Priestess_Cat.png'
import inkblot from '../../Assets/2_High_Priestess_Inkblot.png'

export const HighPriestess = props => {
  return (
    <div className='card-animation' style={{ background: 'white' }}>

      <img alt='' src={kitty}
      style={{ height: '100%', position: 'absolute', left: '-25%', zIndex: '1' }}
      />

      {/* Ink blots */}

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', top: '0', left: '0', width: '40%', animationDelay: '-12s' }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', top: '30%', left: '50%', width: '50%', animationDelay: '-11s' }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', top: '20%', left: '30%', width: '50%', animationDelay: '-10s'  }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', top: '40%', right: '10%', width: '50%', animationDelay: '-9s' }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', top: '50%', left: '25%', width: '50%', animationDelay: '-8s' }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', top: '10%', right: '10%', width: '50%', animationDelay: '-7s' }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', top: '30%', left: '10%', width: '50%', animationDelay: '-6s' }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', right: '0', bottom: '5%', width: '50%', animationDelay: '-5s' }}
      />

      <img alt='' src={inkblot}
      className='inkblot'
      style={{ position: 'absolute', right: '-10%', bottom: '50%', width: '50%', animationDelay: '-4s' }}
      />


    </div>
  )
}
