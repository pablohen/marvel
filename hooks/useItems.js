import useSWR from 'swr';

const useItems = (id, apiQuery, page) => {
  const { data, error } = useSWR([id, page], apiQuery);

  return [data, !data && !error, error];
};

export default useItems;
