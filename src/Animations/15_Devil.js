// Eye watching the cursor

import React from 'react'
import background from '../Assets/15_Devil_Eye_Background.png'
import foreground from '../Assets/15_Devil_Eye_Foreground.png'
import pupil from '../Assets/15_Devil_Pupil.png'

export const Devil = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={background}
      className='card-fit-height'
      style={{ left: '-40%' }}
      />

      <img alt='' src={foreground}
      className='card-fit-height'
      style={{ left: '-40%', top: '-101%', zIndex: '2' }}
      />

      <img alt='' src={pupil}
      style={{ width: '60%', position: 'absolute', top: '30%', left: '17%', zIndex: '1' }}
      />

    </div>
  )
}
