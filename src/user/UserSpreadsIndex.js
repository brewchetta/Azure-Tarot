// React
import React from 'react'
// Redux
import mappedConnect from '../redux/mappers'
// Fetches
import { fetchGetSpreadsByUser } from '../spread/FetchSpreads'
// Components
import UserSpread from './UserSpread'
//Cards
import cardsList from '../card-content'

class UserSpreadsIndex extends React.Component {

  state = {
    spreads: []
  }

  componentDidMount() {
    fetchGetSpreadsByUser()
    .then(response => {
      this.setState({ spreads: response.spreads })
    })
    this.setState({ cards: cardsList.all })
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
    const spreads = [...this.state.spreads].reverse()
    if (spreads) {
      return spreads.map((spread,i) =>(
        <UserSpread
        key={Math.random()}
        indexState={this.state}
        setIndexState={this.setIndexState}
        spread={spread}
        updateSpread={this.updateSpread}
        finalSpread={i === (spreads.length - 1)} />
      ))
    }
  }

  render() {
    return (
      <div className='profile-spread-index'>

        <h2 style={{ textDecoration: 'underline', paddingBottom: '1em' }}>{this.props.currentUser.spreads.length ? 'Your Tarot Readings' : null }</h2>

        {this.renderSpreads()}

      </div>
    )
  }
}

export default mappedConnect(UserSpreadsIndex)
