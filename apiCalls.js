import endpoints from './endpoints.js';

export const submitEmailForm = (firstName, email, zipCode, lang) => {
  return fetch(endpoints.submit, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName,
      email: email,
      zipCode: zipCode,
      lang: lang
    })
  })
    .then(response => response.json())
}
