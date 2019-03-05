import React from 'react'
import corner from '../Assets/Corner_Curl.png'
// CSS
import './Footer.css'

export default function Footer(props) {


  return (
    <footer>
      <img alt='' src={corner} style={{ transform: 'rotateZ(180deg)' }} />
      <img alt='' src={corner} style={{ right: '0', transform: 'rotateX(180deg)' }} />
    </footer>
  )
}
