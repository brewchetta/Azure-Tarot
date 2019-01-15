import React from 'react'

import { fetchGetSpreadsByUser } from '../spread/FetchSpreads'
import { fetchGetAllCards } from '../card/FetchCard'

import UserSpread from './UserSpread'

class UserSpreadsIndex extends React.Component {

  state = {
    cards: [],
    spreads: [],
    cardToInspect: null
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

  renderSpreads = () => {
    if (this.state.spreads) {
      return this.state.spreads.map(spread =>(
        <UserSpread key={spread.id} indexState={this.state} spread={spread} currentUser={this.props.currentUser} />
      ))
    }
  }

  render() {
    return (
      <div>

        {this.renderSpreads()}

      </div>
    )
  }
}

export default UserSpreadsIndex
