import React from 'react'
import { Redirect } from 'react-router-dom'

export default function UserProfile(props) {
  if (props.currentUser) {
    return(
      <p>I AM PROFILE</p>
    )
  } else {
    return (<Redirect to='/' />)
  }
}
