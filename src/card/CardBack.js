// React
import React from 'react'
// Assets
import cornerFern from '../Assets/Corner_Fern.png'
import cornerLeaf from '../Assets/Corner_Leaf.png'
// Components
import CardIllustration from './CardIllustration'
import CardDescription from './CardDescription'
import CardDescriptionUser from './CardDescriptionUser'

// To build card component you need to pass: card, indexState { animating: ? , cardToInspect: ?}, currentUser

class CardBack extends React.Component {

  state = {
    unlocked: false
  }

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
    const card = this.props.card

    return (
      <div className='card-locked' onClick={this.handleClickInspect}>
      </div>
    )

  }
}

export default CardBack
