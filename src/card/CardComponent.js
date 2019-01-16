import React from 'react'
import { fetchUnlockCard } from './FetchCard'
import CardIllustration from './CardIllustration'
import CardDescription from './CardDescription'
import CardDescriptionReversal from './CardDescriptionReversal'

// To build card component you need to pass: card, indexState { animating: ? , cardToInspect: ?}, currentUser

class CardComponent extends React.Component {

  state = {
    inspect: false,
    mode: 'illustration',
    unlocked: false
  }
  // Inspect determines whether that card has been zoomed in
  // Modes are illustration, description, reversal

  componentDidMount() {
    if (this.props.currentUser) {
      this.lockCard()
    }
  }

  // Checks whether a card has been unlocked by the user
  lockCard = () => {
    const currentUser = this.props.currentUser
    const thisCard = this.props.card
    const cardIds = currentUser.cards.map(card => card.id)

    if (cardIds.includes(thisCard.id)) {
      this.setState({ unlocked: true })
      // console.log(`! ${thisCard.card_name} is unlocked`)
    } else {
      this.setState({ unlocked: false })
      // console.log(`# ${thisCard.card_name} is locked`)
    }
  }

  // Switches to the inspect view
  handleClickInspect = (event) => {
    const animating = this.props.indexState.animating
    const cardToInspect = this.props.indexState.cardToInspect

    if (!animating && !cardToInspect) {
      console.log(event.target)
      // event.target.style.top = `${window.pageYOffset / 2}px`
      this.setState({ inspect: true })
    }
  }
  /* TODO: Build animation for card */

  /* TODO: REMOVE UNLOCK CARD ON CLICK */
  // This will automatically unlock the card if the character clicks anything on it
  handleClickTab = (event) => {
    const id = event.target.dataset.id

    if (!this.state.unlocked && this.props.currentUser) {
      this.setState({ unlocked: true })
      fetchUnlockCard(this.props.card, this.props.currentUser)
      .then(console.log)
    }

    return id === 'exit' ? this.setState({ inspect: false })
    : this.setState({ mode: id })
  }

  renderCardInspect = () => {
    const mode = this.state.mode
    const card = this.props.card

    return mode === 'illustration' ? (<> <CardIllustration card={card} />
      <p className='card-name-inspect'>{card.card_rank}. The {card.card_name}</p> </>)
      : mode === 'description' ? (<CardDescription card={card} />)
      : mode === 'reversal' ? (<CardDescriptionReversal card={card} />)
      : null
  }


  render() {
    const inspect = this.state.inspect
    const card = this.props.card

    if (!inspect) {
      return(
        <div className='card-component'
        onClick={this.handleClickInspect}
        style={!this.state.unlocked ? { background: 'grey' } : null} >

          <CardIllustration card={card} />
          <p className='card-name'>{card.card_rank}. The {card.card_name}</p>

        </div>
      )
    } else if (inspect) {
      return (
        <div className='card-component-inspect' style={{ top: `${window.pageYOffset}px` }}>

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
