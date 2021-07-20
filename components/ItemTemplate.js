import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import MainMenu from './MainMenu';
import Footer from './Footer';
import CustomLoader from './CustomLoader';
import useItem from '../hooks/useItem';

const ItemTemplate = ({ api }) => {
  const router = useRouter();
  const { itemId } = router.query;
  const [item, setItem, loading] = useItem(itemId, api);

  const { id, title, description, thumbnail, modified, characters } = item;

  const modifiedDate = moment(modified).format('YYYY/MM/DD hh:mm:ss');

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

          {thumbnail && (
            <div className="w-full">
              <Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={title}
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-4xl font-bold">{title}</h3>
            <p>{description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-bold">Last updated:</span> {modifiedDate}
            </p>

            {characters?.items?.[0] && (
              <>
                <h4 className="text-3xl font-bold">Characters</h4>
                <ul>
                  {characters?.items?.map(({ name }) => (
                    <li key={name}>
                      <Link href={`/characters/${name}`}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemTemplate;
