import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import InfoIcon from '@iconify/icons-carbon/information-filled';
import TambahTarget from '../../components/Modal/DashboardHome/TambahTarget';

// custom hooks
import useModal from '../../hooks/useModal';

const TargetDataInformation = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <TambahTarget toggle={toggle} isShowing={isShowing} />
      <Grid container direction="row" alignItems="center" justifyContent="flex-start" mt={3}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          item
          width="80%"
          sx={{
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            padding: '16px 12px',
            background: '#F2F2F2'
          }}
        >
          <Icon color="#3F48C0" width="3%" icon={InfoIcon} />
          <Typography variant="body2" width="95%" ml={2}>
            Input data target untuk dapat <b>membandingkan realisasi produksi tambang</b>. Data
            target berdasarkan tahun dan bulan, Untuk menambahkan data target, silahkan klik{' '}
            <b>tambah target</b>.
          </Typography>
        </Grid>
        <Grid width="20%" container alignItems="center" justifyContent="flex-end">
          <Button sx={{ width: '80%' }} variant="contained" onClick={toggle}>
            Tambah Target
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TargetDataInformation;
