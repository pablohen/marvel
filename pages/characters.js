import Link from 'next/link';
import Image from 'next/image';
import MainMenu from '../components/MainMenu';
import marvelApi from '../services/marvelApi';
import useMedia from '../hooks/useMedia';
import CustomLoader from '../components/CustomLoader';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';

const CharactersPage = () => {
  const [characters, setCharacters, loading] = useMedia(
    true,
    marvelApi.getCharacters
  );

  return (
    <div className="flex flex-col h-screen space-y-4">
      <NextSeo title="Characters" />
      <MainMenu />

      <div className="flex flex-col flex-grow space-y-4">
        <h1 className="text-center font-bold text-3xl">Characters</h1>

        <div className="flex flex-wrap justify-center mx-4">
          {loading && <CustomLoader text="Loading" />}

          {characters.map(({ id, name, thumbnail }) => (
            <Link href={`/characters/${name}`} passHref key={id}>
              <a>
                <div className="w-32 md:w-48 relative">
                  <Image
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={name}
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                  <span className="p-2 font-bold text-white text-right bg-black bg-opacity-50 absolute bottom-0 left-0 right-0">
                    {name}
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const characters = await marvelApi.getCharacters();

//   return {
//     props: { characters },
//   };
// };

export default CharactersPage;
