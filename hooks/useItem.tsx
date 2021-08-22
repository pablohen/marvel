import useSWR from 'swr';

const useItem = (id: string, api: any) => {
  const { data, error } = useSWR(id, api);

  return [data, !data && !error, error];
};

export default useItem;
