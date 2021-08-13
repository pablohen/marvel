import marvelApi from '../services/marvelApi';
import useSWR from 'swr';

const useCharacter = (id) => {
  const { data, error } = useSWR(id, marvelApi.getCharacter);

  return [data, !data && !error];
};

export default useCharacter;
