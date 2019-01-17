// React
import React from 'react'
import { Redirect } from 'react-router-dom'
// Fetches
import { fetchGetAllCards } from '../card/FetchCard'
import { fetchCreateSpread } from './FetchSpreads'
// Components
import SpreadCardSelect from './SpreadCardSelect'
import SpreadPosition from './SpreadPosition'

export default class SpreadTable extends React.Component {

  state = {
    cards: [],
    unlockedCards: [],
    selectedCards: [],
    animating: false,
    cardToInspect: null
  }

  componentDidMount() {
    fetchGetAllCards()
    .then(response => {
      this.setState({ cards: response.cards }, this.setUnlockedCards)
    })
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  // Sets pool of cards that user can draw from
  setUnlockedCards = () => {
    const currentUser = this.props.currentUser
    if (currentUser) {
      const userCardIds = currentUser.cards.map(card => card.id)
      let unlockedCards = []
      this.state.cards.forEach(card => {
        if (userCardIds.includes(card.id)) {
          unlockedCards.push(card)
        }
      })
      this.setState({ unlockedCards })
    }
  }

  // Choose card, add it to the spread, subtract it from cards
  selectCard = () => {
    const unlockedCards = this.state.unlockedCards
    const selectedCards = this.state.selectedCards

    const selectedCard = unlockedCards[Math.floor(Math.random() * unlockedCards.length)]
    this.setState({
      unlockedCards: unlockedCards.filter(card => card.id !== selectedCard.id),
      selectedCards: [...selectedCards, selectedCard]
    }, this.saveSpread)
  }

  // Saves spread if final card is selected
  saveSpread = () => {
    if (this.state.selectedCards.length >= 3) {
      const body = {
        spread: {
          spread_type: "threecard",
          user_id: this.props.currentUser.id,
          card_ids: this.state.selectedCards.map(card => card.id)
        }
      }

      console.log(body)

      fetchCreateSpread(body).then(console.log)
    }
  }

  // Shows the cards and determines their position
  renderCardPositions = () => {
    const positions = ['past', 'present', 'future']
    return this.state.selectedCards.map((card, i) => (
      <SpreadPosition key={i} card={card} position={positions[i]} indexState={this.state} setIndexState={this.setIndexState} currentUser={this.props.currentUser} />
    ))
  }

  render() {
    const selectedCards = this.state.selectedCards
    const unlockedCards = this.state.unlockedCards

    if (this.state.cards.length) {
      return (
        <div>
          {localStorage.getItem('jwt') ? null : <Redirect to='/' />}
          {selectedCards.length < 3 && (unlockedCards.length + selectedCards.length) >= 5 ? <SpreadCardSelect cards={this.state.cards} selectCard={this.selectCard} /> : null}
          <div className='table-card-container'>
            {this.renderCardPositions()}
          </div>
        </div>
      )
    } else {
      return (<p>Loading spinner goes heeya</p>)
    }
  }

}
