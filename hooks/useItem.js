import { useEffect, useState } from 'react';
import useSWR from 'swr';

const useItem = (id, api) => {
  // const [item, setItem] = useState({});
  // const [loadingItem, setLoadingItem] = useState(true);

  // useEffect(() => {
  //   if (id) {
  //     const getItem = async () => {
  //       const itemData = await api(id);
  //       setItem(itemData);
  //       setLoadingItem(false);
  //     };
  //     getItem();
  //   }
  // }, [id]);

  // return [item, setItem, loadingItem];

  const { data, error } = useSWR(id, api);

  return [data, !data && !error];
};

export default useItem;
