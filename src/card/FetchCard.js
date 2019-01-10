import { backendAPI as API } from '../APIAddress'

export function fetchGetCard(cardId) {
  return fetch(API + `cards/${parseInt(cardId)}`)
  .then(r=>r.json())
}

export function fetchGetAllCards() {
  return fetch(API + 'cards')
  .then(r=>r.json())
}

export function fetchCreateCard(card) {
  const jwt = window.localStorage.getItem('jwt')
  if (jwt) {
    return fetch(API + 'cards', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type':'application/json' },
      body: JSON.stringify(card)
    })
    .then(r=>r.json())
  }
}
