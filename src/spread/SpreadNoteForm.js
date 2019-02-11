import React from 'react'
import { fetchCreateNote } from './FetchSpreads'

export default class UserSpreadNoteForm extends React.Component {

  state = {
    content: ''
  }

  componentDidMount() {
    const noteContainers = Array.from(document.getElementsByClassName('profile-notes-container'))
    noteContainers.forEach(noteContainer => {
      noteContainer.scrollTop = noteContainer.scrollHeight
    })
  }

  componentDidUpdate() {
    const noteContainers = Array.from(document.getElementsByClassName('profile-notes-container'))
    noteContainers.forEach(noteContainer => {
      noteContainer.scrollTop = noteContainer.scrollHeight
    })
  }

  handleChange = event => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const body = { content: this.state.content, spread_id: this.props.spreadId }

    fetchCreateNote(body)
    .then(r => this.props.updateSpread(r.spread))

    this.props.handleToggleForm()
  }

  render() {
    if (this.props.noteFormVisible) {
      return (
        <div className='profile-note-form' onSubmit={this.handleSubmit}>

          <form>

            <textarea value={this.state.content} onChange={this.handleChange} />

            <br/>

            <input type="submit" value='Add Note' />

          </form>

        </div>
      )
    } else {
      return null
    }
  }

}
