interface Props {
  value: string;
}

const Title = ({ value }: Props) => {
  return <h1 className="text-center font-bold text-3xl">{value}</h1>;
};

export default Title;
