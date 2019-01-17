import React from 'react'
import CardIllustration from './CardIllustration'
import CardDescription from './CardDescription'
import CardDescriptionReversal from './CardDescriptionReversal'

// To build card component you need to pass: card, indexState { animating: ? , cardToInspect: ?}, currentUser

class CardComponent extends React.Component {

  state = {
    mode: 'illustration',
    unlocked: false
  }

  // Modes are illustration, description, reversal

  componentDidMount() {
    if (this.props.currentUser) {
      this.lockCard()
    }
  }

  componentDidUpdate() {
    if (this.props.currentUser) {
      this.lockCard()
    }
  }

  // Checks whether a card has been unlocked by the user
  lockCard = () => {
    const currentUser = this.props.currentUser
    const thisCard = this.props.card
    const cardIds = currentUser.cards.map(card => card.id)
    const unlocked = this.state.unlocked

    if (cardIds.includes(thisCard.id) && unlocked === false) {
      this.setState({ unlocked: true })
    }
  }

  // Switches to the inspect or lesson view
  handleClickInspect = (event) => {
    // console.log(this.props.indexState)
    // console.log(this.state.unlocked)
    const animating = this.props.indexState.animating
    const cardToInspect = this.props.indexState.cardToInspect
    const cardLesson = this.props.indexState.cardLesson

    // Sends to card inspect if no other inspects or lesson
    if (!animating && !cardToInspect && !cardLesson && this.state.unlocked) {
      this.props.setIndexState({ cardToInspect: this.props.card })
    }

    // Sends to card lesson if card is locked
    else if (!animating && !cardToInspect && !cardLesson) {
      this.props.setIndexState({ cardLesson: this.props.card })
    }
  }

  handleClickTab = (event) => {
    const id = event.target.dataset.id

    if (id === 'exit') {
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
    const inspect = (this.props.indexState.cardToInspect === this.props.card)
    const card = this.props.card
    console.log(card.card_name)

    if (!inspect) {
      return(
        <div className='card-component'
        onClick={this.handleClickInspect}
        style={!this.state.unlocked ? { background: 'grey' } : this.props.spread ? {zIndex: -1} : null} >

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
