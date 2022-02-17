import endpoints from './endpoints.js';

export const postNewEmailSubscriber = (newEmailSubscriber) => {
  return fetch(endpoints.addUser, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEmailSubscriber)
  })
}

export const deleteSubscriber = (email) => {
  return fetch(endpoints.removeUser, {
    mode: 'no-cors',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })
}
