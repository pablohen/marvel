import useSWR from 'swr';

const useItems = (id, apiQuery, page) => {
  const { data, error } = useSWR([id, page], apiQuery);

  return [data, !data && !error];
};

export default useItems;
