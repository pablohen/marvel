import { useEffect, useState } from 'react';
import marvelApi from '../services/marvelApi';

const useEvent = (id) => {
  const [event, setEvent] = useState({});
  const [loadingEvent, setLoadingEvent] = useState(true);

  useEffect(() => {
    if (id) {
      const getEvent = async () => {
        const eventData = await marvelApi.getEvent(id);
        setEvent(eventData);
        setLoadingEvent(false);
      };
      getEvent();
    }
  }, [id]);

  return [event, setEvent, loadingEvent];
};

export default useEvent;
