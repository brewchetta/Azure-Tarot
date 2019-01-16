//React
import React from 'react'
// Components
import CardIllustration from '../card/CardIllustration'

class LessonComponent extends React.Component {

  state = {
    card: {
      card_name: 'Death'
    }
  }

  render(){
    return (
      <div className='lesson-container' style={{ top: `${window.pageYOffset}px` }} >

        <div className='lesson-text'>

        <p>I am a large block of text full of stuff that you probably want to know about things.</p>

          <div className='lesson-buttons'>
            <p>Unlock Card</p>
          </div>

        </div>

        <div className='lesson-image'>
          <CardIllustration card={this.state.card} />
        </div>

        <p className='lesson-exit-button'>X</p>

      </div>
    )
  }
}

export default LessonComponent
