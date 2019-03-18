import React from 'react'
import bike from '../../Assets/7_Chariot_Bike.png'
import wheel from '../../Assets/7_Chariot_Wheel.png'

export const Chariot = props => {
  return (
    <div className='card-animation' style={{ background: 'white' }}>

    <img alt='' src={bike} style={{ bottom: '5%', left: '-7%', position: 'absolute', width: '110%', zIndex: '1' }} />

    <img alt='' src={wheel} className='chariot-wheel' style={{ left: '-3%', bottom: '7%' }}/>

    <img alt='' src={wheel} className='chariot-wheel' style={{ left: '61%', bottom: '5.5%' }}/>

    </div>
  )
}
