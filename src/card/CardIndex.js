// React
import React from  'react'
import { Redirect, Link } from 'react-router-dom'
// Redux
import mappedConnect from '../redux/mappers'
// Assets
import seeds from '../Assets/19_Sun_Seeds.png'
// Fetches
import { fetchUnlockCard } from './FetchCard'
// Cards
import cardsList from '../card-content'
// Components
import CardComponent from './CardComponent'
import CardBack from './CardBack'
import LessonComponent from '../lesson/LessonComponent'

class CardIndex extends React.Component {

  state = {
    cards: [],
    cardToInspect: null,
    cardLesson: null,
    popupOpen: true
  }

  componentDidMount() {
    this.setState({ cards: cardsList.majorArcana })
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  renderAllCards = () => {
    const currentUser = this.props.currentUser
    const cardUnlockIds = currentUser.card_unlocks.map(card => card.card_id )
    const currentCards = this.state.cards

    if (currentCards)
    return currentCards.map((card,i) => (
      <div className='card-index-space' key={i}>

        { cardUnlockIds.includes(card.id) ?
        // If unlocked uses card front
        <CardComponent card={card}
        indexState={this.state}
        setIndexState={this.setIndexState} />
        // If locked uses card back
        : <CardBack card={card}
        indexState={this.state}
        setIndexState={this.setIndexState} /> }


      </div>
    ))
  }

  unlockCard = (card, user_description) => {
    const user = this.props.currentUser

    fetchUnlockCard(card, user_description, user)
    .then(response => {console.log('Response: ', response); return response})
    .then(response => {
      this.setState({ popupOpen: true })
      this.props.setCurrentUser({ ...user, card_unlocks: [...user.card_unlocks, response.card_unlock] })
    })
  }

  renderCardIndexIntro = () => {
    const user = this.props.currentUser
    const popupOpen = this.state.popupOpen

    if (!user.card_unlocks.length) {
      return (
        <div className='onboard-popup'
        style={ popupOpen ? null : {left:'150%'} }
        onClick={this.exitPopup}>

          <p>Look at all these cards! They're very .... facedown. That's because they're not part of your deck yet.</p>

          <p>To add cards to your deck just start off by clicking one. That'll take you to a lesson where you can learn more about each card.</p>

          <p>Go ahead and click a card to start learning! That one in the top left looks like a good one.</p>

          <p className='onboard-popup-exit'>X</p>

          <img alt='' src={seeds} className='onboard-background' />

        </div>
      )
    }
  }

  renderPromptReading = () => {
    const user = this.props.currentUser
    const popupOpen = this.state.popupOpen

    if (user.card_unlocks.length > 3 && !user.spreads.length) {
      return (
        <div className='onboard-popup'
        style={ popupOpen ? null : {left:'150%'} }
         onClick={this.exitPopup}>

        <p>Youve got enough cards for a proper reading!</p>

        <p>Start your first reading by clicking the Single Card Reading tab or by clicking <Link to='reading/single'>here</Link></p>

        <p className='onboard-popup-exit'>X</p>

        <img alt='' src={seeds} className='onboard-background' />

        </div>
      )
    }
  }

  exitPopup = () => {
    this.setState({ popupOpen: false })
  }

  render() {
    return (
      <div className='card-index'>

        {this.renderCardIndexIntro()}

        {this.renderPromptReading()}

        {this.renderAllCards()}

        {/* Shows lesson if one has been selected */}
        {this.state.cardLesson ? <LessonComponent card={this.state.cardLesson} setIndexState={this.setIndexState} unlockCard={this.unlockCard} /> : null }

        {/* Redirects back to profile if not logged in */}
        {localStorage.getItem('jwt') ? null : <Redirect to='/' />}

      </div>
    )
  }
}

export default mappedConnect(CardIndex)
