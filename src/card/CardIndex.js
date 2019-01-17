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
      <div className='card-index-space'>
        <CardComponent key={i} card={card} indexState={this.state} currentUser={this.props.currentUser} setIndexState={this.setIndexState} />
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

  render() {
    return (
      <div className='card-index'>


        <h2>Card Index</h2>

        {this.renderAllCards()}

        {/* Shows lesson if one has been selected */}
        {this.state.cardLesson ? <LessonComponent card={this.state.cardLesson} setIndexState={this.setIndexState} unlockCard={this.unlockCard} /> : null }

        {/* Redirects back to profile if not logged in */}
        {localStorage.getItem('jwt') ? null : <Redirect to='/' />}

      </div>
    )
  }
}
