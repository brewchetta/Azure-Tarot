import React from 'react'
import { fetchGetAllCards } from '../card/FetchCard'
import SpreadCardSelect from './SpreadCardSelect'
import SpreadPosition from './SpreadPosition'

export default class SpreadTable extends React.Component {

  state = {
    cards: [],
    selectedCards: [],
    animating: false,
    cardToInspect: null
  }

  componentDidMount() {
    fetchGetAllCards()
    .then(response => {
      this.setState({ cards: response.cards })
    })
  }

  // Choose card, add it to the spread, subtract it from cards
  selectCard = () => {
    const cards = this.state.cards
    const selectedCards = this.state.selectedCards

    const selectedCard = cards[Math.floor(Math.random() * cards.length)]
    this.setState({
      cards: cards.filter(card => card.id !== selectedCard.id),
      selectedCards: [...selectedCards, selectedCard]
    })
  }

  // Saves spread if final card is selected
  saveSpread = () => {
    
  }

  // Shows the cards and determines their position
  renderCardPositions = () => {
    const positions = ['past', 'present', 'future']
    return this.state.selectedCards.map((card, i) => (
      <SpreadPosition key={i} card={card} position={positions[i]} indexState={this.state} />
    ))
  }

  render() {
    if (this.state.cards.length) {
      return (
        <div>
          <p>I am Spread Table</p>
          <p>I have {this.state.cards.length} cards in my state</p>
          <p>I have {this.state.selectedCards.length} selected cards.</p>
          {this.state.selectedCards.length < 3 ? <SpreadCardSelect cards={this.state.cards} selectCard={this.selectCard} /> : null}
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
