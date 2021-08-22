import useSWR from 'swr';

const useItems = (id: string, api: any, category: string, page: number) => {
  const { data, error } = useSWR([id, category, page], api);

  return [data, !data && !error, error];
};

export default useItems;
