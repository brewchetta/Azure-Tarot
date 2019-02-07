// React
import React from 'react'
import { Redirect } from 'react-router-dom'
// Redux
import mappedConnect from '../redux/mappers'
// Fetches
import { fetchCreateUser, fetchUserLogin } from './FetchUser'

class UserSignUp extends React.Component {

  state = {
    errors: '',
    username: '',
    password: '',
    signup: true,
    popup: false
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // Determines what mode the page is in and signs up or logs in depending
  handleSubmit = (event) => {
    event.preventDefault()

    this.state.signup ? this.handleSubmitSignUp() : this.handleSubmitLogin()
  }

  // For signups
  handleSubmitSignUp = (event) => {
    const {password, username} = this.state

    // First validates password length
    if (password.length < 6 || password.length > 20) {
      console.error('Error: Password must be between 6 and 20 characters')
      this.setState({ errors: 'Password must be between 6 and 20 characters' })
    }

    else if (username.length < 6 || this.state.password.length > 20) {
      console.error('Error: Username must be between 6 and 20 characters')
      this.setState({ errors: 'Username must be between 6 and 20 characters' })
    }

    else {
      fetchCreateUser(this.state)
      .then(response => {
        if (!response.user) {
          console.error('Error: ', response)
          if (response.errors) { this.setState({ errors: response.errors }) }
          if (response.message) { this.setState({ errors: response.message }) }
        }
        else if (response.user) {
          this.setLocalStorage(response)
          console.log('Created user: ', response.user)
          this.props.setCurrentUser(response.user)
        }
      })
    }
  }

  // Logins
  handleSubmitLogin = (event) => {
    fetchUserLogin(this.state)
    .then(response => {
      if (!response.user) {
        console.error('Error: ', response)
        if (response.errors) { this.setState({ errors: response.errors }) }
        if (response.message) { this.setState({ errors: response.message }) }
      }
      else if (response.user) {
        this.setLocalStorage(response)
        this.props.setCurrentUser(response.user)
      }
    })
  }

  setLocalStorage = (response) => {
    window.localStorage.setItem('jwt', response.jwt)
  }

  render() {
    const currentUser = this.props.currentUser

    if (currentUser) {
      return (<Redirect to={`/profile/${currentUser.id}`} />)
    }

    return(
      <div className='user-signup-login-container'>

        <br/>

        <form name='signup'
        onSubmit={this.handleSubmit}>

          <label name='username'>Name</label><br/>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>

          <br/>

          <label name='password'>Password</label><br/>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>

          <br/>

          <input type='submit'
          className='form-button'
          value='Signup'
          onClick={()=>this.setState({signup: true})} />

          <input type='submit'
          className='form-button'
          value='Login'
          onClick={()=>this.setState({signup: false})} />

        </form>

        <br/>

        <div style={{ width: '20%', borderTop: 'solid white 4px', margin: 'auto' }}></div>

      {/* --------Error Messages------- */}

        <div className='user-signup-login-error'
        onClick={() => this.setState({errors: ''})}
        style={this.state.errors ? null : { top: '-30%' } } >
          <p>{this.state.errors}</p>
        </div>

      </div>
    )
  }
}

export default mappedConnect(UserSignUp)
