import React from 'react';
import List from './components/ListLaporanExternal';

const Lists = ({ searchResults }) => {
  const results = searchResults.map((data) => <List key={data.id} data={data} />);

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
