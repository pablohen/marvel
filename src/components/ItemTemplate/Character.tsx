import Link from 'next/link';

interface Props {
  name: string;
}

const Character = ({ name }: Props) => {
  return (
    <li>
      <Link href={`/characters/${name}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default Character;
