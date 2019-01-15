import React from 'react'
import { Redirect } from 'react-router-dom'
import UserSpreads from './UserSpreads'

export default function UserProfile(props) {
  if (props.currentUser) {
    return(
      <div>

        <UserSpreads />

        <p>I AM PROFILE</p>

      </div>
    )
  } else {
    return (<Redirect to='/' />)
  }
}
