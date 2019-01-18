import React from 'react'

import { fetchGetSpreadsByUser } from '../spread/FetchSpreads'
import { fetchGetAllCards } from '../card/FetchCard'

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
    if (this.state.spreads) {
      return this.state.spreads.map(spread =>(
        <UserSpread
        key={Math.random()}
        indexState={this.state}
        setIndexState={this.setIndexState}
        spread={spread}
        currentUser={this.props.currentUser}
        updateSpread={this.updateSpread} />
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
