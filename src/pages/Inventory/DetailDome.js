import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useQuery } from 'react-query';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ArrowBack from '@iconify-icons/akar-icons/arrow-back';

// custom hooks
import usePagination from 'hooks/usePagination';

// components
import ListDome from './ListDome';
import CustomPagination from '../../components/Pagination/index';
import { LoadingModal } from 'components/Modal';
import Summary from 'pages/Dashboard/InventorySection/Summary';

// services
import MiningActivityService from 'services/MiningActivityService';

// utils
import { ceilTotalData } from 'utils/helper';

const DetailDome = () => {
  const navigate = useNavigate();

  const { inventoryType, idDome } = useParams();

  const { page, handleChangePage } = usePagination();

  const { data, isFetching: isFetchingSummary } = useQuery(
    ['summary', 'detail-dome', inventoryType, idDome],
    () =>
      MiningActivityService.getDomeSummary({
        inventory_type: inventoryType,
        dome_id: inventoryType === 'inventory-sm' ? undefined : idDome,
        hill_id: inventoryType === 'inventory-sm' ? idDome : undefined
      }),
    {
      keepPreviousData: true,
      enabled: !!idDome
    }
  );

  const dataSummary = data?.data?.data?.[0];

  const { data: dataActivity, isFetching: isFetchingActivity } = useQuery(
    ['mining', inventoryType, page, idDome],
    () =>
      MiningActivityService.getActivity({
        page: page,
        row: 10,
        dome_id: inventoryType === 'inventory-sm' ? undefined : idDome,
        hill_id: inventoryType === 'inventory-sm' ? idDome : undefined
      }),
    { keepPreviousData: true }
  );

  return (
    <>
      <div className="app-content">
        <div
          style={{
            background: 'white',
            borderTopRightRadius: '5px',
            borderTopLeftRadius: '5px',
            padding: '20px'
          }}
        >
          {isFetchingSummary && isFetchingActivity && <LoadingModal />}
          <>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="flex-start" alignItems="center" spacing={3}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      startIcon={<Icon width={25} height={25} icon={ArrowBack} />}
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid item>
                    <h2>
                      {dataSummary?.activity_type === 'ore-hauling-to-eto'
                        ? dataSummary?.hill_name + '/' + dataSummary?.dome_name
                        : dataSummary?.hill_name || dataSummary?.dome_name}
                    </h2>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Summary summary={dataSummary} />
              </Grid>
            </Grid>

            {/* List Dome */}
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                width: '90%',
                marginTop: '2.5rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 'auto',
                borderRadius: '4px'
              }}
            >
              <Box sx={{ margin: '1rem 1rem 1rem 2rem' }}>
                <h3>{`Kegiatan Terakhir (${dataActivity?.data?.pagination?.total_data})`}</h3>
              </Box>
              {dataActivity?.data?.data.map((_list) => (
                <div key={_list?.id}>
                  <Link
                    to={`/mining-activity/${_list?.activity_type}/detail/${_list.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    key={_list.id}
                  >
                    <ListDome data={_list} />
                  </Link>
                </div>
              ))}

              <CustomPagination
                count={ceilTotalData(dataActivity?.data?.pagination?.total_data || 0, 10)}
                page={page}
                handleChangePage={handleChangePage}
              />
            </Grid>
          </>
        </div>
      </div>
    </>
  );
};

export default DetailDome;
