import React from 'react'
import CardIllustration from './CardIllustration'
import CardDescription from './CardDescription'
import CardDescriptionReversal from './CardDescriptionReversal'

class CardComponent extends React.Component {

  state = {
    inspecting: false,
    mode: 'illustration'
  }
  // Inspecting determines whether that card has been zoomed in
  // Modes are illustration, description, reversal

  card = this.props.card

  render() {
    return(
      <div className='card-component'>
        <CardIllustration card={this.card} />
        <p>{this.card.card_rank}. The {this.card.card_name}</p>
        <CardDescription card={this.card} />
        <CardDescriptionReversal card={this.card} />
      </div>
    )
  }
}

export default CardComponent
