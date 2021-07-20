import ItemTemplate from '../../components/ItemTemplate';
import marvelApi from '../../services/marvelApi';

const ItemPage = () => {
  return <ItemTemplate api={marvelApi.getSerie} />;
};

export default ItemPage;
