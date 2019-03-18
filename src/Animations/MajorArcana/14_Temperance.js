// Two forks on a river are combining around a rustic scene seen from above
// The two forks are positioned at the top, the bottom is where they've met
// A lot of something is flowing down, changing colors along rainbow lines

import React from 'react'
import waterfall from '../../Assets/14_Temperance_Waterfall.png'

export const Temperance = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={waterfall}
      className='card-fit-height rainbow-river'
      style={{ left: '0', zIndex: '1' }} />

      <div className='rainbow-shift' style={{ height: '100%', width: '100%', backgroundImage: 'linear-gradient(#cc0000, #ff0000, #ff3300, #cc6600, #ff9900, #cc9900,#cccc00,#99cc00,#669900)', position: 'absolute', top: '0', left: '0' }}>
      </div>

    </div>
  )
}
