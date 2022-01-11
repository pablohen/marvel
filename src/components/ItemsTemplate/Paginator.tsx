import { Pagination } from '@material-ui/lab';

interface Props {
  count: number;
  onChange: (_: any, page: number) => void;
  page: number;
}

const Paginator = ({ count, onChange, page }: Props) => {
  return (
    <div className="flex justify-center">
      <Pagination
        count={count}
        onChange={onChange}
        showFirstButton
        showLastButton
        page={page}
      />
    </div>
  );
};

export default Paginator;
