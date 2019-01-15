import React from 'react'
import CardIllustration from './CardIllustration'
import CardDescription from './CardDescription'
import CardDescriptionReversal from './CardDescriptionReversal'

class CardComponent extends React.Component {

// To build card component you need to pass: card, indexState { animating: ? , cardToInspect: ? }

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

  handleClickTab = (event) => {
    const id = event.target.dataset.id
    return id === 'exit' ? this.setState({ inspect: false })
    : this.setState({ mode: id })
  }

  renderCardInspect = () => {
    const mode = this.state.mode
    const card = this.props.card

    return mode === 'illustration' ? (<> <CardIllustration card={card} /> <p>{card.card_rank}. The {card.card_name}</p> </>)
      : mode === 'description' ? (<CardDescription card={card} />)
      : mode === 'reversal' ? (<CardDescriptionReversal card={card} />)
      : null
  }


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
            {this.renderCardInspect()}
          </div>
          <div className='card-tab-index'>
            <p className='card-tab' onClick={this.handleClickTab} data-id='exit'>X</p>
            <p className='card-tab' onClick={this.handleClickTab} data-id='illustration'>Pic</p>
            <p className='card-tab' onClick={this.handleClickTab} data-id='description'>Info</p>
            <p className='card-tab' onClick={this.handleClickTab} data-id='reversal'>Reversal</p>
          </div>
        </div>
      )
    }

  }
}

export default CardComponent
