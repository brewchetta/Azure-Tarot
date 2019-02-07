import { setCurrentUser, setAnimating, toggleHelp} from './actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// This file creates a higher order component that automatically maps and adds withRouter

const mapState = ({ currentUser, animating, helpOpen }) => {
  return {
    currentUser,
    animating,
    helpOpen
  }
}

const mapDispatch = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setAnimating: boolean => dispatch(setAnimating(boolean)),
    toggleHelp: boolean => dispatch(toggleHelp(boolean))
  }
}

export default function mappedConnect(component) {
  return withRouter(connect(mapState,mapDispatch)(component))
}
