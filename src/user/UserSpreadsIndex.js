// React
import React from 'react'
// Fetches
import { fetchGetSpreadsByUser } from '../spread/FetchSpreads'
import { fetchGetAllCards } from '../card/FetchCard'
// Components
import UserSpread from './UserSpread'

class UserSpreadsIndex extends React.Component {

  state = {
    animating: false,
    cards: [],
    cardLesson: null,
    cardToInspect: null,
    spreads: []
  }

  componentDidMount() {
    fetchGetSpreadsByUser()
    .then(response => {
      this.setState({ spreads: response.spreads })
    })
    fetchGetAllCards()
    .then(response => {
      this.setState({ cards: response.cards })
    })
  }

  updateSpread = (updatedSpread) => {
    const updatedSpreads = this.state.spreads.map(spread => (
      spread.id === updatedSpread.id ? updatedSpread : spread
    ))
    this.setState({ spreads: updatedSpreads })
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  renderSpreads = () => {
    const spreads = this.state.spreads.length
    if (spreads) {
      return spreads.map((spread,i) =>(
        <UserSpread
        key={Math.random()}
        indexState={this.state}
        setIndexState={this.setIndexState}
        spread={spread}
        currentUser={this.props.currentUser}
        updateSpread={this.updateSpread}
        finalSpread={i === (spreads.length - 1)} />
      ))
    }
  }

  render() {
    return (
      <div className='profile-spread-index'>

        {this.renderSpreads()}

      </div>
    )
  }
}

export default UserSpreadsIndex
