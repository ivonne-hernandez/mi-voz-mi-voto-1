import endpoints from './endpoints.js';

export const postNewEmailSubscriber = (newEmailSubscriber) => {
  const { first_name, last_name, state_name, email, language } = newEmailSubscriber;

  return fetch(endpoints.submit, {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      state_name: state_name,
      email: email,
      language: language
    })
  })
}
