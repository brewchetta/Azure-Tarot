import React from 'react'
import sword from '../../Assets/Symbol_Sword.png'

export const ThreeOfSwords = () => {

  return (
    <div className='card-animation' style={{ background: 'white' }}>

      <img alt='' src={sword}
      style={{ position: 'absolute', top: '0', left: '0', height: '100%'}}
      />

    </div>
  )
}
