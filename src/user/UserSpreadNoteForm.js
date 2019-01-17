import React from 'react'

export default class UserSpreadNoteForm extends React.Component {

  state = {
    content: ''
  }

  handleChange = event => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
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
