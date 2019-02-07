// React
import React from 'react'
import { Redirect } from 'react-router-dom'
// Redux
import mappedConnect from '../redux/mappers'
// Components
import UserSpreadsIndex from './UserSpreadsIndex'

class UserReadings extends React.Component {

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
          <UserSpreadsIndex />

        </div>
      )
    } else {
      return (<Redirect to='/' />)
    }
  }
}

export default mappedConnect(UserReadings)
