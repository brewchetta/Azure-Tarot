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
    currentUser: null
  }

  // Checks if the JWT token has an associated user
  componentDidMount() {
    const jwt = localStorage.jwt
    fetchLoginUser(jwt).then(response => this.setState({ currentUser: response.user }))
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
          <h1>Tarot App</h1>
          <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} />

          <Route path='/' exact
          render={
            props => <UserSignUp {...props}
            setCurrentUser={this.setCurrentUser}
            currentUser={currentUser} />
          } />

          <Route path='/card-create' exact component={CardCreate} />

          <Route path='/profile/:user_id' exact render={
            props => <UserProfile {...props} currentUser={currentUser} />
          } />

          <Route path='/card-index' exact render={ props=> <CardIndex {...props} />} />

          <Route path='/reading' exact render={ props=> <SpreadTable {...props} />} />

        </>
        </Router>
      );
    }
  }
}

export default App;
