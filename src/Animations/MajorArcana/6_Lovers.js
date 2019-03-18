import React from 'react'
import owls from '../../Assets/6_Lovers_Owls.png'
import forest from '../../Assets/6_Lovers_Forest.png'

export const Lovers = props => {
  return (
    <div className='card-animation'>
      <img alt='' src={forest}
      style={{ left: '0', position: 'absolute', top: '0', width: '100%' }} />

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 8}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <div className='lovers-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, transform: `rotate(${Math.random() * 360}deg)` }}></div>

      <img alt='' src={owls}
      style={{ left: '0', position: 'absolute', bottom: '0', width: '100%' }} />

    </div>
  )
}
