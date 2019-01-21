import React from 'react'
import sun from '../Assets/Loading_Sun.png'
import moon from '../Assets/Loading_Moon.png'

const LoadingSpinner = () => {
  return (
    <div className='loading-container'>

      <img alt='' src={sun} className='loading-sun' />

      <img alt='' src={moon} className='loading-moon' />

      <br/>

      <h3>Loading</h3>

    </div>
  )
}

export default LoadingSpinner
