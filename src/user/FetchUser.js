import { backendAPI as API } from '../APIAddress'

export function fetchGetUser(userId) {
  return fetch(API + `users/${parseInt(userId)}`)
  .then(r=>r.json())
}

export function fetchLoginUser(userName) {
  return fetch(API + `profile`, {
    headers: {Authorization: `Bearer ${localStorage.jwt}`}
  })
  .then(r=>r.json())
}

export function fetchUserLogin(userParams) {
  const body = { user: {
    username: userParams.username,
    password: userParams.password
  }}
  console.log(body)
  return fetch(API + 'login', {
    method: 'POST',
    headers: { 'Accept':'application/json', 'Content-Type':'application/json' },
    body: JSON.stringify(body)
  })
  .then(r=>r.json())
}

export function fetchCreateUser(userParams) {
  const body = { user: {
      username: userParams.username,
      password: userParams.password
    }}
  return fetch(API + 'users', {
    method: 'POST',
    headers: { 'Accept':'application/json', 'Content-Type':'application/json' },
    body: JSON.stringify(body)
  })
  .then(r=>r.json())
}

export function fetchUpdateUser(userParams, id) {
  const body = { user: userParams }
  return fetch(API + `users/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      Authorization: `Bearer ${localStorage.jwt}` },
    body: JSON.stringify(body)
  })
  .then(r=>r.json())
}
