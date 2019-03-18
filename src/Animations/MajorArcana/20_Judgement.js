import React from 'react'
import hawk from '../Assets/20_Judgement_Hawk.png'
import sun from '../Assets/20_Judgement_Sun.png'

export const Judgement = props => {
  return (
    <div className='card-animation' style={{ backgroundColor: '#ff6600' }}>

      <img alt='' src={sun}
      style={{ position: 'absolute', top: '0', left: '-15%', height: '100%', animation: 'rotate 60s infinite linear' }} />

      <img alt='' src={hawk}
      style={{ position: 'absolute', top: '0', left: '-18%', height: '100%' }} />

    </div>
  )
}
