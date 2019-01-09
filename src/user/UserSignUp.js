import React from 'react'
import { fetchCreateUser } from './FetchUser'

export default class UserSignUp extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetchCreateUser(this.state)
      .then(user => console.log(user))
  }

  render() {
    return(
      <div>
        <p>Sign Up!</p>
        <form onSubmit={this.handleSubmit}>
          <label name='username'>Name</label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>

          <br/>

          <label name='password'>Password</label>
          <input type='text' name='password' value={this.state.password} onChange={this.handleChange}/>

          <br/>

          <input type='submit' />
        </form>
      </div>
    )
  }
}
