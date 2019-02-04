// React
import React from 'react'
// Fetches
import { fetchUpdateUser } from './FetchUser'

export default class UserProfileBio extends React.Component {

  state = {
    edit: false,
    input: (this.props.user.profile ? this.props.user.profile : '')
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.setIndexState({ user: {...this.props.user, profile: this.state.input} })
    this.props.setCurrentUser({...this.props.currentUser, profile: this.state.input})

    fetchUpdateUser({profile: this.state.input}, this.props.currentUser.id)
    .then(console.log)

    this.toggleEdit()
  }

  render() {
    const user = this.props.user
    const currentUser = this.props.currentUser
    const userIsCurrentUser = user.id === currentUser.id

    if (userIsCurrentUser && this.state.edit === false && !user.profile)
    return (
        <>
          <p onClick={this.toggleEdit}>You haven't written a profile yet! Click me to add a bio!</p>

          <button
          onClick={this.toggleEdit}
          className='profile-note-form-button'>Edit Your Bio</button>
        </>
    )

    if (userIsCurrentUser && this.state.edit === false && user.profile) {
      return (
        <>
          <p onClick={this.toggleEdit}>{user.profile}</p>

          <button
          className='profile-note-form-button'
          onClick={this.toggleEdit}>Edit Your Bio</button>
        </>
      )
    }

    if (userIsCurrentUser && this.state.edit === true) {
      return (
        <form onSubmit={this.handleSubmit} className='profile-note-form'>

          <textarea value={this.state.input}
          onChange={this.handleChange} />

          <br/>

          <input type='submit' value='Save' className='profile-note-form-button' />

        </form>
      )
    }

    if (!userIsCurrentUser && user.profile) {
      return (
        <p>{user.profile}</p>
      )
    }
  }
}
