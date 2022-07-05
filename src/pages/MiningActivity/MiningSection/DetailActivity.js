import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Icon } from '@iconify/react';
import ArrowBack from '@iconify-icons/akar-icons/arrow-back';

// components
import ReportDetailCard from 'components/Card/ReportDetailCard';

export default function DetailActivity() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();
  const { activityType } = useParams();

  return (
    <div className="app-content">
      <div
        style={{
          background: 'white',
          borderTopRightRadius: '5px',
          borderTopLeftRadius: '5px',
          padding: '20px'
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
        >
          <Grid item lg={6} xs={12}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Icon width={25} height={25} icon={ArrowBack} />}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Typography variant="h3">Ore Getting</Typography>
              <Button variant="contained">Edit Laporan</Button>
            </Stack>
          </Grid>
          <Grid item lg={6} xs={12} sx={{ float: 'right' }}>
            <a
              href={`/kegiatan-tambang/${activityType}/detail/history/1`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography variant="body1" color="#3F48C0" align={isMobile ? 'left' : 'right'}>
                Terakhir diedit oleh Putri Devina, pada 12 Juni 2022, 13:21 WITA
              </Typography>
            </a>
          </Grid>
        </Grid>
      </div>
      <hr />
      <ReportDetailCard />
    </div>
  );
}
