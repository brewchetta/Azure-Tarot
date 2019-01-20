// React
import React from 'react'

class CardBack extends React.Component {

  state = {
    unlocked: false
  }

  // Switches to lesson view
  handleClickInspect = (event) => {
    const animating = this.props.indexState.animating
    const cardToInspect = this.props.indexState.cardToInspect
    const cardLesson = this.props.indexState.cardLesson

    // Sends to card lesson if no cards already being inspected
    if (!animating && !cardToInspect && !cardLesson) {
      this.props.setIndexState({ cardLesson: this.props.card })
    }
  }

  render() {

    return (
      <div className='card-locked' onClick={this.handleClickInspect}>
      </div>
    )
  }
}

export default CardBack
