import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Stylesheet
import './App.css';
// Components
import UserSignUp from './user/UserSignUp'
import UserProfile from './user/UserProfile'
import CardCreate from './card/CardCreate'

class App extends Component {

  state = {
    localUser: {}
  }

  logoutUser = () => {
    this.setState({ localUser: {} })
  }

  loginUser = (user) => {
    this.setState({ localUser: user })
  }

  render() {
    return (
      <Router>
      <>
        <h1>Tarot App</h1>
        <p>Navbar goes here?</p>
        <button onClick={this.logoutUser}>Log Out</button>

        <Route path='/' exact
        render={
          props => <UserSignUp {...props}
          appState={this.state}
          loginUser={this.loginUser} />
        } />

        <Route path='/card-create' exact component={CardCreate} />

        <Route path='/profile/:user_id' exact render={
          props => <UserProfile {...props}
          appState={this.state} />
        } />

      </>
      </Router>
    );
  }
}

export default App;
