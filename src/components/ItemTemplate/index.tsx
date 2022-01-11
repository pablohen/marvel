import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import MainMenu from '../MainMenu';
import Footer from '../Footer';
import CustomLoader from '../CustomLoader';
import useItem from '../../hooks/useItem';
import { Result as ComicResult } from '../../interfaces/ComicDTO';
import { Result as EventResult } from '../../interfaces/EventDTO';
import { Result as SerieResult } from '../../interfaces/SerieDTO';
import Thumbnail from './Thumbnail';
import Characters from './Characters';
import Details from './Details';

interface Props {
  api: (...rest: any) => void;
}

const ItemTemplate = ({ api }: Props) => {
  const router = useRouter();
  const { itemId } = router.query;
  const [item, loading] = useItem(String(itemId), api);

  const { title, description, thumbnail, modified, characters } =
    (item as ComicResult | EventResult | SerieResult) ?? {};

  const modifiedDate = new Date(modified ?? 1).toLocaleString();

  return (
    <div className="space-y-4 flex flex-col h-screen">
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          title: title,
          description: description,
          images: [
            {
              url: `${thumbnail?.path}.${thumbnail?.extension}`,
              width: 200,
              height: 200,
              alt: title,
            },
          ],
        }}
      />

      <MainMenu />

      <div className="w-full flex flex-col flex-grow">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 mx-4">
          {loading && <CustomLoader text="Loading" />}

          {thumbnail && title && (
            <Thumbnail title={title} thumbnail={thumbnail} />
          )}

          <div className="lg:w-full space-y-4">
            <Details
              title={title!}
              description={description!}
              modifiedDate={modifiedDate}
            />

            {characters?.items?.[0] && <Characters characters={characters} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemTemplate;
