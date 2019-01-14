// Two forks on a river are combining around a rustic scene seen from above
// The two forks are positioned at the top, the bottom is where they've met
// A lot of something is flowing down, changing colors along rainbow lines

import React from 'react'
import river from '../Assets/14_Temperance_River.png'

export const Temperance = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={river}
      className='card-fit-height rainbow-river'
      style={{ left: '-50%', zIndex: '1' }} />

      <div className='rainbow-shift' style={{ height: '100%', width: '100%', backgroundImage: 'linear-gradient(#cccc00, #803300, #800033, #66004d)', position: 'absolute', top: '0', left: '0' }}>
      </div>

    </div>
  )
}
