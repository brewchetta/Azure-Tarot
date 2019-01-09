import { backendAPI as API } from '../APIAddress'

export function fetchGetCard(cardId) {
  return fetch(API + `cards/${parseInt(cardId)}`)
  .then(r=>r.json())
}

export function fetchCreateCard(card) {
  console.log('Creating card from: ', card)
  return fetch(API + 'cards', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type':'application/json' },
    body: JSON.stringify(card)
  })
  .then(r=>r.json())
}
