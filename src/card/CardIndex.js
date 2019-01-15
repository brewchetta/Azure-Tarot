// React
import React from  'react'
import { Redirect } from 'react-router-dom'
// Fetches
import { fetchGetAllCards } from './FetchCard'
// Components
import CardComponent from './CardComponent'

export default class CardIndex extends React.Component {

  state = {
    cards: [],
    cardToInspect: null,
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

  renderAllCards = () => {
    return this.state.cards.map((card,i) => (
      <CardComponent key={i} card={card} indexState={this.state} currentUser={this.props.currentUser} />
    ))
  }

  render() {
    return (
      <div className='card-index'>
        <h2>Card Index</h2>
        {this.renderAllCards()}
        {localStorage.getItem('jwt') ? null : <Redirect to='/' />}
      </div>
    )
  }
}
