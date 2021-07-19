import { useEffect, useState } from 'react';

const useMedia = (id, apiQuery) => {
  const [comics, setComics] = useState([]);
  const [loadingComics, setLoadingComics] = useState(true);

  useEffect(() => {
    if (id) {
      const getComics = async () => {
        const comicsData = await apiQuery(id);
        setComics(comicsData);
        setLoadingComics(false);
      };

      getComics();
    }
  }, [id]);

  return [comics, setComics, loadingComics];
};

export default useMedia;
