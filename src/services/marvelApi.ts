import axios, { AxiosError } from 'axios';
import md5 from 'md5';
import { Result as CharacterResult } from '../interfaces/CharacterDTO';
import { Result as ComicResult } from '../interfaces/ComicDTO';
import { Result as EventResult } from '../interfaces/EventDTO';
import { Result as SerieResult } from '../interfaces/SerieDTO';

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
const limit = 20;

const getCharacters = async (id: string, page: number = 1) => {
  // console.log(`characters?ts=${ts}&apikey=${publicApiKey}&hash=${hash}&orderBy=-modified`);
  const offset = page ? (Number(page) - 1) * limit : 0;

  try {
    const res = await marvel.get('characters', {
      params: { ts, apikey, orderBy, offset },
    });
    const apiRes = await res.data.data;
    return await apiRes;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getComics = async (id: string, page = 1) => {
  const offset = page ? (Number(page) - 1) * limit : 0;

  try {
    const res = await marvel.get('comics', {
      params: { ts, apikey, orderBy, offset },
    });
    const apiRes = await res.data.data;
    return await apiRes;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getEvents = async (id: string, page = 1) => {
  const offset = page ? (Number(page) - 1) * limit : 0;

  try {
    const res = await marvel.get('events', {
      params: { ts, apikey, orderBy, offset },
    });
    const apiRes = await res.data.data;
    return await apiRes;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getSeries = async (id: string, page = 1) => {
  const offset = page ? (Number(page) - 1) * limit : 0;

  try {
    const res = await marvel.get('series', {
      params: { ts, apikey, orderBy, offset },
    });
    const apiRes = await res.data.data;
    return await apiRes;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getMedias = async (mediaType: string, page = 1) => {
  const offset = page ? (Number(page) - 1) * limit : 0;

  try {
    const res = await marvel.get(`${mediaType}`, {
      params: { ts, apikey, orderBy, offset },
    });
    const apiRes = await res.data.data;
    return await apiRes;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getCharacter = async (name: string) => {
  try {
    const res = await marvel.get('characters', {
      params: { ts, apikey, name },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getCharacterComics = async (characterId: string) => {
  try {
    const res = await marvel.get(`characters/${characterId}/comics`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getCharacterEvents = async (characterId: string) => {
  try {
    const res = await marvel.get(`characters/${characterId}/events`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getCharacterSeries = async (characterId: string) => {
  try {
    const res = await marvel.get(`characters/${characterId}/series`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getCharacterMedias = async (characterId: string, mediaType: string) => {
  try {
    const res = await marvel.get(`characters/${characterId}/${mediaType}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getComic = async (comicId: string) => {
  try {
    const res = await marvel.get(`comics/${comicId}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getEvent = async (eventId: string) => {
  try {
    const res = await marvel.get(`events/${eventId}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getSerie = async (seriesId: string) => {
  try {
    const res = await marvel.get(`series/${seriesId}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const getMedia = async (mediaType: string, mediaId: string) => {
  try {
    const res = await marvel.get(`${mediaType}/${mediaId}`, {
      params: { ts, apikey },
    });
    const { results } = await res.data.data;
    return (await results[0]) as ComicResult | EventResult | SerieResult;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError.message);
  }
};

const marvelApi = {
  getCharacters,
  getComics,
  getEvents,
  getSeries,
  getCharacter,
  getCharacterComics,
  getCharacterEvents,
  getCharacterSeries,
  getCharacterMedias,
  getComic,
  getEvent,
  getSerie,
  getMedias,
  getMedia,
};

export default marvelApi;
