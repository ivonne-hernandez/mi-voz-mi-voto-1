import endpoints from './endpoints.js';

export const postNewEmailSubscriber = (newEmailSubscriber) => {
  return fetch(endpoints.users, {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newEmailSubscriber)
  })
}
