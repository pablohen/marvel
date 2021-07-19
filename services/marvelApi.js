import axios from 'axios';
import md5 from 'md5';

const publicApiKey = '59248caba3c4b7a1eb4d7dd379c827bd';
const privateApiKey = process.env.MARVEL_API_PRIVATE_KEY;
const apikey = publicApiKey;

const marvel = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  // timeout: 3000,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   Accept: '*/*',
  // },
});

const date = new Date();
const ts = date.toISOString();
const hash = md5(ts + privateApiKey + publicApiKey);
const orderBy = '-modified';

const getCharacters = async () => {
  // console.log(`characters?ts=${ts}&apikey=${publicApiKey}&hash=${hash}&orderBy=-modified`);

  try {
    const res = await marvel.get('characters', {
      params: { ts, apikey, orderBy },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacter = async (name) => {
  try {
    const res = await marvel.get('characters', {
      params: { ts, apikey, name },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacterComics = async (characterId) => {
  try {
    const res = await marvel.get(`characters/${characterId}/comics`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacterEvents = async (characterId) => {
  try {
    const res = await marvel.get(`characters/${characterId}/events`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacterSeries = async (characterId) => {
  try {
    const res = await marvel.get(`characters/${characterId}/series`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getComic = async (comicId) => {
  try {
    const res = await marvel.get(`comics/${comicId}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    console.log(error.message);
  }
};

const getEvent = async (eventId) => {
  try {
    const res = await marvel.get(`events/${eventId}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    console.log(error.message);
  }
};

const getSerie = async (seriesId) => {
  try {
    const res = await marvel.get(`series/${seriesId}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    console.log(error.message);
  }
};

const marvelApi = {
  getCharacters,
  getCharacter,
  getCharacterComics,
  getCharacterEvents,
  getCharacterSeries,
  getComic,
  getEvent,
  getSerie,
};

export default marvelApi;
