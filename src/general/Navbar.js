import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const user = props.currentUser

  return (
    <div className='navbar'>

      <div className='navbar-left'>
        <Link to={user ? `/profile/${user.id}` : '/'} >{user ? 'Profile' : 'Home'}</Link>
      </div>

      <div className='navbar-right'>
        <p>Current user is: {user ? user.username : 'No user'}</p>
        {localStorage.jwt ? <button onClick={props.handleLogout}>Log Out</button> : null}
      </div>

    </div>
  )
}

export default Navbar
