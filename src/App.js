import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Stylesheet
import './App.css';
// Components
import UserSignUp from './user/UserSignUp'
import UserProfile from './user/UserProfile'
import CardCreate from './card/CardCreate'

class App extends Component {
  render() {
    return (
      <Router>
      <>
        <h1>Tarot App</h1>
        <Route path='/' exact component={UserSignUp} />
        <Route path='/card-create' exact component={CardCreate} />
        <Route path='/profile' exact component={UserProfile} />
      </>
      </Router>
    );
  }
}

export default App;
