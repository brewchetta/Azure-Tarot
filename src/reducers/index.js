const initialState = { animating: false, currentUser: null}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'WHATUP':
      return {...state}
    default:
      return state
  }
}
