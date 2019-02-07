function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}

function setAnimating(boolean) {
  return {
    type: 'SET_ANIMATING',
    payload: boolean
  }
}
