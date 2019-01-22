// React
import React from 'react'
import { Redirect, Link } from 'react-router-dom'
// Assets
import seeds from '../Assets/19_Sun_Seeds.png'
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
      console.log(currentUser)
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
