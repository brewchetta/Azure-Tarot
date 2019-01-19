import React from 'react'
import seed from '../Assets/0_Fool_Seed.png'

export const Fool = () => {

  return (
    <div className='card-animation' style={{ background: 'white' }}>

      <img alt='' src={seed} className='fool-sway'
      style={{ position: 'absolute', top: '0', left: '0', width: '100%'}}
      />

    </div>
  )
}
