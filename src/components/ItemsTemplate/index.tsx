import CustomLoader from '../CustomLoader';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import useMediasPaginated from '../../hooks/useMediasPaginated';

import ItemThumbnail from '../../interfaces/ItemThumbnail';
import Thumbnails from './Thumbnails';
import Title from './Title';
import Paginator from './Paginator';

interface Items {
  total: number;
  limit: number;
  results: ItemThumbnail[];
}

interface Props {
  category: string;
  api: (id: string, page?: number) => void;
}

const ItemsTemplate = ({ category, api }: Props) => {
  const [page, setPage] = useState(1);
  const [items, loading] = useMediasPaginated(category, page, api);

  const { total, limit, results }: Items = items ?? {};

  const changePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col flex-grow space-y-4">
      <NextSeo title={category} />

      <Title value={category} />

      <div className="flex flex-wrap justify-center mx-4">
        {loading && <CustomLoader text="Loading" />}

        {!loading && <Thumbnails category={category} items={results} />}
      </div>

      {!loading && (
        <Paginator
          count={items ? Math.ceil(total / limit) : 1}
          onChange={changePage}
          page={page ?? 1}
        />
      )}
    </div>
  );
};

export default ItemsTemplate;
