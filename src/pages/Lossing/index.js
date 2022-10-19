import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import useAuth from 'hooks/useAuth';

// components
import Katalog from './Katalog';
import Summary from './Summary';
import Detail from './Detail';

const Lossing = () => {
  useAuth();
  const [page, setPage] = useState('');

  return (
    <>
      {page === 'detail' ? (
        <Detail setPage={setPage} />
      ) : page === 'summary' ? (
        <Summary setPage={setPage} />
      ) : (
        <Katalog setPage={setPage} />
      )}
    </>
  );
};

export default Lossing;
