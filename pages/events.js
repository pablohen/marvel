import Link from 'next/link';
import Image from 'next/image';
import MainMenu from '../components/MainMenu';
import marvelApi from '../services/marvelApi';
import useMedia from '../hooks/useMedia';
import CustomLoader from '../components/CustomLoader';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';

const EventsPage = () => {
  const [events, setEvents, loading] = useMedia(true, marvelApi.getEvents);

  return (
    <div className="flex flex-col h-screen space-y-4">
      <NextSeo title="Events" />
      <MainMenu />

      <div className="flex flex-col flex-grow space-y-4">
        <h1 className="text-center font-bold text-3xl">Events</h1>

        <div className="flex flex-wrap justify-center mx-4">
          {loading && <CustomLoader text="Loading" />}

          {events.map(({ id, title, thumbnail }) => (
            <Link href={`/events/${id}`} passHref key={id}>
              <a>
                <div className="w-32 md:w-48 relative">
                  <Image
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={title}
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                  <span className="p-2 font-bold text-white text-right bg-black bg-opacity-50 absolute bottom-0 left-0 right-0">
                    {title}
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
//   const events = await marvelApi.getEvents();

//   return {
//     props: { events },
//   };
// };

export default EventsPage;
