import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import InfoIcon from '@iconify/icons-carbon/information-filled';
// import TambahTarget from '../../components/Modal/DashboardHome/TambahTarget';

// custom hooks
// import useModal from '../../hooks/useModal';

const TargetDataInformation = ({ toggle }) => {
  // const { isShowing, toggle } = useModal();

  return (
    <>
      {/* <TambahTarget toggle={toggle} isShowing={isShowing} /> */}
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ justifyContent: 'space-between', padding: '24px 1.5rem' }}
        gap={1}
      >
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          sx={{
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            padding: '16px 0 12px 0',
            background: '#F2F2F2'
          }}
          xs={9.9}
        >
          <Grid item sx={{ margin: '0 0.5rem 0 0.5rem' }}>
            <Icon color="#3F48C0" icon={InfoIcon} />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="body2" sx={{ whiteSpace: 'break-spaces' }}>
              Input data estimasi untuk dapat membandingkan estimasi awal dengan hasil produksi.
              Data estimasi berdasarkan hari. Untuk menambahkan data estimasi, silahkan klik tambah
              estimasi
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{}}>
          <Button sx={{ boxShadow: 'none' }} variant="contained" onClick={toggle}>
            Tambah Estimasi
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TargetDataInformation;
