import React from 'react'
import CardIllustration from './CardIllustration'
import CardDescription from './CardDescription'
import CardDescriptionReversal from './CardDescriptionReversal'

class CardComponent extends React.Component {

  state = {
    inspect: false,
    mode: 'illustration'
  }
  // Inspect determines whether that card has been zoomed in
  // Modes are illustration, description, reversal

  handleClickInspect = (event) => {
    // const card = this.props.card
    const animating = this.props.indexState.animating
    const cardToInspect = this.props.indexState.cardToInspect

    if (!animating && !cardToInspect) {
      this.setState({ inspect: true })
    }
  }
  /* TODO: Build animation for card */


  render() {
    const inspect = this.state.inspect
    const card = this.props.card

    if (!inspect) {
      return(
        <div className='card-component' onClick={this.handleClickInspect}>
          <CardIllustration card={card} />
          <p>{card.card_rank}. The {card.card_name}</p>
        </div>
      )
    } else if (inspect) {
      return (
        <div className='card-component-inspect'>
          <div className='card-component-inspect-inner'>
            <CardIllustration card={card} />
            <p>{card.card_rank}. The {card.card_name}</p>
            <CardDescription card={card} />
            <CardDescriptionReversal card={card} />
          </div>
          <div className='card-tab-index'>
            <p className='card-tab'>X</p>
            <p className='card-tab'>Info</p>
            <p className='card-tab'>Reversal</p>
          </div>
        </div>
      )
    }

  }
}

export default CardComponent
