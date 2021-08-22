import MainMenu from '../components/MainMenu';
import marvelApi from '../services/marvelApi';
import Footer from '../components/Footer';
import ItemsTemplate from '../components/ItemsTemplate';

const ComicsPage = () => {
  const category = 'Comics';

  return (
    <div className="flex flex-col h-screen space-y-4">
      <MainMenu />

      <ItemsTemplate category={category} api={marvelApi.getComics} />

      <Footer />
    </div>
  );
};

export default ComicsPage;
