import Link from 'next/link';
import Image from 'next/image';
import MainMenuLink from './MainMenuLink';

const MainMenu = () => {
  return (
    <div className="w-full border-b shadow-lg bg-marvel-red">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-20 m-4">
          <Link href="/" passHref>
            <a>
              <Image
                src="/logo.png"
                alt="Marvel logo"
                width={320}
                height={129}
                layout="responsive"
              />
            </a>
          </Link>
        </div>

        <div className="mx-4">
          <ul className="flex flex-col md:flex-row  space-x-0 md:space-x-2 space-y-4 md:space-y-0 text-center">
            <MainMenuLink href="/characters" text="Characters" />
            <MainMenuLink href="/comics" text="Comics" />
            <MainMenuLink href="/events" text="Events" />
            <MainMenuLink href="/series" text="Series" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
