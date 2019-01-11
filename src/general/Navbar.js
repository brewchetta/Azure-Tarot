import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <p>I am navbar</p>
      <p>Current user is: {props.currentUser ? props.currentUser.username : 'No user'}</p>
    </div>
  )
}

export default Navbar
