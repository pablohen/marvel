import Loader from 'react-loader-spinner';

const CustomLoader = ({ text }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="font-bold">{text}</span>
      <Loader type="Circles" color="gray" />
    </div>
  );
};

export default CustomLoader;
