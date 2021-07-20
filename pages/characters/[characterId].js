import MainMenu from '../../components/MainMenu';
import marvelApi from '../../services/marvelApi';
import Showcase from '../../components/Showcase';
import Image from 'next/image';
import moment from 'moment';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import useCharacter from '../../hooks/useCharacter';
import useItems from '../../hooks/useItems';
import { NextSeo } from 'next-seo';
import CustomLoader from '../../components/CustomLoader';

const CharacterPage = () => {
  const router = useRouter();
  const { characterId } = router.query;
  const [character, setCharacter, loading] = useCharacter(characterId);

  const { id, name, description, thumbnail, modified } = character;

  const [comics, setComics, loadingComics] = useItems(
    id,
    marvelApi.getCharacterComics
  );
  const [events, setEvents, loadingEvents] = useItems(
    id,
    marvelApi.getCharacterEvents
  );
  const [series, setSeries, loadingSeries] = useItems(
    id,
    marvelApi.getCharacterSeries
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
            <div className="w-full">
              <Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name}
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-4xl font-bold">{name}</h3>
            <p>{description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">Last updated:</span> {modifiedDate}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white pt-4">
        {loadingComics && <CustomLoader text="Loading comics..." />}
        {comics && <Showcase category="Comics" data={comics} />}

        {loadingEvents && <CustomLoader text="Loading events..." />}
        {events && <Showcase category="Events" data={events} />}

        {loadingSeries && <CustomLoader text="Loading series..." />}
        {series && <Showcase category="Series" data={series} />}
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
