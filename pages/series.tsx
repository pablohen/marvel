import MainMenu from '../components/MainMenu';
import marvelApi from '../services/marvelApi';
import Footer from '../components/Footer';
import ItemsTemplate from '../components/ItemsTemplate';

const SeriesPage = () => {
  const category = 'Series';

  return (
    <div className="flex flex-col h-screen space-y-4">
      <MainMenu />

      <ItemsTemplate category={category} api={marvelApi.getSeries} />

      <Footer />
    </div>
  );
};

export default SeriesPage;
