// React
import React from 'react'
import { Link } from 'react-router-dom'
// Redux
import mappedConnect from '../redux/mappers'
// CSS
import '../css/AccordionMenu.css'

class AccordionMenu extends React.Component {

  state = {
    menuOpen: false
  }

  toggleMenuOpen = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  renderMenu = () => {
    const user = this.props.currentUser

    if (user && this.state.menuOpen) {
      const cards = user.card_unlocks

      return (
        <div className='accordion-menu-open' onClick={this.toggleMenuOpen}>

          <Link to={user ? `/profile/${user.id}` : '/'} >{user ? 'Profile' : 'Home'}</Link>

          <Link to='/card-index'>Cards</Link>

          { cards.length > 3 ? <Link to='/reading/single'>Single Card Reading</Link> : null }

          { cards.length > 5 ? <Link to='/reading/three-card'>Three Card Reading</Link> : null }

          { cards.length > 3 ? <Link to='/your-readings'>Your Readings</Link> : null }

          <Link to='#' onClick={this.props.toggleHelp}>Help</Link>

        </div>
      )
    }
  }

  render() {
    if (this.props.currentUser) return (
      <div className='accordion-menu small-screen-add'>

        <button onClick={this.toggleMenuOpen} className='accordion-menu-button'>
          <img alt=''
          src='https://static.thenounproject.com/png/878678-200.png' />
          <h1>Azure Tarot</h1>
        </button>

        {this.renderMenu()}

      </div>
    )
    else return (null)
  }
}

export default mappedConnect(AccordionMenu)
