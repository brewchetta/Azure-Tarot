// React
import React from 'react'
import { Redirect } from 'react-router-dom'
// Redux
import mappedConnect from '../redux/mappers'
// Fetches
import { fetchCreateSpread } from './FetchSpreads'
// Components
import SpreadCardSelect from './SpreadCardSelect'
import SpreadPosition from './SpreadPosition'
import LoadingSpinner from '../general/LoadingSpinner'
// Card List
import cardsList from '../card-content'
// Assets
import seeds from '../Assets/19_Sun_Seeds.png'
// CSS
import '../css/Spread.css'

class SpreadTable extends React.Component {

  state = {
    animating: false,
    cardToInspect: null,
    popupOpen: true,
    selectedCards: [],
    unlockedCards: [],
    popupOpenToReadings: false
  }

  componentDidMount() {
    this.setUnlockedCards()
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  // Sets pool of cards that user can draw from
  setUnlockedCards = () => {
    const currentUser = this.props.currentUser
    const cards = cardsList.all

    if (currentUser && cards) {
      console.log("All cards: ", cards)
      const unlockIds = currentUser.card_unlocks.map(unlock => unlock.card_id)
      const unlockedCards = cards.filter(card => unlockIds.includes(card.id))
      console.log("Unlocked cards: ", unlockedCards)
      this.setState({ unlockedCards })
    }
  }

  // Choose card, add it to the spread, subtract it from cards
  selectCard = () => {
    const selectedCards = this.state.selectedCards
    const readingType = this.props.match.params.readingtype

    if ((selectedCards.length < 3 && readingType === 'three-card') || (selectedCards.length < 1 && readingType === 'single')) {
      const unlockedCards = this.state.unlockedCards
      const selectedCard = unlockedCards[Math.floor(Math.random() * unlockedCards.length)]

      this.setState({
        unlockedCards: unlockedCards.filter(card => card.id !== selectedCard.id),
        selectedCards: [...selectedCards, selectedCard]
      }, this.saveSpread)
    }
  }

  // Saves spread if final card is selected
  saveSpread = () => {
    const readingType = this.props.match.params.readingtype
    const cardsLength = this.state.selectedCards.length
    const currentUser = this.props.currentUser
    const setCurrentUser = this.props.setCurrentUser
    console.log(setCurrentUser)

    if ((cardsLength >= 3 && readingType === 'three-card') || (cardsLength >= 1 && readingType === 'single') ) {
      const body = {
        spread: {
          spread_type: readingType,
          user_id: this.props.currentUser.id,
          card_ids: this.state.selectedCards.map(card => card.id)
        }
      }

      console.log(body)

      fetchCreateSpread(body)
      .then(response => {
        console.log(response)
        setCurrentUser({...currentUser, spreads: [...currentUser.spreads, response.spread]})
      })
    }
  }

  // Shows the cards and determines their position
  // For future Chett, this uses the render three cards css class
  renderCardPositions = () => {
    const readingType = this.props.match.params.readingtype
    let positions
    if (readingType === 'three-card') { positions = ['Past', 'Present', 'Possibility'] }
    else if (readingType === 'single') { positions = ['Present'] }
    return this.state.selectedCards.map((card, i) => (
      <SpreadPosition key={i} card={card} position={positions[i]} indexState={this.state} setIndexState={this.setIndexState} currentUser={this.props.currentUser} />
    ))
  }

  // Renders onboarding for first reading
  renderSpreadWelcome = () => {
    const user = this.props.currentUser
    const popupOpen = this.state.popupOpen

    if (!user.spreads.length) {
      return (
        <div className='onboard-popup'
        style={ popupOpen ? null : {left: '150%'} }
         onClick={this.exitPopup}>
          <p>Hey {user.username}! Welcome to your first tarot reading on Azure!</p>
          <p>Here's how you do it: draw a card from the deck on the left and then flip it over to see what you got.</p>
          <p>Your card wont actually tell you the future or anything. Think of it as a frame of reference. What can the card teach you about today?</p>
          <p>One last thing. People should only get one reading a day. Otherwise the cards'll get confused and lose some of their magic. Just saying!</p>
          <p className='onboard-popup-exit'>X</p>
          <img alt='' src={seeds} className='onboard-background' />
        </div>
      )
    }
  }

  // Onboarding for after first reading
  renderToReadingsOnboard = () => {
    const user = this.props.currentUser
    const popupOpenToReadings = this.state.popupOpenToReadings
    if (user.spreads.length === 1 && popupOpenToReadings) {
      return (
        <div className='onboard-popup'
        style={ popupOpenToReadings ? null : {left: '150%'} }
        onClick={this.exitPopup}>
          <p>That's your card for the today!</p>
          <p>Once you've finished your first reading, head over to Your Readings where you can write notes about each reading you make.</p>
          <p>_________</p>
          <p>Great job making it this far! No more handholding, just keep unlocking cards, doing readings every day, and learning everything you can!</p>
          <p className='onboard-popup-exit'>X</p>
          <img alt='' src={seeds} className='onboard-background' />
        </div>
      )
    }
  }

  // Removes all popups when executed
  exitPopup = () => {
    this.setState({ popupOpen: false, popupOpenToReadings: false })
  }

  render() {
    const selectedCards = this.state.selectedCards
    const unlockedCards = this.state.unlockedCards
    // readingType is determined by the url params
    const readingType = this.props.match.params.readingtype

    // Kicks user if they're unregistered
    if (!localStorage.getItem('jwt')) { return (<Redirect to='/' />) }

    // One card reading
    if (unlockedCards.length + selectedCards.length > 3 && readingType === 'single') {
      return (
        <div>

          {/* Onboarding if the user needs it */}
          {this.renderSpreadWelcome()}
          {this.renderToReadingsOnboard()}

          {/* Select Card Button */}
          <SpreadCardSelect cards={cardsList.all}
          selectCard={this.selectCard}
          fullCards={selectedCards.length >= 1} />

          {/* Spread Card Positions */}
          <div className='table-card-container'>
            {this.renderCardPositions()}
          </div>

        </div>
      )
    }

    // Three card reading
    if (unlockedCards.length + selectedCards.length > 5 && readingType === 'three-card') {
      return (
        <div>

        {/* Select Card Button */}
        <SpreadCardSelect cards={cardsList.all}
        selectCard={this.selectCard}
        fullCards={selectedCards.length >= 3} />

          {/* Spread Card Positions */}
          <div className='table-card-container'>
            {this.renderCardPositions()}
          </div>

        </div>
      )
    }

    else {
      return (<LoadingSpinner />)
    }
  }

}

export default mappedConnect(SpreadTable)
