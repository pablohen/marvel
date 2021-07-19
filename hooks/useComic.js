import { useEffect, useState } from 'react';
import marvelApi from '../services/marvelApi';

const useComic = (id) => {
  const [comic, setComic] = useState({});
  const [loadingComic, setLoadingComic] = useState(true);

  useEffect(() => {
    if (id) {
      const getComic = async () => {
        const comicData = await marvelApi.getComic(id);
        setComic(comicData);
        setLoadingComic(false);
      };
      getComic();
    }
  }, [id]);

  return [comic, setComic, loadingComic];
};

export default useComic;
