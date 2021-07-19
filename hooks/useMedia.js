import { useEffect, useState } from 'react';

const useMedia = (id, apiQuery) => {
  const [media, setMedia] = useState([]);
  const [loadingMedia, setLoadingMedia] = useState(true);

  useEffect(() => {
    if (id) {
      const getMedia = async () => {
        const mediaData = await apiQuery(id);
        setMedia(mediaData);
        setLoadingMedia(false);
      };

      getMedia();
    }
  }, [id]);

  return [media, setMedia, loadingMedia];
};

export default useMedia;
