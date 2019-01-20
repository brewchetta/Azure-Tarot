import React from 'react'
import ink from '../Assets/10_Wheel_Ink.png'
import knot from '../Assets/10_Wheel_Knot.png'
import planet from '../Assets/10_Wheel_Planet.png'
import snake from '../Assets/10_Wheel_Snake.png'

export const WheelOfFortune = props => {
  return (
    <div className='card-animation' style={{ textAlign: 'centered' }}>

      <div className='wheel-container'>

      <img alt='' src={ink} className='wheel-inner' style={{ animationDuration: '16s' }} />

      <img alt='' src={knot} className='wheel-inner' style={{ animationDuration: '12s' }} />

      <img alt='' src={planet} className='wheel-inner' style={{ animationDuration: '8s' }} />

      <img alt='' src={snake} className='wheel-inner' style={{ animationDuration: '4s' }} />

      </div>

    </div>
  )
}
