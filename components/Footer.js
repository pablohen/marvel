const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-red-500">
      <div className="flex flex-col text-center text-white py-8">
        <span>
          Data provided by{' '}
          <a
            href="https://developer.marvel.com"
            className="font-bold underline"
          >
            Marvel Api
          </a>
        </span>
        <span>@{year}</span>
      </div>
    </footer>
  );
};

export default Footer;
