import ItemThumbnail from '../../interfaces/ItemThumbnail';
import Thumbnail from './Thumbnail';

interface Props {
  category: string;
  items: ItemThumbnail[];
}

const Thumbnails = ({ category, items }: Props) => {
  return (
    <>
      {items.map((item: ItemThumbnail) => (
        <Thumbnail key={item.id} category={category} item={item} />
      ))}
    </>
  );
};

export default Thumbnails;
