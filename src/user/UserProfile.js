// React
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
// Assets
import seeds from '../Assets/19_Sun_Seeds.png'
// Components
import UserSpreadsIndex from './UserSpreadsIndex'
import CardIllustration from '../card/CardIllustration'

export default class UserProfile extends React.Component {

  state = {
    popupOpen: true
  }

  // Shows most recent card unlock
  renderMostRecentCard = () => {
    const cards = this.props.currentUser.cards
    if (cards) {
      return (
        <div>

          <p style={{ marginLeft: '1em' }}>You most recently unlocked</p>

          <h3 style={{ marginLeft: '1em' }}>{cards[cards.length - 1].card_name}</h3>

          <div style={{ width: '200px', height: '300px' }}>
            <CardIllustration card={cards[cards.length - 1]} />
          </div>

        </div>
      )
    }
    console.log(this.props.currentUser.cards)
  }

  // Removes all popups when executed
  exitPopup = () => {
    this.setState({ popupOpen: false })
  }

  // Once a user has enough cards for a reading this will direct them to the reading
  renderSpreadIntro = () => {
    const user = this.props.currentUser
    const popupOpen = this.state.popupOpen
    if (!user.spreads.length && user.cards.length > 5 )
    return (
      <div className='onboard-popup' style={ popupOpen ? null : {left: '150%'} }>
        <p>Great! You've unlocked enough cards to start your first reading! As you unlock cards you'll be able to do different types of readings but for now you can try out the single card reading <Link to='/reading/one-card'>here!</Link></p>

        <p className='onboard-popup-exit' onClick={this.exitPopup}>X</p>
        <img alt='' src={seeds} className='onboard-background' />
      </div>
    )
  }

  renderProfileWelcome = () => {
    const user = this.props.currentUser
    const popupOpen = this.state.popupOpen
    if (!user.cards.length) {
      return (
        <div className='onboard-popup' style={ popupOpen ? null : {left: '150%'} }>
          <p>Welcome {user.username}! Are you ready to learn some tarot?</p>
          <p>You're probably eager to start doing readings but slow down! Tarot is a big subject and it won't make sense all at once.</p>
          <p>To help you understand what the different cards mean, let's head over to where they live. You can get there by clicking Cards on the navbar, or for now just clickin' <Link to='/card-index'>here!</Link></p>
          <p className='onboard-popup-exit' onClick={this.exitPopup}>X</p>
          <img alt='' src={seeds} className='onboard-background' />
        </div>
      )
    }
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>

        {/* Onboarding Functions */}
        {this.renderSpreadIntro()}
        {this.renderProfileWelcome()}

          {/* User Info Box */}
          <div className='profile-info-container'>

            {/* Shows the most recent card unlock */}
            {this.renderMostRecentCard()}

          </div>

          {/* Recent Readings */}
          <UserSpreadsIndex currentUser={this.props.currentUser} />

          {/* If No Cards Will Explain How to Unlock Readings */}

        </div>
      )
    } else {
      return (<Redirect to='/' />)
    }
  }
}
