import React from 'react'
import flower from '../Assets/19_Sun_Dandelion.png'
import seeds from '../Assets/19_Sun_Seeds.png'

export const Sun = props => {
  return (
    <div className='card-animation' style={{ background: '#ffe6b3' }}>

      <img alt='' src={flower} style={{ width: '100%' }} className='sun-sway' />

      <img alt='' src={seeds} className='sun-seeds' />

    </div>
  )
}
