import React from 'react'

export default function UserProfile(props) {
  if (window.localStorage.getItem('userName')) {
    return(
      <p>I AM PROFILE</p>
    )
  } else {
    console.log(props.history)
    props.history.push('/')
    return (<p>Redirecting to user sign in</p>)
  }
}
