import React from 'react';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import { useQueryClient } from 'react-query';

// components
import { Grid, Button, Box } from '@mui/material';
import CustomModal from 'components/Modal/CustomModal/CustomModal';

const ViewLaporanEksternal = ({
  isShowing,
  toggle,
  targetDate,
  navigate,
  setCalendar,
  setStartDate,
  setEndDate,
  set
}) => {
  const queryClient = useQueryClient();
  const handleBtn = () => {
    setStartDate(dayjs(targetDate).format('YYYY-MM-DD'));
    setEndDate(dayjs(targetDate).format('YYYY-MM-DD'));
    queryClient.invalidateQueries(['calendar']);
    setCalendar(false);
    toggle();
  };
  return (
    <>
      <CustomModal isShowing={isShowing} toggle={toggle} width="298px">
        <Grid
          container
          sx={{
            height: '190px',
            backgroundColor: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            padding: 2
          }}
          spacing={2}
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

          <Grid
            item
            textAlign={'center'}
            onClick={() => navigate(`/lab-report/input-laporan-eksternal`)}
          >
            <Button variant="contained" sx={{ boxShadow: 0 }} fullWidth>
              Input Laporan Lab
            </Button>
          </Grid>

          <Grid item textAlign={'center'} onClick={handleBtn}>
            <Button
              variant="contained"
              sx={{
                color: '#3F48C0',
                backgroundColor: '#E5E5FE',
                boxShadow: 0,
                border: 1,
                borderColor: '#3F48C0'
              }}
              fullWidth
            >
              Lihat Laporan Lab
            </Button>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  );
};

export default ViewLaporanEksternal;
