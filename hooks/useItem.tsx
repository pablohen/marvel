import useSWR from 'swr';

const useItem = (id, api) => {
  const { data, error } = useSWR(id, api);

  return [data, !data && !error, error];
};

export default useItem;
