import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const user = props.currentUser
  const cards = user.cards

  // Will only render these links if a user exists
  const renderLinksIfUserExists = () => {
    if (user) {
      return (
        <>
          <Link to={user ? `/profile/${user.id}` : '/'} >{user ? 'Profile' : 'Home'}</Link>
          <Link to='/card-index'>Cards</Link>
          { cards.length > 5 ? <Link to='/reading/single'>Single Card Reading</Link> : null }
          { cards.length > 19 ? <Link to='/reading/three-card'>Three Card Reading</Link> : null }
          { cards.length > 5 ? <Link to='/your-readings'>Your Readings</Link> : null }
          <Link to='#' onClick={props.toggleHelp}>Help</Link>
        </>
      )
    }
  }

  return (
    <div className='navbar'>

      <div className='navbar-left'>
        {renderLinksIfUserExists()}
      </div>

      <div className='navbar-right'>
        {localStorage.jwt ? <Link to='/' onClick={props.handleLogout}>Logout</Link> : null}
      </div>

    </div>
  )
}

export default Navbar
