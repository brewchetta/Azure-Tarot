import React from 'react'
import sun from '../Assets/Loading_Sun.png'
import moon from '../Assets/Loading_Moon.png'

const LoadingSpinner = () => {
  return (
    <div className='loading-container'>

      <img alt='' src={sun} className='loading-sun' />

      <img alt='' src={moon} className='loading-moon' />

      <br/>

      <h3 className='load-message'>Booting up dynos</h3>
      <h3 className='load-message'>If this takes more than 30 seconds try refreshing the page</h3>

    </div>
  )
}

export default LoadingSpinner
