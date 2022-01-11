import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  text: string;
}

const MainMenuLink = ({ href, text }: Props) => {
  return (
    <li className="py-4">
      <Link href={href} passHref>
        <a className="text-white font-bold p-4 rounded transform transition-all hover:bg-white hover:text-marvel-red">
          {text}
        </a>
      </Link>
    </li>
  );
};

export default MainMenuLink;
