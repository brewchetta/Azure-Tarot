import React from 'react'

import { fetchGetSpreadsByUser } from '../spread/FetchSpreads'
import { fetchGetAllCards } from '../card/FetchCard'

import UserSpread from './UserSpread'

class UserSpreadsIndex extends React.Component {

  state = {
    cards: [],
    spreads: [],
    animating: false,
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
    return this.state.spreads.map(spread =>(
      <UserSpread key={spread.id} spread={spread} />
    ))
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
