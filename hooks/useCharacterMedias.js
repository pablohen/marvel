import useSWR from 'swr';

const useCharacterMedias = (characterId, mediaType, api) => {
  const { data, error } = useSWR([characterId, mediaType], api);

  return [data, !data && !error, error];
};

export default useCharacterMedias;
