import React from 'react'
import watch from '../Assets/4_Emperor_Watch.png'

const Emperor = props => {
  return (
    <div className='card-animation'>
      <img alt='' src={watch}
      className='card-fit-height'
      style={{ position: 'relative', top: '-45%', left: '-5%' }} />
    </div>
  )
}

export default Emperor
