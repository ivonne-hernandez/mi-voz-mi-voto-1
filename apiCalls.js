import endpoints from './endpoints.js';

export const submitEmailForm = ({ first_name, last_name, state, email, language }) => {
  return fetch(endpoints.submit, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      state: state,
      email: email,
      language: language
    })
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error ('Something has gone wrong, please try again.')
      }
      if (!response.ok) {
        throw new Error ('Something has gone wrong, please try again.')
      }
      return response.json()
    })
}
