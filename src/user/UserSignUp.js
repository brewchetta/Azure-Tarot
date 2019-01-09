import React from 'react'
import { fetchCreateUser, fetchGetUserByName } from './FetchUser'

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

  handleSubmit = (event) => {
    event.preventDefault()

    if (event.target.name === 'signup') {

      fetchCreateUser(this.state)
      .then(user => console.log(user))
      .then(() => this.setState({ username: '', password: '' }))

    } else if (event.target.name === 'login') {

      fetchGetUserByName(this.state.login_username)
      .then(user => console.log(user))

    }
  }

  render() {
    return(
      <div>
        <p>Sign Up!</p>
        <form name='signup' onSubmit={this.handleSubmit}>
          <label name='username'>Name</label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>

          <br/>

          <label name='password'>Password</label>
          <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/>

          <br/>

          <input type='submit' />
        </form>

        <p>Log In!</p>
        <form name='login' onSubmit={this.handleSubmit}>
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
