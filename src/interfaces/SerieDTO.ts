export default interface SeriesDTO {
  code?: string;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  data?: Data;
  etag?: string;
}

export interface Data {
  offset?: string;
  limit?: string;
  total?: string;
  count?: string;
  results?: Result[];
}

export interface Result {
  id?: string;
  title?: string;
  description?: string;
  resourceURI?: string;
  urls?: URL[];
  startYear?: string;
  endYear?: string;
  rating?: string;
  modified?: string;
  thumbnail?: Thumbnail;
  comics?: Comics;
  stories?: Stories;
  events?: Comics;
  characters?: Characters;
  creators?: Characters;
  next?: Next;
  previous?: Next;
}

export interface Characters {
  available?: string;
  returned?: string;
  collectionURI?: string;
  items?: CharactersItem[];
}

export interface CharactersItem {
  resourceURI?: string;
  name?: string;
  role?: string;
}

export interface Comics {
  available?: string;
  returned?: string;
  collectionURI?: string;
  items?: Next[];
}

export interface Next {
  resourceURI?: string;
  name?: string;
}

export interface Stories {
  available?: string;
  returned?: string;
  collectionURI?: string;
  items?: StoriesItem[];
}

export interface StoriesItem {
  resourceURI?: string;
  name?: string;
  type?: string;
}

export interface Thumbnail {
  path?: string;
  extension?: string;
}

export interface URL {
  type?: string;
  url?: string;
}
