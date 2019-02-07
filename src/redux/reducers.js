const initialState = { animating: false, currentUser: null, helpOpen: false }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {...state, currentUser: action.payload}
    case 'SET_ANIMATING':
      return {...state, animating: action.payload}
    case 'TOGGLE_HELP':
      return {...state, helpOpen: !state.helpOpen}
    default:
      return state
  }
}
