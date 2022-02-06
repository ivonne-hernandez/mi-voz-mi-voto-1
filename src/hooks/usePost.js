import { useState, useEffect } from 'react';
import endpoints from './endpoints.js';

const usePost = (newEmailSubscriber) => {
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [error, setError] = useState(null);
  const { first_name, last_name, state, email, language } = newEmailSubscriber;

  useEffect(() => {
    const postNewUser = async () => {
      const response = await fetch(endpoints.submit, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          state: state,
          email: email,
          language: language
        })

      if (response.status !== 200) {
        throw new Error ('Something has gone wrong, please try again.')
      }
      if (!response.ok) {
        throw new Error ('Something has gone wrong, please try again.')
      }

      const message = await response.json();

      return message;
    }

    postNewUser()
      .then(message => {
        setMessage(message);
        setIsSubmitting(false);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setIsSubmitting(false);
      })
  }, [newEmailSubscriber])

  return { message, isSubmitting, error };
}

export default usePost;
