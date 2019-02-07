export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}

export function setAnimating(boolean) {
  return {
    type: 'SET_ANIMATING',
    payload: boolean
  }
}

export function toggleHelp() {
  return {
    type: 'TOGGLE_HELP'
  }
}
