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
        'Content-Type':'application/json'
      },
      body: JSON.stringify(card)
    })
    .then(r=>r.json())
  }
}

// Card unlock fetch
export function fetchUnlockCard(card, user_description, currentUser) {
  const jwt = window.localStorage.getItem('jwt')
  const body = {
    card_unlock: {
      card_id: card.id,
      user_id: currentUser.id,
      user_description
    }
  }

  if (jwt) {
    return fetch(API + 'card_unlocks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(r=>r.json())
  }

}

export function fetchUpdateUnlockCard(cardId, user_description) {
  const jwt = window.localStorage.getItem('jwt')
  const body = {
    card_unlock: { user_description }
  }

  if (jwt) {
    return fetch(API + `card_unlocks/${cardId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(r=>r.json())
  }
}
