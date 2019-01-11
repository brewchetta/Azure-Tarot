import React from 'react'
import CardIllustration from './CardIllustration'
import CardDescription from './CardDescription'
import CardDescriptionReversal from './CardDescriptionReversal'

class CardComponent extends React.Component {

  state = {
    inspecting: true,
    mode: 'illustration'
  }
  // Inspecting determines whether that card has been zoomed in
  // Modes are illustration, description, reversal

  card = this.props.card

  render() {
    const inspecting = this.state.inspecting

    if (!inspecting) {
      return(
        <div className='card-component'>
        <CardIllustration card={this.card} />
        <p>{this.card.card_rank}. The {this.card.card_name}</p>
        <CardDescription card={this.card} />
        <CardDescriptionReversal card={this.card} />
        </div>
      )
    } else if (inspecting) {
      return (
        <div className='card-component-inspect'>
        <CardIllustration card={this.card} />
        <p>{this.card.card_rank}. The {this.card.card_name}</p>
        <CardDescription card={this.card} />
        <CardDescriptionReversal card={this.card} />
        </div>
      )
    }

  }
}

export default CardComponent
