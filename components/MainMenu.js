import Link from 'next/link';
import Image from 'next/image';

const MainMenu = () => {
  return (
    <div className="w-full border-b shadow-lg bg-red-500">
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
          <ul className="flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0">
            <li className="py-4">
              <Link href="/" passHref>
                <a className="text-white font-bold p-4 rounded transform transition-all hover:bg-white hover:text-red-500">
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
