import useSWR from 'swr';

const useMedia = (mediaType: string, mediaId: string, api: any) => {
  const { data, error } = useSWR([mediaType, mediaId], api);

  return [data, !data && !error, error];
};

export default useMedia;
