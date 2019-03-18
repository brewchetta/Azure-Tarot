import React from 'react'
import foreground from '../../Assets/3_Empress_Bears.png'
import background from '../../Assets/3_Empress_Background.png'

export const Empress = props => {

  return (
    <div className='card-animation'>

      <img alt='' src={background} style={{ position: 'absolute', top: '0', left: '0', height: '100%', filter: 'grayscale(1)'}} />

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <div className='empress-snow' style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 8 - 5}s`, zIndex: `${Math.floor(Math.random() * 4)}` }}></div>

      <img alt='' src={foreground} style={{ position: 'absolute', top: '0', left: '0', height: '100%', animation: 'empress-hues 5s alternate infinite linear', zIndex: '1' }} />

    </div>
  )
}
