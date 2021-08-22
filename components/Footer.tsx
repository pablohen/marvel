const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-marvel-red">
      <div className="flex flex-col text-center text-white py-8">
        <span>
          Data provided by{' '}
          <a
            href="https://developer.marvel.com"
            className="font-bold underline"
          >
            Marvel API
          </a>
        </span>
        <span>@{year}</span>
      </div>
    </footer>
  );
};

export default Footer;
