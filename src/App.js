import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Stylesheet
import './App.css';
// Fetch Functions
import { fetchLoginUser } from './user/FetchUser'
// Components
import Navbar from './general/Navbar'
import UserSignUp from './user/UserSignUp'
import UserProfile from './user/UserProfile'
import CardCreate from './card/CardCreate'
import CardIndex from './card/CardIndex'
import SpreadTable from './spread/SpreadTable'

class App extends Component {

  state = {
    currentUser: null,
    animating: false
  }

  // Checks if the JWT token has an associated user
  componentDidMount() {
    const jwt = localStorage.jwt
    fetchLoginUser(jwt).then(response => this.setState({ currentUser: response.user }, ()=>console.log(this.state.currentUser)))
  }

  // Sets the current user when logging in or signing up
  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }

  // Removes session information
  handleLogout = () => {
    this.setCurrentUser(null)
    localStorage.removeItem('jwt')
  }

  // Main Render
  render() {
    const currentUser = this.state.currentUser
    if (localStorage.jwt && !currentUser) {
      return (<p>Loading spinner goes here</p>)
    } else {
      return (
        <Router>
        <>

          {/* Header */}
          <div className='title'>
          <h1>Tarot App</h1>
          </div>

          {/* Navbar */}
          {window.localStorage.jwt ? <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} /> : null }

          {/* Sign Up */}
          <Route path='/' exact
          render={
            props => <UserSignUp {...props}
            setCurrentUser={this.setCurrentUser}
            currentUser={currentUser} />
          } />

          {/* Hidden Card Create */}
          <Route path='/card-create' exact component={CardCreate} />

          {/* Profile */}
          <Route path='/profile/:user_id' exact render={
            props => <UserProfile {...props} currentUser={currentUser} />
          } />

          {/* Card Index */}
          <Route path='/card-index' exact render={ props=> <CardIndex {...props} currentUser={currentUser} />} />

          {/* Spread */}
          <Route path='/reading' exact render={ props=> <SpreadTable {...props} currentUser={currentUser} />} />

        </>
        </Router>
      );
    }
  }
}

export default App;
