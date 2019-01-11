import React from  'react'
import { fetchGetAllCards } from './FetchCard'
import CardComponent from './CardComponent'

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
      <CardComponent key={i} card={card} />
    ))
  }

  render() {
    return (
      <div className='card-index'>
        <h2>Card Index</h2>
        {this.renderAllCards()}
      </div>
    )
  }
}
