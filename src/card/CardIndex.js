import React from  'react'
import { fetchGetAllCards } from './FetchCard'

export default class CardIndex extends React.Component {

  state = {
    cards: []
  }

  componentDidMount() {
    fetchGetAllCards()
    .then(response => {
      this.setState({ cards: response.cards }, ()=>console.log(this.state) )
    })
  }

  renderAllCards = () => {
    return this.state.cards.map((card,i) => (
      <div key={i}>
        <p>---------------</p>
        <p>{card.card_rank}. The {card.card_name}</p>
        <p>Suit: {card.card_suit}</p>
        <p>Description: {card.description}</p>
        <p>Keywords: {card.keywords.join(", ")}</p>
        <p>Reversal Description: {card.description}</p>
        <p>Reversal Keywords: {card.rev_keywords.join(", ")}</p>
        <p>{card.major_arcana ? 'Part of the Major Arcana' : 'Not Major Arcana'}</p>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <h2>Card Index</h2>
        {this.renderAllCards()}
      </div>
    )
  }
}
