import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [error, seterror] = useState('');

  const searchApi = async term => {
    try {
      const response = await yelp.get('/search', {
        params: { term, limit: 50, location: 'san jose' }
      });

      setResults(response.data.businesses);
      //   seterror('')
    } catch (err) {
        console.log(err)
      seterror('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);
  return [searchApi, results, error]
};

export default useResults;
