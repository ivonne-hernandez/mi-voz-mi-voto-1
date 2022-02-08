import endpoints from './endpoints.js';

export const postNewEmailSubscriber = (newEmailSubscriber) => {
  return fetch(endpoints.submit, {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newEmailSubscriber)
  })
}
