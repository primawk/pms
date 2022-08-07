import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import ArrowBack from '@iconify-icons/akar-icons/arrow-back';
import { useQuery } from 'react-query';

// components
import HistoryMiningCard from 'components/Card/HistoryMiningCard';
import { LoadingModal } from 'components/Modal';

//utils
import { capitalizeFirstLetter } from 'utils/helper';

// service
import MiningActivityService from 'services/MiningActivityService';

export default function HistoryActivity() {
  const navigate = useNavigate();
  const state = useLocation()?.state?.detailActivity;
  const { activityType, id } = useParams();

  const { data, isFetching } = useQuery(
    ['mining-activity', 'history-edit', activityType, id],
    () => MiningActivityService.getHistoryEdit({ history_id: id, table: 'mining_activity' }),
    { keepPreviousData: true, enabled: !!id }
  );

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
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Icon width={25} height={25} icon={ArrowBack} />}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Typography variant="h4">{`Riwayat Edit "${capitalizeFirstLetter(
                state?.activity_type || ''
              )} - ${state?.activity_code || ''}"`}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </div>
      <hr />
      {data && <HistoryMiningCard listData={data?.data?.data} />}
    </div>
  );
}
