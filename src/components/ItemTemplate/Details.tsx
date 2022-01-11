import React from 'react';

interface Props {
  title: string;
  description: string;
  modifiedDate: string;
}

const Details = ({ title, description, modifiedDate }: Props) => {
  return (
    <>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p>{description}</p>
      <p className="text-sm text-gray-500">
        <span className="font-bold">Last updated:</span> {modifiedDate}
      </p>
    </>
  );
};

export default Details;
