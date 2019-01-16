import React from 'react'
import { fetchCreateUser, fetchUserLogin } from './FetchUser'
import { Redirect } from 'react-router-dom'

export default class UserSignUp extends React.Component {

  state = {
    username: '',
    password: '',
    login_username: '',
    login_password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmitSignUp = (event) => {
    event.preventDefault()

    fetchCreateUser(this.state)
    .then(response => {
      if (response.errors) {
        console.log('Error: ', response.errors)
      } else if (response.user) {
        console.log('Created user: ', response.user)
        this.props.setCurrentUser(response.user)
        this.setLocalStorage(response)
      }
    })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()

    fetchUserLogin(this.state)
    .then(response => {
      console.log(response)
      this.setLocalStorage(response)
      this.props.setCurrentUser(response.user)
    })
  }

  setLocalStorage = (response) => {
    localStorage.setItem('jwt', response.jwt)
  }

  render() {
    if (this.props.currentUser) {
      return (<Redirect to={`/profile/${this.props.currentUser.id}`} />)
    }

    return(
      <div className='user-signup-login-container'>
      <p>Sign Up!</p>
      <form name='signup'
      onSubmit={this.handleSubmitSignUp}>

        <label name='username'>Name</label>
        <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>

        <br/>

        <label name='password'>Password</label>
        <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/>

        <br/>

        <input type='submit' />

      </form>

      {/* ----------------- */}

      <p>Log In!</p>
      <form name='login' onSubmit={this.handleSubmitLogin}>
      <label name='login_username'>Name</label>
      <input type='text' name='login_username' value={this.state.login_username} onChange={this.handleChange}/>

      <br/>

      <label name='login_password'>Password</label>
      <input type='text' name='login_password' value={this.state.login_password} onChange={this.handleChange}/>

      <br/>

      <input type='submit' />
      </form>

      </div>
    )
  }
}
