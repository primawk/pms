import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import ArrowBack from '@iconify-icons/akar-icons/arrow-back';

// custom hooks
// import useAuth from 'hooks/useAuth';

// service
import MiningToolDetailCard from 'components/Card/MiningToolDetailCard';

export default function MiningToolDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  //   const { isGranted } = useAuth();

  //   const { data, isFetching } = useQuery(
  //     ['mining-activity', 'detail-activity', id],
  //     () => MiningActivityService.getActivityById({ id }),
  //     { keepPreviousData: true, enabled: !!id }
  //   );

  //   const detailActivity = data?.data?.data;

  return (
    <div className="app-content">
      {/* {isFetching && <LoadingModal />} */}
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
              <Typography variant="h4">Penggunaan Alat Tambang</Typography>
              {/* {isGranted && ( */}
              <Button variant="contained" onClick={() => navigate(`/mining-tool/edit/${id}`)}>
                Edit Laporan
              </Button>
              {/* )} */}
            </Stack>
          </Grid>
        </Grid>
      </div>
      <hr />
      <MiningToolDetailCard />
    </div>
  );
}
