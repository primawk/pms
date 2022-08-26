import React from 'react';
import { Icon } from '@iconify/react';

// components
import { Grid, Button, Box } from '@mui/material';
import CustomModal from 'components/Modal/CustomModal/CustomModal';

const InputLaporanEksternal = ({ isShowing, toggle, targetDate, navigate }) => {
  return (
    <>
      <CustomModal isShowing={isShowing} toggle={toggle} width="298px">
        <Grid
          container
          sx={{
            height: '128px',
            backgroundColor: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            padding: 2
          }}
        >
          <Grid item>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid item sx={{ fontWeight: '500', fontSize: '16px' }}>
                {targetDate}
              </Grid>
              <Grid item>
                <Box sx={{ cursor: 'pointer' }} onClick={toggle}>
                  <Icon icon="clarity:close-line" color="#bc1414" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item textAlign={'center'} sx={{ marginTop: '2rem' }}>
            <Button
              variant="contained"
              sx={{ boxShadow: 0 }}
              fullWidth
              onClick={() => navigate(`/lab-report/input-laporan-eksternal`)}
            >
              Input Laporan Lab
            </Button>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  );
};

export default InputLaporanEksternal;
