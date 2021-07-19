import Link from 'next/link';
import Image from 'next/image';
import MainMenu from '../components/MainMenu';
import marvelApi from '../services/marvelApi';
import CharactersPage from './characters';

const Home = () => {
  return <CharactersPage />;
};

export default Home;
