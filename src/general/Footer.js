import React from 'react'
import corner from '../Assets/Corner_Curl.png'

export default function Footer(props) {


  return (
    <footer>
      <p>Chett Tiller 2019</p>
      <img alt='' src={corner} style={{ transform: 'rotateZ(180deg)' }} />
      <img alt='' src={corner} style={{ right: '0', transform: 'rotateX(180deg)' }} />
    </footer>
  )
}
