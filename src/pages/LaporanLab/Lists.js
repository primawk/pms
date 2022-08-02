import React from 'react';
import List from './components/ListLaporanInternal';

const Lists = ({ searchResults }) => {
  const results = searchResults.map((data) => <List key={data.id} data={data} />);

  const content = results?.length ? (
    results
  ) : (
    <center>
      <h2>data tidak ditemukan!</h2>
    </center>
  );
  return <main>{content}</main>;
};

export default Lists;
