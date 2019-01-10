import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Stylesheet
import './App.css';
// Components
import UserSignUp from './user/UserSignUp'
import UserProfile from './user/UserProfile'
import CardCreate from './card/CardCreate'

class App extends Component {

  // Removes session information
  handleLogout = () => {
    window.localStorage.removeItem('currentUser')
    window.localStorage.removeItem('jwt')
  }

  // Main Render
  render() {
    return (
      <Router>
      <>
        <h1>Tarot App</h1>
        <p>Navbar goes here?</p>

        {window.localStorage.currentUser ? <button onClick={this.handleLogout}>Log Out</button> : null}

        <Route path='/' exact
        render={
          props => <UserSignUp {...props}
          appState={this.state} />
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
