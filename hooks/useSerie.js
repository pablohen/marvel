import { useEffect, useState } from 'react';
import marvelApi from '../services/marvelApi';

const useSerie = (id) => {
  const [serie, setSerie] = useState({});
  const [loadingSerie, setLoadingSerie] = useState(true);

  useEffect(() => {
    if (id) {
      const getSerie = async () => {
        const serieData = await marvelApi.getSerie(id);
        setSerie(serieData);
        setLoadingSerie(false);
      };
      getSerie();
    }
  }, [id]);

  return [serie, setSerie, loadingSerie];
};

export default useSerie;
