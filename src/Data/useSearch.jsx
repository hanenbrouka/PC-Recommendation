import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSearchResults = async ({ queryKey }) => {
  const [_key, { minPrice, maxPrice, category }] = queryKey;
  const response = await axios.get('/api/articles/search', {
    params: { minPrice, maxPrice, category },
  });
  return response.data;
};

const useSearchResults = (minPrice, maxPrice, category) => {
  return useQuery(['searchResults', { minPrice, maxPrice, category }], fetchSearchResults);
};

export default useSearchResults;
