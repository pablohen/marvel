import useSWR from 'swr';

const useItems = (id, api, category, page) => {
  const { data, error } = useSWR([id, category, page], api);

  return [data, !data && !error, error];
};

export default useItems;
