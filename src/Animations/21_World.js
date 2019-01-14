import React from 'react'
import forest from '../Assets/21_World_Forest.png'
import mountains from '../Assets/21_World_Mountains.png'
import town from '../Assets/21_World_Town.png'
import clouds from '../Assets/21_World_Clouds.png'

const World = props => {
  return (
    <div className='card-animation' style={{ backgroundImage: 'linear-gradient(#0088cc, #99ddff)' }}>

    <img alt='' src={mountains}
    className='animation-rotate-slower'
    style={{ width: '200%', position: 'relative', left: '-50%', top: '20%', filter: 'grayscale(70%)' }}
    />

    <img alt='' src={forest}
    className='animation-rotate-slow'
    style={{ width: '150%', position: 'absolute', bottom: '-65%', left: '-25%', filter: 'grayscale(60%)' }}
    />

    <img alt='' src={clouds}
    className='animation-rotate-slowest'
    style={{ width: '150%', position: 'absolute', bottom: '-70%', left: '-25%', filter: 'grayscale(60%)' }}
    />

    <img alt='' src={town}
    className='animation-rotate-medium'
    style={{ width: '100%', position: 'absolute', bottom: '-45%', left: '0%' }}
    />

    </div>
  )
}

export default World
