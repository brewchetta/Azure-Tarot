import React from 'react'
import { fetchCreateNote } from './FetchSpreads'

export default class UserSpreadNoteForm extends React.Component {

  state = {
    content: ''
  }

  handleChange = event => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const body = {
      content: this.state.content,
      spread_id: this.props.spreadId
    }

    fetchCreateNote(body)
    .then(console.log)
  }

  render() {
    return (
      <div className='note-form' onSubmit={this.handleSubmit}>

        <p>Add Note</p>

        <form>

          <textarea value={this.state.content} onChange={this.handleChange} />

          <input type="submit" />

        </form>

      </div>
    )
  }

}
