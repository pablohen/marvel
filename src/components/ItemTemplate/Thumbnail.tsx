import Image from 'next/image';
import { Thumbnail as ComicThumbnail } from '../../interfaces/ComicDTO';
import { Thumbnail as EventThumbnail } from '../../interfaces/EventDTO';
import { Thumbnail as SerieThumbnail } from '../../interfaces/SerieDTO';

interface Props {
  title: string;
  thumbnail: ComicThumbnail | EventThumbnail | SerieThumbnail;
}

const Thumbnail = ({ title, thumbnail }: Props) => {
  return (
    <div className="w-full lg:w-5/12">
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        width={200}
        height={200}
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
};

export default Thumbnail;
