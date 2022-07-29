import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Icon } from '@iconify/react';
import ArrowBack from '@iconify-icons/akar-icons/arrow-back';

// utils
import { capitalizeFirstLetter } from 'utils/helper';

// components
import ReportDetailCard from 'components/Card/ReportDetailCard';

export default function DetailActivity() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();
  const { activityType, id } = useParams();

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
              <Typography variant="h4">{capitalizeFirstLetter(activityType)}</Typography>
              <Button
                variant="contained"
                onClick={() => navigate(`/mining-activity/${activityType}/edit/${id}`)}
              >
                Edit Laporan
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={6} xs={12} sx={{ float: 'right' }}>
            <Link
              to={`/mining-activity/${activityType}/detail/history/${id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography variant="body1" color="#3F48C0" align={isMobile ? 'left' : 'right'}>
                Terakhir diedit oleh Putri Devina, pada 12 Juni 2022, 13:21 WITA
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
      <hr />
      <ReportDetailCard />
    </div>
  );
}
