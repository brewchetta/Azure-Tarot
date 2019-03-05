import React from 'react'
import symbols from '../Assets/Symbol_All_Wing.png'
import corner from '../Assets/Corner_Curl.png'

export default function Header(props) {


  return (
    <header>
      <img alt='' src={symbols} className='header-symbols-left large-screen-only' />
      <img alt='' src={symbols} className='header-symbols-right large-screen-only' />
      <img alt='' src={corner} className='header-corner' style={{ right: '0' }} />
      <img alt='' src={corner} className='header-corner' style={{ left: '0', transform: 'rotateY(180deg)' }} />
      <h1 className='small-screen-remove'>Azure Tarot</h1>
    </header>
  )
}
