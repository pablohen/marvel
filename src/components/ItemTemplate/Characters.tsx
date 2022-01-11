import Character from './Character';
import { Characters as ComicCharacters } from '../../interfaces/ComicDTO';
import { Characters as EventCharacters } from '../../interfaces/EventDTO';
import { Characters as SerieCharacters } from '../../interfaces/SerieDTO';

interface Props {
  characters: ComicCharacters | EventCharacters | SerieCharacters;
}

const Characters = ({ characters }: Props) => {
  return (
    <>
      <h4 className="text-3xl font-bold">Characters</h4>
      <ul>
        {characters?.items?.map(({ name }) => (
          <Character key={name} name={name!} />
        ))}
      </ul>
    </>
  );
};

export default Characters;
