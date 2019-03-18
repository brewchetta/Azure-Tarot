import React from 'react'
import sword from '../../Assets/11_Justice_Sword.png'
import winter from '../../Assets/11_Justice_Winter.png'
import spring from '../../Assets/11_Justice_Spring.png'

export const Justice = props => {
  return (
    <div className='card-animation'>

    <img alt='' src={sword} className='justice-sword' />

    <img alt='' src={spring} className='justice-background' style={{ left: '50%', animationDelay: '-3s' }} />

    <img alt='' src={winter} className='justice-background' style={{ right: '50%' }} />

    </div>
  )
}
