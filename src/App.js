// React
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
//Redux
import mappedConnect from './redux/mappers'
// import { setCurrentUser, setAnimating } from './redux/actions'
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
import HelpComponent from './help/HelpComponent'

class App extends Component {

  // Checks if the JWT token has an associated user
  componentDidMount() {
    const jwt = localStorage.jwt
    fetchLoginUser(jwt).then(response => {
      this.props.setCurrentUser(response.user)
    })
  }

  // Removes session information
  handleLogout = () => {
    this.props.setCurrentUser(null)
    localStorage.removeItem('jwt')
  }

  // Main Render
  render() {
    const currentUser = this.props.currentUser
    if (localStorage.jwt && !currentUser) {
      return (<LoadingSpinner />)
    } else {
      return (
        <>

          {/* Header */}
          <Header />

          {/* Navbar */}
          {window.localStorage.jwt ?
          <Navbar handleLogout={this.handleLogout} />
          : null }

          {/* Sign Up */}
          <Route path='/' exact
          component={withRouter(UserSignUp)} />

          {/* Hidden Card Create */}
          <Route path='/card-create' exact
          component={withRouter(CardCreate)} />

          {/* Profile */}
          <Route path='/profile/:user_id' exact
          component={withRouter(UserProfile)} />

          {/* Readings */}
          <Route path='/your-readings' exact
          component={withRouter(UserReadings)}/>

          {/* Card Index */}
          <Route path='/card-index' exact
          component={withRouter(CardIndex)} />

          {/* Spread */}
          <Route path='/reading/:readingtype' exact
          component={SpreadTable} />

          { this.props.helpOpen ? <HelpComponent /> : null }

          <Footer />
        </>
      );
    }
  }
}

export default mappedConnect(App);
