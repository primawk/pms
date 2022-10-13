import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import useAuth from 'hooks/useAuth';

// components
import Katalog from './Katalog';
import Summary from './Summary';

const Lossing = () => {
  useAuth();
  const [summary, setSummary] = useState(false);

  return (
    <>
      <Katalog setSummary={setSummary} />
    </>
  );
};

export default Lossing;
