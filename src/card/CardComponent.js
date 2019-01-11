import React from 'react'
import CardIllustration from './CardIllustration'

class CardComponent extends React.Component {

  state = {

  }

  card = this.props.card

  render() {
    return(
      <div className='card-component'>
        <CardIllustration card={this.card} />
        <p>{this.card.card_rank}. The {this.card.card_name}</p>
        <p>Suit: {this.card.card_suit}</p>
        <p>Description: {this.card.description}</p>
        <p>Keywords: {this.card.keywords.join(", ")}</p>
        <p>Reversal Description: {this.card.rev_description}</p>
        <p>Reversal Keywords: {this.card.rev_keywords.join(", ")}</p>
        <p>{this.card.major_arcana ? 'Part of the Major Arcana' : 'Not Major Arcana'}</p>
      </div>
    )
  }
}

export default CardComponent
