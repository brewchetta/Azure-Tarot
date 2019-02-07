import { setCurrentUser, setAnimating, toggleHelp} from './actions'
import { connect } from 'react-redux'

// This file creates another higher order component with connect that automatically adds mapState and mapDispatch
// This way files stay just a little more DRY

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
  return connect(mapState,mapDispatch)(component) 
}
