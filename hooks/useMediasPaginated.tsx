import useSWR from 'swr';

const useMediasPaginated = (mediaType: string, page: number, api: any) => {
  const { data, error } = useSWR([mediaType, page], api);

  return [data, !data && !error, error];
};

export default useMediasPaginated;
