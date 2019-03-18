// Stars spin around the lighthouse center
// Lighthouse center glows luminousl (possibly use firefly from moon)

import React from 'react'
import lighthouse from '../../Assets/17_Star_Lighthouse.png'
import stars from '../../Assets/17_Star_Northstars.png'

export const Star = props => {


  return (
    <div className='card-animation'>

      <img alt='' src={lighthouse}
      className='card-fit-width'
      style={{ top: '20%', zIndex: '3' }}
      />

      <img alt='' src={stars}
      className='animation-rotate-medium'
      style={{ height: '150%', position: 'absolute', left: '-50%', top: '-35%' }}
      />

    </div>
  )
}
