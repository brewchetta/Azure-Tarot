// Moon blinks every once in a while (15-20 sec?)
// about 20 fireflies appear and disappear (set animation delay dynamically so they appear not all at once)

import React from 'react'
import moon from '../../Assets/18_Moon_Fullmoon.png'
import firefly from '../../Assets/18_Moon_Firefly.png'
import grass from '../../Assets/18_Moon_Grass.png'

export class Moon extends React.Component {

  componentDidMount() {
    const fireflies = Array.from(document.getElementsByClassName('firefly'))

    fireflies.forEach(firefly => {
      firefly.style.bottom = Math.floor(Math.random() * 50) + '%'
      firefly.style.left = Math.floor(Math.random() * 100) + '%'
      firefly.style.animationDelay = Math.random() * 10 + 's'
    })

  }

  render() {
    return (
      <div className='card-animation'>

      <img alt='' src={moon}
      style={{ position: 'relative', width: '40%', left: '30%' }}
      />

      <img alt='' src={grass}
      className='card-fit-width'
      style={{ position: 'relative', top: '10%' }}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0, animationDelay: '2s'}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0, animationDelay: '3s'}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0, animationDelay: '-1s'}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0}}
      />

      <img alt='' src={firefly}
      className='animation-firefly firefly'
      style={{ width: '10%', position: 'absolute', opacity: 0}}
      />

      </div>
    )
  }
}
