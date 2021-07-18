import axios from 'axios';
import md5 from 'md5';

const publicApiKey = '59248caba3c4b7a1eb4d7dd379c827bd';
const privateApiKey = process.env.MARVEL_API_PRIVATE_KEY;

const marvel = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  // timeout: 3000,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   Accept: '*/*',
  // },
});

const date = new Date();
const ts = date.getMilliseconds();
const hash = md5(ts + privateApiKey + publicApiKey);

const getCharacters = async () => {
  // console.log(`characters?ts=${ts}&apikey=${publicApiKey}&hash=${hash}`);

  try {
    const res = await marvel.get(
      `characters?ts=${ts}&apikey=${publicApiKey}&hash=${hash}&orderBy=-modified`
    );
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacter = async (name) => {
  try {
    const res = await marvel.get(
      `characters?name=${name}&ts=${ts}&apikey=${publicApiKey}&hash=${hash}`
    );
    const { results } = await res.data.data;
    return await results[0];
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacterComics = async (characterId) => {
  try {
    const res = await marvel.get(
      `characters/${characterId}/comics?ts=${ts}&apikey=${publicApiKey}&hash=${hash}`
    );
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacterEvents = async (characterId) => {
  try {
    const res = await marvel.get(
      `characters/${characterId}/events?ts=${ts}&apikey=${publicApiKey}&hash=${hash}`
    );
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacterSeries = async (characterId) => {
  try {
    const res = await marvel.get(
      `characters/${characterId}/series?ts=${ts}&apikey=${publicApiKey}&hash=${hash}`
    );
    const { results } = await res.data.data;
    return await results;
  } catch (error) {
    console.log(error.message);
  }
};

const getCharacterStories = async (characterId) => {
  try {
    const res = await marvel.get(
      `characters/${characterId}/stories?ts=${ts}&apikey=${publicApiKey}&hash=${hash}`
    );
    const { results } = await res.data.data;
    return await results;
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
  getCharacterStories,
};

export default marvelApi;
