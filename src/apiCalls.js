import endpoints from './endpoints.js';

export const postNewEmailSubscriber = (newEmailSubscriber) => {
  console.log(newEmailSubscriber)
  return fetch(endpoints.addUser, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEmailSubscriber)
  })
}

export const deleteSubscriber = (email) => {
  return fetch(endpoints.removeUser, {
    mode: 'cors',
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(email)
  })
}
