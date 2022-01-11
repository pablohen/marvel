import marvelApi from '../services/marvelApi';
import useSWR from 'swr';

const useCharacter = (id: string) => {
  const { data, error } = useSWR(id, marvelApi.getCharacter);

  return [data, !data && !error, error];
};

export default useCharacter;
