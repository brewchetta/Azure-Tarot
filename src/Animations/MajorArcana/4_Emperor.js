import React from 'react'
import watch from '../../Assets/4_Emperor_Watch.png'
import starmap from '../../Assets/4_Emperor_Starmap.png'

export const Emperor = props => {
  return (
    <div className='card-animation'>
      <img alt='' src={watch}
      style={{ position: 'absolute', top: '45%', left: '-2%', width: '100%', zIndex: '1' }} />

      <img alt='' src={starmap} className='emperor-starmap' />

    </div>
  )
}
