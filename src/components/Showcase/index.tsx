import Link from 'next/link';
import Image from 'next/image';
import Thumbnail from '../../interfaces/Thumbnail';

interface Info {
  id: string;
  title: string;
  thumbnail: Thumbnail;
}
interface Props {
  category: string;
  data: Info[];
}

const Showcase = ({ category, data }: Props) => {
  const categoryUrl = category.toLowerCase();
  return (
    <section className="space-y-4 pb-4">
      <span className="text-3xl mx-4">{`${category} (${data.length})`}</span>

      <div className="overflow-x-auto">
        <div className="flex space-x-2">
          {data.map(({ id, title, thumbnail }) => (
            <Link href={`/${categoryUrl}/${id}`} passHref key={id}>
              <a>
                <div className="flex flex-col relative ">
                  {thumbnail && (
                    <div className="w-48">
                      <Image
                        src={`${thumbnail.path}.${thumbnail.extension}`}
                        alt={title}
                        width={200}
                        height={200}
                        layout="responsive"
                        objectFit="contain"
                        className="transform transition-all duration-300 ease-in-out hover:scale-150"
                      />
                    </div>
                  )}
                  <span className="p-2 pt-8 text-sm font-bold text-white text-right bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0">
                    {title}
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
