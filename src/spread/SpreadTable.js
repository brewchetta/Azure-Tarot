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
    const readingType = this.props.match.params.readingtype
    let positions
    if (readingType === 'three-card') { positions = ['Past', 'Present', 'Future'] }
    else if (readingType === 'single') { positions = ['Present'] }
    return this.state.selectedCards.map((card, i) => (
      <SpreadPosition key={i} card={card} position={positions[i]} indexState={this.state} setIndexState={this.setIndexState} currentUser={this.props.currentUser} />
    ))
  }

  render() {
    const selectedCards = this.state.selectedCards
    const unlockedCards = this.state.unlockedCards
    // cardsLoaded determines whether there are any cards in state
    const cardsLoaded = this.state.cards.length
    // readingType is determined by the url params
    const readingType = this.props.match.params.readingtype

    // Kicks user if they're unregistered
    if (!localStorage.getItem('jwt')) { return (<Redirect to='/' />) }

    // One card reading
    if (cardsLoaded > 5 && unlockedCards.length > 5 && readingType === 'single') {
      return (
        <div>

          {/* Select Card Button */}
          {selectedCards.length < 1 ? <SpreadCardSelect cards={this.state.cards} selectCard={this.selectCard} /> : null}

          {/* Spread Card Positions */}
          <div className='table-card-container'>
            {this.renderCardPositions()}
          </div>

        </div>
      )
    }

    // Three card reading
    if (cardsLoaded > 20 && unlockedCards.length > 20 && readingType === 'three-card') {
      return (
        <div>

          {/* Select Card Button */}
          {selectedCards.length < 3 ? <SpreadCardSelect cards={this.state.cards} selectCard={this.selectCard} /> : null}

          {/* Spread Card Positions */}
          <div className='table-card-container'>
            {this.renderCardPositions()}
          </div>

        </div>
      )
    }

    else if (cardsLoaded) {
      return (
        <p>It seems you got to this page by accident.</p>
      )
    }

    else {
      return (<p>Loading spinner goes heeya</p>)
    }
  }

}
