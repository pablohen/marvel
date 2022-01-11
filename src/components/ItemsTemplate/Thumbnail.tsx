import Link from 'next/link';
import Image from 'next/image';
import ItemThumbnail from '../../interfaces/ItemThumbnail';

interface Props {
  category: string;
  item: ItemThumbnail;
}

const Thumbnail = ({ category, item }: Props) => {
  return (
    <Link
      href={`/${category.toLowerCase()}/${item.name || item.id}`}
      passHref
      key={item.id}
    >
      <a>
        <div className="w-32 md:w-48 bg-black relative">
          <Image
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.name}
            width={200}
            height={200}
            layout="responsive"
            objectFit="contain"
            className="transform transition-all duration-200 ease-in-out hover:scale-110"
          />
          <span className="p-2 pt-8 font-bold text-white text-right bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0">
            {item.name || item.title}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default Thumbnail;
