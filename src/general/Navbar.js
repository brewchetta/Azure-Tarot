import React from 'react'
import { Link } from 'react-router-dom'
import mappedConnect from '../redux/mappers'

class Navbar extends React.Component {

  // Will only render these links if a user exists
  renderLinksIfUserExists = () => {
    const user = this.props.currentUser
    const cards = user.cards

    if (user) {
      return (
        <>
          <Link to={user ? `/#/profile/${user.id}` : '/'} >{user ? 'Profile' : 'Home'}</Link>

          <Link to='/#/card-index'>Cards</Link>

          { cards.length > 3 ? <Link to='/#/reading/single'>Single Card Reading</Link> : null }

          { cards.length > 5 ? <Link to='/#/reading/three-card'>Three Card Reading</Link> : null }

          { cards.length > 3 ? <Link to='/#/your-readings'>Your Readings</Link> : null }

          <Link to='#' onClick={this.props.toggleHelp}>Help</Link>
        </>
      )
    }
  }

  render() {
    return (
      <div className='navbar'>

        <div className='navbar-left'>
          {this.renderLinksIfUserExists()}
        </div>

        <div className='navbar-right'>
          {localStorage.jwt ? <Link to='/' onClick={this.props.handleLogout}>Logout</Link> : null}
        </div>

      </div>
    )
  }
}

export default mappedConnect(Navbar)
