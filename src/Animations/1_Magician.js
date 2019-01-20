import React from 'react'
import hand from '../Assets/1_Magician_Hand.png'
import fingers from '../Assets/1_Magician_Fingers.png'
import cup from '../Assets/Symbol_Chalice.png'
import wand from '../Assets/Symbol_Broom.png'
import pentacle from '../Assets/Symbol_Pentacle.png'
import sword from '../Assets/Symbol_Sword.png'

export const Magician = props => {
  return (
    <div className='card-animation'>
      <img alt='' src={hand}
      style={{ height: '100%', width: '100%' }} />

      {/* The Four Suits */}
      <img alt='' src={cup} className='magician-symbols'
      style={{ left: '50%', top: '47%' }} />

      <img alt='' src={wand} className='magician-symbols'
      style={{ animationDelay: '2.5s', left: '51%', top: '45%', height: '18%', transform: 'rotate(180deg)' }} />

      <img alt='' src={pentacle} className='magician-symbols'
      style={{ animationDelay: '5s', left: '47%', top: '45%' }} />

      <img alt='' src={sword} className='magician-symbols'
      style={{ animationDelay: '7.5s', left: '54%', top: '43%', height: '19%' }} />

      {/* Rotating Flower */}
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

      {/* Fingers go last so they overlay other animations */}
      <img alt='' src={fingers}
      style={{ height: '100%', width: '100%', position: 'absolute', left: '0', top: '0', zIndex: '1' }} />

    </div>
  )
}
