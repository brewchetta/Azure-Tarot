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

  // Switches to the inspect or lesson view
  handleClickInspect = (event) => {
    const animating = this.props.indexState.animating
    const cardToInspect = this.props.indexState.cardToInspect
    const cardLesson = this.props.indexState.cardLesson

    // Sends to card inspect if no other inspects or lesson
    if (!animating && !cardToInspect && !cardLesson && this.state.unlocked) {
      this.setState({ inspect: true })
      this.props.setIndexState({ cardToInspect: this.props.card })
    }

    // Sends to card lesson if card is locked
    else if (!animating && !cardToInspect && !cardLesson) {
      console.log('Prepare the lessons')
      this.props.setIndexState({ cardLesson: this.props.card })
    }
  }

  /* TODO: REMOVE UNLOCK CARD ON CLICK */
  handleClickTab = (event) => {
    const id = event.target.dataset.id

    if (!this.state.unlocked && this.props.currentUser) {
      this.setState({ unlocked: true })
      fetchUnlockCard(this.props.card, this.props.currentUser)
      .then(console.log)
    }

    if (id === 'exit') {
      this.setState({ inspect: false })
      this.props.setIndexState({ cardToInspect: null })
    } else {
      this.setState({ mode: id })
    }
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
