import endpoints from './endpoints.js';

export const postNewEmailSubscriber = (newEmailSubscriber) => {
  return fetch(endpoints.users, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newEmailSubscriber)
  })
}

export const deleteSubscriber = (email) => {
  return fetch(endpoints.unsubscribe, {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(email)
  })
}
