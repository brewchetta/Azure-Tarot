// React
import React from 'react'
import { Redirect, Link } from 'react-router-dom'
// Redux
import mappedConnect from '../redux/mappers'
// Components
import LoadingSpinner from '../general/LoadingSpinner'
import UserProfileBio from './UserProfileBio'
// Assets
import seeds from '../Assets/19_Sun_Seeds.png'
// Fetches
import { fetchGetUser } from './FetchUser'

class UserProfile extends React.Component {

  state = {
    user: null,
    popupOpen: true
  }

  componentDidMount() {
    fetchGetUser(this.props.match.params.user_id)
    .then(response => this.setState({ user: response.user }))
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
      <div className='onboard-popup'
      style={ popupOpen ? null : {left: '150%'} }
      onClick={this.exitPopup} >
        <p>Great! You've unlocked enough cards to start your first reading! As you unlock cards you'll be able to do different types of readings but for now you can try out the single card reading <Link to='/reading/single'>here!</Link></p>

        <p className='onboard-popup-exit'>X</p>
        <img alt='' src={seeds} className='onboard-background' />
      </div>
    )
  }

  renderProfileWelcome = () => {
    const user = this.props.currentUser
    const popupOpen = this.state.popupOpen
    if (!user.cards.length) {
      return (
        <div className='onboard-popup'
        style={ popupOpen ? null : {left: '150%'} }
        onClick={this.exitPopup}>
          <p>Welcome {user.username}! Are you ready to learn some tarot?</p>
          <p>You're probably eager to start doing readings but slow down! Tarot is a big subject and it won't make sense all at once.</p>
          <p>To help you understand what the different cards mean, let's head over to where they live. You can get there by clicking Cards on the navbar, or for now just clickin' <Link to='/card-index'>here!</Link></p>
          <p className='onboard-popup-exit'>X</p>
          <img alt='' src={seeds} className='onboard-background' />
        </div>
      )
    }
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  render() {
    const currentUser = this.props.currentUser
    if (this.state.user) {
      const user = this.state.user
      return (
        <div className='profile-info-container'>

          {/* Onboarding Functions */}
          {this.renderSpreadIntro()}
          {this.renderProfileWelcome()}

          <h3>{user.id === currentUser.id ? 'Welcome ' : null}{user.username}</h3>

          <p>{ user.cards.length ? `${user.cards.length} cards unlocked` : 'No cards unlocked yet!'} </p>

          <p>{user.spreads.length ? user.spreads.length : 'No'} readings performed</p>

          {user ?
            <UserProfileBio user={this.state.user}
            setIndexState={this.setIndexState} />
          :null}

        </div>
      )
    }

    else {
      return (
        <>
          <LoadingSpinner />
          {!currentUser ? <Redirect to='/' /> : null}
        </>
      )
    }
  }
}

export default mappedConnect(UserProfile)
