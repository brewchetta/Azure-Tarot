import React from 'react'
import seed from '../Assets/19_Sun_Seeds.png'

export const DefaultAnimation = () => {

  return (
    <div className='card-animation' style={{ background: 'white' }}>

      <img alt='' src={seed} className='fool-sway'
      style={{ position: 'absolute', top: '0', left: '0', width: '100%'}}
      />

    </div>
  )
}
