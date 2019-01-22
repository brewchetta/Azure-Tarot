import React from 'react'

// Fetches
import { fetchUpdateUnlockCard } from './FetchCard'

class CardDescriptionReversal extends React.Component {

  state = {
    edit: false,
    input: this.props.cardUnlock.user_description
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.toggleEdit()
    console.log(this.props.cardUnlock.id, this.state)

    fetchUpdateUnlockCard(this.props.cardUnlock.id, this.state.input)
    .then(console.log)
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  render() {
    const edit = this.state.edit
    if (edit === false) {
      return (
        <div className='card-description-reversal'>

          <h4 onClick={this.toggleEdit}>{this.props.card.card_name}</h4>
          <p onClick={this.toggleEdit}>{this.props.cardUnlock.user_description}</p>

        </div>
      )
    }
    else {
      return (
        <div className='card-description-reversal'>

          <h4>{this.props.card.card_name}</h4>

          <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.input} onChange={this.handleChange} />
          <br/>
          <input type='submit' value='Save Notes' />
          </form>

        </div>
      )
    }
  }
}

export default CardDescriptionReversal
