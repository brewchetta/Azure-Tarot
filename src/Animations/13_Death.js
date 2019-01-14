import React from 'react'
import cat from '../Assets/13_Death_Cat.png'
import tree from '../Assets/13_Death_Tree.png'

const Death = props => {
  return (
    <div className='card-animation'>

      <img alt='' src={tree}
      style={{ background: 'white', width: '100%', position: 'relative' }} />

      <img alt='' src={cat}
      className='death-pulse'
      style={{ width: '100%', position: 'relative', top: '-10%', background: 'red' }} />

    </div>
  )
}

export default Death
