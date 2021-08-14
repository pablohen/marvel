import useSWR from 'swr';

const useMediasPaginated = (mediaType, page, api) => {
  const { data, error } = useSWR([mediaType, page], api);

  return [data, !data && !error, error];
};

export default useMediasPaginated;
