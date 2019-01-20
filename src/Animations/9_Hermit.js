import React from 'react'
import background from '../Assets/9_Hermit_Snail_Background.png'
import foreground from '../Assets/9_Hermit_Snail_Foreground.png'

export const Hermit = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={background}
      className='card-fit-height'
      style={{ width: 'auto', left: '-60%' }} />

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 7}s` }}></div>

      <img alt='' src={foreground}
      className='card-fit-height'
      style={{ top: '-101%', left: '-60%', zIndex: '2' }} />

    </div>
  )
}
