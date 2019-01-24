// React
import React from 'react'
import { Redirect } from 'react-router-dom'
// Components
import UserSpreadsIndex from './UserSpreadsIndex'

export default class UserReadings extends React.Component {

  state = {
    popupOpen: true
  }

  // Removes all popups when executed
  exitPopup = () => {
    this.setState({ popupOpen: false })
  }

  render() {
    const currentUser = this.props.currentUser
    if (currentUser) {
      return(
        <div>

          {/* Recent Readings */}
          <UserSpreadsIndex currentUser={currentUser} />

        </div>
      )
    } else {
      return (<Redirect to='/' />)
    }
  }
}
