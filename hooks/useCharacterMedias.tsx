import useSWR from 'swr';

const useCharacterMedias = (
  characterId: string,
  mediaType: string,
  api: any
) => {
  const { data, error } = useSWR([characterId, mediaType], api);

  return [data, !data && !error, error];
};

export default useCharacterMedias;
