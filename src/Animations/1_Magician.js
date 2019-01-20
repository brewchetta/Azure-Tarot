// Hand holds the rotating animation I built a while ago, along with the four symbols
import React from 'react'
import hand from '../Assets/1_Magician_Hand.png'
import fingers from '../Assets/1_Magician_Fingers.png'

export const Magician = props => {
  return (
    <div className='card-animation'>
      <img alt='' src={hand}
      style={{ height: '100%', width: '100%' }} />

      <div className='magician-rotator-container'>
        <div className='magician-rotator' style={{ animation: 'm-rotate 16s infinite linear'  }}>
          <div className='magician-rotator' style={{ animation: 'm-rotate 16s infinite linear'  }}>
            <div className='magician-rotator' style={{ animation: 'm-rotate 16s infinite linear'  }}>
              <div className='magician-rotator' style={{ animation: 'm-rotate 16s infinite linear'  }}>
                <div className='magician-rotator' style={{ animation: 'm-rotate 16s infinite linear'  }}>
                  <div className='magician-rotator' style={{ animation: 'm-rotate 16s infinite linear'  }}>
                    <div className='magician-rotator' style={{ animation: 'm-rotate 16s infinite linear'  }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img alt='' src={fingers}
      style={{ height: '100%', width: '100%', position: 'absolute', left: '0', top: '0', zIndex: '1' }} />

    </div>
  )
}
