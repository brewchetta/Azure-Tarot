import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Stylesheet
import './App.css';
// Fetch Functions
import { fetchLoginUser } from './user/FetchUser'
// Components
import Header from './general/Header'
import Footer from './general/Footer'
import Navbar from './general/Navbar'
import LoadingSpinner from './general/LoadingSpinner'
import UserSignUp from './user/UserSignUp'
import UserProfile from './user/UserProfile'
import UserReadings from './user/UserReadings'
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
      return (<LoadingSpinner />)
    } else {
      return (
        <Router>
        <>

          {/* Header */}
          <Header />

          {/* Navbar */}
          {window.localStorage.jwt ? <Navbar currentUser={this.state.currentUser} handleLogout={this.handleLogout} setCurrentUser={this.setCurrentUser} /> : null }

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
          <Route path='/profile/:user_id' exact
          render={
            props => <UserProfile {...props}
            currentUser={currentUser} />
          } />

          {/* Readings */}
          <Route path='/your-readings' exact render={
            props => <UserReadings {...props} currentUser={currentUser} />
          } />

          {/* Card Index */}
          <Route path='/card-index' exact render={ props=> <CardIndex {...props} currentUser={currentUser} setCurrentUser={this.setCurrentUser} />} />

          {/* Spread */}
          <Route path='/reading/:readingtype' render={ props=> <SpreadTable {...props} currentUser={currentUser} />} />

          <Footer />
        </>
        </Router>
      );
    }
  }
}

export default App;
