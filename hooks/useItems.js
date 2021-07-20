import { useEffect, useState } from 'react';

const useItems = (id, apiQuery, page) => {
  const [items, setItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    if (id) {
      const getItems = async () => {
        const itemsData = await apiQuery(id, page);
        setItems(itemsData);
        setLoadingItems(false);
      };

      getItems();
    }
  }, [id, page]);

  return [items, setItems, loadingItems];
};

export default useItems;
