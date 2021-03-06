import MainMenu from '../../components/MainMenu';
import marvelApi from '../../services/marvelApi';
import Footer from '../../components/Footer';
import ItemsTemplate from '../../components/ItemsTemplate';

const CharactersPage = () => {
  const category = 'Characters';

  return (
    <div className="flex flex-col min-h-screen space-y-4">
      <MainMenu />

      <ItemsTemplate category={category} api={marvelApi.getCharacters} />

      <Footer />
    </div>
  );
};

export default CharactersPage;
