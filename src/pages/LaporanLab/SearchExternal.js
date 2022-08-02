import React from 'react';
import List from './components/ListLaporanEksternal';

const Lists = ({ searchResults }) => {
  console.log(searchResults);
  const results = Object.keys(searchResults).map((data, index) => (
    <List data={data} index={index} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>data tidak ditemukan!</p>
    </article>
  );
  return <main>{content}</main>;
};

export default Lists;
