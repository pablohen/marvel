import MainMenu from '../../components/MainMenu';
import marvelApi from '../../services/marvelApi';
import Showcase from '../../components/Showcase';
import Image from 'next/image';
import moment from 'moment';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import useCharacter from '../../hooks/useCharacter';
import { NextSeo } from 'next-seo';
import CustomLoader from '../../components/CustomLoader';
import useCharacterMedias from '../../hooks/useCharacterMedias';

const CharacterPage = () => {
  const router = useRouter();
  const { characterId } = router.query;
  const [character, loading] = useCharacter(characterId);

  const { id, name, description, thumbnail, modified } = character || {};

  const [comics, loadingComics] = useCharacterMedias(
    id,
    'comics',
    marvelApi.getCharacterMedias
  );
  const [events, loadingEvents] = useCharacterMedias(
    id,
    'events',
    marvelApi.getCharacterMedias
  );
  const [series, loadingSeries] = useCharacterMedias(
    id,
    'series',
    marvelApi.getCharacterMedias
  );

  const modifiedDate = moment(modified).format('YYYY/MM/DD hh:mm:ss');

  return (
    <div className="space-y-4">
      <NextSeo
        title={name}
        description={description}
        openGraph={{
          type: 'website',
          title: name,
          description: description,
          images: [
            {
              url: `${thumbnail?.path}.${thumbnail?.extension}`,
              width: 200,
              height: 200,
              alt: name,
            },
          ],
        }}
      />

      <MainMenu />

      <div className="w-full">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 mx-4">
          {loading && <CustomLoader text="Loading" />}

          {thumbnail && (
            <div className="w-full lg:w-5/12">
              <Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name}
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
          )}

          <div className="lg:w-full space-y-4">
            <h3 className="text-4xl font-bold">{name}</h3>
            <p className="text-gray-800">{description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">Last updated:</span> {modifiedDate}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white pt-4">
        {comics && <Showcase category="Comics" data={comics} />}
        {loadingComics && <CustomLoader text="Loading comics..." />}

        {events && <Showcase category="Events" data={events} />}
        {loadingEvents && <CustomLoader text="Loading events..." />}

        {series && <Showcase category="Series" data={series} />}
        {loadingSeries && <CustomLoader text="Loading series..." />}
      </div>
      <Footer />
    </div>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const { characterId } = ctx.params;
//   const character = await marvelApi.getCharacter(characterId);
//   const { id } = character;

//   const comics = await marvelApi.getCharacterComics(id);
//   const events = await marvelApi.getCharacterEvents(id);
//   const series = await marvelApi.getCharacterSeries(id);

//   return {
//     props: { character, comics, events, series },
//   };
// };

export default CharacterPage;