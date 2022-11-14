import { useNavigate, useParams, Link } from 'react-router-dom';
import { Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { Icon } from '@iconify/react';
import ArrowBack from '@iconify-icons/akar-icons/arrow-back';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';

// utils
import { capitalizeFirstLetter } from 'utils/helper';

// custom hooks
import useAuth from 'hooks/useAuth';

// components
import ReportDetailCard from 'components/Card/ReportDetailCard';
import ShipmentDetailCard from 'components/Card/ShipmentDetailCard';
import { LoadingModal } from 'components/Modal';

// service
import MiningActivityService from 'services/MiningActivityService';

export default function DetailActivity() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();
  const { activityType, id } = useParams();

  const { isGranted } = useAuth();

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailActivity = data?.data?.data;

  return (
    <div className="app-content">
      {isFetching && <LoadingModal />}
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
              {isGranted && (
                <Button
                  variant="contained"
                  onClick={() => navigate(`/mining-activity/${activityType}/edit/${id}`)}
                >
                  Edit Laporan
                </Button>
              )}
            </Stack>
          </Grid>
          {data && (
            <Grid item lg={6} xs={12} sx={{ float: 'right' }}>
              <Link
                to={`/mining-activity/${activityType}/detail/history/${id}`}
                state={{ detailActivity }}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography variant="body1" color="#3F48C0" align={isMobile ? 'left' : 'right'}>
                  {`Terakhir diedit oleh ${detailActivity?.account_name}, pada ${dayjs(
                    detailActivity?.updated_at
                  ).format('DD MMMM YYYY, HH:mm WIB')}`}
                </Typography>
              </Link>
            </Grid>
          )}
        </Grid>
      </div>
      <hr />
      {activityType === 'efo-to-shipment' ? <ShipmentDetailCard /> : <ReportDetailCard />}
    </div>
  );
}
