import CustomLoader from './CustomLoader';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@material-ui/lab/Pagination';
import { useState } from 'react';
import useItems from '../hooks/useItems';
import { NextSeo } from 'next-seo';

const ItemsTemplate = ({ category, api }) => {
  const [page, setPage] = useState(1);
  const [items, loading] = useItems(true, api, page);
  const { total, limit } = items || {};

  const changePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col flex-grow space-y-4">
      <NextSeo title={category} />

      <h1 className="text-center font-bold text-3xl">{category}</h1>

      <div className="flex flex-wrap justify-center mx-4">
        {loading && <CustomLoader text="Loading" />}

        {!loading &&
          items.results?.map(({ id, name, title, thumbnail }) => (
            <Link
              href={`/${category.toLowerCase()}/${name || id}`}
              passHref
              key={id}
            >
              <a>
                <div className="w-32 md:w-48 bg-black relative">
                  <Image
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={name}
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="contain"
                  />
                  <span className="p-2 pt-8 font-bold text-white text-right bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0">
                    {name || title}
                  </span>
                </div>
              </a>
            </Link>
          ))}
      </div>

      {!loading && (
        <div className="flex justify-center">
          <Pagination
            count={items ? Math.ceil(total / limit) : 1}
            onChange={changePage}
            showFirstButton
            showLastButton
            page={page || 1}
          />
        </div>
      )}
    </div>
  );
};

export default ItemsTemplate;
