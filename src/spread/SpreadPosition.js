import React from 'react'
import CardComponent from '../card/CardComponent'

class SpreadPosition extends React.Component {

  state = {
    flipped: false
  }

  flip = () => {
    if (!this.state.flipped) {
      this.setState({ flipped: true })
      this.props.setIndexState({ popupOpenToReadings: true })
    }
  }

  render() {
    const flipped = this.state.flipped
    const cardToInspect = this.props.indexState.cardToInspect
    const card = this.props.card

    if (!(cardToInspect === card)) {
      return (
        <div className='position-container-threecard'>
          <p>{this.props.position}</p>

          <div className='card-component-flip-container' onClick={this.flip}>
          <div className='card-component-flip-container-inner'
          style={flipped ? {transform: 'rotateY(0deg)'} : null }>

            <CardComponent card={card}
            indexState={this.props.indexState}
            setIndexState={this.props.setIndexState}
            currentUser={this.props.currentUser}
            spread={true} />

          <div className='card-component-back'>
          </div>

          </div>
          </div>

        </div>
      )
    } else {
      return (
        <CardComponent card={this.props.card}
        indexState={this.props.indexState}
        setIndexState={this.props.setIndexState}
        currentUser={this.props.currentUser} />
      )
    }
  }
}

export default SpreadPosition
