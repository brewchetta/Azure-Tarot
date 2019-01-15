import React from 'react'
import { fetchGetSpreadsByUser } from '../spread/FetchSpreads'

class UserSpreads extends React.Component {

  state = {
    spreads: []
  }

  componentDidMount() {
    fetchGetSpreadsByUser()
    .then(response => {
      this.setState({ spreads: response.spreads })
    })
  }

  renderSpreads = () => {
    return this.state.spreads.map(spread => {
      return (
        <div key={spread.id}>
        <p>Spread</p>

          {spread.card_ids.map(card_id => {
            return (<p key={card_id}>{card_id}</p>)
          })}

        </div>
      )
    })
  }

  render() {
    return (
      <div>

        {this.renderSpreads()}

      </div>
    )
  }
}

export default UserSpreads
