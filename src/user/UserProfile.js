import React from 'react'

export default function UserProfile(props) {
  if (props.appState.localUser.id) {
    return(
      <p>I AM PROFILE</p>
    )
  } else {
    props.history.push('/')
    return (<p>Redirecting to user sign in</p>)
  }
}
