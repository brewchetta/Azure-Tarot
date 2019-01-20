import React from 'react'
import symbols from '../Assets/Symbol_All_Wing.png'
import corner from '../Assets/Corner_Curl.png'
import vines from '../Assets/Back_Vines.png'

export default function Header(props) {


  return (
    <header>
      <img alt='' src={symbols} className='header-symbols-left' />
      <img alt='' src={symbols} className='header-symbols-right' />
      <img alt='' src={corner} className='header-corner' style={{ right: '0' }} />
      <img alt='' src={corner} className='header-corner' style={{ left: '0', transform: 'rotateY(180deg)' }} />
      <h1>Azure Tarot</h1>
    </header>
  )
}
