// React
import React from  'react'
import { Redirect } from 'react-router-dom'
// Fetches
import { fetchGetAllCards } from './FetchCard'
import { fetchUnlockCard } from './FetchCard'
// Components
import CardComponent from './CardComponent'
import LessonComponent from '../lesson/LessonComponent'

export default class CardIndex extends React.Component {

  state = {
    cards: [],
    cardToInspect: null,
    cardLesson: null,
    animating: false
  }

  componentDidMount() {
    fetchGetAllCards()
    .then(response => {
      // This is to prevent cards from arriving out of order
      // TODO: refine this when adding more suits
      const sortedCards = response.cards.sort((a,b) => {
        return a.card_rank - b.card_rank
      })
      this.setState({ cards: sortedCards })
    })
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  renderAllCards = () => {
    return this.state.cards.map((card,i) => (
      <div className='card-index-space' key={i}>
        <CardComponent card={card} indexState={this.state} currentUser={this.props.currentUser} setIndexState={this.setIndexState} />
      </div>
    ))
  }

  unlockCard = (card) => {
    const user = this.props.currentUser

    fetchUnlockCard(card, user)
    .then(console.log)
    .then(() => {
      this.props.setCurrentUser({ ...user, cards: [...user.cards, card] })
    })
  }

  renderCardIndexIntro = () => {
    const user = this.props.currentUser

    if (!user.cards.length) {
      return (
        <div>

          <p>Look at all these cards! They're all rather .... facedown. That's because they're not part of your deck yet.</p>

          <p>Learning takes time and learning tarot can take a long time. Every card in the deck has a different significance, and that significance can get even more complicated depending on where it's positioned during a reading.</p>

          <p>Don't be alarmed! Every time you learn a new card you'll add it to your deck and be able to use it in your readings.</p>

          <p>Go ahead and click a card to start learning! That one in the top left might be a good one to start on.</p>


          <p></p>

        </div>
      )
    }
  }

  render() {
    return (
      <div className='card-index'>

        {this.renderCardIndexIntro()}

        {this.renderAllCards()}

        {/* Shows lesson if one has been selected */}
        {this.state.cardLesson ? <LessonComponent card={this.state.cardLesson} setIndexState={this.setIndexState} unlockCard={this.unlockCard} /> : null }

        {/* Redirects back to profile if not logged in */}
        {localStorage.getItem('jwt') ? null : <Redirect to='/' />}

      </div>
    )
  }
}
