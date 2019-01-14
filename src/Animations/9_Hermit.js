import React from 'react'
import background from '../Assets/9_Hermit_Snail_Background.png'
import foreground from '../Assets/9_Hermit_Snail_Foreground.png'

const Hermit = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={background}
      className='card-fit-height'
      style={{ width: 'auto', left: '-70%' }} />

      <img alt='' src={foreground}
      className='card-fit-height'
      style={{ top: '-101%', left: '-70%' }} />

    </div>
  )
}

export default Hermit
