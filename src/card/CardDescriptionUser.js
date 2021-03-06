import React from 'react'

// Fetches
import { fetchUpdateUnlockCard } from './FetchCard'

class CardDescriptionReversal extends React.Component {

  state = {
    edit: false,
    input: this.props.cardUnlock.user_description
  }

  // For changing input
  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  // For submitting to database and updating user
  handleSubmit = (event) => {
    event.preventDefault()
    const state = this.state
    const user_description = this.props.cardUnlock.user_description
    this.toggleEdit()

    if (state.input.length > 25 && state.input !== user_description) {
      fetchUpdateUnlockCard(this.props.cardUnlock.id, state.input)
      .then(response => {
        this.props.editUserCardUnlocks(response.card_unlock)
      })
    } else {this.setState({ input: user_description })}

  }

  // Switches edit mode on/off
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  // Render
  render() {
    const edit = this.state.edit
    if (edit === false) {
      return (
        <div className='card-description-reversal'>

          <h4 onClick={this.toggleEdit}>{this.props.card.name}</h4>
          <p onClick={this.toggleEdit}>{this.props.cardUnlock.user_description}</p>

        </div>
      )
    }
    else {
      return (
        <div className='card-description-reversal'>

          <h4>{this.props.card.name}</h4>

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
