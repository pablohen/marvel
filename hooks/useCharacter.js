import { useEffect, useState } from 'react';
import marvelApi from '../services/marvelApi';

const useCharacter = (id) => {
  const [character, setCharacter] = useState({});
  const [loadingCharacter, setLoadingCharacter] = useState(true);

  useEffect(() => {
    if (id) {
      const getCharacter = async () => {
        const characterData = await marvelApi.getCharacter(id);
        setCharacter(characterData);
        setLoadingCharacter(false);
      };
      getCharacter();
    }
  }, [id]);

  return [character, setCharacter, loadingCharacter];
};

export default useCharacter;
