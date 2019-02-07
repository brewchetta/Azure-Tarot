import { setCurrentUser, setAnimating, toggleHelp} from './actions'

// The purpose of this file is to export the mapStateToProps and mapDispatchToProps
// This way files stay just a little more DRY

export const mapState = ({ currentUser, animating, helpOpen }) => {
  return {
    currentUser,
    animating,
    helpOpen
  }
}

export const mapDispatch = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setAnimating: boolean => dispatch(setAnimating(boolean)),
    toggleHelp: boolean => dispatch(toggleHelp(boolean))
  }
}
