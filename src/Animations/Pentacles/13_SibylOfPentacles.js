import React from 'react'
import pentacle from '../../Assets/Symbol_Pentacle.png'

export const SibylOfPentacles = () => {

  return (
    <div className='card-animation' style={{ background: 'white' }}>

      <img alt='' src={pentacle}
      style={{ position: 'absolute', top: '0', left: '0', height: '100%'}}
      />

    </div>
  )
}
