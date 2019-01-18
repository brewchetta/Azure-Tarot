import React from 'react'
import { Redirect } from 'react-router-dom'
import UserSpreadsIndex from './UserSpreadsIndex'

export default function UserProfile(props) {

  // const renderMostRecentCard = () => {
  //   console.log(props.currentUser.cards)
  // }

  if (props.currentUser) {
    return(
      <div>


        {/* User Info Box */}
        <div className='profile-info-container'>

        {/* Shows the most recent card unlock */}
        {/* renderMostRecentCard() */}

        </div>


        {/* Recent Readings */}
        <UserSpreadsIndex currentUser={props.currentUser} />

        {/* If No Cards Will Explain How to Unlock Readings */}

      </div>
    )
  } else {
    return (<Redirect to='/' />)
  }
}
