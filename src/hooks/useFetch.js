import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error (`${response.status} : Sorry, cannot fetch the data.`)
      }
      if (!response.ok) {
        throw new Error ('Something has gone wrong, please try again.')
      }

      const data = await response.json();

      return data;
    }

    getData()
      .then(data => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      })
  }, [url])

  return { data, isLoading, error };
}

export default useFetch;
