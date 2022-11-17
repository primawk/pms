import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import InfoIcon from '@iconify/icons-carbon/information-filled';
import TambahTarget from '../../components/Modal/DashboardHome/TambahTarget';

// custom hooks
import useModal from '../../hooks/useModal';

const TargetDataInformation = ({ menuTab }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <TambahTarget menuTab={menuTab} toggle={toggle} isShowing={isShowing} />
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ justifyContent: 'space-between' }}
        mt={3}
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
          xs={10}
        >
          <Grid item xs={0.5} sx={{ marginLeft: '0.5rem' }}>
            <Icon color="#3F48C0" icon={InfoIcon} />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="body2" sx={{ whiteSpace: 'break-spaces' }}>
              Input data target untuk dapat <b>membandingkan realisasi produksi tambang</b>. Data
              target berdasarkan tahun dan bulan, Untuk menambahkan data target, silahkan klik{' '}
              <b>tambah target</b>.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ backgroundColor: 'yellow' }}>
          <Button sx={{ boxShadow: 'none' }} variant="contained" onClick={toggle}>
            Tambah Target
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TargetDataInformation;
