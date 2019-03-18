import React from 'react'
import raven from '../../Assets/5_Hierophant_Raven.png'
import ravenhead from '../../Assets/5_Hierophant_Raven_Head.png'
import feather from '../../Assets/5_Hierophant_Feather.png'
import books from '../../Assets/5_Hierophant_Books.png'

export class Hierophant extends React.Component {

  componentDidMount() {
    const feathers = Array.from(document.getElementsByClassName('feather'))

    feathers.forEach(feather => {
      feather.style.animationDelay = Math.random() * 4 + 's'
      feather.style.transform = `rotate(${Math.random() * 45 + 15 + 'deg'})`
    })
  }

  render() {
    return (
      <div className='card-animation'>

        <img alt='' src={books} style={{ position: 'absolute', top: '0', height: '100%' }} />

        <img alt='' src={raven}
        className='card-fit-height'
        style={{ position: 'relative', left: '-50%', top: '20%' }} />

        <img alt='' src={feather}
        className='feather'
        style={{ position: 'absolute', margin: 'inherit', width: '10%', animation: 'featherfall-one 7s infinite' }} />

        <img alt='' src={feather}
        className='feather'
        style={{ position: 'absolute', margin: 'inherit', width: '10%', animation: 'featherfall-two 8s infinite' }} />

        <img alt='' src={feather}
        className='feather'
        style={{ position: 'absolute', margin: 'inherit', width: '10%', animation: 'featherfall-three 9s infinite' }} />

        <img alt='' src={feather}
        className='feather'
        style={{ position: 'absolute', margin: 'inherit', width: '10%', animation: 'featherfall-four 10s infinite' }} />

        <img alt='' src={feather}
        className='feather'
        style={{ position: 'absolute', margin: 'inherit', width: '10%', animation: 'featherfall-five 11s infinite' }} />

        <img alt='' src={ravenhead}
        className='card-fit-height'
        style={{ position: 'relative', top: '-81%', left: '-50%' }} />

      </div>
    )
  }
}
