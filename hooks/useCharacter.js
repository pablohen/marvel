import { useEffect, useState } from 'react';
import marvelApi from '../services/marvelApi';

const useCharacter = (characterId) => {
  const [character, setCharacter] = useState({});
  const [loadingCharacter, setLoadingCharacter] = useState(true);

  useEffect(() => {
    if (characterId) {
      const getCharacter = async () => {
        const characterData = await marvelApi.getCharacter(characterId);
        setCharacter(characterData);
        setLoadingCharacter(false);
      };
      getCharacter();
    }
  }, [characterId]);

  return [character, setCharacter, loadingCharacter];
};

export default useCharacter;
