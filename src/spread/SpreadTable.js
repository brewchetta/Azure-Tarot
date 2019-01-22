// React
import React from 'react'
import { Redirect } from 'react-router-dom'
// Fetches
import { fetchGetAllCards } from '../card/FetchCard'
import { fetchCreateSpread } from './FetchSpreads'
// Components
import SpreadCardSelect from './SpreadCardSelect'
import SpreadPosition from './SpreadPosition'
// Assets
import seeds from '../Assets/19_Sun_Seeds.png'

export default class SpreadTable extends React.Component {

  state = {
    animating: false,
    cards: [],
    cardToInspect: null,
    popupOpen: true,
    selectedCards: [],
    unlockedCards: [],
    popupOpenToReadings: false
  }

  componentDidMount() {
    fetchGetAllCards()
    .then(response => {
      this.setState({ cards: response.cards }, this.setUnlockedCards)
    })
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  // Sets pool of cards that user can draw from
  setUnlockedCards = () => {
    const currentUser = this.props.currentUser
    if (currentUser) {
      const userCardIds = currentUser.cards.map(card => card.id)
      let unlockedCards = []
      this.state.cards.forEach(card => {
        if (userCardIds.includes(card.id)) {
          unlockedCards.push(card)
        }
      })
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

    if ((cardsLength >= 3 && readingType === 'three-card') || (cardsLength >= 1 && readingType === 'single') ) {
      const body = {
        spread: {
          spread_type: readingType,
          user_id: this.props.currentUser.id,
          card_ids: this.state.selectedCards.map(card => card.id)
        }
      }

      console.log(body)

      fetchCreateSpread(body).then(console.log)
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
        <div className='onboard-popup' style={ popupOpen ? null : {left: '150%'} }>
          <p>Hey {user.username}! Welcome to your first tarot reading on Azure!</p>
          <p>Let's give you a reading first, then you can give one to each of your friends!</p>
          <p>Here's how you do it: draw a card from you deck on the left and then flip it over to see what you got.</p>
          <p>Your card wont actually tell you the future or anything fancy like that. Think of it more as a frame of reference. How does the card relate to whats going on around you? What insights can it give for your situation? Does it warn you about something? Ask you to embrace something? To let it go? Its up to you to decide what the card is saying, just remember there are no wrong answers!</p>
          <p>One last thing. People should only get one reading a day. Otherwise the cards'll get confused and lose some of their magic. Just saying!</p>
          <p className='onboard-popup-exit' onClick={this.exitPopup}>X</p>
          <img alt='' src={seeds} className='onboard-background' />
        </div>
      )
    }
  }

  renderToReadingsOnboard = () => {
    const user = this.props.currentUser
    const popupOpenToReadings = this.state.popupOpenToReadings
    if (user.spreads.length === 0 && popupOpenToReadings) {
      return (
        <div className='onboard-popup' style={ popupOpenToReadings ? null : {left: '150%'} }>
          <p>That's your card for the today! What will it tell you? Ask whether it reframes your day while you study it.</p>
          <p>Once you've finished your first reading, head over to the Your Readings tab where you can see all the readings! You can also write notes now about their accuracy or how you felt them or anything else you want to remember!</p>
          <p>Great job making it this far, keep unlocking cards, doing readings often and learning!</p>
          <p className='onboard-popup-exit' onClick={this.exitPopup}>X</p>
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
    // cardsLoaded determines whether there are any cards in state
    const cardsLoaded = this.state.cards.length
    // readingType is determined by the url params
    const readingType = this.props.match.params.readingtype

    // Kicks user if they're unregistered
    if (!localStorage.getItem('jwt')) { return (<Redirect to='/' />) }

    // One card reading
    if (cardsLoaded > 4 && unlockedCards.length + selectedCards.length > 4 && readingType === 'single') {
      return (
        <div>

          {/* Onboarding if the user needs it */}
          {this.renderSpreadWelcome()}
          {this.renderToReadingsOnboard()}

          {/* Select Card Button */}
          <SpreadCardSelect cards={this.state.cards}
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
    if (cardsLoaded > 19 && unlockedCards.length + selectedCards.length > 19 && readingType === 'three-card') {
      return (
        <div>

        {/* Select Card Button */}
        <SpreadCardSelect cards={this.state.cards}
        selectCard={this.selectCard}
        fullCards={selectedCards.length >= 3} />

          {/* Spread Card Positions */}
          <div className='table-card-container'>
            {this.renderCardPositions()}
          </div>

        </div>
      )
    }

    else if (cardsLoaded) {
      return (
        <p>It seems you got to this page by accident.</p>
      )
    }

    else {
      return (<p>Loading spinner goes heeya</p>)
    }
  }

}
