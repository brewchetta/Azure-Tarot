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
    username: userParams.login_username,
    password: userParams.login_password
  }}
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
