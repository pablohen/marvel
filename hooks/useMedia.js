import useSWR from 'swr';

const useMedia = (mediaType, mediaId, api) => {
  const { data, error } = useSWR([mediaType, mediaId], api);

  return [data, !data && !error, error];
};

export default useMedia;
